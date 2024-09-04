import { phraseScore } from "../11-phraseScore";
import { expect } from "chai";
import {
  comboChar,
  comboEmpty,
  comboPhraseHasRepeats,
  comboPhraseNoRepeats,
  noComboChar,
  noComboEmpty,
  noComboPhraseHasRepeats,
  noComboPhraseNoRepeats,
} from "../data/11-phraseScore.data";

xdescribe("#11: phraseScore", () => {
  describe("should return the correct score", () => {
    it("for an empty phrase", () => {
      const { phrase, comboActive, expectedScore } = noComboEmpty;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a single character phrase", () => {
      const { phrase, comboActive, expectedScore } = noComboChar;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase without consecutive repeating letters", () => {
      const { phrase, comboActive, expectedScore } = noComboPhraseNoRepeats;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase with consecutive repeating letters", () => {
      const { phrase, comboActive, expectedScore } = noComboPhraseHasRepeats;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });
  });

  xdescribe("BONUS: with combo active", () => {
    it("for an empty phrase", () => {
      const { phrase, comboActive, expectedScore } = comboEmpty;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a single character phrase", () => {
      const { phrase, comboActive, expectedScore } = comboChar;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase without consecutive repeating letters", () => {
      const { phrase, comboActive, expectedScore } = comboPhraseNoRepeats;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase with consecutive repeating letters", () => {
      const { phrase, comboActive, expectedScore } = comboPhraseHasRepeats;
      const result = phraseScore(phrase, comboActive);
      expect(result).to.equal(expectedScore);
    });
  });
});
