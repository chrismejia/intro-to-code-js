import { letsGoParty } from "../index.js";

/**
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

describe("#7: letsGoParty", () => {
  const validAge = 32;
  const validOutfit = "pool party";
  const validCover = true;
  const validResult = "Let's go party!";

  const invalidAge = 20;
  const invalidOutfit = "monastery robes";
  const invalidCover = false;
  const invalidResult = "Go home, no partying for you tonight.";

  describe("rejects person if just one condition fails", () => {
    it("legalAge less than 25", () => {
      expect(letsGoParty(invalidAge, validOutfit, validCover)).toBe(
        invalidResult,
      );
    });

    it("outfitType is not correct", () => {
      expect(letsGoParty(validAge, invalidOutfit, validCover)).toBe(
        invalidResult,
      );
    });

    it("doesn't have the money to pay the cover charge", () => {
      expect(letsGoParty(validAge, validOutfit, invalidCover)).toBe(
        invalidResult,
      );
    });
  });

  describe("rejects person if two conditions fail", () => {
    it("age + outfit", () => {
      expect(letsGoParty(invalidAge, invalidOutfit, validCover)).toBe(
        invalidResult,
      );
    });

    it("age + cover", () => {
      expect(letsGoParty(invalidAge, validOutfit, invalidCover)).toBe(
        invalidResult,
      );
    });

    it("outfit + cover", () => {
      expect(letsGoParty(validAge, invalidOutfit, invalidCover)).toBe(
        invalidResult,
      );
    });
  });

  describe("rejects person if all three conditions fail", () => {
    it("age + outfit + cover", () => {
      expect(letsGoParty(invalidAge, invalidOutfit, invalidCover)).toBe(
        invalidResult,
      );
    });
  });

  it("lets a person party if they pass all three conditions", () => {
    expect(letsGoParty(25, validOutfit, validCover)).toBe(validResult);
    expect(letsGoParty(50, validOutfit, validCover)).toBe(validResult);
  });
});
