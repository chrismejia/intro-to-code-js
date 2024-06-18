import { arrayToString } from "../05-arrayToString";
import { expect } from "chai";

describe("#5: arrayToString", () => {
  const array = ["cat", "dog", "moo"];
  describe("returns the correct string", () => {
    it("when the separator is an empty string ('')", () => {
      expect(arrayToString(array, "")).to.equal("catdogmoo");
    });

    it("when the separator is a single space (' ')", () => {
      expect(arrayToString(array, " ")).to.equal("cat dog moo");
    });

    it("when the separator is any other character sequence", () => {
      expect(arrayToString(array, "+-%")).to.equal("cat+-%dog+-%moo");
    });
  });
});
