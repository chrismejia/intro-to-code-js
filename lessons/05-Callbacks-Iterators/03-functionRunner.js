/**
 * Define the function `functionRunner`.
 * `functionRunner` accepts a three inputs.
 * - an `inputVal` of anyType
 * - a `callback` function
 * - and a number, `runCount`
 *
 * `functionRunner` runs the callback function on the input `runCount` number of times and returns the resulting value.
 *
 * If `runCount` is 0, the callback doesn't run; `inputVal` is returned untouched.
 * If `runCount` is 1, the callback runs using `inputVal` and returns the resulting value.
 * If `runCount` is greater than 1, the callback uses `inputVal` for the first run, and uses that result as input for the next run.
 *
 * @category 05 - Callbacks
 * @param {any} inputVal can be any data type
 * @param {Function} callback
 * @param {Number} runCount
 * @returns {any} the inputVal processed by the callback the appropriate number of times
 *
 * @example
 * const str = "Abc"
 * const strDoubler = str => str += str
 *
 * functionRunner(str, strDoubler, 0) // => "Abc"
 * functionRunner(str, strDoubler, 1) // => "AbcAbc"
 * functionRunner(str, strDoubler, 3)
 * // Run 1: "AbcAbc"
 * // Run 2: "AbcAbcAbcAbc"
 * // Run 3 (Final) => "AbcAbcAbcAbcAbcAbcAbcAbc"
 */
function functionRunner() {}

export default functionRunner;
