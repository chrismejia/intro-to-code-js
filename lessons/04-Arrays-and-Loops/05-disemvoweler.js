/**
 * #5: disemvoweler
 *
 * Define the function disemvoweler. Make sure to export it.
 * disemvoweler takes in a string and returns it stripped of its vowels.
 *
 * BONUS: disemvoweler also removes any capitalized vowels.
 *
 * @category 04 - Arrays and Loops
 * @function disemvoweler
 * @param {String} string - never empty string
 * @returns {String} the input string with all its vowels removed
 * @example
 * disemvoweler("b") => "b"
 * disemvoweler("xyz") => "xyz"
 * disemvoweler("a") => ""
 * disemvoweler("cr") => "cr"
 * disemvoweler("dictionary") => "dctnry"
 * disemvoweler("aaeeiioouu") => ""
 *
 * // BONUS
 * disemvoweler("BeaR") => "BR"
 * disemvoweler("diCTIONAry") => "dCTNry"
 */

export function disemvoweler(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let baseStr = "";

  for (let i = 0; i < string.length; i++) {
    // Grab curr char and vowel
    const currChar = string[i];

    // If the lowercase version of currChar isn't a vowel, add it to baseStr
    if (!vowels.includes(currChar.toLowerCase())) {
      baseStr += currChar;
    }
  }
  return baseStr;
}

// One-liner
// export const disemvoweler = (string) =>
//   string
//     .split("")
//     .filter(
//       (letter) => !["a", "e", "i", "o", "u"].includes(letter.toLowerCase())
//     )
//     .join("");
