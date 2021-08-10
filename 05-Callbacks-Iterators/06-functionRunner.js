/**
 * Define the function functionRunner.
 * functionRunner accepts a three inputs.
 * - an inputVal of anyType
 * - a callback function
 * - and a number, runCount
 *
 * functionRunner runs the callback function on the input runCount number of times and returns the resulting value.
 *
 * If runCount is 0, the callback doesn't run; inputVal is returned untouched.
 * If runCount is 1, the callback runs using inputVal and returns the resulting value.
 * If runCount is greater than 1, the callback uses inputVal for the first run, and uses that result as input for the next run.
 *
 * Example:
 * runCount is 3
 *
 * Run 1 : callback(inputVal) => result1
 * Run 2 : callback(result1) => result2
 * Run 3 : callback(result2) => result3 --> returned as final value
 *
 * @category 05 - Callbacks
 * @param {*} inputVal can be any data type
 * @param {Function} callback
 * @param {Number} runCount
 * @returns {*} the inputVal processed by the callback the appropriate number of times
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
function functionRunner(inputVal, callback, runCount) {
  for (let run = 1; run <= runCount; run++) {
    inputVal = callback(inputVal);
  }
  return inputVal;
}

export default functionRunner;
