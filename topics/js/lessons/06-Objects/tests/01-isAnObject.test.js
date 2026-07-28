import { isAnObject } from "../01-isAnObject.js";

describe("#1: isAnObject", () => {
  describe("returns false", () => {
    it("for a string", () => {
      expect(isAnObject("string")).toBe(false);
    });

    it("for a number", () => {
      expect(isAnObject(42)).toBe(false);
    });

    it("for a boolean", () => {
      expect(isAnObject(true)).toBe(false);
    });

    it("for an array", () => {
      expect(isAnObject([1, 2, 3])).toBe(false);
    });

    it("for null", () => {
      expect(isAnObject(null)).toBe(false);
    });
  });

  describe("returns true", () => {
    it("for an object", () => {
      expect(isAnObject({ fruit: "banana" })).toBe(true);
    });
  });
});
