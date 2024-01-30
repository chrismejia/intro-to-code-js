import { letterValues } from "./data/phraseScore.data";

/**
 * Define the function
 *
 * @category 06 - Object
 * @function phraseScore
 * @param {String} inputPhrase
 * @param {Boolean} comboActive - when comboActive is true, combo scoring is in effect
 * @returns {Number} total value of inputPhrase
 */
function phraseScore(inputPhrase, comboActive) {
  let score = 0;
  let lastChar = "";
  let combo = 1;
  let multiplier = inputPhrase.length;
  let currPoints;

  for (const char of inputPhrase) {
    if (comboActive) {
      /**
       * First char of inputPhrase
       *    set lastChar to first char of phrase
       *    add that char's value to score
       * currChar is the same as lastChar
       *    add 1 to combo
       *    add that char's value * combo to score
       * currChar is NOT the same as lastChar (same as initial!)
       *    reset combo to 1
       *    set lastChar to currChar
       *    add that char's value to score
       */
      if (lastChar === char) {
        combo++;
        currPoints = letterValues[char] * combo;
        score += currPoints;
      } else {
        lastChar = char;
        combo = 1;
        currPoints = letterValues[char];
        score += currPoints;
      }
    } else {
      currPoints = letterValues[char];
      score += letterValues[char];
    }
  }

  if (comboActive) {
    return score * multiplier;
  }

  return score;
}

export default phraseScore;
