import * as utils from '../utils/utils.js';
import cloneDeep from 'lodash/cloneDeep';
import { validateRules } from './components/RuleEngineValidator.js';
import { performActionsOnElement } from './components/RuleEngineActions.js';

function createTemplateFact(template, article, userData, deviceData, extra = {}) {
  return {
    article,
    template: {
      width: template.width,
      height: template.height,
      pages: template.pages.map((page) => ({
        id: page.id,
        articleCount: Array.isArray(article) ? article.length : 1,
      })),
      background: template.background,
    },
    userData,
    deviceData,
    ...extra,
  };
}

/** Run page rules sequentially because an engine handle is mutable and cannot run overlapping batches. */
async function validatePageRules(
  engine,
  contextRef,
  previewJson,
  article,
  deviceType,
  userData,
  deviceData,
  cameraData,
  nexmoData,
  eslFieldData
) {
  const result = cloneDeep(previewJson);
  const fact = createTemplateFact(result, article, userData, deviceData, {
    cameraData, nexmoData, eslFieldData,
  });

  const onSuccess = (event) => {
    const { pageIndex, isToHideElement } = event.params;
    if (result.pages[pageIndex]) result.pages[pageIndex].isToHide = isToHideElement;
  };
  const onFailure = (event) => {
    const { pageIndex, isToHideElement } = event.params;
    if (result.pages[pageIndex]) result.pages[pageIndex].isToHide = !isToHideElement;
  };

  for (let pageIndex = 0; pageIndex < previewJson.pages.length; pageIndex += 1) {
    const page = previewJson.pages[pageIndex];
    if (!Array.isArray(page.custom?.rules) || page.custom.rules.length === 0) continue;
    const isMultipleArticleCanvas = page.custom?.articleCount > 1;
    contextRef.isMultipleArticleCanvas = isMultipleArticleCanvas;
    await validateRules(
      engine,
      fact,
      page.custom.rules,
      pageIndex,
      0,
      onSuccess,
      onFailure,
      null,
      null,
      deviceType,
      isMultipleArticleCanvas
    );
  }

  result.pages = result.pages.filter(
    (page) => page.isToHide === undefined || !page.isToHide
  );
  return result;
}

/** Run group rules sequentially so the same engine and context are never mutated concurrently. */
async function validateGroupRules(
  engine,
  contextRef,
  previewJson,
  article,
  deviceType,
  timezone,
  locale,
  userData,
  deviceData,
  eslFieldData,
  cameraData,
  nexmoData
) {
  const result = cloneDeep(previewJson);
  contextRef.locale = locale;
  const fact = createTemplateFact(result, article, userData, deviceData, { eslFieldData, cameraData, nexmoData });

  const onSuccess = (event) => {
    const params = event.params;
    const filteredArticle = params.isToApplyActionFilters && params.filters
      ? utils.processFilters(params.filters, article, params.isMultipleArticleCanvas, timezone, locale)
      : article;
    for (const elementId of params.groupElements ?? []) {
      for (const page of result.pages) {
        const element = page.children?.find((item) => item.id === elementId);
        if (element) {
          performActionsOnElement(
            params.isToHideElement,
            element,
            params.ruleActions ?? [],
            filteredArticle,
            params.isMultipleArticleCanvas,
            userData,
            deviceData,
            eslFieldData
          );
          break;
        }
      }
    }
  };
  const onFailure = () => { };

  for (let pageIndex = 0; pageIndex < previewJson.pages.length; pageIndex += 1) {
    const page = previewJson.pages[pageIndex];
    const groups = page.custom?.groups;
    if (!Array.isArray(groups)) continue;
    for (let groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
      const group = groups[groupIndex];
      if (!Array.isArray(group.rules) || group.rules.length === 0) continue;
      const isMultipleArticleCanvas = page.custom?.articleCount > 1;
      contextRef.isMultipleArticleCanvas = isMultipleArticleCanvas;
      await validateRules(
        engine,
        fact,
        group.rules,
        groupIndex,
        0,
        onSuccess,
        onFailure,
        group.elements ?? [],
        null,
        deviceType,
        isMultipleArticleCanvas
      );
    }
  }
  return result;
}

/** Run element rules sequentially; this also preserves deterministic action ordering. */
async function validateElementRules(
  engine,
  contextRef,
  previewJson,
  article,
  deviceType,
  timezone,
  locale,
  userData,
  deviceData,
  eslFieldData,
  cameraData,
  nexmoData
) {
  const result = cloneDeep(previewJson);
  contextRef.locale = locale;
  const fact = createTemplateFact(result, article, userData, deviceData, { eslFieldData, cameraData, nexmoData });

  const onSuccess = (event) => {
    const params = event.params;
    const element = result.pages[params.pageIndex]?.children?.[params.elementIndex];
    if (!element) return;
    if (element.isHide && !params.isToHideElement) element.isHide = false;
    const filteredArticle = params.isToApplyActionFilters && params.filters
      ? utils.processFilters(params.filters, article, params.isMultipleArticleCanvas, timezone, locale)
      : article;
    performActionsOnElement(
      params.isToHideElement, element, params.ruleActions ?? [], filteredArticle,
      params.isMultipleArticleCanvas, userData, deviceData, eslFieldData
    );
  };
  const onFailure = () => { };

  const performDefaultActions = (pageIndex, elementIndex, isMultipleArticleCanvas) => {
    const element = result.pages[pageIndex]?.children?.[elementIndex];
    const defaultAction = element?.custom?.defaultAction;
    if (element?.custom?.rules?.length > 0 && defaultAction) {
      performActionsOnElement(
        defaultAction.isToHideElement, element, defaultAction.actions ?? [], article,
        isMultipleArticleCanvas, userData, deviceData, eslFieldData
      );
    }
  };

  for (let pageIndex = 0; pageIndex < previewJson.pages.length; pageIndex += 1) {
    const page = previewJson.pages[pageIndex];
    for (let elementIndex = 0; elementIndex < (page.children ?? []).length; elementIndex += 1) {
      const element = page.children[elementIndex];
      const conditions = element.custom?.rules;
      if (!Array.isArray(conditions) || conditions.length === 0) continue;
      const isMultipleArticleCanvas = page.custom?.articleCount > 1;
      contextRef.isMultipleArticleCanvas = isMultipleArticleCanvas;
      const validation = await validateRules(
        engine,
        fact,
        conditions,
        pageIndex,
        elementIndex,
        onSuccess,
        onFailure,
        null,
        null,
        deviceType,
        isMultipleArticleCanvas
      );
      if (validation.events.length === 0) {
        performDefaultActions(pageIndex, elementIndex, isMultipleArticleCanvas);
      }
    }
  }

  result.pages.forEach((page) => {
    page.children = (page.children ?? []).filter((element) => !element.isHide);
  });
  return result;
}

async function validateScenarioRules(scenarioJson, engine, deviceType) {
  if (!Array.isArray(scenarioJson?.rules) || scenarioJson.rules.length === 0) {
    throw 'invalid scenario';
  }
  const result = await validateRules(
    engine,
    { article: {} },
    scenarioJson.rules,
    null,
    null,
    () => { },
    () => { },
    null,
    scenarioJson.scenarioUniqueCode,
    deviceType,
    false
  );
  return {
    isValid: result.events.length > 0,
    scenarioCode: result.events[0]?.params?.scenarioCode,
  };
}

export {
  validatePageRules,
  validateGroupRules,
  validateElementRules,
  validateScenarioRules
};
