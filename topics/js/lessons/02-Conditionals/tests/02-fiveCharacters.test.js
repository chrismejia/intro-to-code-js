import { notFiveChars, isItFiveChars } from "../index.js";

/**
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

describe("#2: 5 characters", () => {
  describe("notFiveChars", () => {
    it("is defined", () => {
      expect(notFiveChars).not.toBeUndefined();
    });

    it("is a string that isn't 5 characters long", () => {
      expect(typeof notFiveChars).toBe("string");
      expect(notFiveChars).not.toHaveLength(5);
    });
  });

  describe("isItFiveChars", () => {
    it("is defined", () => {
      expect(isItFiveChars).not.toBeUndefined();
    });

    it("resolves to the string `not 5 characters`", () => {
      expect(isItFiveChars).toBe("not 5 characters");
    });
  });
});
