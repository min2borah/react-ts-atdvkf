import moment from 'moment';

export const RULE_FACT_ARTICLE = 'article-fact';
export const RULE_FACT_TEMPLATE = 'template-fact';
export const RULE_FACT_USER_DATA = 'user-data-fact';

export const RULE_ACTION_PLAIN_TEXT = 'Plain Text';
export const RULE_ACTION_ARTICLE_VALUE = 'Article Value';
export const RULE_ACTION_MULTI_ARTICLE_VALUE = 'Multiple Bind Field';
export const RULE_ACTION_SUBSTRING = 'Substring';
export const RULE_TYPE_ALL = 'all';
export const RULE_TYPES_ANY = 'any';
export const RSERVER_ELEMENT_FIELDS = ['id', 'type', 'locked', 'custom'];
export const MULTI_DATE_SEPARATOR = '#,#';

export const RuleEngineDefaultOperators = {
  EQUAL: 'cus_equal',
  NOT_EQUAL: 'cus_notEqual',
  LESS_THAN: 'cus_lessThan',
  LESS_THAN_EQUAL: 'cus_lessThanInclusive',
  GREATER_THAN: 'cus_greaterThan',
  GREATER_THAN_EQUAL: 'cus_greaterThanInclusive',
  ARRAY_CONTAINS: 'cus_contains',
  ARRAY_DOES_NOT_CONTAIN: 'cus_doesNotContain',
  ARRAY_IN: 'cus_in',
  ARRAY_NOT_IN: 'cus_notIn',
};

export const OPR_LENGTH_GREATER_EQUAL = 'Length >=';
export const OPR_LENGTH_SMALLER_EQUAL = 'Length <=';
export const OPR_LENGTH_EQUAL = 'Length ===';
export const OPR_LENGTH_NOT_EQUAL = 'Length !==';
export const OPR_IS_EMPTY = 'isEmpty';
export const OPR_IS_NOT_EMPTY = 'isNotEmpty';
export const OPR_IS_IN_BETWEEN = 'inBetween';
export const OPR_NOT_IN_BETWEEN = 'notInBetween';
export const OPR_CONTAIN_SUBSTRING = 'constainString';

export const OPR_GREATER_EQUAL_DATE = 'greaterThanInclusiveDate';
export const OPR_GREATER_THAN_DATE = 'greaterThanDate';
export const OPR_LESS_EQUAL_DATE = 'lessThanInclusiveDate';
export const OPR_LESS_THAN_DATE = 'lessThanDate';
export const OPR_IN_BETWEEN_DATE = 'inBetweenDate';
export const OPR_NOT_IN_BETWEEN_DATE = 'notInBetweenDate';
export const OPR_EQUAL_DATE = 'equalToDate';
export const OPR_NOT_EQUAL_DATE = 'notEqualToDate';

export const OPR_GREATER_EQUAL_CURRENT_DATE = 'greaterThanInclusiveCurrentDate';
export const OPR_GREATER_THAN_CURRENT_DATE = 'greaterThanCurrentDate';
export const OPR_LESS_EQUAL_CURRENT_DATE = 'lessThanInclusiveCurrentDate';
export const OPR_LESS_THAN_CURRENT_DATE = 'lessThanCurrentDate';
export const OPR_CURRENT_DATE_IN_BETWEEN_DATE = 'currentDateInBetweenDate';
export const OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE =
  'currentDateNotInBetweenDate';
export const OPR_EQUAL_CURRENT_DATE = 'equalToCurrentDate';
export const OPR_NOT_EQUAL_CURRENT_DATE = 'notEqualToCurrentDate';

export const TIME_FORMAT = 'HH:mm:ss';
export const DATE_FORMAT = 'DD:MM:YYYY';
export const OPR_EQUAL_TIME = 'equalToTime';
export const OPR_EQUAL_CURRENT_TIME = 'equalToCurrentTime';
export const OPR_GREATER_EQUAL_TIME = 'greaterThanInclusiveTime';
export const OPR_GREATER_EQUAL_CURRENT_TIME = 'greaterThanInclusiveCurrentTime';
export const OPR_LESS_EQUAL_TIME = 'lessThanInclusiveTime';
export const OPR_LESS_EQUAL_CURRENT_TIME = 'lessThanInclusiveCurrentTime';

