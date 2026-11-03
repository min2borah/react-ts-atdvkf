import * as constants from '../../utils/Constants.js';
import * as utils from '../../utils/utils.js';

function convertPathToCamelcase(
  actionField,
  article,
  pageIndex,
  isMultipleArticleCanvas
) {
  var localizedPath = utils.getLocaliazedPath(
    article,
    actionField.dataSource,
    actionField.articleField,
    pageIndex,
    actionField.articleIndex,
    isMultipleArticleCanvas
  );
  console.log("localizedPath...", localizedPath);
  if (localizedPath) {
    actionField.path = '$.' + localizedPath;
  }
  if (actionField.articleFieldComparisonValue) {
    actionField.value = actionField.articleFieldComparisonValue;
    //to support multiple article field comparison , rules specifically created for mongodb backend
    if (actionField.articleFieldComparisonValue.dataSource !== constants.DATA_SOURCE_USER_DATA
      && actionField.articleFieldComparisonValue.dataSource !== constants.DATA_SOURCE_DEVICE_DATA
      && actionField.articleFieldComparisonValue.dataSource !== constants.DATA_SOURCE_ESL_FIELD_DATA) {
      var valueLocalizedPath = utils.getLocaliazedPath(
        article,
        actionField.articleFieldComparisonValue.dataSource,
        actionField.articleFieldComparisonValue.articleField,
        pageIndex,
        actionField.articleIndex,
        isMultipleArticleCanvas
      );
      if (valueLocalizedPath) {
        actionField.value.path = '$.' + valueLocalizedPath;
      }
    }
  }
}

export { convertPathToCamelcase };
