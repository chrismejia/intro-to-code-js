/**
 * #1: Positives & Negatives
 *
 * Define the function `multiplyNums`.
 * `multiplyNums` accepts two numbers and returns their multiple.
 *
 * Define the function `isOddNum`.
 * `isOddNum` accepts two numbers and a function to be called within.
 * `isOddNum` returns a string containing `a`, `b`, and the multiple of both.
 * Where a times b is zero, the string reports that the multiple is zero.
 *
 * @function multiplyNums
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} the result of a times b
 *
 * @function isOddNum
 * @param {Number} a
 * @param {Number} b
 * @param {Function} multiplyFn - the function to invoke with `a` and `b`.
 * @returns {String} details whether the result of `multiplyFn` was a positive or negative number, or zero.
 *
 * @example
 * isOddNum(3, 5, multiplyNums) => "3 times 5 is a positive number."
 * isOddNum(-3, 5, multiplyNums) => "-3 times 5 is a negative number."
 * isOddNum(-3, -5, multiplyNums) => "-3 times -5 is a positive number."
 * isOddNum(-3, 0, multiplyNums) => "-3 times 0 is zero."
 * isOddNum(0, 5, multiplyNums) => "0 times 5 is zero."
 */

function multiplyNums(a, b) {
  return a * b;
}

function isOddNum(a, b, multiplyFn) {
  if (multiplyFn(a, b) > 0) {
    return `${a} times ${b} is a positive number.`;
  } else if (multiplyFn(a, b) < 0) {
    return `${a} times ${b} is a negative number.`;
  } else return `${a} times ${b} is zero.`;
}

export { multiplyNums, isOddNum };
