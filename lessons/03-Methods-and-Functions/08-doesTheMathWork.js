/**
 * #8: doesTheMathWork
 *
 * Define the function doesTheMathWork. Make sure to export it for testing use.
 * doesTheMathWork accept three inputs, each a number.
 * doesTheMathWork returns a phrase based on the following:
 * - first input + second input = third input -> "addition"
 * - first input - second input = third input -> "subtraction"
 * - first input * second input = third input -> "multiplication"
 * - first input / second input = third input -> "division"
 * - none of the above -> "no operation"
 *
 * NOTE:
 * Each set of three inputs resolves to only ONE of the given possible outputs.
 *
 * @category 03 - Methods and Functions
 * @function doesTheMathWork
 * @param {Number} numA
 * @param {Number} numB
 * @param {Number} numC
 * @returns {String}
 *
 * @example
 * doesTheMathWork(1, 2, 3) => "addition"
 * doesTheMathWork(7, 2, 5) => "subtraction"
 * doesTheMathWork(3, 3, 9) => "multiplication"
 * doesTheMathWork(81, 9, 9) => "division"
 * doesTheMathWork(11, 222, 3) = "no operation"
 */

export function doesTheMathWork(numA, numB, numC) {
  if (numA + numB === numC) {
    return "addition";
  } else if (numA - numB === numC) {
    return "subtraction";
  } else if (numA * numB === numC) {
    return "multiplication";
  } else if (numA / numB === numC) {
    return "division";
  } else {
    return "no operation";
  }
}
