/**
 * #3: frontOrBack
 *
 * Define the function frontOrBack. Make sure to export it.
 * frontOrBack accepts an array, a place, an action, and a value.
 *
 * place describes where in the array you should perform the prescribe action;
 * - at the front of the array
 * - at the end of the array
 * action describes how the array should modified
 * value is the data to use with the action at the place in the array, if needed
 *
 * @category 04 - Arrays and Loops
 * @function frontOrBack
 * @param {Number[]} array
 * @param {"front" | "back"} place - one of `"front"` or `"back"`
 * @param {"add" | "remove"} action - one of `"add"` or `"remove"`
 * @param {Number} value - value to use when processing the input commands
 * @returns {Number[]}
 *
 * @example
 * frontOrBack([1, 2, 3, 4], "front", "add", 5) => [5, 1, 2, 3, 4];
 * frontOrBack([101, 212, 323], "back", "add", 5) => [101, 212, 323, 5];
 * frontOrBack([false, true, false], "front", "remove", 5) => [true, false];
 * frontOrBack(["be", "dog", "ride"], "back", "remove", 5) => ["be", "dog"];
 */
