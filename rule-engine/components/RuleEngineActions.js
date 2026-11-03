import * as constants from '../../utils/Constants.js';
import * as utils from '../../utils/utils.js';

function performActionsOnElement(
  isToHide,
  elem,
  ruleActions,
  article,
  isMultipleArticleCanvas,
  userData,
  deviceData,
  eslFieldData
) {
  if (isToHide) {
    elem.isHide = true;
  } else {
    ruleActions.forEach((action, idx) => {
      if (
        action.elementField === 'fill' ||
        action.elementField === 'colorsReplace' ||
        action.elementField === 'backgroundColor'
      ) {
        if (action.elementField === 'colorsReplace') {
          const keys = Object.keys(elem[action.elementField]);
          if (keys.length === 0) {
            elem[action.elementField]['rgb(0, 161, 255)'] = action.color;
          } else {
            keys.map((key) => {
              elem[action.elementField][key] = action.color;
            });
          }
        } else {
          elem[action.elementField] = action.color;
        }
        if (action.elementField === 'backgroundColor') {
          elem['backgroundEnabled'] = true;
        }
      } else if (
        action.elementField === constants.ELEMENT_DECIMAL_SUPER ||
        action.elementField === 'codeType'
      ) {
        elem.custom[action.elementField] = action.actionValue;
      } else {
        setArticleFieldValue(action, elem, article, isMultipleArticleCanvas, userData, deviceData, eslFieldData);
      }
    });
  }
}

function evaluateArticleValue(action, article, isMultipleArticleCanvas, userData, deviceData, eslFieldData) {
  try {
    var value = utils.getArticleFieldValue(
      article,
      action.actionField.dataSource,
      action.actionField.articleField,
      action.actionField.articleIndex,
      isMultipleArticleCanvas,
      userData,
      deviceData,
      eslFieldData
    );
    return value;
  } catch (err) {
    return '';
  }
}

function setArticleFieldValue(action, elem, article, isMultipleArticleCanvas, userData, deviceData, eslFieldData) {
  let prefix = action.prefixValue ??= "";
  let suffix = action.sufixValue ??= "";
  switch (action.actionType) {
    case constants.RULE_ACTION_PLAIN_TEXT:
      var val = action.actionValue;
      if (
        action.elementField === 'code' &&
        (elem.type === 'barcode_placeholder' ||
          elem.type === 'qrcode_placeholder')
      ) {
        elem['custom']['codeValue'] = `${val}`;
      } else if (
        action.elementField === 'codeType' &&
        elem.type === 'barcode_placeholder'
      ) {
        elem['custom']['codeType'] = `${val}`;
      } else {
        if (
          utils.is_a_number(elem[action.elementField]) ||
          utils.is_a_number(elem[action.actionValue])
        ) {
          if (utils.is_a_number(action.actionValue)) {
            val = parseFloat(action.actionValue);
          }
        }
        elem[action.elementField] =
          action.elementField === 'text' ? val.toString() : val;
      }
      break;
    case constants.RULE_ACTION_ARTICLE_VALUE:
      try {
        var artVal = evaluateArticleValue(
          action,
          article,
          isMultipleArticleCanvas,
          userData,
          deviceData,
          eslFieldData
        );
        if (artVal != undefined && artVal != null) {
          if (
            (elem.type === 'image' || elem.type === 'custom_image') &&
            action.elementField === 'src' &&
            artVal != ''
          ) {
            elem[action.elementField] = artVal;
            elem['custom']['dataSource'] = action['actionField']['dataSource'];
          } else if (
            action.elementField === 'code' &&
            (elem.type === 'barcode_placeholder' ||
              elem.type === 'qrcode_placeholder')
          ) {
            elem['custom']['codeValue'] = prefix + `${artVal}` + suffix;
          } else {
            elem[action.elementField] = prefix + artVal + suffix;
          }
        }
      } catch (error) {
        console.log(error);
      }
      break;
    case constants.RULE_ACTION_MULTI_ARTICLE_VALUE:
      try {
        let artVal = '';
        action.multiValueActions.forEach((mulAction, idx) => {
          let mulartVal = evaluateArticleValue(
            mulAction,
            article,
            isMultipleArticleCanvas,
            userData,
            deviceData,
            eslFieldData
          );
          artVal = artVal + mulartVal;
          if (idx !== action.multiValueActions.length - 1) {
            artVal = artVal + action.separator;
          }
        });
        if (artVal != undefined && artVal != null) {
          if (
            (elem.type === 'image' || elem.type === 'custom_image') &&
            action.elementField === 'src' &&
            artVal != ''
          ) {
            elem[action.elementField] = artVal;
            elem['custom']['dataSource'] = action['actionField']['dataSource'];
          } else if (
            action.elementField === 'code' &&
            (elem.type === 'barcode_placeholder' ||
              elem.type === 'qrcode_placeholder')
          ) {
            elem['custom']['codeValue'] = prefix + `${artVal}` + suffix;
          } else {
            elem[action.elementField] = prefix + artVal + suffix;
          }
        }
      } catch (error) {
        console.log(error);
      }
      break;
    case constants.RULE_ACTION_SUBSTRING:
      try {
        var artVal = evaluateArticleValue(
          action,
          article,
          isMultipleArticleCanvas,
          userData,
          deviceData,
          eslFieldData
        );
        if (artVal != undefined && artVal != null) {
          let str = artVal.toString().trim();
          let rangeArr = utils.substringRange(action.substringRange, str.length);
          let substr =
            rangeArr.length > 1
              ? str.substring(rangeArr[0], rangeArr[1])
              : str.substring(rangeArr[0]);
          let preSufStr = prefix + substr + suffix;
          if (
            action.elementField === 'code' &&
            (elem.type === 'barcode_placeholder' ||
              elem.type === 'qrcode_placeholder')
          ) {
            elem['custom']['codeValue'] = `${preSufStr}`;
          } else {
            elem[action.elementField] =
              action.elementField === 'text' ? preSufStr.toString() : preSufStr;
          }
        }
      } catch (err) {
        console.log(err);
      }

      break;
  }
}


export { performActionsOnElement, setArticleFieldValue, evaluateArticleValue };
