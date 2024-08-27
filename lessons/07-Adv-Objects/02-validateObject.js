/**
 * 2. validateObject
 *
 * validateObject accepts two objects as inputs, inputObj, and schema.
 *
 * validateObject checks that an object matches a given schema, where the schema is defined as another object.
 *
 * The schema object contains keys that the input object must have, and each key's value in the schema specifies the expected type of the value in the input object.
 *
 * validateObject returns true if the input object conforms to the schema and false otherwise.
 *
 * Empty schema objects signify that there are no required keys and value types.
 *
 * @category 07 - Adv Objects
 * @function validateObject
 * @param {Object} inputObj - The object to validate.
 * @param {Object} schema - The schema defining the required structure and types.
 * @returns {boolean} True if the object is valid, false otherwise.
 *
 * @example
 * const obj = { name: 'Alice', age: 30 };
 * const schema = { name: 'string', age: 'number' };
 * validateObject(obj, schema); // => true
 *
 * const invalidObj = { name: 'Alice', age: '30' };
 * validateObject(invalidObj, schema); // => false
 */
export function validateObject(inputObj, schema) {
  return Object.keys(schema).every(
    (key) => key in inputObj && typeof inputObj[key] === schema[key]
  );
}
