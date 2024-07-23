/**
 * #1: isAnObject
 *
 * Define the function isAnObject.
 * isAnObject accepts a single input of any type.
 * isAnObject returns true or false depending on whether or not the input is an object.
 *
 * @category 06 - Objects
 * @function isAnObject
 * @param {unknown} input - any type
 * @returns {Boolean}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures JavaScript data types and data structures}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof typeof}
 *
 * @example
 * isAnObject("string") // false
 * isAnObject(42) // false
 * isAnObject(true) // false
 * isAnObject( [1, 2, 3] ) // false
 * isAnObject( { fruit: "banana" } ) // true
 */

export function isAnObject(input) {
  return typeof input === "object" && !Array.isArray(input) && input !== null;
}
