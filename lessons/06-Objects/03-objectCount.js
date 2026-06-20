import { isAnObject } from "./01-isAnObject";

/**
 * #3: objectCount
 *
 * Define the function objectCount.
 * objectCount accepts a single object with any number of key-value pairs.
 * objectCount counts the number of object sub-values the object contains.
 *
 * HINT: What can you use to help you determine whether or not a value is an object?
 *
 * @category 06 - Objects
 * @function objectCount
 * @param {Object} obj
 * @returns {Number}
 * @example
 * objectCount({}) // => 0
 * objectCount({ one: 1, two: 2, }) // => 0
 * objectCount({ one: true, two: {}, three: "word", four: 4 }) // => 1
 */

export function objectCount(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (Array.isArray(value)) {
      for (const element of value) {
        if (isAnObject(element)) {
          count++;
        }
      }
    } else if (isAnObject(value)) {
      count++;
    }
  }
  return count;
}
