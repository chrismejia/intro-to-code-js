/**
 * #1: objectFlattener
 *
 * Define the function objectFlattener.
 * objectFlattener accepts a single input, inputObj.
 *
 * When objectFlattener comes across a top-level value that is an object, objectFlattener copies that top-level value's sub key-value pairs to the top-level of inputObj.
 * objectFlattener then deletes the top-level key-value pair. See examples.
 *
 * The inputObj is guaranteed to be an object that always has at least one key-value pair.
 * All inputObj values are guaranteed to never be null or undefined.
 *
 * HINT: What can you use to test the data type of a value of inputObj?
 *
 * @category 06 - Objects
 * @function objectFlattener
 * @param {Object} inputObj
 * @returns {Object}
 *
 * @example
 * const noObjVal = { one: 1, two: "string" }
 * objectFlattener(noObjVal) // => { one: 1, two: "string" }
 *
 * const oneObjVal = { one: 1, two: { three: false } }
 * objectFlattener(oneObjVal) // => { one: 1, three: false }
 */

function isAnObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}

function objectFlattener(inputObj) {
  for (const key in inputObj) {
    const currValue = inputObj[key];
    if (isAnObject(currValue)) {
      for (const subKey in currValue) {
        const subValue = currValue[subKey];
        inputObj[subKey] = subValue;
      }
      delete inputObj[key];
    }
  }
  return inputObj;
}

export default objectFlattener;
