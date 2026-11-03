import {processRules} from './RuleEngineProcessor';

async function validateRules(
  engine,
  fact,
  conditions,
  pageIndex,
  elementIndex,
  ruleOnSuccess,
  ruleOnFailure,
  groupElements,
  scenarioCode,
  deviceType,
  isMultipleArticleCanvas,
) {
  
  return await processRules(engine, {
    fact,
    conditions,
    pageIndex,
    elementIndex,
    ruleOnSuccess,
    ruleOnFailure,
    groupElements,
    scenarioCode,
    deviceType,
    isMultipleArticleCanvas
  });
}

export {validateRules};

