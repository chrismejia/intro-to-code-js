/**
 * Applies a series of modifications to an object's properties based on the provided operations.
 * Each operation specifies a property to update or delete, and the function processes these
 * operations to alter the object accordingly. This function demonstrates dynamic property access
 * and modification techniques.
 *
 * @category 06 - Objects
 * @function modifyProperties
 * @param {Object} obj - The object to modify.
 * @param {Array<Array<string, any>>} operations - An array of operations where each
 *   operation is an array of [key, value]. If value is null, the property is deleted.
 * @returns {Object} - The modified object with the applied operations.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const operations = [['a', 3], ['c', 4], ['b', null]];
 * const modifiedObj = modifyProperties(obj, operations);
 * // modifiedObj => { a: 3, c: 4 }
 */
function modifyProperties(obj, operations) {
  operations.forEach(([key, value]) => {
    if (value === null) {
      delete obj[key];
    } else {
      obj[key] = value;
    }
  });
  return obj;
}