export const OPR_TAG_CONTAIN = 'DeviceTag';
export const OPR_TAG_NOT_CONTAIN = 'DeviceTagNotContain';
export const OPR_CUSTOM_TAG_CONTAIN = 'ContainCustomTag';
export const OPR_CUSTOM_TAG_NOT_CONTAIN = 'NotContainCustomTag';
export const OPR_COMPANY_TAG_CONTAIN = 'CompanyTag';
export const OPR_COMPANY_TAG_NOT_CONTAIN = 'CompanyTagNotContain';

export const OPR_ARRAY_CONTAINS_SUB_ARRAY = 'ArrayContainsSubArray';
export const OPR_ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY = 'ArrayNotContainsSubArray';
export const OPR_ARRAY_CONTAINS_ANY_OF_SUB_ARRAY = 'ArrayContainsAnyOfSubArray';
export const OPR_ARRAY_DOES_NOT_CONTAINS_ANY_OF_SUB_ARRAY =
  'ArrayNotContainsAnyOfSubArray';

export const FILTER_INVALID_ZEROS = 'Insignificant Zeros';
export const FILTER_PRICE_FORMAT = 'Format currency (€)';
export const FILTER_DATE_FORMAT_DD_Month = 'Format Date (DD Month)'; //Deprecated from version 1.5.9, kept to support previous templates
export const FILTER_INTEGER_PART = 'Take Integer Part';
export const FILTER_DECIMAL_PART = 'Take Decimal Part'; //Deprecated from version 1.4.25, kept to support previous templates
export const FILTER_DECIMAL_PART_2_DIGIT = 'Take Decimal Part (2 Digits)';
export const FILTER_DECIMAL_PART_3_DIGIT = 'Take Decimal Part (3 Digits)';

export const ELEMENT_DECIMAL_SUPER = 'decimalSuperScript';

export const DATA_SOURCE_ARTICLE_FIELD = 'article_field';
export const DATA_SOURCE_PIM = 'pim_data';
export const DATA_SOURCE_DATE_TIME = 'date_time';
export const DATA_SOURCE_TAGS = 'tags';
export const DATA_SOURCE_ARTICLE_COUNT = 'article_count';
export const DATA_SOURCE_FIELDS_IMPORTS = 'importFields';
export const DATA_SOURCE_FIELDS_INSTORE = 'instoreFields';
export const DATA_SOURCE_FIELDS_DATE = 'current_date';
export const DATA_SOURCE_FIELDS_TIME = 'current_time';
export const DATA_SOURCE_FIELDS_DEVICE_TAG = 'device_tag';
export const DATA_SOURCE_FIELDS_CUSTOM_TAG = 'custom_tag';
export const DATA_SOURCE_FIELDS_COMPANY_TAG = 'company_tag';
export const DATA_SOURCE_USER_DATA = 'user_data';

export const DataSchemaDataType = Object.freeze({
  ALFA: 1,
  NUMERIC: 2,
  CURRENCY: 3,
  DATE: 4,
  BIT: 5,
  DATETIME: 6,
  TIME: 7,
  ARRAY: 11,
  FILE: 12,
});

export const MOMENT_DEFAULT_DATE_FORMATS = [
  moment.ISO_8601,
  moment.RFC_2822,
  moment.defaultFormat,
  moment.defaultFormatUtc,
  moment.HTML5_FMT.DATETIME_LOCAL_SECONDS,
  moment.HTML5_FMT.DATETIME_LOCAL_MS,
  moment.HTML5_FMT.DATETIME_LOCAL,
];

export const CUSTOM_DATE_FORMATS = [
  'DD MMMM',
  'DD',
  'MM',
  'YYYY',
  'DD-MM',
  'DD-MM-YY',
  'DD-MM-YYYY',
  'DD/MM',
  'DD/MM/YY',
  'DD/MM/YYYY',
  'MM-DD',
  'MM/DD',
  'MM/DD/YY',
  'MM-DD-YYYY',
  'MM/DD/YYYY',
  'YYYY-DD-MM',
  'YYYY/DD/MM',
  'YYYY-MM-DD',
  'YYYY/MM/DD',
];
export const SUPPORTED_DATE_FORMATS = [
  ...MOMENT_DEFAULT_DATE_FORMATS,
  ...CUSTOM_DATE_FORMATS,
];
