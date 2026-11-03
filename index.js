import * as constants from "./utils/Constants.js";
import * as utils from "./utils/utils.js";
import moment from "moment";
import * as ruleEngine from "./rule-engine/rule-engine.js";
import {createEngine} from "./rule-engine/components/RuleEngineFactory.js"

/**
 * Process the template object and customized the elements on basis of the rules defined
 * and return the final result of the template object to be displayed on the device 
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} previewJson json -- Template object
 * @param {*} articleJson json / array -- Article object or array of article object
 * @param {*} deviceTags array of string -- Device Tags
 * @param {*} deviceType string -- Tergated Device family ("esl"/"vip")
 * @param {*} timezone string -- Time zone of the shop, example - "Europe/Rome", "Europe/Amsterdam","Asia/Calcutta".. 
 * @param {*} customTags array of string -- Custom Tags (user defined tags)
 * @param {*} locale string -- Language/Internationalization, example - "it-IT", "en-US",.. 
 * @param {*} userData json -- User settings object
 * @param {*} companyTags array of string -- Company Tags
 * @param {*} deviceData json -- Device Information object
 * @param {*} cameraData json -- Camera Information object
 * @param {*} nexmoData json -- Nexmo Information object
 * @param {*} eslFieldData json -- EslField Information object
 * @returns {*} json - Template object with customized elements 
 */
async function ValidatePreviewRules(previewJson, articleJson, deviceTags, deviceType, timezone, customTags, locale, userData, companyTags, deviceData, cameraData, nexmoData, eslFieldData) {
  const contextRef = { locale, isMultipleArticleCanvas: false };
  const engine = createEngine(deviceTags, deviceType, timezone, customTags, companyTags, contextRef);
  const articles = Array.isArray(articleJson) ? articleJson : [articleJson];

  const pageResult = await ruleEngine.validatePageRules(
    engine,
    contextRef,
    previewJson,
    articles,
    deviceType,
    userData,
    deviceData,
    cameraData,
    nexmoData,
    eslFieldData
  );

  const groupResult = await ruleEngine.validateGroupRules(
    engine,
    contextRef,
    pageResult,
    articles,
    deviceType,
    timezone,
    locale,
    userData,
    deviceData,
    eslFieldData,
    cameraData,
    nexmoData
  );

  return ruleEngine.validateElementRules(
    engine,
    contextRef,
    groupResult,
    articles,
    deviceType,
    timezone,
    locale,
    userData,
    deviceData,
    eslFieldData,
    cameraData,
    nexmoData
  );
}

/**
 * Process the template object and retun the template with only valid page(s)
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} previewJson json -- Template object
 * @param {*} articleJson json / array -- Article object or array of article object
 * @param {*} deviceTags array of string -- Device Tags
 * @param {*} deviceType string -- Tergated Device family ("esl"/"vip")
 * @param {*} timezone string -- Time zone of the shop, example - "Europe/Rome", "Europe/Amsterdam","Asia/Calcutta".. 
 * @param {*} customTags array of string -- Custom Tags (user defined tags)
 * @param {*} locale string -- Language/Internationalization, example - "it-IT", "en-US",.. 
 * @param {*} userData json -- User settings object
 * @param {*} companyTags array of string -- Company Tags
 * @param {*} deviceData json -- Device Information
 * @param {*} cameraData json -- Camera Information object
 * @param {*} nexmoData json -- Nexmo Information object
 * @param {*} eslFieldData json -- EslField Information object
 * @returns {*} json - Template object with only valid page(s) 
 */
async function ValidatePagesRules(previewJson, articleJson, deviceTags, deviceType, timezone, customTags, locale, userData, companyTags, deviceData, cameraData, nexmoData, eslFieldData) {
  const contextRef = { locale, isMultipleArticleCanvas: false };
  const engine = createEngine(deviceTags, deviceType, timezone, customTags, companyTags, contextRef);
  const articles = Array.isArray(articleJson) ? articleJson : [articleJson];
  return ruleEngine.validatePageRules(
    engine,
    contextRef,
    previewJson,
    articles,
    deviceType,
    userData,
    deviceData,
    cameraData,
    nexmoData,
    eslFieldData
  );
}

/**
 * Validate the conditions defined in the scenario object
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} scenarioJson json -- Scenario object
 * @param {*} deviceTags array of string -- Device Tags
 * @param {*} timezone string -- Time zone of the shop, example - "Europe/Rome", "Europe/Amsterdam","Asia/Calcutta".. 
 * @param {*} customTags array of string -- Custom Tags (user defined tags)
 * @param {*} companyTags array of string -- Company Tags
 * @returns {*} json - {isValid: boolean, scenarioCode: string}
 */
async function ValidateScenario(scenarioJson, deviceTags, deviceType, timezone, companyTags, customTags) {
  const contextRef = { isMultipleArticleCanvas: false };
  const engine = createEngine(deviceTags, deviceType, timezone, customTags, companyTags, contextRef);
  return ruleEngine.validateScenarioRules(scenarioJson, engine, deviceType);
}

/**
 * Remove insignificent or irrelevant zeros from a number stirng like say "01.0300", "001,23000".... to "1.03", "1,23" etc
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} value string
 * @returns {*} string
 */
function FilterInsignificentZeros(value) {
  return utils.filterInsignificentZeros(value);
}

/**
 * Convert Price string to Euro (Italian) currency format like 9.99 to 9,99
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} value string 
 * @returns {*} string
 */
function FilterPriceFormat(value) {
  return utils.filterPriceFormatter(value);
}

