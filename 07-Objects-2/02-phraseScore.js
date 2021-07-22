import { letterValues } from "./data/phraseScore.data";

/**
 * Define the function phraseScore.
 * phraseScore accepts one string of alphabetical letters.
 * You are given a letterValues object to use, where each letter has a point value.
 * phraseScore returns the total points the inputPhrase is worth.
 *
 * BONUS
 *
 * phraseScore accepts an additional boolean parameter, comboActive.
 * When comboActive is true, combo rules are in effect.
 * The combo rules are:
 * 1. The combo counter starts at 1.
 * 2. Each character's score is (value X combo).
 * 2. When a character is the same as its predecessor,
 *    it increases the combo counter by 1.
 * 3. When a character is not the same,
 *    the combo counter resets back to 1.
 * 4. The phrase's total score = character point total x phrase length
 *
 * See the bonus examples for further breakdown.
 *
 * @category 06 - Object
 * @function phraseScore
 * @param {String} inputPhrase
 * @param {Boolean} comboActive - when comboActive is true, combo scoring is in effect
 * @returns {Number} total value of inputPhrase
 *
 * @example
 * phraseScore("a") // => 1
 * phraseScore("z") // => 26
 * phraseScore("abc") // => 6
 * phraseScore("aaa") // => 3
 * phraseScore("zzz") // => 78
 * phraseScore("aabb") // => 91
 *
 * // BONUS
 * phraseScore("a", true) // => 1 x 1 = 1
 * phraseScore("z", true) // => 26 x 1 = 26
 * phraseScore("abc", true) // => (1 + 2 + 3) x 3 = 18
 * phraseScore("aaa", true) // => (1 + (1 x 2) + (1 x 3)) x 3 = 18
 * phraseScore("zzz", true) // => (26 + (26 x 2) + (26 x 3)) x 3 = 78
 * phraseScore("aabb", true) // => (1 + (1 x 2) + (2 x 1) + (2 x 2)) x 4 = 36
 */
function phraseScore() {}

export default phraseScore;
