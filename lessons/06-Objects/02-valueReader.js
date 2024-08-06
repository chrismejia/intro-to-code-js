/**
 * #2: valueReader
 *
 * valueReader accepts a single input, the string keyString.
 *
 * valueReader returns the value that corresponds to the the keyString in the dataObj.
 * If the key doesn't exists in the dataObj, valueReader returns undefined.
 *
 * @category 06 - Objects
 * @function valueReader
 * @param {String} keyString - the key whose value you need to fetch
 * @param {Object} dataObj - the object to fetch the data value from
 * @returns {unknown} the value that corresponds to the the keys indicated
 *
 * @example
 * const dataObj = {
 *   alfa: "hello world",
 *   bravo: 123,
 *   foxtrot: false,
 *   lima: [1, 2, 3],
 *   tango: { a: 1 },
 * };
 * valueReader("alfa", dataObj) // => "hello world"
 * valueReader("tango", dataObj) // => { a: 1 }
 * valueReader("sierra", dataObj) // => undefined
 */

export function valueReader() {}