/**
 *Convert a date-time string to a give format with repect to the given timezone and locale
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} value string -- date-time string 
 * @param {*} timezone string -- Time zone of the shop, example - "Europe/Rome", "Europe/Amsterdam","Asia/Calcutta".. 
 * @param {*} locale string -- Language/Internationalization, example - "it-IT", "en-US",.. 
 * @param {*} format string -- output format
 * @returns {*}
 */
function FilterDateFormat(value, timezone, locale, format) {
  return utils.getFormattedDate(value, timezone, locale, format);
}
/**
 * Get only the integer part of a number
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} value Float
 * @returns {*} Integer
 */
function FilterIntegerPart(value) {
  return utils.filterIntegerPart(value);
}
/**
 * Get only the decimal part of a number to two/three digits
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} value Float
 * @param {boolean} [isForThreeDigit=false] boolean - if true, return decimal part to three digits
 * @returns {*} Integer
 */
function FilterDecimalPart(value, isForThreeDigit = false) {
  return utils.filterDecimalPart(value, isForThreeDigit);
}

/**
 * Get the value of a property from a given article object
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} articleJson json - article object
 * @param {*} dataSource string - parent of the field - "article_field" / "pim_data" / "date_time" / "tags" / "article_count"
 * @param {*} articleField json - Field object with parent
 * @param {*} articleIndex integer - article index
 * @param {*} isMultipleArticleCanvas - boolean - ture for multiple article template
 * @param {*} userData json - User settings object
 * @param {*} deviceData json - Device Information object
 * @param {*} eslFieldData json -- EslField Information object
 * @returns {*} value
 */
function GetArticleFieldValue(
  articleJson,
  dataSource,
  articleField,
  articleIndex = 0,
  isMultipleArticleCanvas = false,
  userData = null,
  deviceData = null,
  eslFieldData = null 
) {
  return utils.getArticleFieldValue(
    articleJson,
    dataSource,
    articleField,
    articleIndex,
    isMultipleArticleCanvas,
    userData,
    deviceData,
    eslFieldData
  );
}
/**
 * Get the path of the field with respect to the article json
 * @date 2/28/2024 - 1:00:42 PM
 *
 * @param {*} articleField json - Field object with parent
 * @param {*} dataSource string - parent of the field - "article_field" / "pim_data" / "date_time" / "tags" / "article_count"
 * @param {*} locale string -- Language/Internationalization, example - "it-IT", "en-US",.. 
 * @returns {*} string - path
 */
function GetDataFieldPath(articleField, dataSource, locale) {
  return utils.getDataFieldPath(articleField, dataSource, locale);
}

/**
 * Get today string to a give format
 * @date 2/28/2024 - 5:21:35 PM
 *
 * @param {*} format string
 * @returns {*} string - date in given format
 */
function getFormatDateTitle(format){
  let title = format;
  if(format == "DD MMMM"){
    let lang = 'it';
    try{
      lang = navigator.language || navigator.userLanguage;
    }catch(e){}
    let lng = lang.split('-')[0];
    title = title + " ("+ moment().locale(lng).format(format)+")";
  }else{
    title = title + " ("+ moment().format(format) +")";
  }
  
  return title;
}

const RULE_FACT_ARTICLE = constants.RULE_FACT_ARTICLE;
const RULE_FACT_TEMPLATE = constants.RULE_FACT_TEMPLATE;
const RULE_FACT_USER_DATA = constants.RULE_FACT_USER_DATA;
const RULE_FACT_DEVICE_DATA = constants.RULE_FACT_DEVICE_DATA;
const RULE_FACT_CAMERA_DATA = constants.RULE_FACT_CAMERA_DATA;
const RULE_FACT_NEXMO_DATA = constants.RULE_FACT_NEXMO_DATA;
const RULE_FACT_ESL_FIELD_DATA = constants.RULE_FACT_ESL_FIELD_DATA;
const RULE_ACTION_PLAIN_TEXT = constants.RULE_ACTION_PLAIN_TEXT;
const RULE_ACTION_ARTICLE_VALUE = constants.RULE_ACTION_ARTICLE_VALUE;
const RULE_ACTION_MULTI_ARTICLE_VALUE = constants.RULE_ACTION_MULTI_ARTICLE_VALUE;
const RULE_ACTION_SUBSTRING = constants.RULE_ACTION_SUBSTRING;
const RULE_TYPE_ALL = constants.RULE_TYPE_ALL;
const RULE_TYPES_ANY = constants.RULE_TYPES_ANY;
const TIME_FORMAT = constants.TIME_FORMAT;
const MULTI_DATE_SEPARATOR = constants.MULTI_DATE_SEPARATOR;
const DATA_TYPE = constants.DataSchemaDataType;
const SUPPORTED_DATE_FORMATS = constants.SUPPORTED_DATE_FORMATS;
const CUSTOM_DATE_FORMATS = constants.CUSTOM_DATE_FORMATS;

const RULE_TYPES = [RULE_TYPE_ALL, RULE_TYPES_ANY];

