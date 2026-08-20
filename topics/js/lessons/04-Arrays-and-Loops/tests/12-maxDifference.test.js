import { maxDifference } from "../12-maxDifference.js";
import {
  oneNum,
  twoNums,
  threeNums,
  allSameNums,
  withRepeats,
} from "../data/12-maxDifference.data.js";

xdescribe("#12: maxDifference", () => {
  it("returns a number", () => {
    const allArrs = [oneNum, ...twoNums, ...threeNums, ...allSameNums];

    allArrs.forEach((arr) => {
      const result = maxDifference(arr);
      expect(typeof result).toBe("number");
    });
  });

  describe("returns the max difference of values", () => {
    it("for a 1 number array", () => {
      const result = maxDifference(oneNum);
      expect(result).toBe(0);
    });

    describe("for a multi number array", () => {
      it("of all the same number", () => {
        allSameNums.forEach((arr) => {
          const result = maxDifference(arr);
          expect(result).toBe(0);
        });
      });

      it("of all different numbers", () => {
        twoNums.forEach((arr) => {
          const result = maxDifference(arr);
          expect(result).toBe(1);
        });

        threeNums.forEach((arr) => {
          const result = maxDifference(arr);
          expect(result).toBe(2);
        });
      });

      it("with some repeats", () => {
        withRepeats.forEach((arr) => {
          const result = maxDifference(arr);
          expect(result).toBe(4);
        });
      });
    });
  });
});
