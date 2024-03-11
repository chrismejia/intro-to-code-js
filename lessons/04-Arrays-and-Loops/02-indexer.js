/**
 * #2: indexer
 *
 * Define the function indexer. Make sure to export it.
 * indexer can accept two inputs
 * - arr, an array made up of an unknown number of elements of any type
 * - idx, an optional number that represents an array idx
 *    - When idx is a valid array index for arr, indexer returns the value stored
 *    - when idx is an invalid array index for arr, return "Invalid index."
 *    - when idx is undefined, indexer returns the first value in the array.
 *
 * @category 04 - Arrays and Loops
 * @function indexer
 * @param {any[]} arr - array of length >= 1, containing entries of any type
 * @param {Number?} idx
 * @returns {any}
 *
 * @example
 * indexer([1], 0) => 1
 * indexer([1, 3, "value", 7, 9 ], 2) => "value"
 *
 * indexer([1]) => 1
 * indexer([1, 3, "value", 7, 9 ]) => 1
 *
 * indexer([1], -10) => "Invalid index."
 * indexer([1, 3, "value", 7, 9 ], 53) => "Invalid index."
 */