const RULE_OPERATOR_LIST = [
  { 
    //labelOld: "Not Empty", 
    value: constants.OPR_IS_NOT_EMPTY, 
    placeholder: "" ,
    label: "Has value",
    description: "The field has a value, it is not empty or null"
  },
  { 
    //labelOld: "Empty", 
    value: constants.OPR_IS_EMPTY, 
    placeholder: "" ,
    label: "No value",
    description: "The field has no value, it is empty or null"
  },  
  {
    //labelOld: "===",
    value: constants.RuleEngineDefaultOperators.EQUAL,
    placeholder: "value",
    label: "Equals",
    description: "The field equals the specified value"
  },
  {
    //labelOld: "!==",
    value: constants.RuleEngineDefaultOperators.NOT_EQUAL,
    placeholder: "value",
    label: "Not equals",
    description: "The field does not equal the specified value"
  },  
  {
    //labelOld: "Substring",
    value: constants.OPR_CONTAIN_SUBSTRING,
    placeholder: "substring",
    label: "Substring",
    description: "The field contains the specified substring"
  },
  {
    //labelOld: "<",
    value: constants.RuleEngineDefaultOperators.LESS_THAN,
    placeholder: "numeric value",
    label: "Less than",
    description: "The field is less than the specified value"
  },
  {
    //labelOld: "<=",
    value: constants.RuleEngineDefaultOperators.LESS_THAN_EQUAL,
    placeholder: "numeric value",
    label: "Less than or equals",
    description: "The field is less than or equal to the specified value"
  },
  {
    //labelOld: ">",
    value: constants.RuleEngineDefaultOperators.GREATER_THAN,
    placeholder: "numeric value",
    label: "Greater than",
    description: "The field is greater than the specified value"
  },
  {
    //labelOld: ">=",
    value: constants.RuleEngineDefaultOperators.GREATER_THAN_EQUAL,
    placeholder: "numeric value",
    label: "Greater than or equals",
    description: "The field is greater than or equal to the specified value"
  },
  {
    //labelOld: "Length ===",
    value: constants.OPR_LENGTH_EQUAL,
    placeholder: "numeric value",
    label: "Length equals",
    description: "The field has a length equal to the specified value"
  },
  {
    //labelOld: "Length !==",
    value: constants.OPR_LENGTH_NOT_EQUAL,
    placeholder: "numeric value",
    label: "Length not equals",
    description: "The field has a length not equal to the specified value"
  },
  {
    //labelOld: "Length >=",
    value: constants.OPR_LENGTH_GREATER_EQUAL,
    placeholder: "numeric value",
    label: "Length greater than or equals",
    description: "The field has a length greater than or equal to the specified value"
  },
  {
    //labelOld: "Length <=",
    value: constants.OPR_LENGTH_SMALLER_EQUAL,
    placeholder: "numeric value",
    label: "Length less than or equals",
    description: "The field has a length less than or equal to the specified value"
  },
  { //labelOld: "Between", 
    value: constants.OPR_IS_IN_BETWEEN, 
    placeholder: "1,5",
    label: "Within range",
    description: "The field is within the specified range of integers"
   },
  {
    //labelOld: "Not In Between",
    value: constants.OPR_NOT_IN_BETWEEN,
    placeholder: "1,5",
    label: "Outside range",
    description: "The field is outside the specified range of integers"
  },  
  {
    //labelOld: "Contains value",
    value: constants.RuleEngineDefaultOperators.ARRAY_CONTAINS,
    placeholder: "value",
    label: "Array contains",
    description: "The field which is an array contains the specified value"
  },
  {
    //labelOld: "Do not Contain",
    value: constants.RuleEngineDefaultOperators.ARRAY_DOES_NOT_CONTAIN,
    placeholder: "value",
    label: "Array not contains",
    description: "The field which is an array does not contain the specified value"
  },
  {
    //labelOld: "In Array",
    value: constants.RuleEngineDefaultOperators.ARRAY_IN,
    placeholder: "value1, value2, value3...",
    label: "In Array",
    description: "The field's value is present in the specified array of values"
  },
  {
    //labelOld: "Not In Array",
    value: constants.RuleEngineDefaultOperators.ARRAY_NOT_IN,
    placeholder: "value1, value2, value3...",
    label: "Not In Array",
    description: "The field's value is not present in the specified array of values"
  },
  {
    value: constants.OPR_ARRAY_CONTAINS_SUB_ARRAY,
    placeholder: "value1, value2, value3...",
    label: "Contains Subarray",
    description: "The field which is an array contains the specified subarray"
  },
  {
    value: constants.OPR_ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY,
    placeholder: "value1, value2, value3...",
    label: "Not Contains Subarray",
    description: "The field which is an array does not contain the specified subarray"
  },
  {
    value: constants.OPR_ARRAY_CONTAINS_ANY_OF_SUB_ARRAY,
    placeholder: "value1, value2, value3...",
    label: "Contains Any Of Subarray",
    description: "The field which is an array contains any of the specified subarray elements"
  },
  {
    value: constants.OPR_ARRAY_DOES_NOT_CONTAINS_ANY_OF_SUB_ARRAY,
    placeholder: "value1, value2, value3...",
    label: "Not Contains Any Of Subarray",
    description: "The field which is an array does not contain any of the specified subarray elements"
  },
  {
    //labelOld: "=== (Date)",
    value: constants.OPR_EQUAL_DATE,
    placeholder: moment(),
    label: "Equals",
    description: "The field equals the specified date"
  },
  {
    //labelOld: "!== (Date)",
    value: constants.OPR_NOT_EQUAL_DATE,
    placeholder: moment(),
    label: "Not equals",
    description: "The field does not equal the specified date"
  },
  {
    //labelOld: "> (Date)",
    value: constants.OPR_GREATER_THAN_DATE,
    placeholder: moment(),
    label: "Later than",
    description: "The field is later than the specified date"
  },
  {
    //labelOld: ">= (Date)",
    value: constants.OPR_GREATER_EQUAL_DATE,
    placeholder: moment(),
    label: "Later than or equals",
    description: "The field is later than or equals the specified date"
  },
  {
    //labelOld: "< (Date)",
    value: constants.OPR_LESS_THAN_DATE,
    placeholder: moment(),
    label: "Earlier than",
    description: "The field is earlier than the specified date"
  },
  {
    //labelOld: "<= (Date)",
    value: constants.OPR_LESS_EQUAL_DATE,
    placeholder: moment(),
    label: "Earlier than or equals",
    description: "The field is earlier than or equals the specified date"
  },
  {
    //labelOld: "Between (Date)",
    value: constants.OPR_IN_BETWEEN_DATE,
    placeholder: moment(),
    label: "Between",
    description: "The field is between the specified dates"
  },
  {
    //labelOld: "Not In Between (Date)",
    value: constants.OPR_NOT_IN_BETWEEN_DATE,
    placeholder: moment(),
    label: "Not in between",
    description: "The field is not between the specified dates"
  },
  // {
  //   //labelOld: "===",
  //   value: constants.OPR_EQUAL_DAYS,
  //   placeholder: moment(),
  //   label: "Equals to X days",
  //   description: "The difference between field's date and today is equals the specified number of days"
  // },
  // {
  //   //labelOld: "!==",
  //   value: constants.OPR_NOT_EQUAL_DAYS,
  //   placeholder: moment(),
  //   label: "Not equals to X days",
  //   description: "The difference between field's date and today is not equals the specified number of days"
  // },
  // {
  //   //labelOld: ">",
  //   value: constants.OPR_GREATER_THAN_DAYS,
  //   placeholder: moment(),
  //   label: "Older than X days",
  //   description: "The difference between field's date and today is greater than the specified number of days"
  // },
  {
    //labelOld: ">=",
    value: constants.OPR_GREATER_EQUAL_DAYS,
    placeholder: moment(),
    label: "Older than or equals X days",
    description: "The difference between field's date and today is greater than or equals the specified number of days"
  },
  // {
  //   //labelOld: "<",
  //   value: constants.OPR_LESS_THAN_DAYS,
  //   placeholder: moment(),
  //   label: "Earlier than X days",
  //   description: "The difference between field's date and today is smaller than the specified number of days"
  // },
  {
    //labelOld: "<=",
    value: constants.OPR_LESS_EQUAL_DAYS,
    placeholder: moment(),
    label: "Earlier than or equals X days",
    description: "The difference between field's date and today is smaller than or equals the specified number of days"
  },
  {
    //labelOld: "===",
    value: constants.OPR_EQUAL_CURRENT_DATE,
    placeholder: moment(),
    label: "Equals",
    description: "The specified date equals today's date"
  },
  {
    //labelOld: "!==",
    value: constants.OPR_NOT_EQUAL_CURRENT_DATE,
    placeholder: moment(),
    label: "Not equals",
    description: "The specified date does not equal today's date"
  },
  {
    //labelOld: ">",
    value: constants.OPR_GREATER_THAN_CURRENT_DATE,
    placeholder: moment(),
    label: "Later than",
    description: "The specified date is later than today's date"
  },
  {
    //labelOld: ">=",
    value: constants.OPR_GREATER_EQUAL_CURRENT_DATE,
    placeholder: moment(),
    label: "Later than or equals",
    description: "The specified date is later than or equals today's date"
  },
  {
    //labelOld: "<",
    value: constants.OPR_LESS_THAN_CURRENT_DATE,
    placeholder: moment(),
    label: "Earlier than",
    description: "The specified date is earlier than today's date"
  },
  {
    //labelOld: "<=",
    value: constants.OPR_LESS_EQUAL_CURRENT_DATE,
    placeholder: moment(),
    label: "Earlier than or equals",
    description: "The specified date is earlier than or equals today's date"
  },
  {
    //labelOld: "Between",
    value: constants.OPR_CURRENT_DATE_IN_BETWEEN_DATE,
    placeholder: moment(),
    label: "Between",
    description: "Today's date is between the specified dates"
  },
  {
    //labelOld: "Not In Between",
    value: constants.OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE,
    placeholder: moment(),
    label: "Not in between",
    description: "Today's date is not between the specified dates"
  },
  {
    //labelOld: "===",
    value: constants.OPR_EQUAL_CURRENT_TIME,
    placeholder: moment(moment(), constants.TIME_FORMAT),
    label: "Equals",
    description: "The specified time equals the current time"
  },
  {
    //labelOld: "=== (Time)",
    value: constants.OPR_EQUAL_TIME,
    placeholder: moment(moment(), constants.TIME_FORMAT),
    label: "Equals",
    description: "The field's datetime time equals the specified time"
  },
  {
    //labelOld: ">=",
    value: constants.OPR_GREATER_EQUAL_CURRENT_TIME,
    placeholder: moment(moment(), constants.TIME_FORMAT),
    label: "Later than or equals",
    description: "The specified time is later than or equals the current time"
  },
  {
    //labelOld: ">= (Time)",
    value: constants.OPR_GREATER_EQUAL_TIME,
    placeholder: moment(moment(), constants.TIME_FORMAT),
    label: "Later than or equals",
    description: "The field's datetime time is later than or equals the specified time"
  },
  {
    //labelOld: "<= (Time)",
    value: constants.OPR_LESS_EQUAL_TIME,
    placeholder: moment(moment(), constants.TIME_FORMAT),
    label: "Earlier or equals",
    description: "The field's datetime time is earlier than or equals the specified time"
  },
  {
    //labelOld: "<= ",
    value: constants.OPR_LESS_EQUAL_CURRENT_TIME,
    placeholder: moment(moment(), constants.TIME_FORMAT),
    label: "Earlier or equals",
    description: "The field's datetime time is earlier than or equals the current time"
  },
  { 
    //labelOld: "Contain", 
    value: constants.OPR_TAG_CONTAIN, 
    placeholder: "",
    label: "Contains",
    description: "Contain the specified Device Tag"
  },
  {
    //labelOld: "Do not Contain",
    value: constants.OPR_TAG_NOT_CONTAIN,
    placeholder: "",
    label: "Does not contain",
    description: "Does not contain the specified Device Tag"
  },
  {
    value: constants.OPR_CUSTOM_TAG_CONTAIN, 
    placeholder: "",
    label: "Contains",
    description: "Contain the specified Custom Tag"
  },
  {
    value: constants.OPR_CUSTOM_TAG_NOT_CONTAIN,
    placeholder: "",
    label: "Does not contain",
    description: "Does not contain the specified Custom Tag"
  },
  {
    value: constants.OPR_COMPANY_TAG_CONTAIN, 
    placeholder: "",
    label: "Contains",
    description: "Contain the specified Company Tag"
  },
  {
    value: constants.OPR_COMPANY_TAG_NOT_CONTAIN,
    placeholder: "",
    label: "Does not contain",
    description: "Does not contain the specified Company Tag"
  },
  { 
    value: constants.OPR_IS_RANGE_OVERLAP, 
    placeholder: "1,5",
    label: "Range",
    description: "The specified range is within the field's range"
  },
  {
    value: constants.OPR_IN_BETWEEN_WEEKDAY,
    placeholder: "",
    label: "Between",
    description: "The today's day is between the specified days"
  },
  {
    value: constants.OPR_NOT_IN_BETWEEN_WEEKDAY,
    placeholder: "",
    label: "Not in between",
    description: "The today's day is not between the specified days"
  },
  {
    value: constants.OPR_EQUAL_WEEKDAY,
    placeholder: "",
    label: "Equals",
    description: "The today's day equals the specified day"
  },
  {
    value: constants.OPR_NOT_EQUAL_WEEKDAY,
    placeholder: "",
    label: "Not equals",
    description: "The today's day does not equal the specified day"
  },
  {
    value: constants.OPR_IN_WEEKDAYS,
    placeholder: "value1, value2, value3...",
    label: "In days",
    description: "The today's day is in the specified days"
  },
  {
    value: constants.OPR_NOT_IN_WEEKDAYS,
    placeholder: "value1, value2, value3...",
    label: "Not In days",
    description: "The today's day is not in the specified days"
  },
];

