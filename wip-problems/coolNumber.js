/**
 * Define the function isNumberCool.
 * isNumberCool tells us that a number is cool if a number is an integer, that is, it has no decimal point.
 * Cool: 1, 4, 9
 * Uncool: 1.7, 3.14, 9.000001
 *
 * Define the function coolNumbersGetSquaredSquared.
 * Cool numbers grow large by getting squared twice in a row.
 * e.g. 2 ** 2 => 4; 4 ** 2 => 16
 *
 * @function coolNumbersGetSquaredSquared
 * @param {Number[]} nums
 * @returns {Number[]}
 */
function isNumberCool(num) {
  return Number.isInteger(num);
}

function coolSquaredNumbers(num) {
  return (num ** 2) ** 2;
}

function coolNumbersGetSquaredSquared(nums, coolCheck, squareCools) {
  return nums.filter(coolCheck).map(squareCools);
}
