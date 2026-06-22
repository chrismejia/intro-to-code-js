import { jest } from "@jest/globals";
import { a, b, c, d, e, testArr } from "../data/positiveNegatives.data.js";
import { multiplyNums, numType } from "../01-positivesNegatives.js";

const getNumTypeCases = () => {
  const abSpy = jest.fn(multiplyNums);
  const acSpy = jest.fn(multiplyNums);
  const adSpy = jest.fn(multiplyNums);
  const aeSpy = jest.fn(multiplyNums);
  const cbSpy = jest.fn(multiplyNums);
  const cdSpy = jest.fn(multiplyNums);
  const ebSpy = jest.fn(multiplyNums);

  return {
    abSpy,
    acSpy,
    adSpy,
    aeSpy,
    cbSpy,
    cdSpy,
    ebSpy,
    abMult: numType(a, b, abSpy),
    acMult: numType(a, c, acSpy),
    adMult: numType(a, d, adSpy),
    aeMult: numType(a, e, aeSpy),
    cbMult: numType(c, b, cbSpy),
    cdMult: numType(c, d, cdSpy),
    ebMult: numType(e, b, ebSpy),
  };
};

describe("#1: Positives & Negatives", () => {
  describe("multiplyNums", () => {
    it("is a function", () => {
      expect(typeof multiplyNums).toBe("function");
    });

    it("returns a number", () => {
      for (const num1 of testArr) {
        for (const num2 of testArr) {
          expect(typeof multiplyNums(num1, num2)).toBe("number");
        }
      }
    });
  });

  describe("numType", () => {
    it("is a function", () => {
      expect(typeof numType).toBe("function");
    });

    it("runs the callback function using both of numTypes number inputs", () => {
      const { abSpy, acSpy, adSpy, aeSpy, cbSpy, cdSpy, ebSpy } =
        getNumTypeCases();

      expect(abSpy).toHaveBeenCalledWith(a, b);
      expect(acSpy).toHaveBeenCalledWith(a, c);
      expect(adSpy).toHaveBeenCalledWith(a, d);
      expect(aeSpy).toHaveBeenCalledWith(a, e);
      expect(cbSpy).toHaveBeenCalledWith(c, b);
      expect(cdSpy).toHaveBeenCalledWith(c, d);
      expect(ebSpy).toHaveBeenCalledWith(e, b);
    });

    describe("when a times b is positive", () => {
      it("runs the multiplyNums callback only once", () => {
        const { abSpy, cdSpy } = getNumTypeCases();

        expect(abSpy).toHaveBeenCalledTimes(1);
        expect(cdSpy).toHaveBeenCalledTimes(1);
      });

      it("returns the correct report string", () => {
        const { abMult, cdMult } = getNumTypeCases();

        expect(typeof abMult).toBe("string");
        expect(typeof cdMult).toBe("string");

        expect(abMult).toContain(`${a} times ${b}`);
        expect(cdMult).toContain(`${c} times ${d}`);
      });
    });

    describe("when a times b is negative", () => {
      it("runs the multiplyNums callback twice", () => {
        const { acSpy, adSpy, cbSpy } = getNumTypeCases();

        expect(acSpy).toHaveBeenCalledTimes(2);
        expect(adSpy).toHaveBeenCalledTimes(2);
        expect(cbSpy).toHaveBeenCalledTimes(2);
      });

      it("returns the correct report string", () => {
        const { acMult, adMult, cbMult } = getNumTypeCases();

        expect(typeof acMult).toBe("string");
        expect(typeof adMult).toBe("string");
        expect(typeof cbMult).toBe("string");

        expect(acMult).toContain(`${a} times ${c}`);
        expect(adMult).toContain(`${a} times ${d}`);
        expect(cbMult).toContain(`${c} times ${b}`);
      });
    });

    describe("when a times b is zero", () => {
      it("runs the multiplyNums callback twice", () => {
        const { aeSpy, ebSpy } = getNumTypeCases();

        expect(aeSpy).toHaveBeenCalledTimes(2);
        expect(ebSpy).toHaveBeenCalledTimes(2);
      });

      it("returns the correct report string", () => {
        const { aeMult, ebMult } = getNumTypeCases();

        expect(typeof aeMult).toBe("string");
        expect(typeof ebMult).toBe("string");

        expect(aeMult).toContain(`${a} times ${e} is zero`);
        expect(ebMult).toContain(`${e} times ${b} is zero`);
      });
    });
  });
});