const FILTER_DECIMAL_NUMBER_LIST = [
  {title: "Integer Part", value:constants.FILTER_INTEGER_PART, children:[]},
  {title: "Decimal Part (2 Digits)", value:constants.FILTER_DECIMAL_PART_2_DIGIT, children:[]},
  {title: "Decimal Part (3 Digits)", value:constants.FILTER_DECIMAL_PART_3_DIGIT, children:[]},
]

const FILTER_DATE_FORMAT_LIST = [
  {title: "DD (Date only)", value:"DD", children:[]},
  {title: "MM (Month only)", value:"MM", children:[]},
  {title: "YYYY (Year only)", value:"YYYY", children:[]},
  {title: getFormatDateTitle("DD-MM"), value:"DD-MM", children:[]},
  {title: getFormatDateTitle("DD/MM"), value:"DD/MM", children:[]},
  {title: getFormatDateTitle("DD-MM-YY"), value:"DD-MM-YY", children:[]},
  {title: getFormatDateTitle("DD/MM/YY"), value:"DD/MM/YY", children:[]},
  {title: getFormatDateTitle("DD-MM-YYYY"), value:"DD-MM-YYYY", children:[]},
  {title: getFormatDateTitle("DD/MM/YYYY"), value:"DD/MM/YYYY", children:[]},
  {title: getFormatDateTitle("DD MMMM"), value:"DD MMMM", children:[]},
]

