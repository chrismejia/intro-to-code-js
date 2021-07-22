import { isAnObject } from "../06-Objects";

/**
 * Define the function objectFlattener.
 * objectFlattener accepts a single input, inputObj.
 *
 * When objectFlattener comes across a top-level value that is an object, objectFlattener copies that top-level value's sub key-value pairs to the top-level of inputObj.
 * objectFlattener then deletes the top-level key-value pair.
 * objectFlattener returns the object after all flattening and deletions are done.
 *
 * The inputObj is guaranteed to always have at least one key-value pair.
 * All inputObj values are guaranteed to never be null or undefined.
 *
 * HINT: What can you use to test the data type of a value in inputObj?
 *
 * @category 06 - Objects
 * @function objectFlattener
 * @param {Object} inputObj
 * @returns {Object}
//  *
 * @example
 * const noObjVal = { one: 1, two: "string" }
 * objectFlattener(noObjVal) // => { one: 1, two: "string" }
 *
 * const oneObjVal = { one: 1, two: { three: false } }
 * objectFlattener(oneObjVal) // => { one: 1, three: false }
 *
 * const multSubObjMultKeys = {
 *   one: { four: 42, five: "test" },
 *   two: false,
 *   three: { six: 10, seven: "bread", eight: true },
 * }
 * objectFlattener(multSubObjMultKeys)
 * // => {
 *  two: false,
 *  four: 42,
 *  five: "test",
 *  six: 10,
 *  seven: "bread",
 *  eight: true
 * }
 */

function objectFlattener() {}

export default objectFlattener;
