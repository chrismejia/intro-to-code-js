/**
 * Dynamically accesses and modifies properties of an object based on provided keys.
 * This function demonstrates how to use bracket notation for dynamic property access
 * and modification, allowing flexibility in handling object properties.
 *
 * @category 07 - Adv Objects
 * @function dynamicPropertyAccessor
 * @param {Object} obj - The object to modify.
 * @param {Array<Array<string, any>>} operations - An array of operations where each operation is an array of [key, value]. If value is null, the property is deleted.
 * @returns {Object} - The modified object.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const operations = [['a', 3], ['c', 4], ['b', null]];
 * const modifiedObj = dynamicPropertyAccessor(obj, operations);
 * // modifiedObj => { a: 3, c: 4 }
 */

function dynamicPropertyAccessor(obj, operations) {
  operations.forEach(([key, value]) => {
    if (value === null) {
      delete obj[key];
    } else {
      obj[key] = value;
    }
  });
  return obj;
}
