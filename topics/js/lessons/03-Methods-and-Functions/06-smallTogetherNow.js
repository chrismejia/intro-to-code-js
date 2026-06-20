/**
 * #6: smallTogetherNow
 *
 * Define the function smallTogetherNow. Make sure to export it for testing use.
 * smallTogetherNow accepts two strings of any length.
 * smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 *
 * @category 03 - Methods and Functions
 * @function smallTogetherNow
 * @param {String} str1
 * @param {String} str2
 * @returns {String}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase .toLowerCase()}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat .concat()}
 *
 * @example
 * smallTogetherNow("HELLO", "WORLD") => "helloworld"
 * smallTogetherNow("apple", "pie") => "applepie"
 * smallTogetherNow("mIxEd", "CaPiTaLs") => "mixedcapitals"
 */

export function smallTogetherNow(str1, str2) {
  const lowerOne = str1.toLowerCase();
  const lowerTwo = str2.toLowerCase();

  return lowerOne + lowerTwo;
}

// One-line answer
// const smallTogetherNow = (str1, str2) =>
//   str1.toLowerCase().concat(str2.toLowerCase());
