/**
 * Define the function `everyOtherTime`.
 * `everyOtherTime` accepts an array of any number of elements of any data type, and a callback function.
 * `everyOtherTime` returns an array where every other element in the input array has had the callback applied to it.
 *
 * @category 05 - Callbacks
 * @param {Array} inputArr - array elements can be any data type
 * @param {Function} callback
 * @returns {Array}
 *
 * @example
 * const words = ["a", "this one", "c"]
 * const capitalize = (word) => word.toUpperCase()
 * const wordsResult = everyOtherTime(words, capitalize)
 * // => ["a", "THIS ONE", "c"]
 *
 * const nums = [1, 2, 3, 4, 5, 6]
 * const timesThousand = (num) => num * 1000
 * const numsResult = everyOtherTime(nums, timesThousand)
 * // => [1, 2000, 3, 4000, 5, 6000]
 */

function everyOtherTime() {}

export default everyOtherTime;
