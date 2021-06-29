import { letterValues, testScorePhrases } from "./letterValues";
/**
 * @category 06 - Object
 * @function phraseScore
 * @param {String} inputPhrase
 * @returns {Number} total value of inputPhrase
 */
function phraseScore(inputPhrase) {
  let score = 0;
  for (const char of inputPhrase) {
    score += letterValues[char];
  }
  return score;
}

import { expect } from "chai";

describe("#: phraseScore", () => {
  it("returns a number", () => {
    for (const phrase in testScorePhrases) {
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
    for (const phrase in testScorePhrases) {
      const currScore = phraseScore(phrase);

      it(`${phrase} --> ${currScore}`, () => {
        const currTestScore = testScorePhrases[phrase];
        expect(currScore).to.equal(currTestScore);
      });
    }
  });
});
