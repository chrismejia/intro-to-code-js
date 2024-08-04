/**
 * #2: valueReader
 *
 * Define the function valueReader.
 * valueReader accepts a single input, the string keyString.
 *
 * valueReader returns the value that corresponds to the the keyString in the dataObj.
 * If the key doesn't exists in the dataObj, valueReader returns undefined.
 *
 * @category 07 - Objects 2
 * @function valueReader
 * @param {String} keyString - the key whose value you need to fetch
 * @param {Object} dataObj - the object to fetch the data value from
 * @returns {any} the value that corresponds to the the keys indicated
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

function valueReader(keyString, dataObj) {
  return dataObj[keyString];
}

export default valueReader;
