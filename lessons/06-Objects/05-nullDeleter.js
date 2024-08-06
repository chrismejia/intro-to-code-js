/**
 * #5: nullDeleter
 *
 * nullDeleter accepts an object that always has at least one key-value pair.
 * nullDeleter returns the object, free of all null key-value pairs.
 *
 * @category 06 - Objects
 * @function nullDeleter
 * @param {Object} object - The object to be processed.
 * @returns {Object} - The modified object with `null` values removed.
 *
 * @example
 * nullDeleter({ one: 1 }) // => { one: 1 }
 * nullDeleter({ one: 1, two: null }) // => { one: 1 }
 * nullDeleter({ one: null, two: null, three: "goodbye" }) // => { three: "goodbye" }
 * nullDeleter({ one: null, two: null, three: null }) // => {}
 */
export function nullDeleter() {}
