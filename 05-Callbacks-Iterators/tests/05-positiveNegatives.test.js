import { expect } from "chai";
import { a, b, c, d, e, testArr } from "../data/positiveNegatives.data";
import { multiplyNums, isOddNum } from "../01-positivesNegatives";

describe("#1: Positives & Negatives", () => {
  describe("multiplyNums", () => {
    it("is a function", () => {
      expect(multiplyNums).to.be.a("function");
    });

    it("returns a number", () => {
      for (const num1 of testArr) {
        for (const num2 of testArr) {
          expect(multiplyNums(num1, num2)).to.be.a("number");
        }
      }
    });
  });

  describe("isOddNum", () => {
    it("is a function", () => {
      expect(isOddNum).to.be.a("function");
    });

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
        expect(isOddNum(a, e, multiplyNums)).to.include(`is zero.`);
        expect(isOddNum(e, b, multiplyNums)).to.include(`is zero.`);
      });
    });
  });
});
