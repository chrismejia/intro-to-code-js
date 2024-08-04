/**
 * #6: onePairObjects
 *
 * Define the function onePairObjects.
 * onePairObjects accepts an inputObj containing any number of key-value pairs.
 * onePairObjects splits an object into an array of single key-value pair objects.
 *
 * CHALLENGE: onePairObjects can be written as a one-liner.
 *
 * @category 06 - Objects
 * @function onePairObjects
 * @param {Object} inputObj
 * @returns {[] | Object[]} an array where each entry of the array is a single key-value paired obj, based off the original inputObj
 *
 * @example
 * onePairObjects({})
 * // => []
 * onePairObjects({ one: 1 })
 * // => [ { one: 1 } ]
 * onePairObjects({ one: 1, two: true, three: "no" })
 * // => [ { one: 1 }, { two: true }, { three: "no" } ]
 */

// export function onePairObjects(inputObj) {
//   const arrayOfObj = [];

// Method 1: for-in loop using keys
// for (const key in inputObj) {
//   const singleObj = {};
//   singleObj[key] = inputObj[key];
//   arrayOfObj.push(singleObj);
// }

// Method 2: for-of loop using Object.keys
// for (const key of Object.keys(inputObj)) {
//   const singleObj = {};
//   singleObj[key] = inputObj[key];
//   arrayOfObj.push(singleObj);
// }

// Method 3: for-of loop using Object.entries
// for (const [key, value] of Object.entries(inputObj)) {
//   const singleObj = {};
//   singleObj[key] = value;
//   arrayOfObj.push(singleObj);
// }

//   return arrayOfObj;
// }

// One-line
export const onePairObjects = (inputObj) =>
  Object.entries(inputObj).map(([key, value]) => ({ [key]: value }));
