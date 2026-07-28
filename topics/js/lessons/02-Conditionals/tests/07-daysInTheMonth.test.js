import { daysInTheMonth } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * To check one exercise at a time with Jest:
 * 1. Find the exercise you're working on.
 * 2. Remove the `x` from `xdescribe` or `xit` for that exercise.
 * 3. Run `npm run test:02` from the repo root.
 * 4. Read the Jest output for passing and failing checks.
 */

describe("#7: daysInTheMonth", () => {
  describe("returns the correct number of days", () => {
    it("when the month is 1, 3, 5, 7, 8, 10, 12", () => {
      expect(daysInTheMonth(1)).toBe(31);
      expect(daysInTheMonth(3)).toBe(31);
      expect(daysInTheMonth(5)).toBe(31);
      expect(daysInTheMonth(7)).toBe(31);
      expect(daysInTheMonth(8)).toBe(31);
      expect(daysInTheMonth(10)).toBe(31);
      expect(daysInTheMonth(12)).toBe(31);
    });

    it("when the month is 4, 6, 9, 11", () => {
      expect(daysInTheMonth(4)).toBe(30);
      expect(daysInTheMonth(6)).toBe(30);
      expect(daysInTheMonth(9)).toBe(30);
      expect(daysInTheMonth(11)).toBe(30);
    });

    it("when the month is 2", () => {
      expect(daysInTheMonth(2)).toBe(28);
    });
  });

  it("handles invalid inputs correctly", () => {
    const err = "Not a valid month.";

    expect(daysInTheMonth(-12)).toBe(err);
    expect(daysInTheMonth(-1)).toBe(err);
    expect(daysInTheMonth(0)).toBe(err);
    expect(daysInTheMonth(15)).toBe(err);
    expect(daysInTheMonth("month")).toBe(err);
    expect(daysInTheMonth("February")).toBe(err);
    expect(daysInTheMonth("12")).toBe(err);
    expect(daysInTheMonth("1")).toBe(err);
    expect(daysInTheMonth([1, 2, 3])).toBe(err);
    expect(daysInTheMonth({})).toBe(err);
  });
});
