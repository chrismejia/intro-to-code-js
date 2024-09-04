/**
 * #3: objectToString
 *
 * `objectToString` function accepts an object as its input.
 * `objectToString` returns the JSON string representation of the input object.
 *
 * @category 07 - Adv Objects
 * @function objectToString
 * @param {Object} obj - The object to be serialized into a JSON string.
 * @returns {string} A JSON string representing the input object.
 *
 * @example
 * const data = { name: 'Alice', age: 25, hobbies: ['reading', 'gaming'] };
 * const obJAsString = objectToString(data);
 * // obJAsString: '{"name":"Alice","age":25,"hobbies":["reading","gaming"]}'
 */
export const objectToString = (obj) => JSON.stringify(obj);
