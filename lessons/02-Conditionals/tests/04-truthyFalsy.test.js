import { expect } from "chai";
import { truthyFalsy } from "..";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-02` in the Shell and hit Enter.
 */

describe("#4: truthyFalsy", () => {
  describe("returns false", () => {
    it("value -> 0", () => {
      expect(truthyFalsy(0)).to.be.false;
    });

    it('value -> ""', () => {
      expect(truthyFalsy("")).to.be.false;
    });

    it("value -> null", () => {
      expect(truthyFalsy(null)).to.be.false;
    });

    it("value -> undefined", () => {
      expect(truthyFalsy(undefined)).to.be.false;
    });
  });

  describe("returns true", () => {
    it("value -> false", () => {
      expect(truthyFalsy(false)).to.be.false;
    });

    it("value -> any other number", () => {
      expect(truthyFalsy(1)).to.be.true;
      expect(truthyFalsy(Math.PI)).to.be.true;
      expect(truthyFalsy(Infinity)).to.be.true;
    });

    it("value -> any other string", () => {
      expect(truthyFalsy("a")).to.be.true;
      expect(truthyFalsy("hello 'world'")).to.be.true;
      expect(truthyFalsy(`template expression 1 + 2 = ${1 + 2}`)).to.be.true;
    });

    it("value -> an array", () => {
      expect(truthyFalsy([])).to.be.true;
      expect(truthyFalsy([1])).to.be.true;
      expect(truthyFalsy([1, 2, 3, 4, 5])).to.be.true;
    });

    it("value -> an object", () => {
      expect(truthyFalsy({})).to.be.true;
      expect(truthyFalsy({ a: 1 })).to.be.true;
    });
  });
});
