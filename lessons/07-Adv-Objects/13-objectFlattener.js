/**
 * #13: objectFlattener
 *
 * `objectFlattener` accepts a single input, inputObj, which is an object.
 *
 * When `objectFlattener` encounters a top-level key in inputObj with a value that is an object,
 * it will copy all the key-value pairs from that nested object to the top-level of inputObj.
 * Then, it will delete the original top-level key that had the nested object as its value.
 *
 * The inputObj is guaranteed to be an object that always has at least one key-value pair.
 * All inputObj values are guaranteed to never be null or undefined.
 *
 * HINT: What can you use to test the data type of a value of inputObj?
 *
 * @category 07 - Adv Objects
 * @function objectFlattener
 * @param {Object} inputObj - The object to flatten.
 * @returns {Object} - The flattened object.
 *
 * @example
 * const noObjVal = { one: 1, two: "string" };
 * objectFlattener(noObjVal); // => { one: 1, two: "string" }
 *
 * const oneObjVal = { one: 1, two: { three: false } };
 * objectFlattener(oneObjVal); // => { one: 1, three: false }
 *
 * const nestedObjVal = { one: 1, two: { three: false, four: 4 }, five: { six: 'six' } };
 * objectFlattener(nestedObjVal); // => { one: 1, three: false, four: 4, six: 'six' }
 */
export function objectFlattener() {}
