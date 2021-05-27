function multiplyNums(a, b) {
  return a * b;
}

function isOddNum(a, b, multiplyFn) {
  if (multiplyFn(a, b) > 0) {
    return `${a} times ${b} is a positive number.`;
  } else if (multiplyFn(a, b) < 0) {
    return `${a} times ${b} is a negative number.`;
  } else return `${a} times ${b} is 0.`;
}

/**
 * arr of nums; neg, 0, pos
 *
 */

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-05` in the Shell and hit Enter.
 */
import { expect } from "chai";

describe("05 - Callbacks and Iterators", () => {
  describe("#1: Positives & Negatives", () => {
    const a = 3;
    const b = 5;
    const c = -3;
    const d = -5;
    const e = 0;

    describe("returns a string", () => {
      it("when the multiple is positive", () => {
        expect(isOddNum(a, b, multiplyNums)).to.be.a("string");
        expect(isOddNum(c, d, multiplyNums)).to.be.a("string");
      });
      it("when the multiple is negative", () => {
        expect(isOddNum(c, b, multiplyNums)).to.be.a("string");
        expect(isOddNum(a, d, multiplyNums)).to.be.a("string");
      });
      it("when the multiple is zero", () => {
        expect(isOddNum(a, e, multiplyNums)).to.be.a("string");
        expect(isOddNum(e, b, multiplyNums)).to.be.a("string");
      });
    });

    describe("features the multiples in the correct order in the return string", () => {
      it("when the multiple is positive", () => {
        expect(isOddNum(a, b, multiplyNums)).to.include(`${a} times ${b}`);
        expect(isOddNum(c, d, multiplyNums)).to.include(`${c} times ${d}`);
      });
      it("when the multiple is negative", () => {
        expect(isOddNum(c, b, multiplyNums)).to.include(`${c} times ${b}`);
        expect(isOddNum(a, d, multiplyNums)).to.include(`${a} times ${d}`);
      });
      it("when the multiple is zero", () => {
        expect(isOddNum(a, e, multiplyNums)).to.include(`${a} times ${e}`);
        expect(isOddNum(e, b, multiplyNums)).to.include(`${e} times ${b}`);
      });
    });

    describe("correctly reports", () => {
      it("when the multiple is positive", () => {
        expect(isOddNum(a, b, multiplyNums)).to.include(`positive`);
        expect(isOddNum(c, d, multiplyNums)).to.include(`positive`);
      });
      it("when the multiple is negative", () => {
        expect(isOddNum(c, b, multiplyNums)).to.include(`negative`);
        expect(isOddNum(a, d, multiplyNums)).to.include(`negative`);
      });
      it("when the multiple is zero", () => {
        expect(isOddNum(a, e, multiplyNums)).to.include(`is 0.`);
        expect(isOddNum(e, b, multiplyNums)).to.include(`is 0.`);
      });
    });
  });
});
