/**
 * #9: findObjectDifferences
 *
 * The `findObjectDifferences` function accepts two objects, `obj1` and `obj2`.
 *
 * `findObjectDifferences` compares the two objects and returns an object that contains the differences.
 * - If a property exists in `obj1` but not in `obj2`, it will be included in the result with its value from `obj1`.
 * - If a property exists in both objects but with different values, it will be included with its values from both `obj1` and `obj2`.
 * - If a property exists in `obj2` but not in `obj1`, it will be included with its value from `obj2`.
 *
 * `findObjectDifferences` helps in identifying discrepancies between two objects by highlighting properties that differ between them.
 *
 * @category 07 - Adv Objects
 * @function findObjectDifferences
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @returns {Object} An object representing the differences between `obj1` and `obj2`.
 *
 * @example
 * const objA = { name: 'Alice', age: 30 };
 * const objB = { name: 'Alice', age: 31, city: 'Wonderland' };
 * findObjectDifferences(objA, objB);
 * // Returns: { age: [30, 31], city: [undefined, 'Wonderland'] }
 *
 * const objX = { color: 'red', size: 'M' };
 * const objY = { color: 'blue', size: 'M', material: 'cotton' };
 * findObjectDifferences(objX, objY);
 * // Returns: { color: ['red', 'blue'], material: [undefined, 'cotton'] }
 */
export function findObjectDifferences(obj1, obj2) {
  const result = {};

  const allKeys = [...Object.keys(obj1), ...Object.keys(obj2)];

  //
  const allUniqueKeys = new Set(allKeys);

  allUniqueKeys.forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      result[key] = [obj1[key], obj2[key]];
    }
  });

  return result;
}

// export const findObjectDifferences = (obj1, obj2) =>
//   Object.keys({ ...obj1, ...obj2 }).reduce(
//     (diffs, key) =>
//       obj1[key] !== obj2[key] && ((diffs[key] = [obj1[key], obj2[key]]), diffs),
//     {}
//   );

/**
 * Explanation
 * This one-liner does the following:
 * - Merges the keys from both obj1 and obj2 into a single array.
 * - Uses reduce to accumulate the differences between the two objects.
 * - If a difference is found (i.e., obj1[key] !== obj2[key]), it adds the key to the diffs object with its values from both objects.
 * - Returns the diffs object containing the differences.
 */
