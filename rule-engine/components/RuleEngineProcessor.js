import cloneDeep from 'lodash/cloneDeep';
import * as constants from '../../utils/Constants.js';
import { convertPathToCamelcase } from './RuleEnginePathUtils.js';
import { resetEngineRules } from './RuleEngineFactory.js';

const busyEngines = new WeakSet();

/**
 * Process one batch of rules on an Engine or a createEngine() handle.
 * The lock is tracked by Engine identity so mixing raw Engine and handle
 * references cannot bypass the overlapping-run protection.
 */
export async function processRules(engineOrHandle, options = {}) {
  const {
    conditions, fact = {}, pageIndex, elementIndex, ruleOnSuccess,
    ruleOnFailure, groupElements, scenarioCode, deviceType,
    isMultipleArticleCanvas,
  } = options ?? {};

  const candidateEngine = engineOrHandle?.engine;
  const isHandle = Boolean(
    candidateEngine &&
    typeof candidateEngine.addRule === 'function' &&
    typeof candidateEngine.run === 'function' &&
    typeof engineOrHandle.busy === 'boolean'
  );
  const handle = isHandle ? engineOrHandle : null;
  const engine = isHandle ? candidateEngine : engineOrHandle;

  if (!engine || typeof engine.addRule !== 'function' || typeof engine.run !== 'function') {
    throw new TypeError('A valid json-rules-engine Engine or engine handle is required.');
  }
  if (!Array.isArray(conditions)) {
    throw new TypeError('conditions must be an array.');
  }
  // Always check the Engine identity, including calls made through a raw
  // Engine while a handle for that same Engine is already processing.
  if (busyEngines.has(engine) || (handle && handle.busy)) {
    throw new Error('This rule engine is already processing rules. Use sequential calls or a separate engine.');
  }

  busyEngines.add(engine);
  if (handle) handle.busy = true;

  try {
    resetEngineRules(engine);

    conditions.forEach((rule, indx) => {
      if (!rule || typeof rule !== 'object' || Array.isArray(rule)) {
        throw new TypeError(`Rule at index ${indx} must be an object.`);
      }

      const ruleObj = convertToRuleEngineObject(rule, indx, {
        pageIndex, elementIndex, ruleOnSuccess, ruleOnFailure,
        groupElements, scenarioCode, isMultipleArticleCanvas,
      });

      const ruleConditions = ruleObj?.conditions;
      if (!ruleConditions || typeof ruleConditions !== 'object' || Array.isArray(ruleConditions)) {
        throw new TypeError(`Rule at index ${indx} is missing a valid conditions object.`);
      }

      const hasAll = Object.prototype.hasOwnProperty.call(ruleConditions, 'all');
      const hasAny = Object.prototype.hasOwnProperty.call(ruleConditions, 'any');
      if (!hasAll && !hasAny) {
        throw new TypeError(`Rule at index ${indx} is missing a valid conditions object.`);
      }

      let isToAddRule = true;
      if (hasAll) {
        const all = ruleConditions.all;
        if (!Array.isArray(all)) {
          throw new TypeError(`Rule at index ${indx} has an invalid all condition; expected an array.`);
        }
        isToAddRule = all.every((condition) => condition?.operator !== '');
        if (deviceType?.toLowerCase() === 'esl') {
          ruleConditions.all = all.filter((condition) =>
            condition?.operator !== constants.OPR_TAG_CONTAIN &&
            condition?.operator !== constants.OPR_TAG_NOT_CONTAIN
          );
        }
        ruleConditions.all.forEach((field) =>
          convertPathToCamelcase(field, fact.article, pageIndex, isMultipleArticleCanvas)
        );
      }

      if (hasAny) {
        const any = ruleConditions.any;
        if (!Array.isArray(any)) {
          throw new TypeError(`Rule at index ${indx} has an invalid any condition; expected an array.`);
        }
        if (deviceType?.toLowerCase() === 'esl') {
          ruleConditions.any = any
            .filter((condition) => condition?.operator !== '')
            .filter((condition) =>
              condition?.operator !== constants.OPR_TAG_CONTAIN &&
              condition?.operator !== constants.OPR_TAG_NOT_CONTAIN
            );
        }
        ruleConditions.any.forEach((field) =>
          convertPathToCamelcase(field, fact.article, pageIndex, isMultipleArticleCanvas)
        );
        isToAddRule = ruleConditions.any.length > 0;
      }

      if (isToAddRule) engine.addRule(ruleObj);
    });

    const results = await engine.run(fact);
    return { pageIndex, elementIndex, events: results.events };
  } finally {
    if (handle) handle.busy = false;
    busyEngines.delete(engine);
  }
}

function convertToRuleEngineObject(rule, indx, options = {}) {
  const { 
    pageIndex, 
    elementIndex, 
    ruleOnSuccess, 
    ruleOnFailure, 
    groupElements,
    scenarioCode, 
    isMultipleArticleCanvas
  } = options;
  const ruleObj = cloneDeep(rule.ruleConditions ?? {});
  const outEvent = {
    ruleActions: rule.ruleActions ? [...rule.ruleActions] : undefined,
    defaultAction: null,
    isToHideElement: rule.isToHideElement,
    isMultipleArticleCanvas
  };
  if (elementIndex != null) outEvent.elementIndex = elementIndex;
  if (pageIndex != null) outEvent.pageIndex = pageIndex;
  if (groupElements?.length) outEvent.groupElements = groupElements;
  if (scenarioCode) outEvent.scenarioCode = scenarioCode;
  if (rule.isToApplyActionFilters) {
    outEvent.filters = [...(rule.actionFilters ?? [])];
    outEvent.isToApplyActionFilters = true;
  }
  if (rule.isToApplyFactFilters) {
    const conditions = ruleObj.conditions;
    const branch = conditions?.[Object.keys(conditions ?? {})[0]] ?? [];
    branch.forEach(item => {
      if (item) {
        item.params ??= {};
        item.params.filters = [...(rule.factFilters ?? [])];
        item.params.isToApplyFactFilters = true;
      }
    });
  }
  ruleObj.event ??= { type: true };
  ruleObj.event.params = outEvent;
  ruleObj.onSuccess = ruleOnSuccess;
  ruleObj.onFailure = ruleOnFailure;
  ruleObj.priority = indx + 1;
  return ruleObj;
}