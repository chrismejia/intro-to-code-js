import { expect } from "chai";
import { daysInTheMonth } from "..";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-02` in the Shell and hit Enter.
 */

describe("#7: daysInTheMonth", () => {
  describe("returns the correct number of days", () => {
    it("when the month is 1, 3, 5, 7, 8, 10, 12", () => {
      expect(daysInTheMonth(1)).to.equal(31);
      expect(daysInTheMonth(3)).to.equal(31);
      expect(daysInTheMonth(5)).to.equal(31);
      expect(daysInTheMonth(7)).to.equal(31);
      expect(daysInTheMonth(8)).to.equal(31);
      expect(daysInTheMonth(10)).to.equal(31);
      expect(daysInTheMonth(12)).to.equal(31);
    });

    it("when the month is 4, 6, 9, 11", () => {
      expect(daysInTheMonth(4)).to.equal(30);
      expect(daysInTheMonth(6)).to.equal(30);
      expect(daysInTheMonth(9)).to.equal(30);
      expect(daysInTheMonth(11)).to.equal(30);
    });

    it("when the month is 2", () => {
      expect(daysInTheMonth(2)).to.equal(28);
    });
  });

  it("handles invalid inputs correctly", () => {
    const err = "Not a valid month.";

    expect(daysInTheMonth(-12)).to.equal(err);
    expect(daysInTheMonth(-1)).to.equal(err);
    expect(daysInTheMonth(0)).to.equal(err);
    expect(daysInTheMonth(15)).to.equal(err);
    expect(daysInTheMonth("month")).to.equal(err);
    expect(daysInTheMonth("February")).to.equal(err);
    expect(daysInTheMonth("12")).to.equal(err);
    expect(daysInTheMonth("1")).to.equal(err);
    expect(daysInTheMonth([1, 2, 3])).to.equal(err);
    expect(daysInTheMonth({})).to.equal(err);
  });
});
