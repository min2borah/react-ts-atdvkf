import * as constants from '../../utils/Constants.js';
import * as utils from '../../utils/utils.js';
import moment from 'moment-timezone';

export function registerOperators(engine, {
  timezone,
  deviceTags,
  companyTags,
  customTags
}) {
  engine.addOperator(
    constants.RuleEngineDefaultOperators.EQUAL,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueType(jsonValue, factValue);
      return factValue === value;
    }
  );

  engine.addOperator(
    constants.RuleEngineDefaultOperators.NOT_EQUAL,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueType(jsonValue, factValue);
      return factValue !== value;
    }
  );

  engine.addOperator(
    constants.RuleEngineDefaultOperators.GREATER_THAN,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueType(jsonValue, factValue);
      return factValue > value;
    }
  );

  engine.addOperator(
    constants.RuleEngineDefaultOperators.GREATER_THAN_EQUAL,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueType(jsonValue, factValue);
      return factValue >= value;
    }
  );

  engine.addOperator(
    constants.RuleEngineDefaultOperators.LESS_THAN,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueType(jsonValue, factValue);
      return factValue < value;
    }
  );

  engine.addOperator(
    constants.RuleEngineDefaultOperators.LESS_THAN_EQUAL,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueType(jsonValue, factValue);
      return factValue <= value;
    }
  );

  //ARRAY_IN -- fact must be included in value (an array)
  engine.addOperator(
    constants.RuleEngineDefaultOperators.ARRAY_IN,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueTypeArray(jsonValue, factValue);
      return Array.isArray(value) && value.indexOf(factValue) > -1;
    }
  );

  //ARRAY_NOT_IN -- fact must be included in value (an array)
  engine.addOperator(
    constants.RuleEngineDefaultOperators.ARRAY_NOT_IN,
    (factValue, jsonValue) => {
      var value = convertJsonValueToFactValueTypeArray(jsonValue, factValue);
      return Array.isArray(value) && value.indexOf(factValue) === -1;
    }
  );

  //ARRAY_CONTAINS -- fact (an array) must include value
  engine.addOperator(
    constants.RuleEngineDefaultOperators.ARRAY_CONTAINS,
    (factValue, jsonValue) => {
      if (!Array.isArray(factValue)) return false;
      var value = convertJsonValueToFactValueType(jsonValue, factValue[0]); //convert value type to the type of items in array
      return factValue.indexOf(value) > -1;
    }
  );

  //ARRAY_DOES_NOT_CONTAIN -- fact (an array) must not include value
  engine.addOperator(
    constants.RuleEngineDefaultOperators.ARRAY_DOES_NOT_CONTAIN,
    (factValue, jsonValue) => {
      if (!Array.isArray(factValue)) return false;
      var value = convertJsonValueToFactValueType(jsonValue, factValue[0]); //convert value type to the type of items in array
      return factValue.indexOf(value) === -1;
    }
  );

  //ARRAY_CONTAINS_SUB_ARRAY -- fact (an array) must include value (an array)
  engine.addOperator(constants.OPR_ARRAY_CONTAINS_SUB_ARRAY, (factValue, jsonValue) => {
      if (!Array.isArray(factValue)) return false;
      var value = convertJsonValueToFactValueTypeArray(jsonValue, factValue[0]); //convert value type to the type of items in array
      return utils.arrayContainsSubarray(factValue, value);
    }
  );

  //ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY -- fact (an array) must not include value (an array)
  engine.addOperator(constants.OPR_ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY, (factValue, jsonValue) => {
      if (!Array.isArray(factValue)) return false;
      var value = convertJsonValueToFactValueTypeArray(jsonValue, factValue[0]); //convert value type to the type of items in array
      return !utils.arrayContainsSubarray(factValue, value);
    }
  );

  //ARRAY_CONTAINS_SUB_ARRAY -- fact (an array) must include any element value (an array)
  engine.addOperator(constants.OPR_ARRAY_CONTAINS_ANY_OF_SUB_ARRAY, (factValue, jsonValue) => {
      if (!Array.isArray(factValue)) return false;
      var value = convertJsonValueToFactValueTypeArray(jsonValue, factValue[0]); //convert value type to the type of items in array
      return utils.arrayContainsAnyElementOfSubarray(factValue, value);
    }
  );

  //ARRAY_DOES_NOT_CONTAINS_SUB_ARRAY -- fact (an array) must not include any element value (an array)
  engine.addOperator(constants.OPR_ARRAY_DOES_NOT_CONTAINS_ANY_OF_SUB_ARRAY, (factValue, jsonValue) => {
      if (!Array.isArray(factValue)) return false;
      var value = convertJsonValueToFactValueTypeArray(jsonValue, factValue[0]); //convert value type to the type of items in array
      return !utils.arrayContainsAnyElementOfSubarray(factValue, value);
    }
  );

  engine.addOperator(
    constants.OPR_LENGTH_SMALLER_EQUAL,
    (factValue, jsonValue) => {
      let value = !utils.is_a_number(jsonValue) ? jsonValue?.toString().length : parseInt(jsonValue);
      if (utils.isEmpty(factValue)) {
        return 0 <= value;
      } else {
        return factValue?.toString().length <= value;
      }
    }
  );

  engine.addOperator(
    constants.OPR_LENGTH_GREATER_EQUAL, (factValue, jsonValue) => {
      let value = !utils.is_a_number(jsonValue) ? jsonValue?.toString().length : parseInt(jsonValue);
      if (utils.isEmpty(factValue)) {
        return 0 >= value;
      } else {
        return factValue?.toString().length >= value;
      }
    });

  engine.addOperator(constants.OPR_LENGTH_EQUAL, (factValue, jsonValue) => {
      let value = !utils.is_a_number(jsonValue) ? jsonValue?.toString().length : parseInt(jsonValue);
      if (utils.isEmpty(factValue)) {
        return 0 === value;
      } else {
        return factValue?.toString().length === value;
      }
    });

  engine.addOperator(constants.OPR_LENGTH_NOT_EQUAL, (factValue, jsonValue) => {
      let value = !utils.is_a_number(jsonValue) ? jsonValue?.toString().length : parseInt(jsonValue);
      if (utils.isEmpty(factValue)) {
        return 0 !== value;
      } else {
        return factValue?.toString().length !== value;
      }
    });

  engine.addOperator(constants.OPR_IS_EMPTY, (factValue, jsonValue) => {
    return utils.isEmpty(factValue);
  });

  engine.addOperator(constants.OPR_IS_NOT_EMPTY, (factValue, jsonValue) => {
    return !utils.isEmpty(factValue);
  });

  engine.addOperator(constants.OPR_IS_RANGE_OVERLAP, (factValue, jsonValue) => {
    return utils.ifRangeOverlap(factValue, jsonValue);
  })

  engine.addOperator(constants.OPR_IS_IN_BETWEEN, (factValue, jsonValue) => {
    return utils.isInBetween(factValue, jsonValue);
  });

  engine.addOperator(constants.OPR_NOT_IN_BETWEEN, (factValue, jsonValue) => {
    return utils.notInBetween(factValue, jsonValue);
  });

  engine.addOperator(
    constants.OPR_CONTAIN_SUBSTRING,
    (factValue, jsonValue) => {
      return utils.containSubstring(factValue, jsonValue);
    }
  );

  engine.addOperator(constants.OPR_EQUAL_DATE, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isSame(d2, 'day');
  });

  engine.addOperator(constants.OPR_NOT_EQUAL_DATE, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return !d1.isSame(d2, 'day');
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_DATE,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isSameOrAfter(d2, 'day');
  });

  engine.addOperator(constants.OPR_GREATER_THAN_DATE,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isAfter(d2, 'day');
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_DATE, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isSameOrBefore(d2, 'day');
  });

  engine.addOperator(constants.OPR_LESS_THAN_DATE, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isBefore(d2, 'day');
  });

  engine.addOperator(constants.OPR_IN_BETWEEN_DATE, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    if(!split[0] || !split[1]) return false;
    let sDate = utils.convertUTCToLocalDate(split[0]);
    let eDate = utils.convertUTCToLocalDate(split[1]);
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    return d1.isBetween(sDate, eDate, 'day', '[]');
  });

  engine.addOperator(constants.OPR_NOT_IN_BETWEEN_DATE,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    if(!split[0] || !split[1]) return false;
    let sDate = utils.convertUTCToLocalDate(split[0]);
    let eDate = utils.convertUTCToLocalDate(split[1]);
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    return !d1.isBetween(sDate, eDate, 'day', '[]');
  });

  engine.addOperator(constants.OPR_EQUAL_CURRENT_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isSame(d2, 'day');
  });

  engine.addOperator(constants.OPR_NOT_EQUAL_CURRENT_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return !d1.isSame(d2, 'day');
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_CURRENT_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isSameOrAfter(d2, 'day');
  });

  engine.addOperator(constants.OPR_GREATER_THAN_CURRENT_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isAfter(d2, 'day');
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_CURRENT_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isSameOrBefore(d2, 'day');
  });

  engine.addOperator(constants.OPR_LESS_THAN_CURRENT_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    return d1.isBefore(d2, 'day');
  });

  engine.addOperator(constants.OPR_EQUAL_DAYS,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    let daysDiff =  d1.diff(d2, 'day');
    return daysDiff == parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_NOT_EQUAL_DAYS,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    let daysDiff =  d1.diff(d2, 'day');
    return daysDiff != parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_DAYS,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    let daysDiff =  d1.diff(d2, 'day');
    return daysDiff >= parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_GREATER_THAN_DAYS,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    let daysDiff =  d1.diff(d2, 'day');
    return daysDiff > parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_DAYS,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    let daysDiff = d1.diff(d2, 'day');
    return daysDiff <= parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_LESS_THAN_DAYS,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d2Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    let d2 = moment(d2Str, constants.DATE_FORMAT);
    let daysDiff = d1.diff(d2, 'day');
    return daysDiff < parseInt(jsonValue);
  });

  engine.addOperator(constants.OPR_CURRENT_DATE_IN_BETWEEN_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    if(!split[0] || !split[1]) return false;
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    let sDate = utils.convertUTCToLocalDate(split[0]);
    let eDate = utils.convertUTCToLocalDate(split[1]);
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    return d1.isBetween(sDate, eDate, 'day', '[]');
  });

  engine.addOperator(constants.OPR_CURRENT_DATE_NOT_IN_BETWEEN_DATE,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    if(!split[0] || !split[1]) return false;
    var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
    let sDate = utils.convertUTCToLocalDate(split[0]);
    let eDate = utils.convertUTCToLocalDate(split[1]);
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.DATE_FORMAT);
    let d1 = moment(d1Str, constants.DATE_FORMAT);
    return !d1.isBetween(sDate, eDate, 'day', '[]');
  });

  engine.addOperator(constants.OPR_EQUAL_TIME, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d1 = moment(d1Str, constants.TIME_FORMAT);
    let d2 = moment(d2Str, constants.TIME_FORMAT);
    return d1.isSame(d2);
  });

  engine.addOperator(constants.OPR_EQUAL_CURRENT_TIME,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.TIME_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d1 = moment(d1Str, constants.TIME_FORMAT);
    let d2 = moment(d2Str, constants.TIME_FORMAT);
    return d1.isSame(d2);
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_TIME, (factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d1 = moment(d1Str, constants.TIME_FORMAT);
    let d2 = moment(d2Str, constants.TIME_FORMAT);
    return d1.isBefore(d2);
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_TIME,(factValue, jsonValue) => {
    if(!factValue || !jsonValue) return false;
    let d1Str = moment(factValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d1 = moment(d1Str, constants.TIME_FORMAT);
    let d2 = moment(d2Str, constants.TIME_FORMAT);
    return d1.isAfter(d2);
  });

  engine.addOperator(constants.OPR_LESS_EQUAL_CURRENT_TIME,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.TIME_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d1 = moment(d1Str, constants.TIME_FORMAT);
    let d2 = moment(d2Str, constants.TIME_FORMAT);
    return d1.isBefore(d2);
  });

  engine.addOperator(constants.OPR_GREATER_EQUAL_CURRENT_TIME,(factValue, jsonValue) => {
    if(!jsonValue) return false;
    const today = moment().tz(timezone).format();
    let d1Str = moment.tz(today, timezone).format(constants.TIME_FORMAT);
    let d2Str = moment(jsonValue, constants.SUPPORTED_DATE_FORMATS).utc().format(constants.TIME_FORMAT);
    let d1 = moment(d1Str, constants.TIME_FORMAT);
    let d2 = moment(d2Str, constants.TIME_FORMAT);
    return d1.isAfter(d2);
  });

  engine.addOperator(constants.OPR_TAG_CONTAIN, (factValue, jsonValue) => {
    return deviceTags && deviceTags.indexOf(jsonValue) !== -1;
  });

  engine.addOperator(constants.OPR_TAG_NOT_CONTAIN, (factValue, jsonValue) => {
    return (deviceTags == undefined || deviceTags == null || deviceTags?.indexOf(jsonValue) === -1);
  });

  engine.addOperator(constants.OPR_COMPANY_TAG_CONTAIN, (factValue, jsonValue) => {
    return companyTags && companyTags.indexOf(jsonValue) !== -1;
  });

  engine.addOperator(constants.OPR_COMPANY_TAG_NOT_CONTAIN, (factValue, jsonValue) => {
    return (companyTags == undefined || companyTags == null || companyTags?.indexOf(jsonValue) === -1);
  });

  engine.addOperator(constants.OPR_CUSTOM_TAG_CONTAIN,(factValue, jsonValue) => {
      return customTags && customTags.indexOf(jsonValue) !== -1;
  });

  engine.addOperator(constants.OPR_CUSTOM_TAG_NOT_CONTAIN,(factValue, jsonValue) => {
      return (customTags == undefined || customTags == null || customTags?.indexOf(jsonValue) === -1);
  });

  engine.addOperator(constants.OPR_EQUAL_WEEKDAY,
    (factValue, jsonValue) => {
      if (!jsonValue) return false;
      const today = moment().tz(timezone);
      const dayValue = today.day(); //0-6 (Sun-Sat)
      return dayValue === parseInt(jsonValue);
    });

  engine.addOperator(constants.OPR_NOT_EQUAL_WEEKDAY,
    (factValue, jsonValue) => {
      if (!jsonValue) return false;
      const today = moment().tz(timezone);
      const dayValue = today.day(); //0-6 (Sun-Sat)
      return dayValue !== parseInt(jsonValue);
    });

  engine.addOperator(constants.OPR_IN_BETWEEN_WEEKDAY,
    (factValue, jsonValue) => {
      if (!jsonValue) return false;
      var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
      if (!split[0] || !split[1]) return false;
      let startDay = parseInt(split[0]);
      let endDay = parseInt(split[1]);
      const today = moment().tz(timezone);
      const dayValue = today.day(); //0-6 (Sun-Sat)
      return dayValue >= startDay && dayValue <= endDay;
    });

  engine.addOperator(constants.OPR_NOT_IN_BETWEEN_WEEKDAY,
    (factValue, jsonValue) => {
      if (!jsonValue) return false;
      var split = jsonValue.split(constants.MULTI_DATE_SEPARATOR);
      if (!split[0] || !split[1]) return false;
      let startDay = parseInt(split[0]);
      let endDay = parseInt(split[1]);
      const today = moment().tz(timezone);
      const dayValue = today.day(); //0-6 (Sun-Sat)
      return !(dayValue >= startDay && dayValue <= endDay);
    });

  engine.addOperator(
    constants.OPR_IN_WEEKDAYS,
    (factValue, jsonValue) => {
      const today = moment().tz(timezone);
      const dayValue = today.day(); //0-6 (Sun-Sat)
      var value = convertJsonValueToFactValueTypeArray(jsonValue, dayValue);
      return Array.isArray(value) && value.indexOf(dayValue) > -1;
    }
  );

  engine.addOperator(
    constants.OPR_NOT_IN_WEEKDAYS,
    (factValue, jsonValue) => {
      const today = moment().tz(timezone);
      const dayValue = today.day(); //0-6 (Sun-Sat)
      var value = convertJsonValueToFactValueTypeArray(jsonValue, dayValue);
      return !(Array.isArray(value) && value.indexOf(dayValue) > -1);
    }
  );

}

