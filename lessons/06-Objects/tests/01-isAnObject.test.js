import { isAnObject } from "../01-isAnObject";
import { expect } from "chai";

describe("#1: isAnObject", () => {
  describe("returns false", () => {
    it("for a string", () => {
      expect(isAnObject("string")).to.be.false;
    });

    it("for a number", () => {
      expect(isAnObject(42)).to.be.false;
    });

    it("for a boolean", () => {
      expect(isAnObject(true)).to.be.false;
    });

    it("for an array", () => {
      expect(isAnObject([1, 2, 3])).to.be.false;
    });

    it("for null", () => {
      expect(isAnObject(null)).to.be.false;
    });
  });

  describe("returns true", () => {
    it("for an object", () => {
      expect(isAnObject({ fruit: "banana" })).to.be.true;
    });
  });
});
