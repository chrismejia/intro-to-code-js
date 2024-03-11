import { flipomatic } from "../07-flipomatic";
import { expect } from "chai";
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
} from "../data/07-flipomatic.data";

xdescribe("#7: flipomatic", () => {
  expect(flipomatic).to.be.a(
    "function",
    "No `flipomatic` function found; please check if defined and exported correctly."
  );

  describe("returns an array", () => {
    it("if there's a 'flip'", () => {
      flipArrs.forEach((arr) => {
        const result = flipomatic(arr);
        expect(result).to.be.an("array");
      });
    });
    it("if there's no 'flip'", () => {
      noFlipArrs.forEach((arr) => {
        const result = flipomatic(arr);
        expect(result).to.be.an("array");
      });
    });
  });

  describe("outputs an array of numbers, in the correct order", () => {
    describe("if there's a 'flip'", () => {
      it("at the front of the array", () => {
        expect(flipomatic(flipStart)).to.eql([5, 4, 3, 2, 1]);
      });

      it("at the back of the array", () => {
        expect(flipomatic(flipEnd)).to.eql([1, 2, 3, 4, 5]);
      });

      it("somewhere in the middle of the array", () => {
        expect(flipomatic(hasFlip1)).to.eql([5, 4, 3, 2, 1]);
        expect(flipomatic(hasFlip2)).to.eql([5, 4, 3, 1, 2]);
        expect(flipomatic(hasFlip3)).to.eql([5, 4, 1, 2, 3]);
        expect(flipomatic(hasFlip4)).to.eql([5, 1, 2, 3, 4]);
      });
    });

    it("if there's no 'flip'", () => {
      expect(flipomatic(noFlip1)).to.eql(noFlip1);
      expect(flipomatic(noFlip2)).to.eql(noFlip2);
    });
  });

  xdescribe("BONUS: can handle multiple 'flip' values", () => {
    describe("2 'flip' vals", () => {
      twoFlip.forEach(({ val, ans }) => {
        it(`[${val}] => [${ans}]`, () => {
          const result = flipomatic(val);
          expect(result).to.eql(ans);
        });
      });
    });

    describe("more than 2 'flip' vals", () => {
      multiFlip.forEach(({ val, ans }) => {
        it(`[${val}] => [${ans}]`, () => {
          const result = flipomatic(val);
          expect(result).to.eql(ans);
        });
      });
    });
  });
});
