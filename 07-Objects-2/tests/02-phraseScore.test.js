import {
  letterValues,
  regularScorePhrases,
  comboScoredPhrases,
  noRepeatsCombo,
} from "../data/phraseScore.data";
import phraseScore from "../02-phraseScore";
import { expect } from "chai";

describe("#2: phraseScore", () => {
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

      describe("returns the correct combo score", () => {
        it("when the phrase has no consecutive repeating letters", () => {});

        it("when the phrase has consecutive repeating letters", () => {
          const testSingleValues = {};

          for (const letter in letterValues) {
            const testValue = phraseScore(letter, true);
            testSingleValues[letter] = testValue;
          }
          expect(testSingleValues).to.eql(letterValues);
        });
      });

      describe("returns the correct phrase score using the combo rules", () => {
        let test = {};

        for (const phrase in comboScoredPhrases) {
          const comboScore = comboScoredPhrases[phrase];
          test[phrase] = phraseScore(phrase, true);

          expect(phraseScore(phrase, true)).to.equal(comboScore);
        }
      });
    });
  });
});
