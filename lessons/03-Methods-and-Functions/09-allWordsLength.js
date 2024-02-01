/**
 * #9: allWordsLength
 *
 * Define the function allWordsLength. Make sure to export it for testing use.
 * allWordsLength accepts an array containing any number of strings, each of any length.
 * allWordsLength returns the total length of all the strings in the array.
 *
 * HINT: If you're familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it's not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function allWordsLength
 * @param {String[]} wordsArr
 * @returns {Number}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array Methods}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String String Methods}
 *
 * @example
 * allWordsLength(["apple"]) => 5
 * allWordsLength(["old", "textbook"]) => 11  (3 + 8)
 * allWordsLength(["cat", "dog", "moo"]) => 9 (3 + 3 + 3)
 * allWordsLength(["robin", "hood", "men", "in", "tights"]) => 19 (5 + 4 + 3 + 2 + 5)
 */

export function allWordsLength(wordsArr) {
  return wordsArr.join("").length;
}
