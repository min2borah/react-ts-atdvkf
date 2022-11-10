import * as Constants from './Constants.js';
import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';

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
  } else if (!val.trim()) {
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

export const getDate_DD_Month = (dateStr) => {
  var a = moment(dateStr);
  console.log('isValid...', a.isValid());
  console.log('invalidAt', a.invalidAt());

  let ndate = new Date(dateStr);
  let mdate = moment(ndate);
  console.log('ndate...', ndate);
  console.log('mdate...', mdate);
  let date = mdate.format('DD/MM/YYYY HH:mm:ss');
  var subData = date.split(' ');
  var separator = '';
  if (subData[0].includes('/')) {
    separator = '/';
  }
  if (subData[0].includes('-')) {
    separator = '-';
  }
  if (separator === '') {
    return date;
  }
  var subData2 = subData[0].split(separator);
  var month = '';
  switch (parseInt(subData2[1])) {
    case 1:
      month = 'Gennaio';
      break;
    case 2:
      month = 'Febbraio';
      break;
    case 3:
      month = 'Marzo';
      break;
    case 4:
      month = 'Aprile';
      break;
    case 5:
      month = 'Maggio';
      break;
    case 6:
      month = 'Giugno';
      break;
    case 7:
      month = 'Luglio';
      break;
    case 8:
      month = 'Agosto';
      break;
    case 9:
      month = 'Settembre';
      break;
    case 10:
      month = 'Ottobre';
      break;
    case 11:
      month = 'Novembre';
      break;
    case 12:
      month = 'Dicembre';
      break;
  }
  console.log(subData2[0] + ' ' + month);
  return subData2[0] + ' ' + month;
};

export const isDate = (date) => {
  var subData = date.split(' ');
  var patternSlash = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  var patternDash = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  return patternSlash.test(subData[0]) || patternDash.test(subData[0]);
};

export const GetBase64Str = async (filename) => {
  return await getImage();
};

export function getImage() {
  let promise = new Promise((resolve, reject) => {
    const path = 'https://picsum.photos/200/300';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      let blobFile = xhr.response;
      var reader = new FileReader();
      reader.readAsDataURL(blobFile);
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject('');
      };
    };
    xhr.send();
  });
  return promise;
}

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

export function filterDecimalPart(value) {
  if (is_a_number(value)) {
    let floatValue = Number.parseFloat(value).toFixed(3);
    let validValue = filterInsignificentZeros(floatValue);
    let numPart = String(validValue).split('.');
    if (numPart.length > 1) {
      let [whole, decimal] = numPart;
      return Number(decimal);
    } else {
      return 0;
    }
  } else {
    return value;
  }
}

export function processFilters(filters, articleData) {
  var article = cloneDeep(articleData);

  filters.forEach((filter, idx) => {
    var artVal = '';
    if (filter.dataSource == Constants.DATA_SOURCE_ARTICLE_FIELD) {
      try {
        let vl = getArticleFieldValue(
          articleData,
          filter.dataSource,
          filter.articleField
        );
        if (vl) {
          artVal = vl;
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (filter.dataSource == Constants.DATA_SOURCE_PIM) {
      try {
        let vl = getArticleFieldValue(
          articleData,
          filter.dataSource,
          filter.articleField
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
          artVal = '"' + filterPriceFormatter(artVal) + '"';
        }
        break;
      case Constants.FILTER_DATE_FORMAT:
        if (isDate(artVal) || moment(artVal).isValid()) {
          let formatedDate = '"' + getDate_DD_Month(artVal) + '"';
          artVal = formatedDate;
        }
        break;
      case Constants.FILTER_INTEGER_PART:
        artVal = filterIntegerPart(artVal);
        break;
      case Constants.FILTER_DECIMAL_PART:
        artVal = filterDecimalPart(artVal);
        break;
    }
    let filterPathFinal = getLocaliazedPath(
      articleData,
      filter.dataSource,
      filter.articleField
    );

    try {
      eval('article.' + `${filterPathFinal}` + ' = ' + `${artVal}`);
    } catch (e) {
      console.log(e);
    }
  });

  return article;
}

export function getArticleFieldValue(articleJson, dataSource, articleField) {
  if (dataSource === Constants.DATA_SOURCE_ARTICLE_FIELD) {
    let path = getLocaliazedPath(articleJson, dataSource, articleField);
    try {
      return eval('articleJson.' + `${path}`);
    } catch (error) {
      return null;
    }
  } else if (dataSource === Constants.DATA_SOURCE_PIM) {
    if (
      articleJson.externalData != null &&
      articleJson.externalData['PIM'] != null &&
      articleJson.externalData['PIM'].data != null &&
      articleJson.externalData['PIM'].data['en-US'] != null
    ) {
      let path = getLocaliazedPath(articleJson, dataSource, articleField);
      try {
        return eval('articleJson.' + `${path}`);
      } catch (error) {
        return null;
      }
    }
  }
  return '';
}

export function getLocaliazedPath(articleJson, dataSource, articleField) {
  let path = null;
  if (dataSource === Constants.DATA_SOURCE_ARTICLE_FIELD) {
    if (articleField['parent']) {
      let parent = camelize(articleField['parent']);
      if (parent === Constants.DATA_SOURCE_FIELDS_INSTORE) {
        let defaultLocale = getInstoreFieldPrimaryLocale(articleJson);
        let currentLocale = defaultLocale;
        if (articleField.locale) currentLocale = articleField.locale;
        try {
          path = getDataFieldPath(articleField, dataSource, currentLocale);
          if (eval('articleJson.' + `${path}`)) {
            return path;
          }
        } catch (error) {
          path = getDataFieldPath(articleField, dataSource, defaultLocale);
        }
      } else if (parent === Constants.DATA_SOURCE_FIELDS_IMPORTS) {
        path = getDataFieldPath(articleField, dataSource, null);
      }
    } else {
      path = articleField['articleField'];
    }
  } else if (dataSource === Constants.DATA_SOURCE_PIM) {
    path = getDataFieldPath(articleField, dataSource, null);
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
  var pimExternalData = "externalData['PIM'].data['en-US']";
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
    path = getPimDataPath(null, name, locale);
  } else {
    return articleField;
  }
}

export function getInstoreFieldPrimaryLocale(articleJson) {
  let finalKey = 'it-it';
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

export function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
