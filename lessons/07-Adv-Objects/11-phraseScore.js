import { letterValues } from "./data/11-phraseScore.data";

/**
 * #11: phraseScore
 *
 * `phraseScore` calculates the score of a given phrase based on the values assigned to each letter of the alphabet. letterValues has already been created and imported above for your use.
 *
 * BONUS:
 * `phraseScore` optionally accepts a second parameter, `comboActive`.
 * When `comboActive` is true, combo rules are in effect.
 *
 * Combo rules:
 * The combo counter always starts at 1.
 * If the current letter is the same as the previous one, the combo increases by 1, and the current letter's value is multiplied by the combo before finally being added to the score.
 * The combo resets backs to 1 when the current letter is no longer the same as the previous one.
 *
 * @category 07 - Adv Objects
 * @function phraseScore
 * @param {string} inputPhrase - The phrase to score.
 * @param {boolean?} comboActive - Whether the combo multiplier is active.
 * @returns {number} - The calculated score of the phrase.
 */
export function phraseScore() {}
