import { expect } from "chai";
import { pairMultiplier } from "../10-pairMultiplier";
import {
  firstArrSmaller,
  sameArraySizes,
  secondArrSmaller,
} from "../data/10-pairMultiplier.data";

xdescribe("#10: pairMultiplier", () => {
  expect(pairMultiplier).to.be.a(
    "function",
    "No `pairMultiplier` function found; please check if defined and exported correctly."
  );

  describe("returns an array of multiplied numbers, in the correct order", () => {
    describe("when both arrays are the same size", () => {
      sameArraySizes.forEach(({ arr1, arr2, result }) => {
        it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
          expect(pairMultiplier(arr1, arr2)).to.deep.equal(result);
        });
      });
    });

    describe("first array smaller than second", () => {
      firstArrSmaller.forEach(({ arr1, arr2, result }) => {
        it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
          expect(pairMultiplier(arr1, arr2)).to.deep.equal(result);
        });
      });
    });

    describe("second array smaller than first", () => {
      secondArrSmaller.forEach(({ arr1, arr2, result }) => {
        it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
          expect(pairMultiplier(arr1, arr2)).to.deep.equal(result);
        });
      });
    });
  });
});
