/**
 * #3: nullDeleter
 *
 * nullDeleter accepts an object that always has at least one key-value pair.
 * If a key's value is null, nullDeleter deletes that key-value pair from the object.
 * nullDeleter returns the object, free of all null key-value pairs.
 *
 * @category 06 - Objects
 * @function nullDeleter
 * @param {Object} object
 * @returns {Object}
 * @example
 * nullDeleter({ one: 1 }) // => { one: 1 }
 * nullDeleter({ one: 1, two: null }) // => { one: 1 }
 * nullDeleter({ one: null, two: null, three: "goodbye" }) // => { three: "goodbye" }
 * nullDeleter({ one: null, two: null, three: null }) // => {}
 */
export function nullDeleter(object) {
  for (const key in object) {
    const currValue = object[key];
    if (currValue === null) {
      delete object[key];
    }
  }
  return object;
}
