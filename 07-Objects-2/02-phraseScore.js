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
  let debugScores = [];

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
      if (lastChar !== char) {
        lastChar = char;
        combo = 1;

        currPoints = letterValues[char];
        debugScores.push(currPoints);

        score += currPoints;
      } else {
        combo++;

        currPoints = letterValues[char] * combo;
        debugScores.push(currPoints);

        score += currPoints;
      }
    } else {
      currPoints = letterValues[char];
      debugScores.push(currPoints);

      score += letterValues[char];
    }
  }
  // let testValuesObj = {};
  // testValuesObj[inputPhrase] = {
  //   charScores: debugScores,
  //   total: score,
  //   multiplied: score * multiplier,
  // };

  if (comboActive) {
    // console.log(testValuesObj);
    return score * multiplier;
  }
  // console.log(inputPhrase, debugScores, score, score * multiplier);
  return score;
}

export default phraseScore;