const RULE_ENGINE_OPERATORS = {
  IS_EMPTY: constants.OPR_IS_EMPTY,
  IS_NOT_EMPTY: constants.OPR_IS_NOT_EMPTY,
  EQUAL: constants.RuleEngineDefaultOperators.EQUAL,
  NOT_EQUAL: constants.RuleEngineDefaultOperators.NOT_EQUAL,
  CONTAIN_SUBSTRING: constants.OPR_CONTAIN_SUBSTRING,
  LENGTH_EQUAL: constants.OPR_LENGTH_EQUAL,
  LENGTH_NOT_EQUAL: constants.OPR_LENGTH_NOT_EQUAL,
  LENGTH_GREATER_EQUAL: constants.OPR_LENGTH_GREATER_EQUAL,
  LENGTH_SMALLER_EQUAL: constants.OPR_LENGTH_SMALLER_EQUAL,  
  IS_IN_BETWEEN: constants.OPR_IS_IN_BETWEEN,
  NOT_IN_BETWEEN: constants.OPR_NOT_IN_BETWEEN,
  ARRAY_CONTAINS: constants.RuleEngineDefaultOperators.ARRAY_CONTAINS,
  ARRAY_DOES_NOT_CONTAIN: constants.RuleEngineDefaultOperators.ARRAY_DOES_NOT_CONTAIN,
  ARRAY_IN: constants.RuleEngineDefaultOperators.ARRAY_IN,
  ARRAY_NOT_IN: constants.RuleEngineDefaultOperators.ARRAY_NOT_IN,
  ARRAY_CONTAINS_SUB_ARRAY: constants.OPR_ARRAY_CONTAINS_SUB_ARRAY,
  ARRAY_DOES_NOT_CONTAIN_SUB_ARRAY: constants.OPR_ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY,
  ARRAY_CONTAINS_ANY_OF_SUB_ARRAY: constants.OPR_ARRAY_CONTAINS_ANY_OF_SUB_ARRAY,
  ARRAY_DOES_NOT_CONTAIN_ANY_OF_SUB_ARRAY: constants.OPR_ARRAY_DOES_NOT_CONTAINS_ANY_OF_SUB_ARRAY,
  LESS_THAN: constants.RuleEngineDefaultOperators.LESS_THAN,
  LESS_THAN_EQUAL: constants.RuleEngineDefaultOperators.LESS_THAN_EQUAL,
  GREATER_THAN: constants.RuleEngineDefaultOperators.GREATER_THAN,
  GREATER_THAN_EQUAL: constants.RuleEngineDefaultOperators.GREATER_THAN_EQUAL,  
  GREATER_EQUAL_DATE: constants.OPR_GREATER_EQUAL_DATE,
  GREATER_THAN_DATE: constants.OPR_GREATER_THAN_DATE,
  LESS_EQUAL_DATE: constants.OPR_LESS_EQUAL_DATE,
  LESS_THAN_DATE: constants.OPR_LESS_THAN_DATE,
  IN_BETWEEN_DATE: constants.OPR_IN_BETWEEN_DATE,
  NOT_IN_BETWEEN_DATE: constants.OPR_NOT_IN_BETWEEN_DATE,
  EQUAL_DATE: constants.OPR_EQUAL_DATE,
  NOT_EQUAL_DATE: constants.OPR_NOT_EQUAL_DATE,
  GREATER_EQUAL_CURRENT_DATE: constants.OPR_GREATER_EQUAL_CURRENT_DATE,
  GREATER_THAN_CURRENT_DATE: constants.OPR_GREATER_THAN_CURRENT_DATE,
  LESS_EQUAL_CURRENT_DATE: constants.OPR_LESS_EQUAL_CURRENT_DATE,
  LESS_THAN_CURRENT_DATE: constants.OPR_LESS_THAN_CURRENT_DATE,
  // EQUAL_DAYS: constants.OPR_EQUAL_DAYS,
  // NOT_EQUAL_DAYS: constants.OPR_NOT_EQUAL_DAYS,
  GREATER_EQUAL_DAYS: constants.OPR_GREATER_EQUAL_DAYS,
  // GREATER_THAN_DAYS: constants.OPR_GREATER_THAN_DAYS,
  LESS_EQUAL_DAYS: constants.OPR_LESS_EQUAL_DAYS,
  // LESS_THAN_DAYS: constants.OPR_LESS_THAN_DAYS,
  CURRENT_DATE_IN_BETWEEN_DATE: constants.OPR_CURRENT_DATE_IN_BETWEEN_DATE,
  CURRENT_DATE_NOT_IN_BETWEEN_DATE: constants.OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE,
  EQUAL_CURRENT_DATE: constants.OPR_EQUAL_CURRENT_DATE,
  NOT_EQUAL_CURRENT_DATE: constants.OPR_NOT_EQUAL_CURRENT_DATE,
  EQUAL_TIME: constants.OPR_EQUAL_TIME,  
  EQUAL_CURRENT_TIME: constants.OPR_EQUAL_CURRENT_TIME,
  GREATER_EQUAL_TIME: constants.OPR_GREATER_EQUAL_TIME,
  GREATER_EQUAL_CURRENT_TIME: constants.OPR_GREATER_EQUAL_CURRENT_TIME,
  LESS_EQUAL_TIME: constants.OPR_LESS_EQUAL_TIME,
  LESS_EQUAL_CURRENT_TIME: constants.OPR_LESS_EQUAL_CURRENT_TIME,
  EQUAL_CURRENT_DAY: constants.OPR_EQUAL_WEEKDAY,
  NOT_EQUAL_CURRENT_DAY: constants.OPR_NOT_EQUAL_WEEKDAY,
  CURRENT_DAY_IN_BETWEEN: constants.OPR_IN_BETWEEN_WEEKDAY,
  CURRENT_DAY_NOT_IN_BETWEEN: constants.OPR_NOT_IN_BETWEEN_WEEKDAY,
  IN_WEEKDAYS: constants.OPR_IN_WEEKDAYS,
  NOT_IN_WEEKDAYS: constants.OPR_NOT_IN_WEEKDAYS,
  TAG_CONTAIN: constants.OPR_TAG_CONTAIN,
  TAG_NOT_CONTAIN: constants.OPR_TAG_NOT_CONTAIN,
  CUSTOM_TAG_CONTAIN: constants.OPR_CUSTOM_TAG_CONTAIN,
  CUSTOM_TAG_NOT_CONTAIN: constants.OPR_CUSTOM_TAG_NOT_CONTAIN,
  COMPANY_TAG_CONTAIN: constants.OPR_COMPANY_TAG_CONTAIN,
  COMPANY_TAG_NOT_CONTAIN: constants.OPR_COMPANY_TAG_NOT_CONTAIN,
  IS_RANGE_OVERLAP: constants.OPR_IS_RANGE_OVERLAP
};

