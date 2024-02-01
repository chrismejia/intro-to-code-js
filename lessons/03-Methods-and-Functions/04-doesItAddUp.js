/**
 * #4: doesItAddUp
 *
 * Define the function doesItAddUp. Make sure to export it for testing use.
 * doesItAddUp accepts three number inputs.
 * doesItAddUp returns true when the first two inputs add up to the third.
 * Otherwise, doesItAddUp returns false.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function doesItAddUp
 * @param {Number} numA
 * @param {Number} numB
 * @param {Number} numC
 * @returns {Boolean}
 *
 * @example
 * doesItAddUp(10, 5, 15) => true
 * doesItAddUp(10, 5, 20) => false
 */

export function doesItAddUp(numA, numB, numC) {
  if (numA + numB === numC) {
    return true;
  }
  return false;
}

// One-line answer
// const doesItAddUp = (numA, numB, numC) => numA + numB === numC;