export function convertJsonValueToFactValueType(jsonValue, factValue) {
  var value = jsonValue;
  const objType = typeof factValue;
  switch (objType) {
    case 'string':
      value = String(jsonValue);
      break;

    case 'number':
      if (jsonValue === 'true') value = 1;
      else if (jsonValue === 'false') value = 0;
      else value = Number(jsonValue);
      break;

    case 'boolean':
      if (jsonValue === 'true') value = true;
      if (jsonValue === 'false') value = false;
      if (jsonValue === '1') value = true;
      if (jsonValue === '0') value = false;
      break;
    default:
      break;
  }
  return value;
}

export function convertJsonValueToFactValueTypeArray(jsonValue, factValue) {
  if (typeof jsonValue !== 'string') return jsonValue;
  var value = [];
  const splArr = jsonValue.split(',');
  const objType = typeof factValue;
  switch (objType) {
    case 'string':
      splArr.forEach((element) => {
        value.push(String(element).trim());
      });
      break;

    case 'number':
      splArr.forEach((element) => {
        value.push(Number(element));
      });
      break;

    case 'boolean':
      splArr.forEach((element) => {
        if (element === 'true') value.push(true);
        else if (element === 'false') value.push(false);
        else if (element === '1') value.push(true);
        else if (element === '0') value.push(false);
        else value.push(element);
      });
      break;
    default:
      break;
  }
  return value;
}

// The canonical registrar preserves the historical operator implementations and semantics.
export const registerComparisonOperators = registerOperators;
export const registerArrayOperators = registerOperators;
export const registerDateOperators = registerOperators;
export const registerTimeOperators = registerOperators;
export const registerTagOperators = registerOperators;
