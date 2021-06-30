import {
  letterValues,
  regularScorePhrases,
  comboScoredPhrases,
} from "./letterValues";
/**
 * @category 06 - Object
 * @function phraseScore
 * @param {String} inputPhrase
 * @param {Boolean} comboActive
 * @returns {Number} total value of inputPhrase
 */
function phraseScore(inputPhrase, comboActive) {
  let score = 0;
  let lastChar = "";
  let combo = 1;
  let multiplier = inputPhrase.length;

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
        score += letterValues[char];
      } else {
        combo++;
        score += letterValues[char] * combo;
      }
    } else {
      score += letterValues[char];
    }
  }
  if (comboActive) {
    return score * multiplier;
  }
  return score;
}

import { expect } from "chai";

describe("#: phraseScore", () => {
  it("returns a number", () => {
    for (const phrase in regularScorePhrases) {
      expect(phraseScore(phrase)).to.be.a("number");
    }
  });

  it("uses the correct value per letter", () => {
    const testSingleValues = {};

    for (const letter in letterValues) {
      const testValue = phraseScore(letter);
      testSingleValues[letter] = testValue;
    }
    expect(testSingleValues).to.eql(letterValues);
  });

  describe("returns the correct score for the input phrase", () => {
    for (const phrase in regularScorePhrases) {
      const currScore = phraseScore(phrase);

      it(`${phrase} --> ${currScore}`, () => {
        const currTestScore = regularScorePhrases[phrase];
        expect(currScore).to.equal(currTestScore);
      });
    }
  });

  describe("BONUS: when comboActive is true", () => {
    context("phraseScore", () => {
      it("returns a number", () => {
        for (const phrase in comboScoredPhrases) {
          expect(phraseScore(phrase, true)).to.be.a("number");
        }
      });

      it("uses the correct value per single letter", () => {
        const testSingleValues = {};

        for (const letter in letterValues) {
          const testValue = phraseScore(letter, true);
          testSingleValues[letter] = testValue;
        }
        expect(testSingleValues).to.eql(letterValues);
      });

      describe("returns the correct phrase score using the combo rules", () => {
        for (const phrase in comboScoredPhrases) {
          const comboScore = comboScoredPhrases[phrase];

          it(`${phrase} --> ${comboScore}`, () => {
            expect(phraseScore(phrase, true)).to.equal(comboScore);
          });
        }
      });
    });
  });
});