const FILTERS = {
  INSIGNIFICANT_ZEROS: constants.FILTER_INVALID_ZEROS,
  PRICE_FORMAT: constants.FILTER_PRICE_FORMAT,
  DATE_FORMAT: constants.FILTER_DATE_FORMAT_DD_Month,
  INTEGER_PART: constants.FILTER_INTEGER_PART,
  DECIMAL_PART: constants.FILTER_DECIMAL_PART,
  DECIMAL_PART_2_DIGIT: constants.FILTER_DECIMAL_PART_2_DIGIT,
  DECIMAL_PART_3_DIGIT: constants.FILTER_DECIMAL_PART_3_DIGIT,
};

const AGE_RANGE_OPERATOR_LIST = [
  constants.OPR_IS_RANGE_OVERLAP
];

const DATE_OPERATOR_LIST = [
  constants.OPR_IS_EMPTY,
  constants.OPR_IS_NOT_EMPTY,
  constants.OPR_EQUAL_DATE,
  constants.OPR_NOT_EQUAL_DATE,
  constants.OPR_LESS_THAN_DATE,
  constants.OPR_LESS_EQUAL_DATE,
  constants.OPR_GREATER_THAN_DATE,
  constants.OPR_GREATER_EQUAL_DATE,
  constants.OPR_EQUAL_CURRENT_DATE,
  constants.OPR_NOT_EQUAL_CURRENT_DATE,
  constants.OPR_LESS_THAN_CURRENT_DATE,  
  constants.OPR_LESS_EQUAL_CURRENT_DATE,
  constants.OPR_GREATER_THAN_CURRENT_DATE,
  constants.OPR_GREATER_EQUAL_CURRENT_DATE 
];

