import {
  letterValues,
  regularScorePhrases,
  comboScoredPhrases,
  noRepeatsCombo,
} from "../data/phraseScore.data";
import phraseScore from "../02-phraseScore";
import { expect } from "chai";

describe("#2: phraseScore", function () {
  it("returns a number", function () {
    for (const phrase in regularScorePhrases) {
      expect(phraseScore(phrase)).to.be.a("number");
    }
  });

  it("uses the correct value per letter", function () {
    const testSingleValues = {};

    for (const letter in letterValues) {
      const testValue = phraseScore(letter);
      testSingleValues[letter] = testValue;
    }
    expect(testSingleValues).to.eql(letterValues);
  });

  describe("returns the correct score for the input phrase", function () {
    for (const phrase in regularScorePhrases) {
      const currScore = phraseScore(phrase);

      it(`${phrase} --> ${currScore}`, function () {
        const currTestScore = regularScorePhrases[phrase];
        expect(currScore).to.equal(currTestScore);
      });
    }
  });

  describe("BONUS: when comboActive is true", function () {
    context("phraseScore", function () {
      it("returns a number", function () {
        for (const phrase in comboScoredPhrases) {
          expect(phraseScore(phrase, true)).to.be.a("number");
        }
      });

      describe("returns the correct combo score", function () {
        it("when the phrase has no consecutive repeating letters", function () {});

        it("when the phrase has consecutive repeating letters", function () {
          const testSingleValues = {};

          for (const letter in letterValues) {
            const testValue = phraseScore(letter, true);
            testSingleValues[letter] = testValue;
          }
          expect(testSingleValues).to.eql(letterValues);
        });
      });

      describe("returns the correct phrase score using the combo rules", function () {
        const test = {};

        for (const phrase in comboScoredPhrases) {
          const comboScore = comboScoredPhrases[phrase];
          test[phrase] = phraseScore(phrase, true);

          expect(phraseScore(phrase, true)).to.equal(comboScore);
        }
      });
    });
  });
});
