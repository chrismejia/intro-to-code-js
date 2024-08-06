import { letterValues } from "./data/phraseScore.data";

/**
 * #2: phraseScore
 *
 * Define the function phraseScore.
 * phraseScore calculates the score of a given phrase based on the values assigned to each letter of the alphabet. letterValues has already been created and imported above for your use.
 *
 * BONUS:
 * phraseScore optionally accepts a second parameter, comboActive.
 * When comboActive is true, combo rules are in effect.
 *
 * Combo rules:
 * The combo counter always starts at 1.
 * If the current letter is the same as the previous one, the combo increases by 1, and the current letter's value is multiplied by the combo before finally being added to the score.
 * The combo resets backs to 1 when the current letter is no longer the same as the previous one.
 *
 * @category 07 - Objects 2
 * @function phraseScore
 * @param {string} inputPhrase - The phrase to score.
 * @param {boolean?} comboActive - Whether the combo multiplier is active.
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

/**
 * Line breakdown:
 * ```js
 * score += (lastChar === char) ? charValue * ++combo : (combo = 1, charValue);
 * ```
 *
 * This line is a ternary expression that adds to the score based on whether the current character (char) is the same as the last character (lastChar)
 * Here's how it works:
 *
 * A ternary operator is a shorthand for an if-else statement. The general format is:
 * ```js
 * condition ? expressionIfTrue : expressionIfFalse;
 *```
 * In this case, the condition is `(lastChar === char)`.
 *
 * Condition:
 *   `(lastChar === char)`: Checks if the current character is the same as the last character.
 *
 *    If the Condition is True:
 *        `charValue * ++combo`
 *            `++combo`: This is the pre-increment operator. It increments the combo value by 1 before using it.
 *            `charValue * ++combo`: Multiplies the charValue by the incremented combo value.
 *        This part is executed when the current character is the same as the last character, indicating a combo sequence.
 *
 *    If the Condition is False:
 *        `(combo = 1, charValue)`
 *            `combo = 1`: Resets the combo to 1.
 *            `charValue`: Simply uses the value of the current character.
 *            The comma operator `,` allows both expressions to be evaluated, but only the result of the last expression (charValue) is used.
 *        This part is executed when the current character is different from the last character, breaking the combo sequence.
 *
 *Full Line Explanation:
 * ```js
 * score += (lastChar === char) ? charValue * ++combo : (combo = 1, charValue);
 * ```
 *        If lastChar is equal to char, increment combo by 1 and multiply charValue by the new combo value, then add the result to score.
 *        If lastChar is not equal to char, reset combo to 1 and add charValue to score.
 */
