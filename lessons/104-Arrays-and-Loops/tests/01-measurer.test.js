import { expect } from "chai";
import { measurer } from "../01-measurer";

describe("#1: measurer", () => {
  const resultA = measurer([]);
  const resultB = measurer([1]);
  const resultC = measurer([1, 3, 5, 7, 9]);
  const resultD = measurer(["abc", true, { a: 1, b: 2 }]);

  it("returns a number", () => {
    expect(resultA).to.be.a("number");
    expect(resultB).to.be.a("number");
    expect(resultC).to.be.a("number");
    expect(resultD).to.be.a("number");
  });

  describe("returns the correct number of items", () => {
    it("when the array is empty", () => {
      expect(resultA).to.equal(0);
    });

    it("when the array is not empty", () => {
      expect(resultB).to.equal(1);
      expect(resultC).to.equal(5);
      expect(resultD).to.equal(3);
    });
  });
});