const DAYS_OPERATOR_LIST = [
  // constants.OPR_EQUAL_DAYS,
  // constants.OPR_NOT_EQUAL_DAYS,
  // constants.OPR_LESS_THAN_DAYS,
  constants.OPR_LESS_EQUAL_DAYS,
  // constants.OPR_GREATER_THAN_DAYS,
  constants.OPR_GREATER_EQUAL_DAYS  
];

const WEEKDAY_RANGE_OPERATOR_LIST = [
  constants.OPR_IN_BETWEEN_WEEKDAY,
  constants.OPR_NOT_IN_BETWEEN_WEEKDAY
];

const DATE_RANGE_OPERATOR_LIST = [
  constants.OPR_IN_BETWEEN_DATE,
  constants.OPR_NOT_IN_BETWEEN_DATE,
  constants.OPR_CURRENT_DATE_IN_BETWEEN_DATE,
  constants.OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE
];

const TIME_OPERATOR_LIST = [
  constants.OPR_IS_EMPTY,
  constants.OPR_IS_NOT_EMPTY,
  constants.OPR_EQUAL_TIME,
  constants.OPR_LESS_EQUAL_TIME,
  constants.OPR_GREATER_EQUAL_TIME,
  constants.OPR_EQUAL_CURRENT_TIME,
  constants.OPR_LESS_EQUAL_CURRENT_TIME,
  constants.OPR_GREATER_EQUAL_CURRENT_TIME
];

const TODAY_OPERATOR_LIST = [
  constants.OPR_EQUAL_CURRENT_DATE,  
  constants.OPR_NOT_EQUAL_CURRENT_DATE,
  constants.OPR_LESS_THAN_CURRENT_DATE,
  constants.OPR_LESS_EQUAL_CURRENT_DATE,
  constants.OPR_GREATER_THAN_CURRENT_DATE,
  constants.OPR_GREATER_EQUAL_CURRENT_DATE,
  constants.OPR_CURRENT_DATE_IN_BETWEEN_DATE,
  constants.OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE
];

const WEEKDAY_OPERATOR_LIST = [
  constants.OPR_EQUAL_WEEKDAY,  
  constants.OPR_NOT_EQUAL_WEEKDAY, 
  constants.OPR_IN_BETWEEN_WEEKDAY,
  constants.OPR_NOT_IN_BETWEEN_WEEKDAY,
  constants.OPR_IN_WEEKDAYS,
  constants.OPR_NOT_IN_WEEKDAYS
];

const NOW_OPERATOR_LIST = [
  constants.OPR_EQUAL_CURRENT_TIME,
  constants.OPR_LESS_EQUAL_CURRENT_TIME,
  constants.OPR_GREATER_EQUAL_CURRENT_TIME
];

const DEFAULT_STRING_OPERATOR_LIST = [
  constants.RuleEngineDefaultOperators.EQUAL,
  constants.RuleEngineDefaultOperators.NOT_EQUAL
];

const DEFAULT_OPERATOR_LIST = [
  constants.OPR_IS_EMPTY,
  constants.OPR_IS_NOT_EMPTY
];

const DEFAULT_NUMBER_OPERATOR_LIST = [
  constants.RuleEngineDefaultOperators.EQUAL,
  constants.RuleEngineDefaultOperators.NOT_EQUAL,
  constants.RuleEngineDefaultOperators.LESS_THAN,
  constants.RuleEngineDefaultOperators.LESS_THAN_EQUAL,
  constants.RuleEngineDefaultOperators.GREATER_THAN,
  constants.RuleEngineDefaultOperators.GREATER_THAN_EQUAL
];

const DEFAULT_ARRAY_OPERATOR_LIST = [
  constants.RuleEngineDefaultOperators.ARRAY_CONTAINS,
  constants.RuleEngineDefaultOperators.ARRAY_DOES_NOT_CONTAIN,
  constants.RuleEngineDefaultOperators.ARRAY_IN,
  constants.RuleEngineDefaultOperators.ARRAY_NOT_IN
];

const SUB_ARRAY_OPERATOR_LIST = [
  constants.OPR_ARRAY_CONTAINS_SUB_ARRAY,
  constants.OPR_ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY,
  constants.OPR_ARRAY_CONTAINS_ANY_OF_SUB_ARRAY,
  constants.OPR_ARRAY_DOES_NOT_CONTAINS_ANY_OF_SUB_ARRAY
];

