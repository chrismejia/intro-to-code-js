import { pairMultiplier } from "../10-pairMultiplier.js";
import {
  firstArrSmaller,
  sameArraySizes,
  secondArrSmaller,
} from "../data/10-pairMultiplier.data.js";

describe("#10: pairMultiplier", () => {
  expect(typeof pairMultiplier).toBe("function");

  describe("returns an array of multiplied numbers, in the correct order", () => {
    describe("when both arrays are the same size", () => {
      sameArraySizes.forEach(({ arr1, arr2, result }) => {
        it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
          expect(pairMultiplier(arr1, arr2)).toEqual(result);
        });
      });
    });

    describe("first array smaller than second", () => {
      firstArrSmaller.forEach(({ arr1, arr2, result }) => {
        it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
          expect(pairMultiplier(arr1, arr2)).toEqual(result);
        });
      });
    });

    describe("second array smaller than first", () => {
      secondArrSmaller.forEach(({ arr1, arr2, result }) => {
        it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
          expect(pairMultiplier(arr1, arr2)).toEqual(result);
        });
      });
    });
  });
});
