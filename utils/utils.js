import * as Constants from './Constants.js';
import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/de';
import 'moment/locale/es';

export const is_a_number = (value) => {
  const re = RegExp('[+-]?([0-9]*[.])?[0-9]+');
  if (re.test(value)) {
    return !isNaN(Number(value));
  }
  return re.test(value);
};

export function is_a_price(str) {
  var value = str.toString().replace(',', '.').replace(' ', '');
  return is_a_number(value);
}

export function isEmptyValue(val) {
  if (!val) {
    return true;
  } else if (typeof val === 'string' && val.trim() === '') {
    return true;
  }
  return false;
}

export function isEmpty(val) {
  return isEmptyValue(val);
}

function isContains(str1, str2) {
  const lowercasestr1 = str1.toString().toLowerCase();
  const lowercasestr2 = str2.toString().toLowerCase();
  return lowercasestr1.indexOf(lowercasestr2) > -1;
}

export const isInBetween = (factValue, value) => {
  if (factValue && value) {
    const arrValues = value.trim().split(',');
    if (arrValues && arrValues.length > 1 && is_a_number(factValue)) {
      const v1 = arrValues[0].trim();
      const v2 = arrValues[1].trim();
      return (
        is_a_number(v1) &&
        is_a_number(v2) &&
        parseFloat(v1) <= parseFloat(factValue) &&
        parseFloat(v2) >= parseFloat(factValue)
      );
    }
  }
  return false;
};

export const substringRange = (range) => {
  const arrValues = range.trim().split(',');
  if (arrValues && arrValues.length === 1) {
    const v1 = arrValues[0].trim();
    let val = is_a_number(v1) ? parseInt(v1) : 0;
    return [val];
  } else if (arrValues && arrValues.length === 2) {
    const v1 = arrValues[0].trim();
    const v2 = arrValues[1].trim();
    if (!is_a_number(v1)) {
      return [0];
    }
    if (!is_a_number(v2)) {
      return [parseInt(v1)];
    }
    return [parseInt(v1), parseInt(v2)];
  } else {
    return [0];
  }
};

export const notInBetween = (factValue, value) => {
  if (factValue && value) {
    const arrValues = value.trim().split(',');
    if (arrValues && arrValues.length > 1 && is_a_number(factValue)) {
      const v1 = arrValues[0].trim();
      const v2 = arrValues[1].trim();
      return (
        is_a_number(v1) &&
        is_a_number(v2) &&
        (parseFloat(v1) >= parseFloat(factValue) ||
          parseFloat(v2) <= parseFloat(factValue))
      );
    }
  }
  return false;
};

export const containSubstring = (factValue, val) => {
  return (
    !isEmptyValue(factValue) && !isEmptyValue(val) && isContains(factValue, val)
  );
};

export const getDate_DD_Month = (dateStr, locale = null) => {
  let mdate = moment(dateStr, Constants.SUPPORTED_DATE_FORMATS);
  if (!mdate.isValid()) mdate = moment(new Date(dateStr));
  if (mdate.isValid()) {
    let lang = 'it';
    if (locale) lang = locale;
    return mdate.locale(lang).format('DD MMMM');
  } else {
    return dateStr;
  }
};

export const isDate = (date) => {
  var subData = date.split(' ');
  var patternSlash = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  var patternDash = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  return patternSlash.test(subData[0]) || patternDash.test(subData[0]);
};

export function filterInsignificentZeros(priceText) {
  var replcTxt = `${priceText}`;
  var spltArr = `${priceText}`.split(',');
  if (spltArr.length > 1) {
    replcTxt = spltArr[0].replace('.', '') + '.' + spltArr[1];
  }
  const rxInsignificant = /^[\s0]+|(?<=\..*)[\s0.]+$|\.0+$|\.$/gm;
  var filteredText = replcTxt.replace(rxInsignificant, '');
  var convertTxt = filteredText; //.replace('.',',')
  if (convertTxt.charAt(0) === ',') {
    convertTxt = '0' + convertTxt;
  }
  var arr = convertTxt.split(',');
  if (arr.length > 1) {
    if (arr[1].length === 1) {
      convertTxt = convertTxt + '0';
    }
  }
  return convertTxt;
}