const STRING_LENGTH_OPERATOR_LIST = [
  constants.OPR_LENGTH_EQUAL,
  constants.OPR_LENGTH_NOT_EQUAL,
  constants.OPR_LENGTH_GREATER_EQUAL,
  constants.OPR_LENGTH_SMALLER_EQUAL
];

const NUMBER_RANGE_OPERATOR_LIST = [
  constants.OPR_IS_IN_BETWEEN,
  constants.OPR_NOT_IN_BETWEEN
];

const TAG_OPERATOR_LIST = [
  constants.OPR_TAG_CONTAIN,
  constants.OPR_TAG_NOT_CONTAIN,
  constants.OPR_COMPANY_TAG_CONTAIN,
  constants.OPR_COMPANY_TAG_NOT_CONTAIN,
  constants.OPR_CUSTOM_TAG_CONTAIN,
  constants.OPR_CUSTOM_TAG_NOT_CONTAIN,
];

const RULE_ACTION_TYPES = [
  RULE_ACTION_PLAIN_TEXT,
  RULE_ACTION_ARTICLE_VALUE,
  RULE_ACTION_MULTI_ARTICLE_VALUE,
  RULE_ACTION_SUBSTRING
];

const CUSTOM_FILTERS = [
  {title: constants.FILTER_INVALID_ZEROS, value:constants.FILTER_INVALID_ZEROS, children:[]},
  {title: "Format Currency (€)", value:constants.FILTER_PRICE_FORMAT, children:[]},
  {title: "Format Decimal Number", value:"Format Decimal Number", children:FILTER_DECIMAL_NUMBER_LIST},
  {title: "Format Date", value:"Format Date", children:FILTER_DATE_FORMAT_LIST}
];

const DATA_SOURCES = {
  ARTICLE_FIELD: constants.DATA_SOURCE_ARTICLE_FIELD,
  PIM: constants.DATA_SOURCE_PIM,
  DATE_TIME: constants.DATA_SOURCE_DATE_TIME,
  ARTICLE_COUNT: constants.DATA_SOURCE_ARTICLE_COUNT,
  TAGS: constants.DATA_SOURCE_TAGS,
  USER_DATA: constants.DATA_SOURCE_USER_DATA,
  DEVICE_DATA: constants.DATA_SOURCE_DEVICE_DATA,
  CAMERA_DATA: constants.DATA_SOURCE_CAMERA_DATA,
  NEXMO_DATA: constants.DATA_SOURCE_NEXMO_DATA,
  ESL_FIELD_DATA: constants.DATA_SOURCE_ESL_FIELD_DATA
};

const DATA_FIELD_TYPES = {
  INSTORE_FIELDS: constants.DATA_SOURCE_FIELDS_INSTORE,
  IMPORT_FIELDS: constants.DATA_SOURCE_FIELDS_IMPORTS,
  CURRENT_DATE: constants.DATA_SOURCE_FIELDS_DATE,
  CURRENT_TIME: constants.DATA_SOURCE_FIELDS_TIME,
  CURRENT_DAY: constants.DATA_SOURCE_FIELDS_DAY,
  DEVICE_TAG: constants.DATA_SOURCE_FIELDS_DEVICE_TAG,
  CUSTOM_TAG: constants.DATA_SOURCE_FIELDS_CUSTOM_TAG,
  COMPANY_TAG: constants.DATA_SOURCE_FIELDS_COMPANY_TAG
};


export {
  ValidatePreviewRules,
  ValidatePagesRules,
  ValidateScenario,
  GetArticleFieldValue,
  GetDataFieldPath,
  FilterDateFormat,
  FilterInsignificentZeros,
  FilterPriceFormat,
  FilterIntegerPart,
  FilterDecimalPart,
  RULE_OPERATOR_LIST,
  RULE_ENGINE_OPERATORS,
  FILTERS,
  TIME_FORMAT,
  MULTI_DATE_SEPARATOR,
  DATE_OPERATOR_LIST,
  DAYS_OPERATOR_LIST,
  AGE_RANGE_OPERATOR_LIST,
  DATE_RANGE_OPERATOR_LIST,
  WEEKDAY_RANGE_OPERATOR_LIST,
  TIME_OPERATOR_LIST,
  NOW_OPERATOR_LIST,
  TODAY_OPERATOR_LIST,
  WEEKDAY_OPERATOR_LIST,
  DEFAULT_OPERATOR_LIST,
  DEFAULT_STRING_OPERATOR_LIST,
  DEFAULT_NUMBER_OPERATOR_LIST,
  DEFAULT_ARRAY_OPERATOR_LIST,
  STRING_LENGTH_OPERATOR_LIST,
  NUMBER_RANGE_OPERATOR_LIST,
  SUB_ARRAY_OPERATOR_LIST,
  TAG_OPERATOR_LIST,
  RULE_FACT_ARTICLE,
  RULE_FACT_TEMPLATE,
  RULE_FACT_USER_DATA,
  RULE_FACT_DEVICE_DATA,
  RULE_FACT_CAMERA_DATA,
  RULE_FACT_NEXMO_DATA,
  RULE_FACT_ESL_FIELD_DATA,
  RULE_ACTION_PLAIN_TEXT,
  RULE_ACTION_ARTICLE_VALUE,
  RULE_ACTION_MULTI_ARTICLE_VALUE,
  RULE_ACTION_SUBSTRING,
  RULE_TYPE_ALL,
  RULE_TYPES_ANY,
  RULE_ACTION_TYPES,
  RULE_TYPES,
  CUSTOM_FILTERS,
  DATA_FIELD_TYPES,
  DATA_SOURCES,
  DATA_TYPE,
  SUPPORTED_DATE_FORMATS,
  CUSTOM_DATE_FORMATS
};