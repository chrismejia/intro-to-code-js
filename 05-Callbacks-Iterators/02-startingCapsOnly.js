import { uppers } from "./data/startingCapsOnly.data";

/**
 * Define the function `startingCapsOnly`.
 * `startingCapsOnly` accepts an array of Strings; the array is always .length >= 1
 * `startingCapsOnly` returns a new array made of any words that begin with a capital letter.
 * Use `.filter`!
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * @function startingCapsOnly
 * @param {String[]} words
 * @returns {String[]}
 * @example
 * startingCapsOnly(["Microsoft", "Tokyo", "Charlie"]) // => ["Microsoft", "Tokyo", "Charlie"];
 * startingCapsOnly(["party", "car", "banana"]) // => [];
 * startingCapsOnly(["whOOps", "lION", "monkeY"]) // => [];
 * startingCapsOnly(["Microsoft", "party", "lION"]) // => ["Microsoft"]
 */

function startingCapsOnly(words) {
  return words.filter((word) => uppers.indexOf(word[0]) !== -1);
}

export { startingCapsOnly };
