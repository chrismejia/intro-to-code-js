import { flipomatic } from "../07-flipomatic.js";
import {
  flipStart,
  flipEnd,
  hasFlip1,
  hasFlip2,
  hasFlip3,
  hasFlip4,
  flipArrs,
  noFlip1,
  noFlip2,
  noFlipArrs,
  twoFlip,
  multiFlip,
} from "../data/07-flipomatic.data.js";

xdescribe("#7: flipomatic", () => {
  expect(typeof flipomatic).toBe("function");

  describe("returns an array", () => {
    it("if there's a 'flip'", () => {
      flipArrs.forEach((arr) => {
        const result = flipomatic(arr);
        expect(Array.isArray(result)).toBe(true);
      });
    });
    it("if there's no 'flip'", () => {
      noFlipArrs.forEach((arr) => {
        const result = flipomatic(arr);
        expect(Array.isArray(result)).toBe(true);
      });
    });
  });

  describe("outputs an array of numbers, in the correct order", () => {
    describe("if there's a 'flip'", () => {
      it("at the front of the array", () => {
        expect(flipomatic(flipStart)).toEqual([5, 4, 3, 2, 1]);
      });

      it("at the back of the array", () => {
        expect(flipomatic(flipEnd)).toEqual([1, 2, 3, 4, 5]);
      });

      it("somewhere in the middle of the array", () => {
        expect(flipomatic(hasFlip1)).toEqual([5, 4, 3, 2, 1]);
        expect(flipomatic(hasFlip2)).toEqual([5, 4, 3, 1, 2]);
        expect(flipomatic(hasFlip3)).toEqual([5, 4, 1, 2, 3]);
        expect(flipomatic(hasFlip4)).toEqual([5, 1, 2, 3, 4]);
      });
    });

    it("if there's no 'flip'", () => {
      expect(flipomatic(noFlip1)).toEqual(noFlip1);
      expect(flipomatic(noFlip2)).toEqual(noFlip2);
    });
  });

  describe("BONUS: can handle multiple 'flip' values", () => {
    describe("2 'flip' vals", () => {
      twoFlip.forEach(({ val, ans }) => {
        it(`[${val}] => [${ans}]`, () => {
          const result = flipomatic(val);
          expect(result).toEqual(ans);
        });
      });
    });

    describe("more than 2 'flip' vals", () => {
      multiFlip.forEach(({ val, ans }) => {
        it(`[${val}] => [${ans}]`, () => {
          const result = flipomatic(val);
          expect(result).toEqual(ans);
        });
      });
    });
  });
});
