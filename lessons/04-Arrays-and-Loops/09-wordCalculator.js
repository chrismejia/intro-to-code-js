/**
 * #9: wordCalculator
 *
 * Define the function wordCalculator. Make sure to export it.
 * wordCalculator accepts an array of numbers and an array of strings, each three-letter string representing a math operation.
 * wordCalculator should only perform these math operations:
 * - "add": addition
 * - "sub": subtraction
 * - "mul": multiplication
 * - "div": division
 * - "rem": remainder
 * - "exp": exponentiation
 *
 * wordCalculator ignores the rules of PEMDAS/BEDMAS and handles operations as passed into the operations array from left to right, one at a time.
 * wordCalculator returns the total of all the values and operations passed into it.
 *
 * @category 04 - Arrays and Loops
 * @function wordCalculator
 * @param {Number[]} nums - array of numbers; nums.length always >= 1
 * @param {String[] | []} operations - array of strings
 * @return {Number} resulting value after all operations have been computed
 *
 * @example
 * wordCalculator([1], ["lol"]) => 0   // bad operation, return 0
 * wordCalculator([1], ["add"]) => 1    // 0 + 1 = 1
 * wordCalculator([2], ["sub"]) => 2    // 0 - 2 = -2
 * wordCalculator([3], ["mul"]) => 0    // 0 * 3 = 0
 *
 * wordCalculator([5, 6], ["add", "pow"]) => 30
 *  // 0 + 5 = 5 ** 6 = 15625
 * wordCalculator([7, 11, 12], ["sub", "mul", "rem"]) => -5
 *  // 0 - 7 = 7 * 11 = -77 % 12 = -5
 */
