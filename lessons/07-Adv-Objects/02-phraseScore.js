import { letterValues } from "./data/phraseScore.data";

/**
 * #2: phraseScore
 *
 * Define the function phraseScore.
 * phraseScore calculates the score of a given phrase based on the letter values and an optional combo multiplier.
 *
 * @category 07 - Objects 2
 * @function phraseScore
 * @param {string} inputPhrase - The phrase to score.
 * @param {boolean} comboActive - Whether the combo multiplier is active.
 * @returns {number} - The calculated score of the phrase.
 */
export function phraseScore(inputPhrase, comboActive) {
  let score = 0;
  let lastChar = "";
  let combo = 1;
  const multiplier = inputPhrase.length;

  for (const char of inputPhrase) {
    const charValue = letterValues[char];
    if (comboActive) {
      score +=
        lastChar === char ? charValue * ++combo : ((combo = 1), charValue);
      lastChar = char;
    } else {
      score += charValue;
    }
  }

  return comboActive ? score * multiplier : score;
}
