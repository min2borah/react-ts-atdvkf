/** Convert JSON rule values to the runtime type of a fact. */
export function convertJsonValueToFactValueType(jsonValue, factValue) {
  let value = jsonValue;
  switch (typeof factValue) {
    case 'string': value = String(jsonValue); break;
    case 'number':
      if (jsonValue === 'true') value = 1;
      else if (jsonValue === 'false') value = 0;
      else value = Number(jsonValue);
      break;
    case 'boolean':
      if (jsonValue === 'true' || jsonValue === '1') value = true;
      else if (jsonValue === 'false' || jsonValue === '0') value = false;
      break;
  }
  return value;
}

export function convertJsonValueToFactValueTypeArray(jsonValue, factValue) {
  if (typeof jsonValue !== 'string') return jsonValue;
  const values = jsonValue.split(',').map(v => v.trim());
  switch (typeof factValue) {
    case 'string': return values.map(String);
    case 'number': return values.map(Number);
    case 'boolean': return values.map(v => v === 'true' || v === '1' ? true : v === 'false' || v === '0' ? false : v);
    default: return [];
  }
}
