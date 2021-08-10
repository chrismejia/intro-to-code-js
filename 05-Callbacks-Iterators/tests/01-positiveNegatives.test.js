import { expect } from "chai";
import sinon from "sinon";
import { a, b, c, d, e, testArr } from "../data/positiveNegatives.data";
import { multiplyNums, numType } from "../01-positivesNegatives";

describe.only("#1: Positives & Negatives", () => {
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

  describe("numType", () => {
    it("is a function", () => {
      expect(numType).to.be.a("function");
    });

    const abSpy = sinon.spy(multiplyNums);
    const acSpy = sinon.spy(multiplyNums);
    const adSpy = sinon.spy(multiplyNums);
    const aeSpy = sinon.spy(multiplyNums);
    const cbSpy = sinon.spy(multiplyNums);
    const cdSpy = sinon.spy(multiplyNums);
    const ebSpy = sinon.spy(multiplyNums);

    const abMult = numType(a, b, abSpy);
    const acMult = numType(a, c, acSpy);
    const adMult = numType(a, d, adSpy);
    const aeMult = numType(a, e, aeSpy);
    const cbMult = numType(c, b, cbSpy);
    const cdMult = numType(c, d, cdSpy);
    const ebMult = numType(e, b, ebSpy);

    it("runs the callback function using both of numTypes number inputs", () => {
      const abInputsCorrect = abSpy.calledWith(a, b);
      const acInputsCorrect = acSpy.calledWith(a, c);
      const adInputsCorrect = adSpy.calledWith(a, d);
      const aeInputsCorrect = aeSpy.calledWith(a, e);
      const cbInputsCorrect = cbSpy.calledWith(c, b);
      const cdInputsCorrect = cdSpy.calledWith(c, d);
      const ebInputsCorrect = ebSpy.calledWith(e, b);

      expect(abInputsCorrect).to.be.true;
      expect(acInputsCorrect).to.be.true;
      expect(adInputsCorrect).to.be.true;
      expect(aeInputsCorrect).to.be.true;
      expect(cbInputsCorrect).to.be.true;
      expect(cdInputsCorrect).to.be.true;
      expect(ebInputsCorrect).to.be.true;
    });

    describe("when a times b is positive", () => {
      it("runs the multiplyNums callback only once", () => {
        expect(abSpy.calledOnce).to.be.true;
        expect(cdSpy.calledOnce).to.be.true;
      });

      it("returns the correct report string", () => {
        expect(abMult).to.be.a("string");
        expect(cdMult).to.be.a("string");

        expect(abMult).to.include(`${a} times ${b}`);
        expect(cdMult).to.include(`${c} times ${d}`);
      });
    });

    describe("when a times b is negative", () => {
      it("runs the multiplyNums callback twice", () => {
        expect(acSpy.calledTwice).to.be.true;
        expect(adSpy.calledTwice).to.be.true;
        expect(cbSpy.calledTwice).to.be.true;
      });

      it("returns the correct report string", () => {
        expect(acMult).to.be.a("string");
        expect(adMult).to.be.a("string");
        expect(cbMult).to.be.a("string");

        expect(acMult).to.include(`${a} times ${c}`);
        expect(adMult).to.include(`${a} times ${d}`);
        expect(cbMult).to.include(`${c} times ${b}`);
      });
    });

    describe("when a times b is zero", () => {
      it("runs the multiplyNums callback twice", () => {
        expect(aeSpy.calledTwice).to.be.true;
        expect(ebSpy.calledTwice).to.be.true;
      });

      it("returns the correct report string", () => {
        expect(aeMult).to.be.a("string");
        expect(ebMult).to.be.a("string");

        expect(aeMult).to.include(`${a} times ${e} is zero`);
        expect(ebMult).to.include(`${e} times ${b} is zero`);
      });
    });
  });
});
