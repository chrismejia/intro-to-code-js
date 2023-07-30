/**
 * myConcat
 *
 * Define a function myConcat that accepts two arrays.
 *
 * myConcat merges both arrays, but doesn't modify either of the two arrays. It should return a new combined array instead.
 *
 * const arr1 = [1,2,3]
 * const arr2 = [7,8,9]
 *
 * myConcat(arr1, arr2) //==> [1,2,3,7,8,9]
 * myConcat(arr2, arr1) //==> [7,8,9,1,2,3]
 */

/**
 * APPROACH
 *
 * define function, accepts two arrays
 * set up new array
 *
 * first array input - LOOP, FRONT TO BACK
 *    focus current element
 *    push current element to new array
 * END LOOP
 *
 * second array input - LOOP, FRONT TO BACK
 *    focus current element
 *    push current element to new array
 * END LOOP
 *
 * return new array
 */

function myConcat(arr1, arr2) {
  let combinedArr = [];

  // First Array Loop
  for (let i = 0; i < arr1.length; i++) {
    const firstElement = arr1[i];
    combinedArr.push(firstElement);
  }

  // Second Array Loop
  for (let j = 0; j < arr2.length; j++) {
    const secondElement = arr2[j];
    combinedArr.push(secondElement);
  }

  return combinedArr;
}

const firstArray = [1, 2];
const secondArray = [6, 7];

myConcat(firstArray, secondArray);
// console.log(firstArray)
// console.log(secondArray)

import { expect } from "chai";

describe("#: myConcat", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  it("doesn't modify either input array", () => {
    expect(myConcat.)
  });
});