export function filterPriceFormatter(priceText) {
  var formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  var price = formatter.format(parseFloat(priceText));
  price = price.replace('€', '');
  return price;
}

export function filterIntegerPart(value) {
  if (is_a_number(value)) {
    let floatValue = parseFloat(value);
    return Math.trunc(floatValue);
  } else {
    return value;
  }
}

export function filterDecimalPart(value, isForThreeDigit = false) {
  if (is_a_number(value)) {
    let digit = isForThreeDigit ? 3 : 2;
    let floatValue = Number.parseFloat(value).toFixed(3);
    let validValue = Number(filterInsignificentZeros(floatValue)).toFixed(
      digit
    );
    let numPart = String(validValue).split('.');
    if (numPart.length > 1) {
      let [whole, decimal] = numPart;
      return decimal;
    } else {
      return Number(0).toFixed(digit).toString();
    }
  } else {
    return value;
  }
}
export function processFilters(filters, articleData, isMultipleArticleCanvas) {
  var article = cloneDeep(articleData);

  filters.forEach((filter, idx) => {
    var artVal = '';
    if (filter.dataSource === Constants.DATA_SOURCE_ARTICLE_FIELD) {
      try {
        let vl = getArticleFieldValue(
          articleData,
          filter.dataSource,
          filter.articleField,
          filter.articleIndex,
          isMultipleArticleCanvas
        );
        if (vl) {
          artVal = vl;
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (filter.dataSource === Constants.DATA_SOURCE_PIM) {
      try {
        let vl = getArticleFieldValue(
          articleData,
          filter.dataSource,
          filter.articleField,
          filter.articleIndex,
          isMultipleArticleCanvas
        );
        if (vl) {
          artVal = vl;
        }
      } catch (error) {
        console.log(error);
      }
    }
    const selectedFilter = filter.function;

    switch (selectedFilter) {
      case Constants.FILTER_INVALID_ZEROS:
        if (is_a_number(artVal)) {
          artVal = filterInsignificentZeros(artVal);
        }
        break;
      case Constants.FILTER_PRICE_FORMAT:
        if (is_a_price(artVal)) {
          artVal = filterPriceFormatter(artVal);
        }
        break;
      case Constants.FILTER_DATE_FORMAT:
        let formatedDate = getDate_DD_Month(artVal);
        artVal = formatedDate;
        break;
      case Constants.FILTER_INTEGER_PART:
        artVal = filterIntegerPart(artVal);
        break;
      case Constants.FILTER_DECIMAL_PART:
        artVal = filterDecimalPart(artVal);
        break;
      case Constants.FILTER_DECIMAL_PART_2_DIGIT:
        artVal = filterDecimalPart(artVal);
        break;
      case Constants.FILTER_DECIMAL_PART_3_DIGIT:
        artVal = filterDecimalPart(artVal, true);
        break;
    }
    let filterPathFinal = getLocaliazedPath(
      articleData,
      filter.dataSource,
      filter.articleField,
      null,
      filter.articleIndex,
      isMultipleArticleCanvas
    );

    try {
      // eval("article." + `${filterPathFinal}` + " = " + `${artVal}`);
      setToValue(article, artVal, filterPathFinal);
    } catch (e) {
      console.log(e);
    }
  });

  return article;
}

export function getArticleFieldValue(
  articleJson,
  dataSource,
  articleField,
  articleIndex,
  isMultipleArticleCanvas
) {
  let updatedArticleJson = getValidArticle(
    articleJson,
    articleIndex,
    isMultipleArticleCanvas
  );
  if (updatedArticleJson === null || updatedArticleJson === undefined) {
    return null;
  }
  if (dataSource === Constants.DATA_SOURCE_ARTICLE_FIELD) {
    let path = getLocaliazedPath(
      updatedArticleJson,
      dataSource,
      articleField,
      null,
      articleIndex,
      isMultipleArticleCanvas
    );
    try {
      let val = getProp(articleJson, path);
      return val;
    } catch (error) {
      return null;
    }
  } else if (dataSource === Constants.DATA_SOURCE_PIM) {
    if (
      updatedArticleJson.externalData &&
      updatedArticleJson.externalData['PIM'] &&
      updatedArticleJson.externalData['PIM'].data
    ) {
      let path = getLocaliazedPath(
        updatedArticleJson,
        dataSource,
        articleField,
        null,
        articleIndex,
        isMultipleArticleCanvas
      );
      try {
        let val = getProp(articleJson, path);
        return val;
      } catch (error) {
        return null;
      }
    }
  }
  return '';
}

export function getLocaliazedPath(
  articleJson,
  dataSource,
  articleField,
  pageIndex,
  articleIndex,
  isMultipleArticleCanvas
) {
  let updatedArticleJson = getValidArticle(
    articleJson,
    articleIndex,
    isMultipleArticleCanvas
  );
  let validIndex = isMultipleArticleCanvas
    ? articleIndex
      ? articleIndex - 1
      : null
    : 0;
  let appendPrefixIndex = true;

  let path = null;
  if (dataSource === Constants.DATA_SOURCE_ARTICLE_FIELD) {
    if (!isEmpty(articleField['parent'])) {
      let parent = camelize(articleField['parent']);
      if (parent === Constants.DATA_SOURCE_FIELDS_INSTORE) {
        let defaultLocale = getInstoreFieldPrimaryLocale(updatedArticleJson);
        path =
          (appendPrefixIndex ? `[${validIndex}].` : '') +
          getValidPathWithLocale(
            defaultLocale,
            articleField,
            dataSource,
            updatedArticleJson
          );
      } else if (parent === Constants.DATA_SOURCE_FIELDS_IMPORTS) {
        path =
          (appendPrefixIndex ? `[${validIndex}].` : '') +
          getDataFieldPath(articleField, dataSource, null);
      }
    } else {
      path =
        (appendPrefixIndex ? `[${validIndex}].` : '') +
        articleField['articleField'];
    }
  } else if (dataSource === Constants.DATA_SOURCE_PIM) {
    let pimDefaultLocale = getPimDataPrimaryLocale(updatedArticleJson);
    path =
      (appendPrefixIndex ? `[${validIndex}].` : '') +
      getValidPathWithLocale(
        pimDefaultLocale,
        articleField,
        dataSource,
        updatedArticleJson
      );
  } else if (dataSource === Constants.DATA_SOURCE_ARTICLE_COUNT) {
    path = `.pages[${pageIndex}].articleCount`;
  }
  return path;
}

function getValidPathWithLocale(
  defaultLocale,
  articleField,
  dataSource,
  articleJson
) {
  let path = null;
  let currentLocale = defaultLocale;
  if (articleField && articleField.locale) currentLocale = articleField.locale;
  try {
    path = getDataFieldPath(articleField, dataSource, currentLocale);
    let val = getProp(articleJson, path);
    if (val === undefined) {
      path = getDataFieldPath(articleField, dataSource, defaultLocale);
    }
  } catch (error) {
    path = getDataFieldPath(articleField, dataSource, defaultLocale);
  }
  return path;
}

function getInstoreDataPath(parent, name, locale) {
  let path = parent + "['" + locale + "']" + "['data']" + "['" + name + "']";
  return path;
}

function getImportDataPath(parent, name) {
  let path = parent + "['" + name + "']";
  return path;
}

function getPimDataPath(parent, name, locale) {
  var pimExternalData = "externalData['PIM']['data']['" + locale + "']['data']";
  let path = pimExternalData + "['" + parent + "']" + "['" + name + "']";
  if (!parent) {
    path = pimExternalData + "['" + name + "']";
  }
  return path;
}

export function getDataFieldPath(articleField, dataSource, locale) {
  if (!isEmpty(articleField['parent']) && !isEmpty(articleField['name'])) {
    let parent = camelize(articleField['parent']);
    let name = camelize(articleField['name']);
    let path = null;
    if (dataSource === Constants.DATA_SOURCE_ARTICLE_FIELD) {
      if (parent === Constants.DATA_SOURCE_FIELDS_INSTORE) {
        path = getInstoreDataPath(parent, name, locale);
      } else if (parent === Constants.DATA_SOURCE_FIELDS_IMPORTS) {
        path = getImportDataPath(parent, name);
      }
    } else if (dataSource === Constants.DATA_SOURCE_PIM) {
      path = getPimDataPath(parent, name, locale);
    }
    return path;
  } else if (
    dataSource === Constants.DATA_SOURCE_PIM &&
    !isEmpty(articleField['name']) &&
    isEmpty(articleField['parent'])
  ) {
    let name = camelize(articleField['name']);
    return getPimDataPath(null, name, locale);
  } else {
    return articleField;
  }
}

export function getInstoreFieldPrimaryLocale(articleJson) {
  let finalKey = 'it-IT';
  if (articleJson.instoreFields) {
    let localeKeys = Object.keys(articleJson.instoreFields);
    localeKeys.forEach((key, index) => {
      if (articleJson.instoreFields[key]['isPrimary']) {
        finalKey = localeKeys[index];
      }
    });
  }
  return finalKey;
}

export function getPimDataPrimaryLocale(articleJson) {
  let finalKey = 'it-IT';
  if (
    articleJson.externalData &&
    articleJson.externalData['PIM'] &&
    articleJson.externalData['PIM'].data
  ) {
    let localeKeys = Object.keys(articleJson.externalData.PIM.data);
    localeKeys.forEach((key, index) => {
      if (articleJson.externalData.PIM.data[key]['isPrimary']) {
        finalKey = key;
      }
    });
  }
  return finalKey;
}

export function camelize(str) {
  if (!isEmpty(str)) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  } else {
    return str;
  }
}

/** Get a nested property from an object without returning any errors.
 * If the property or property chain doesn't exist, undefined is returned.
 * Property names with spaces may use either dot or bracket "[]" notation.
 * Note that bracketed property names without surrounding quotes will fail the lookup.
 *      e.g. embedded variables are not supported.
 * @param {object} obj The object to check
 * @param {string} prop The property or property chain to get (e.g. obj.prop1.prop1a or obj['prop1'].prop2)
 * @returns {*|undefined} The value of the objects property or undefined if the property doesn't exist
 */
function getProp(obj, prop) {
  if (typeof obj !== 'object') throw 'getProp: obj is not an object';
  if (typeof prop !== 'string') throw 'getProp: prop is not a string';
  // Replace [] notation with dot notation
  prop = prop.replace(/\"/g, "'");
  prop = prop.replace(/\'\]\[\'/g, '.');
  prop = prop.replace(/\[["'`](.*)["'`]\]/g, '.$1');
  prop = prop.replace(/\[(\d+)\]/g, '.$1');

  var propArr = prop.split('.').filter(function (item) {
    return item !== '';
  });

  return propArr.reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj || self);
}

function setToValue(obj, value, path) {
  if (typeof obj !== 'object') throw 'getProp: obj is not an object';
  if (typeof path !== 'string') throw 'getProp: prop is not a string';

  // Replace [] notation with dot notation
  path = path.replace(/\"/g, "'");
  path = path.replace(/\'\]\[\'/g, '.');
  let dotpath = path.replace(/\[["'`](.*)["'`]\]/g, '.$1');
  let pathArr = dotpath.split(/\.|\[|\]/);

  let objRef = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    if (pathArr[i]) {
      // Skip empty string
      objRef = objRef[pathArr[i]];
    }
  }
  objRef[pathArr[pathArr.length - 1]] = value;
}

function getValidArticle(articleJson, articleIndex, isMultipleArticleCanvas) {
  if (Array.isArray(articleJson)) {
    if (isMultipleArticleCanvas && articleIndex && articleIndex >= 0) {
      if (typeof articleJson[articleIndex - 1] !== 'undefined') {
        return articleJson[articleIndex - 1];
      } else {
        return null;
      }
    } else {
      return articleJson[0];
    }
  }
  return articleJson;
}

export function convertUTCToLocalDate(date) {
  if (!date) {
    return date;
  }
  date = new Date(date);
  date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return date;
}
