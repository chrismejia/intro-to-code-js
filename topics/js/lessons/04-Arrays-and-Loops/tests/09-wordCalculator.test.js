import { wordCalculator } from "../09-wordCalculator.js";
import {
  zeroStarts,
  oneCalcs,
  twoCalcs,
  multiCalcs,
  invalidCalcs,
  allCalcs,
} from "../data/09-wordCalculator.data.js";

xdescribe("#9: wordCalculator", () => {
  expect(typeof wordCalculator).toBe("function");

  it("returns a number", () => {
    allCalcs.forEach(({ nums, ops }) => {
      expect(typeof wordCalculator(nums, ops)).toBe("number");
    });
  });

  it("has an initial value of 0", () => {
    zeroStarts.forEach(({ nums, ops }) => {
      expect(wordCalculator(nums, ops)).toBe(0);
    });
  });

  it("returns 0 if the operations are invalid", () => {
    invalidCalcs.forEach(({ nums, ops }) => {
      expect(wordCalculator(nums, ops)).toBe(0);
    });
  });

  describe("returns the correct answer", () => {
    describe("when there's only one operation", () => {
      oneCalcs.forEach(({ nums, ops, result }) => {
        it(`[${nums}], [${ops}] -> ${result}`, () => {
          expect(wordCalculator(nums, ops)).toBe(result);
        });
      });
    });

    describe("when there are two operations", () => {
      twoCalcs.forEach(({ nums, ops, result }) => {
        it(`[${nums}], [${ops}] -> ${result}`, () => {
          expect(wordCalculator(nums, ops)).toBe(result);
        });
      });
    });

    describe("when there are three or more operations", () => {
      multiCalcs.forEach(({ nums, ops, result }) => {
        it(`[${nums}], [${ops}] -> ${result}`, () => {
          expect(wordCalculator(nums, ops)).toBe(result);
        });
      });
    });
  });
});
