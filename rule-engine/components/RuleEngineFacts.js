import * as constants from '../../utils/Constants.js';
import * as utils from '../../utils/utils.js';

/** Facts are registered once; page-specific values are read from contextRef on every run. */
export function registerFacts(engine, { contextRef = {}, timezone = null, locale = null,  isMultipleArticleCanvas = false } = {}) {

  engine.addFact(constants.RULE_FACT_ARTICLE, async (params, almanac) => {
    let article = await almanac.factValue('article');
    if (params?.isToApplyFactFilters && params.filters) {
      article = utils.processFilters(params.filters, article,
        contextRef.isMultipleArticleCanvas ?? isMultipleArticleCanvas,
        timezone, contextRef.locale ?? locale);
    }
    return article;
  });

  const passthrough = [
    [constants.RULE_FACT_USER_DATA, 'userData'],
    [constants.RULE_FACT_DEVICE_DATA, 'deviceData'],
    [constants.RULE_FACT_TEMPLATE, 'template'],
    [constants.RULE_FACT_CAMERA_DATA, 'cameraData'],
    [constants.RULE_FACT_NEXMO_DATA, 'nexmoData'],
    [constants.RULE_FACT_ESL_FIELD_DATA, 'eslFieldData']
  ];

  for (const [name, key] of passthrough) {
    engine.addFact(name, (_params, almanac) => almanac.factValue(key));
  }
  
  return engine;
}
