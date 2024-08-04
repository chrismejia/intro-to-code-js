import phraseScore from "../02-phraseScore";
import { expect } from "chai";

describe("#2: phraseScore", () => {
  describe("should return the correct score", () => {
    it("for an empty phrase", () => {
      const inputPhrase = "";
      const comboActive = false;
      const expectedScore = 0;
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a single character phrase", () => {
      const inputPhrase = "a";
      const comboActive = false;
      const expectedScore = 1; // a=1
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase without consecutive repeating letters", () => {
      const inputPhrase = "chair";
      const comboActive = false;
      const expectedScore = 3 + 8 + 1 + 9 + 18;
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase with consecutive repeating letters", () => {
      const inputPhrase = "mississippi";
      const comboActive = false;
      const expectedScore = 13 + 9 + 19 + 19 + 9 + 19 + 19 + 9 + 16 + 16 + 9;
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });
  });

  describe("BONUS: with combo active", () => {
    it("for an empty phrase", () => {
      const inputPhrase = "";
      const comboActive = true;
      const expectedScore = 0;
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a single character phrase", () => {
      const inputPhrase = "a";
      const comboActive = true;
      const expectedScore = 1; // a=1
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase without consecutive repeating letters", () => {
      const inputPhrase = "chair";
      const comboActive = true;
      const expectedScore = (3 + 8 + 1 + 9 + 18) * 5; // calculated with combo and multiplied by length
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });

    it("for a phrase with consecutive repeating letters", () => {
      const inputPhrase = "mississippi";
      const comboActive = true;
      const expectedScore =
        (13 + 9 + 19 + 19 * 2 + 9 + 19 + 19 * 2 + 9 + 16 + 16 * 2 + 9) * 11; // calculated with combo and multiplied by length
      const result = phraseScore(inputPhrase, comboActive);
      expect(result).to.equal(expectedScore);
    });
  });
});
