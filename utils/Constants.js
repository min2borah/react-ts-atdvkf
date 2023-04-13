import moment from "moment";

export const RULE_FACT_ARTICLE = "article-fact";
export const RULE_FACT_TEMPLATE = "template-fact";

export const RULE_ACTION_PLAIN_TEXT = "Plain Text";
export const RULE_ACTION_ARTICLE_VALUE = "Article Value";
export const RULE_ACTION_SUBSTRING = "Substring";
export const RULE_TYPE_ALL = "all";
export const RULE_TYPES_ANY = "any";
export const RSERVER_ELEMENT_FIELDS = ["id", "type", "locked", "custom"];
export const RuleEngineDefaultOperators = {
  EQUAL: "cus_equal",
  NOT_EQUAL: "cus_notEqual",
  LESS_THAN: "cus_lessThan",
  LESS_THAN_EQUAL: "cus_lessThanInclusive",
  GREATER_THAN: "cus_greaterThan",
  GREATER_THAN_EQUAL: "cus_greaterThanInclusive",
  ARRAY_CONTAINS: "cus_contains",
  ARRAY_DOES_NOT_CONTAIN: "cus_doesNotContain",
  ARRAY_IN: "cus_in",
  ARRAY_NOT_IN: "cus_notIn"
};
export const OPR_LENGTH_GREATER_EQUAL = "Length >=";
export const OPR_LENGTH_SMALLER_EQUAL = "Length <=";
export const OPR_LENGTH_EQUAL = "Length ===";
export const OPR_LENGTH_NOT_EQUAL = "Length !==";
export const OPR_IS_EMPTY = "isEmpty";
export const OPR_IS_IN_BETWEEN = "inBetween";
export const OPR_NOT_IN_BETWEEN = "notInBetween";
export const OPR_CONTAIN_SUBSTRING = "constainString";

export const MULTI_DATE_SEPARATOR = "#,#";

export const OPR_GREATER_EQUAL_DATE = "greaterThanInclusiveDate";
export const OPR_GREATER_THAN_DATE = "greaterThanDate";
export const OPR_LESS_EQUAL_DATE = "lessThanInclusiveDate";
export const OPR_LESS_THAN_DATE = "lessThanDate";
export const OPR_IN_BETWEEN_DATE = "inBetweenDate";
export const OPR_NOT_IN_BETWEEN_DATE = "notInBetweenDate";
export const OPR_EQUAL_DATE = "equalToDate";
export const OPR_NOT_EQUAL_DATE = "notEqualToDate";

export const OPR_GREATER_EQUAL_CURRENT_DATE = "greaterThanInclusiveCurrentDate";
export const OPR_GREATER_THAN_CURRENT_DATE = "greaterThanCurrentDate";
export const OPR_LESS_EQUAL_CURRENT_DATE = "lessThanInclusiveCurrentDate";
export const OPR_LESS_THAN_CURRENT_DATE = "lessThanCurrentDate";
export const OPR_CURRENT_DATE_IN_BETWEEN_DATE = "currentDateInBetweenDate";
export const OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE =
  "currentDateNotInBetweenDate";
export const OPR_EQUAL_CURRENT_DATE = "equalToCurrentDate";
export const OPR_NOT_EQUAL_CURRENT_DATE = "notEqualToCurrentDate";

export const TIME_FORMAT = "HH:mm:ss";
export const OPR_EQUAL_TIME = "equalToTime";
export const OPR_EQUAL_CURRENT_TIME = "equalToCurrentTime";
export const OPR_GREATER_EQUAL_TIME = "greaterThanInclusiveTime";
export const OPR_GREATER_EQUAL_CURRENT_TIME = "greaterThanInclusiveCurrentTime";
export const OPR_LESS_EQUAL_TIME = "lessThanInclusiveTime";
export const OPR_LESS_EQUAL_CURRENT_TIME = "lessThanInclusiveCurrentTime";

export const OPR_TAG_CONTAIN = "DeviceTag";
export const OPR_TAG_NOT_CONTAIN = "DeviceTagNotContain";

export const FILTER_INVALID_ZEROS = "Insignificant Zeros";
export const FILTER_PRICE_FORMAT = "Format currency (€)";
export const FILTER_DATE_FORMAT = "Format Date (DD Month)";
export const FILTER_INTEGER_PART = "Take Integer Part";
export const FILTER_DECIMAL_PART = "Take Decimal Part"; //Deprecated from version 1.4.25, kept to support previous templates
export const FILTER_DECIMAL_PART_2_DIGIT = "Take Decimal Part (2 Digits)";
export const FILTER_DECIMAL_PART_3_DIGIT = "Take Decimal Part (3 Digits)";

export const ELEMENT_DECIMAL_SUPER = "decimalSuperScript";

export const DATA_SOURCE_ARTICLE_FIELD = "article_field";
export const DATA_SOURCE_PIM = "pim_data";
export const DATA_SOURCE_DATE_TIME = "date_time";
export const DATA_SOURCE_FIELDS_IMPORTS = "importFields";
export const DATA_SOURCE_FIELDS_INSTORE = "instoreFields";
export const DATA_SOURCE_FIELDS_DATE = "current_date";
export const DATA_SOURCE_FIELDS_TIME = "current_time";
export const DATA_SOURCE_ARTICLE_COUNT = "article_count";

export const DataSchemaDataType = Object.freeze({
  ALFA: 1,
  NUMERIC: 2,
  CURRENCY: 3,
  DATE: 4,
  BIT: 5,
  DATETIME: 6,
  TIME: 7
});

export const SUPPORTED_DATE_FORMATS = [
  moment.ISO_8601,
  moment.RFC_2822,
  moment.HTML5_FMT.DATETIME_LOCAL_SECONDS,
  moment.HTML5_FMT.DATETIME_LOCAL_MS,
  moment.HTML5_FMT.DATETIME_LOCAL,
  "DD",
  "MM",
  "YYYY",
  "DD-MM",
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "YYYY-DD-MM",
  "YYYY-MM-DD",
  "DD/MM/YYYY",
  "YYYY/DD/MM"
];