import { expect } from "chai";
import { notFiveChars, isItFiveChars } from "..";

describe("#2: 5 characters", () => {
  describe("notFiveChars", () => {
    it("is defined", () => {
      expect(notFiveChars).not.to.be.undefined;
    });

    it("is a string that isn't 5 characters long", () => {
      expect(notFiveChars).to.be.a("string").to.not.have.lengthOf(5);
    });
  });

  describe("isItFiveChars", () => {
    it("is defined", () => {
      expect(isItFiveChars).not.to.be.undefined;
    });

    it("resolves to the String `it's 5 characters`", () => {
      expect(isItFiveChars).to.equal("not 5 characters");
    });
  });
});
