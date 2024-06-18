/**
 * #10: pairMultiplier
 *
 * Define the function pairMultiplier. Make sure to export it.
 * pairMultiplier accepts two arrays of numbers.
 * pairMultiplier returns an array of numbers made up of all the numbers from arr1 multiplied by all the numbers in arr2.
 *
 * NB: arr1 and arr2 will not always be the same length.
 *
 * @category 04 - Arrays and Loops
 * @function pairMultiplier
 * @param {Number[]} arr1 - array of numbers; arr1.length always > 1
 * @param {Number[]} arr2 - array of numbers; arr2.length always > 1
 * @returns {Number[]} array of all the multiples of each entry from arr1 and arr2, in the correct order.
 *
 * @example
 * pairMultiplier([6],[4]) => [24]
 * pairMultiplier([7], [2, 3]) => [14, 21]
 * pairMultiplier([3, 8], [5, 2]) => [15, 6, 40, 16]
 * pairMultiplier([3, 5, 8], [2, 4]) => [6, 12, 10, 20, 16, 32]
 */

export function pairMultiplier(arr1, arr2) {
  let productsArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const numOne = arr1[i];
      const numTwo = arr2[j];
      productsArr.push(numOne * numTwo);
    }
  }
  return productsArr;
}
