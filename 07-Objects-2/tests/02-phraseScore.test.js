import {
  letterValues,
  regularScorePhrases,
  comboScoredPhrases,
  noRepeatsCombo,
} from "../data/phraseScore.data";
import phraseScore from "../02-phraseScore";
import { expect } from "chai";

xdescribe("#2: phraseScore", () => {
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
      const currTestScore = regularScorePhrases[phrase];

      it(`${phrase} = ${currTestScore}`, () => {
        expect(currScore).to.equal(currTestScore);
      });
    }
  });

  describe("##### BONUS #####", () => {
    context("when comboActive is true, phraseScore", () => {
      it("returns a number", () => {
        for (const phrase in comboScoredPhrases) {
          expect(phraseScore(phrase, true)).to.be.a("number");
        }
      });

      it("uses the correct value per letter", () => {
        const testSingleValues = {};

        for (const letter in letterValues) {
          const testValue = phraseScore(letter, true);
          testSingleValues[letter] = testValue;
        }
        expect(testSingleValues).to.eql(letterValues);
      });

      describe("returns the correct score that follow combo rules", () => {
        it("when the phrase has no consecutive repeating letters", () => {
          for (const phrase in noRepeatsCombo) {
            const currentScore = noRepeatsCombo[phrase];
            const testScore = phraseScore(phrase, true);

            expect(testScore).to.equal(currentScore);
          }
        });

        it("when the phrase has consecutive repeating letters", () => {
          for (const phrase in comboScoredPhrases) {
            const comboScore = comboScoredPhrases[phrase];
            const testedScore = phraseScore(phrase, true);

            it(`${phrase} = ${comboScore}`, () => {
              expect(testedScore).to.equal(comboScore);
            });
          }
        });
      });
    });
  });
});
