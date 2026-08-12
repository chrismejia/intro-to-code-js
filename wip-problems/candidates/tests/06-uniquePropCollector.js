/**
 * uniquePropCollector collects the unique values of each property from an array of objects.
 *
 * uniquePropCollector returns an object where each key corresponds to a property name from the input objects, and each value is a Set containing all unique values for that property.
 *
 * @see {@link Set https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set}
 *
 * @category 07 - Adv Objects
 * @function uniquePropCollector
 * @param {Array<Object>} objects - The input array of objects.
 * @returns {Object<string, Set<unknown>>} - An object with properties as keys and Sets of unique values as values.
 *
 * @example
 * const oneObjMultKeyVals[{ a: 1, b: 2, c: 3 }];
 * uniquePropCollector(oneObjMultKeyVals)
 * // {
 * //   a: new Set([1]),
 * //   b: new Set([2]),
 * //   c: new Set([3]),
 * // }
 *
 * const multiObjMultiKeyVals = [
 *   { a: 1, b: 2, c: 'hello' },
 *   { a: 3, b: 2, d: true },
 *   { a: 1, c: 'world' }
 * ];
 * uniquePropCollector(multiObjMultiKeyVals);
 * // {
 * //   a: Set { 1, 3 },
 * //   b: Set { 2 },
 * //   c: Set { 'hello', 'world' },
 * //   d: Set { true }
 * // }
 */
export function uniquePropCollector(objects) {
  const result = {};

  for (const obj of objects) {
    for (const key in obj) {
      if (!result[key]) {
        result[key] = new Set();
      }
      result[key].add(obj[key]);
    }
  }

  return result;
}

// One-liner
// export const uniquePropCollector = (objects) =>
//   objects.reduce(
//     (acc, obj) => (
//       Object.entries(obj).forEach(([key, value]) =>
//         (acc[key] = acc[key] || new Set()).add(value)
//       ),
//       acc
//     ),
//     {}
//   );

// Breakdown of the One-Liner

//   objects.reduce(...): We use reduce to iterate over the array of objects. The accumulator acc is initialized as an empty object {}.
//   Object.entries(obj): For each object in the array, we get its entries (key-value pairs).
//   .forEach(([key, value]) => ...): We iterate over each entry, where each entry is a key-value pair. The arrow function updates the accumulator.
//   acc[key] = acc[key] || new Set(): This line checks if the current key exists in the accumulator object. If not, it initializes it with a new Set. This ensures that each key in the accumulator holds a Set of unique values.
//   .add(value): The value of the current key is added to the Set.
//   , acc: The modified accumulator is returned after processing each object.
