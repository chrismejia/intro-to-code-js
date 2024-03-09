import { wordCalculator } from "../09-wordCalculator";
import { expect } from "chai";
import {
  zeroStarts,
  oneCalcs,
  twoCalcs,
  multiCalcs,
  invalidCalcs,
  allCalcs,
} from "../data/09-wordCalculator.data";

describe("#9: wordCalculator", () => {
  it("returns a number", () => {
    allCalcs.forEach(({ nums, ops }) => {
      expect(wordCalculator(nums, ops)).to.be.a("number");
    });
  });

  it("has an initial value of 0", () => {
    zeroStarts.forEach(({ nums, ops }) => {
      expect(wordCalculator(nums, ops)).to.equal(0);
    });
  });

  it("returns 0 if the operations are invalid", () => {
    invalidCalcs.forEach(({ nums, ops }) => {
      expect(wordCalculator(nums, ops)).to.equal(0);
    });
  });

  describe("returns the correct answer", () => {
    describe("when there's only one operation", () => {
      oneCalcs.forEach(({ nums, ops, result }) => {
        it(`[${nums}], [${ops}] -> ${result}`, () => {
          expect(wordCalculator(nums, ops)).to.equal(result);
        });
      });
    });

    describe("when there are two operations", () => {
      twoCalcs.forEach(({ nums, ops, result }) => {
        it(`[${nums}], [${ops}] -> ${result}`, () => {
          expect(wordCalculator(nums, ops)).to.equal(result);
        });
      });
    });

    describe("when there are three or more operations", () => {
      multiCalcs.forEach(({ nums, ops, result }) => {
        it(`[${nums}], [${ops}] -> ${result}`, () => {
          expect(wordCalculator(nums, ops)).to.equal(result);
        });
      });
    });
  });
});
