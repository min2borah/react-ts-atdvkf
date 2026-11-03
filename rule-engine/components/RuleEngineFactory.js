import { Engine } from 'json-rules-engine';
import moment from 'moment-timezone';
import { registerFacts } from './RuleEngineFacts.js';
import { registerOperators } from './RuleEngineOperators.js';

/** Create one engine per validation batch. Do not run overlapping batches on the same handle. */
export function createEngine(deviceTags = [], deviceType = null, timezone = null,  customTags = [], companyTags = [], contextRef = {}) {
  const engine = new Engine([], { allowUndefinedFacts: true });
  const resolvedTimezone = timezone ?? moment.tz.guess();
  registerFacts(engine, { contextRef, timezone: resolvedTimezone });
  registerOperators(engine, {
    timezone: resolvedTimezone, deviceTags, deviceType, customTags, companyTags
  });
  return { engine, contextRef, timezone: resolvedTimezone, busy: false };
}

export function resetEngineRules(engineOrHandle) {
  const engine = engineOrHandle?.engine ?? engineOrHandle;
  if (!engine) return;
  engine.rules = [];
  engine.prioritizedRules = null;
}