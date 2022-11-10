import { Engine } from 'json-rules-engine';
import * as constants from './utils/Constants.js';
import * as utils from './utils/utils.js';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';

async function validateRules(fact, conditions, pageIndex, elementIndex, ruleOnSuccess, ruleOnFailure, groupElements, scenarioCode, tags) {
  const engine = new Engine();

  engine.addFact(constants.RULE_FACT_ARTICLE, async function (params, almanac) {
    let article = await almanac.factValue('article');
    if(params.isToApplyFactFilters && params.filters){
      article = utils.processFilters(params.filters, article);
     }
    return article;
  });

  //custom operators 
  engine.addOperator(constants.RuleEngineDefaultOperators.EQUAL, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueType(jsonValue, factValue);
    return factValue === valu;
  });

  engine.addOperator(constants.RuleEngineDefaultOperators.NOT_EQUAL, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueType(jsonValue, factValue);
    // console.log(factValue + "...." + valu);
    // console.log(typeof(factValue) + "...." + typeof(valu));
    // console.log("..........", factValue !== valu);
    return factValue !== valu;
  });
  engine.addOperator(constants.RuleEngineDefaultOperators.GREATER_THAN, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueType(jsonValue, factValue);
    return factValue > valu;
  });
  engine.addOperator(constants.RuleEngineDefaultOperators.GREATER_THAN_EQUAL, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueType(jsonValue, factValue);
    return factValue >= valu;
  });
  engine.addOperator(constants.RuleEngineDefaultOperators.LESS_THAN, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueType(jsonValue, factValue);
    return factValue < valu;
  });
  engine.addOperator(constants.RuleEngineDefaultOperators.LESS_THAN_EQUAL, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueType(jsonValue, factValue);
    return factValue <= valu;
  });
  
  engine.addOperator(constants.RuleEngineDefaultOperators.ARRAY_IN, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueTypeArray(jsonValue, factValue);
    return valu.indexOf(factValue) > -1;
  });

  engine.addOperator(constants.RuleEngineDefaultOperators.ARRAY_NOT_IN, (factValue, jsonValue) => {
    var valu = convertJsonValueToFactValueTypeArray(jsonValue, factValue);
    return valu.indexOf(factValue) === -1;
  });
  
  engine.addOperator(constants.RuleEngineDefaultOperators.ARRAY_CONTAINS, (factValue, jsonValue) => {
    if(!Array.isArray(factValue)) return false;
    var valu = convertJsonValueToFactValueType(jsonValue, factValue[0]);
    return factValue.indexOf(valu) > -1;
  });
 
  engine.addOperator(constants.RuleEngineDefaultOperators.ARRAY_DOES_NOT_CONTAIN, (factValue, jsonValue) => {
    if(!Array.isArray(factValue)) return false;
    var valu = convertJsonValueToFactValueType(jsonValue, factValue[0]);
    return factValue.indexOf(valu) === -1;
  });

  engine.addOperator(constants.OPR_LENGTH_SMALLER_EQUAL, (factValue, jsonValue) => {
    if (!utils.is_a_number(jsonValue)) return false;
    return factValue?.toString().length <= parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_LENGTH_GREATER_EQUAL, (factValue, jsonValue) => {
    if (!utils.is_a_number(jsonValue)) return false;
    return factValue?.toString().length >= parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_IS_EMPTY, (factValue, jsonValue) => {
    return utils.isEmpty(factValue);
  });

  engine.addOperator(constants.OPR_IS_IN_BETWEEN, (factValue, jsonValue) => {
    return utils.isInBetween(factValue, jsonValue);
  });

  engine.addOperator(constants.OPR_NOT_IN_BETWEEN, (factValue, jsonValue) => {
    return utils.notInBetween(factValue, jsonValue);
  });

  engine.addOperator(constants.OPR_CONTAIN_SUBSTRING, (factValue, jsonValue) => {
    return utils.containSubstring(factValue, jsonValue);
  });

  engine.addOperator(constants.OPR_EQUAL_DATE, (factValue, jsonValue) => {
    return moment(factValue).isSame(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_NOT_EQUAL_DATE, (factValue, jsonValue) => {
    return !(moment(factValue).isSame(jsonValue, 'day'));
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_DATE, (factValue, jsonValue) => {
    return moment(factValue).isSameOrAfter(jsonValue, 'day');
  });
  engine.addOperator(constants.OPR_GREATER_THAN_DATE, (factValue, jsonValue) => {
    return moment(factValue).isAfter(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_DATE, (factValue, jsonValue) => {
    return moment(factValue).isSameOrBefore(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_LESS_THAN_DATE, (factValue, jsonValue) => {
    return moment(factValue).isBefore(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_IN_BETWEEN_DATE, (factValue, jsonValue) => {
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    return moment(factValue).isBetween(split[0], split[1], 'day');
  });

  engine.addOperator(constants.OPR_NOT_IN_BETWEEN_DATE, (factValue, jsonValue) => {
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    return !(moment(factValue).isBetween(split[0], split[1], 'day'));
  });

  engine.addOperator(constants.OPR_EQUAL_CURRENT_DATE, (factValue, jsonValue) => {
    return moment().isSame(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_NOT_EQUAL_CURRENT_DATE, (factValue, jsonValue) => {
    return !(moment().isSame(jsonValue, 'day'));
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_CURRENT_DATE, (factValue, jsonValue) => {
    return moment().isSameOrAfter(jsonValue, 'day');
  });
  engine.addOperator(constants.OPR_GREATER_THAN_CURRENT_DATE, (factValue, jsonValue) => {
    return moment().isAfter(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_CURRENT_DATE, (factValue, jsonValue) => {
    return moment().isSameOrBefore(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_LESS_THAN_CURRENT_DATE, (factValue, jsonValue) => {
    return moment().isBefore(jsonValue, 'day');
  });

  engine.addOperator(constants.OPR_CURRENT_DATE_IN_BETWEEN_DATE, (factValue, jsonValue) => {
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    return moment().isBetween(split[0], split[1], 'day');
  });

  engine.addOperator(constants.OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE, (factValue, jsonValue) => {
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    return !(moment().isBetween(split[0], split[1], 'day'));
  });

  engine.addOperator(constants.OPR_EQUAL_TIME, (factValue, jsonValue) => {
    return moment(moment(), constants.TIME_FORMAT).isSame(moment(jsonValue, constants.TIME_FORMAT));
  });

  engine.addOperator(constants.OPR_EQUAL_CURRENT_TIME, (factValue, jsonValue) => {
    return moment(factValue, constants.TIME_FORMAT).isSame(moment(jsonValue, constants.TIME_FORMAT));
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_TIME, (factValue, jsonValue) => {
    return moment(factValue, constants.TIME_FORMAT).isBefore(moment(jsonValue, constants.TIME_FORMAT));
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_TIME, (factValue, jsonValue) => {
    return moment(factValue, constants.TIME_FORMAT).isAfter(moment(jsonValue, constants.TIME_FORMAT));
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_CURRENT_TIME, (factValue, jsonValue) => {
    return moment(moment(), constants.TIME_FORMAT).isBefore(moment(jsonValue, constants.TIME_FORMAT));
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_CURRENT_TIME, (factValue, jsonValue) => {
    return moment(moment(), constants.TIME_FORMAT).isAfter(moment(jsonValue, constants.TIME_FORMAT));
  });

  engine.addOperator(constants.OPR_TAG, (factValue, jsonValue) => {
    return tags && tags.indexOf(jsonValue) != -1;
  });


  const convertToRuleEngineObject = (rule, indx) => {
    var ruleObj = { ...rule.ruleConditions };
    var outEvent = {};
    if(rule.ruleActions)outEvent.ruleActions = [...rule.ruleActions];
    outEvent.defaultAction = null;
    if(rule.isToHideElement)outEvent.isToHideElement = rule.isToHideElement;
    if(elementIndex != null)outEvent.elementIndex = elementIndex;
    if(pageIndex != null)outEvent.pageIndex = pageIndex;
    if(groupElements && groupElements.length > 0)outEvent.groupElements = groupElements;
    if(scenarioCode)outEvent.scenarioCode = scenarioCode;
    if (rule.isToApplyActionFilters) {
      outEvent.filters = [...rule.actionFilters];
      outEvent.isToApplyActionFilters = rule.isToApplyActionFilters;
    }
    if (rule.isToApplyFactFilters) {
      var conditions = ruleObj.conditions;
      const type = Object.keys(conditions)[0];
      var rls = conditions[type];
      rls.forEach((fcts, idx) => {
        if (!fcts.params) {
          fcts.params = {};
        }
        fcts.params.filters = [...rule.factFilters];
        fcts.params.isToApplyFactFilters = true;
      });
    }
    ruleObj.event.params = outEvent;
    ruleObj.onSuccess = ruleOnSuccess;
    ruleObj.onFailure = ruleOnFailure;
    ruleObj.priority = (indx + 1);
    
    return ruleObj;
  };


  const processEngine = async () => {
    conditions.forEach((rule, indx) => {
      const ruleObj = convertToRuleEngineObject(rule, indx);
     //--- needed for supporting older templates -- can be removed in future after complete flow
      if(ruleObj.conditions.hasOwnProperty('all')){
        ruleObj.conditions.all.forEach((actionField)=>{
          convertPathToCamelcase(actionField,fact.article);
        })
      }
      if(ruleObj.conditions.hasOwnProperty('any')){
        ruleObj.conditions.any.forEach((actionField)=>{
          convertPathToCamelcase(actionField,fact.article);
        })
      }
      //-----
      engine.addRule(ruleObj)
    });

    try {
      const results = await engine.run(fact);
      const relst = {
        pageIndex: pageIndex,
        elementIndex: elementIndex,
        events: results.events
      };
      return relst;
    } catch (e) {
      console.error('Problem occured when processing the rules', e);
      return await Promise.reject({ error: e.message });
    }
  };

  return await processEngine();
}

function convertJsonValueToFactValueType(jsonValue, factValue) {
  var valu = jsonValue;
  const objType = typeof (factValue);
  switch (objType) {
    case 'string':
      valu = String(jsonValue);
      break;

    case 'number':
      valu = Number(jsonValue);
      break;

    case 'boolean':
      if (jsonValue === "true")
        valu = true;
      if (jsonValue === "false")
        valu = false;
      if (jsonValue === "1")
        valu = true;
      if (jsonValue === "0")
        valu = false;
      break;
  }
  return valu;
}
function convertJsonValueToFactValueTypeArray(jsonValue, factValue) {
  var valu = [];
  const splArr = jsonValue.split(",");
  const objType = typeof (factValue);
  switch (objType) {
    case 'string':
      splArr.forEach(element => {
        valu.push(String(element).trim());
      });
      break;

    case 'number':
      splArr.forEach(element => {
        valu.push(Number(element));
      });
      break;

    case 'boolean':
      splArr.forEach(element => {
        if (element === "true")
          valu.push(true);
        else if (element === "false")
          valu.push(false);
        else if (element === "1")
          valu.push(true);
        else if (element === "0")
          valu.push(true);
        else valu.push(element);
      });
      
      break;
  }
  return valu;
}

function convertPathToCamelcase(actionField,article) {
  var localizedPath = utils.getLocaliazedPath(article,actionField.dataSource,actionField.articleField);
  if(localizedPath){
    actionField.path = "$." + localizedPath;
  }
}

function performActionsOnElement(isToHide, elem, ruleActions, article) {
  if (isToHide) {
    elem.isHide = true;
  } else {
    ruleActions.forEach((action, idx) => {
      if (action.elementField == "fill" || action.elementField == "colorsReplace" || action.elementField == "backgroundColor") {
        if (action.elementField == "colorsReplace") {
          const keys = Object.keys(elem[action.elementField]);
          if (keys.length == 0) {
            elem[action.elementField]["rgb(0, 161, 255)"] = action.color;
          } else {
            keys.map((key) => {
              elem[action.elementField][key] = action.color;
            });
          }
        } else {
          elem[action.elementField] = action.color;
        }
      } else if (action.elementField == constants.ELEMENT_DECIMAL_SUPER) {
        elem.custom[action.elementField] = action.actionValue;
      } else {
        setArticleFieldValue(action, elem, article);
      }
    });
  }
}

function evaluateArticleValue(action, article) {
  try {
    var value = utils.getArticleFieldValue(article,action.actionField.dataSource,action.actionField.articleField);//eval("article." + `${action.actionField.path}`)
    return value;
  }
  catch (err) {
    return "";
  }
}

function setArticleFieldValue(action, elem, article) {
  switch (action.actionType) {
    case constants.RULE_ACTION_PLAIN_TEXT:
      if (utils.is_a_number(elem[action.elementField])) {
        if (utils.is_a_number(action.actionValue)) {
          let val = parseFloat(action.actionValue);
          elem[action.elementField] = action.elementField == "text" ? val.toString() : val;
        }
      } else {
        var val = action.actionValue;
        if (action.elementField == "code" && (elem.type === "barcode_placeholder" || elem.type === "qrcode_placeholder")) {
          elem["custom"]["codeValue"] = `${val}`;
        }else{
          elem[action.elementField] = action.elementField == "text" ? val.toString() : val;
        }
      }
      break;
    case constants.RULE_ACTION_ARTICLE_VALUE:
      try {
        var artVal = evaluateArticleValue(action, article);
        if (artVal != undefined && artVal != null) {
          if ((elem.type == "image" || elem.type == "custom_image") && action.elementField == "src" && artVal != "") {
            elem[action.elementField] = artVal;
            elem["custom"]["dataSource"] = action["actionField"]["dataSource"];
          }
          else if (action.elementField == "code" && (elem.type === "barcode_placeholder" || elem.type === "qrcode_placeholder")) {
            elem["custom"]["codeValue"] = action.prefixValue +  `${artVal}` + action.sufixValue;
          }else{
            elem[action.elementField] = action.prefixValue + artVal + action.sufixValue;
          }
        }
        console.log("elem[action.elementField]",elem[action.elementField]);
      } catch (error) {
        console.log(error);
      }
      break;
    case constants.RULE_ACTION_SUBSTRING:
      try {
        let rangeArr = utils.substringRange(action.substringRange);
        var artVal = evaluateArticleValue(action, article);
        if (artVal != undefined && artVal != null) {
          let str = artVal.toString().trim();
          let substr = rangeArr.length > 1 ? str.substring(rangeArr[0], rangeArr[1]) : str.substring(rangeArr[0]);
          let preSufStr = action.prefixValue + substr + action.sufixValue;
          if (action.elementField == "code" && (elem.type === "barcode_placeholder" || elem.type === "qrcode_placeholder")) {
            elem["custom"]["codeValue"] = `${preSufStr}`;
          }else {
            elem[action.elementField] = action.elementField == "text" ? preSufStr.toString() : preSufStr;
          }
        }
      } catch (err) {
        console.log(err)
      }

      break;
  }
}

export function validatePageRules(previewJson, article, tag) {
  var RULE_GLOBLE_VALUES = {
    RULE_REQUEST_COUNT: 0,
    RULE_RESPONSE_COUNT: 0
  }
  var pototnoObj = cloneDeep(previewJson);

  const pageRuleOnSuccess = (event, almanac) => {
    const outEvent = event.params;
    if (outEvent.isToHideElement) {
      pototnoObj.pages[outEvent.pageIndex].isToHide = true;
    }
  };

  const pageRuleOnFailure = (event, almanac) => {
    // perform on rule fail
  };

  const fact = { "article": article }

  return new Promise((resolve, reject) => {
    previewJson.pages.forEach((page, pageIndex) => {
      if (page.custom?.rules) {
        RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT = RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT + 1;
        let pageConds = page.custom?.rules;
        validateRules(fact, pageConds, pageIndex, 0, pageRuleOnSuccess, pageRuleOnFailure, null,null,tag).then(result => {
          RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT = RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT + 1;
          if (RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT == RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT) {// return only after all rules specified in preview json are validated
            pototnoObj.pages = pototnoObj.pages.filter(x => x.isToHide == undefined || !x.isToHide);
            resolve(pototnoObj);
          }
        });
      }
    })
    if (RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT == RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT) {
      resolve(pototnoObj);
    }
  });
}

export function validateGroupRules(previewJson, article, tag) {
  var RULE_GLOBLE_VALUES = {
    RULE_REQUEST_COUNT: 0,
    RULE_RESPONSE_COUNT: 0
  }
  var pototnoObj = cloneDeep(previewJson);

  const groupRuleOnSuccess = (event, almanac) => {
    const outEvent = event.params;
    const isToHide = outEvent.isToHideElement;
    const elements = outEvent.groupElements;
    var filteredArticleData = article;
    if (outEvent.isToApplyActionFilters && outEvent.filters) {
      filteredArticleData = utils.processFilters(outEvent.filters, article);
    }
    elements.forEach((elemntId, indx) => {
      for (var i = 0; i < pototnoObj.pages.length; i++) {
        for (var j = 0; j < pototnoObj.pages[i].children.length; j++) {
          var elmn = pototnoObj.pages[i].children[j];
          if (elmn.id === elemntId) {
            performActionsOnElement(isToHide, elmn, outEvent.ruleActions, filteredArticleData);
            break;
          }
        }
      }
    });
  };

  const groupRuleOnFailure = (event, almanac) => {
    // perform on rule fail
  };

  const fact = { "article": article }

  return new Promise((resolve, reject) => {
    previewJson.pages.forEach((page, pageIndex) => {
      if (page.custom?.groups) {
        const groups = page.custom.groups;
        groups.forEach((group, groupIndex) => {
          RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT = RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT + 1;
          let groupConds = group.rules;
          validateRules(fact, groupConds, groupIndex, 0, groupRuleOnSuccess, groupRuleOnFailure, group.elements, null,tag).then(result => {
            RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT = RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT + 1;
            if (RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT == RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT) {// return only after all rules specified in preview json are validated
              resolve(pototnoObj);
            }
          });
        });
      }
    })
    if (RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT == RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT) {
      resolve(pototnoObj);
    }
  });
}

export function validateElementRules(previewJson, article, tag) {
  var RULE_GLOBLE_VALUES = {
    RULE_REQUEST_COUNT: 0,
    RULE_RESPONSE_COUNT: 0
  }
  var pototnoObj = cloneDeep(previewJson);

  const fact = { "article": article }

  const ruleOnSuccess = (event, almanac) => {
    const outEvent = event.params;
    const elem = pototnoObj.pages[outEvent.pageIndex].children[outEvent.elementIndex];
    if (elem.isHide && !outEvent.isToHideElement) {
      elem.isHide = false;
    }
    var filteredArticleData = article;
    if (outEvent.isToApplyActionFilters && outEvent.filters) {
      filteredArticleData = utils.processFilters(outEvent.filters, article);
    }
    performActionsOnElement(outEvent.isToHideElement, elem, outEvent.ruleActions, filteredArticleData);
  };

  const ruleOnFailure = (event, almanac) => {
    //preform on rule fail
  };

  function performDefaultActions(result) {
    const elem = pototnoObj.pages[result.pageIndex]?.children[result.elementIndex];
    if (elem?.custom?.rules?.length > 0 && elem?.custom?.defaultAction) {
      performActionsOnElement(elem.custom.defaultAction.isToHideElement, elem, elem.custom.defaultAction.actions, article);
    }
  }


  function removeHiddenChild() {
    pototnoObj.pages.forEach((page, pageIndex) => {
      page.children = page.children.filter(x => !x.isHide);
    });
  }

  return new Promise((resolve, reject) => {
    previewJson.pages.forEach((page, pageIndex) => {
      page.children.forEach((element, elementIndex) => {
        if (element.custom?.rules) {
          RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT = RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT + 1;
          const conditions = element.custom?.rules;
          validateRules(fact, conditions, pageIndex, elementIndex, ruleOnSuccess, ruleOnFailure, null, null, tag).then(result => {
            if (result.events.length == 0) {
              performDefaultActions(result);
            }
            RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT = RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT + 1;
            if (RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT == RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT) { // return only after all rules specified in preview json are validated 
              removeHiddenChild();
              resolve(pototnoObj);
            }
          });
        }
      });
    });

    if (RULE_GLOBLE_VALUES.RULE_REQUEST_COUNT == RULE_GLOBLE_VALUES.RULE_RESPONSE_COUNT) { // if no individual element rule exist
      removeHiddenChild();
      resolve(pototnoObj);
    }
  });
}

export function validateScenarioRules(scenarioJson, article, tag) {
 
  const ruleOnSuccess = (event, almanac) => {
    // perform on rule success
  };

  const ruleOnFailure = (event, almanac) => {
    // perform on rule fail
  };
  let art = (article && article != null) ? article : {}; 

  const fact = { "article": art }

  return new Promise((resolve, reject) => {
    if(scenarioJson?.rules.length > 0){
      let isAllRuleSucceed = false; 
      validateRules(fact, scenarioJson.rules, null, null, ruleOnSuccess, ruleOnFailure, null, scenarioJson.scenarioUniqueCode, tag).then(result => {
        if(result.events.length > 0){
          isAllRuleSucceed = true;
        }
        let data = {
          isValid : isAllRuleSucceed,
          scenarioCode : result.events[0]?.params?.scenarioCode
        }
        resolve(data);
      });
    }else{
      reject("invalid scenario");
    }
  });
}