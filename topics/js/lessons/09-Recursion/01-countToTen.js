/**
 * Define the function `countToTen`.
 * `countToTen` accepts a single input, startNum.
 * `countToTen` logs the current number and doesn't return anything.
 * If the current number is less than then 10, `countToTen` calls itself with the number one greater than the current number.
 * `countToTen` stops logging numbers it has logged the number 10.
 *
 * NOTE: `startNum` will always be less than 10.
 *
 * @category 08 - Recursion
 * @function countToTen
 * @param {Number} startNum
 */
function countToTen(startNum) {
  // console.log(startNum);
  if (startNum < 10) {
    countToTen(startNum + 1);
  }
}

export default countToTen;
