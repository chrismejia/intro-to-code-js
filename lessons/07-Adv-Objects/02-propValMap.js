/**
 * #2: propValMap
 *
 * propValMap accepts an array of objects, items.
 * propValMap creates a Map where each key is a unique property from the input objects,
 * and its corresponding value is an array of all the values associated with that property.
 *
 * @category 07 - Adv Objects
 * @function propValMap
 * @param {Array<Object>} items - An array of objects to process.
 * @returns {Map} A Map with keys representing unique properties and values being arrays of corresponding values.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map Map on MDN}
 *
 * @example
 * const items = [
 *   { color: 'red', size: 'M' },
 *   { color: 'blue', price: 10 },
 *   { size: 'L', price: 15 }
 * ];
 *
 * propValMap(items);
 * // Returns:
 * // Map {
 * //   'color' => ['red', 'blue'],
 * //   'size' => ['M', 'L'],
 * //   'price' => [10, 15]
 * // }
 */
export function propValMap(items) {
  const map = new Map();

  items.forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(value);
    });
  });

  return map;
}

// export const propValMap = (items) =>
//   items.reduce(
//     (map, item) => (
//       Object.entries(item).forEach(([key, value]) =>
//         map.set(key, [...(map.get(key) || []), value])
//       ),
//       map
//     ),
//     new Map()
//   );

/**
This one-liner does the following:
 * 1. Uses `reduce` to iterate over each object in the `items` array.
 * 2. For each object, it iterates over its entries (key-value pairs) using `Object.entries`.
 * 3. Updates the `Map` by either adding the value to an existing array for the key or creating a new array if the key does not yet exist.
 * 4. Returns the final `Map`.
*/
