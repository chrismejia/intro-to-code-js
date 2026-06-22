import { arrayToString } from "../05-arrayToString.js";

describe("#5: arrayToString", () => {
  const array = ["cat", "dog", "moo"];
  describe("returns the correct string", () => {
    it("when the separator is an empty string ('')", () => {
      expect(arrayToString(array, "")).toBe("catdogmoo");
    });

    it("when the separator is a single space (' ')", () => {
      expect(arrayToString(array, " ")).toBe("cat dog moo");
    });

    it("when the separator is any other character sequence", () => {
      expect(arrayToString(array, "+-%")).toBe("cat+-%dog+-%moo");
    });
  });
});
