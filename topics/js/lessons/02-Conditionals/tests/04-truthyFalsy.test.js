import { truthyFalsy } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test:02` in the Shell and hit Enter.
 */

describe("#4: truthyFalsy", () => {
  describe("returns false", () => {
    it("value -> 0", () => {
      expect(truthyFalsy(0)).toBe(false);
    });

    it('value -> ""', () => {
      expect(truthyFalsy("")).toBe(false);
    });

    it("value -> null", () => {
      expect(truthyFalsy(null)).toBe(false);
    });

    it("value -> undefined", () => {
      expect(truthyFalsy(undefined)).toBe(false);
    });
  });

  describe("returns true", () => {
    it("value -> false", () => {
      expect(truthyFalsy(false)).toBe(false);
    });

    it("value -> any other number", () => {
      expect(truthyFalsy(1)).toBe(true);
      expect(truthyFalsy(Math.PI)).toBe(true);
      expect(truthyFalsy(Infinity)).toBe(true);
    });

    it("value -> any other string", () => {
      expect(truthyFalsy("a")).toBe(true);
      expect(truthyFalsy("hello 'world'")).toBe(true);
      expect(truthyFalsy(`template expression 1 + 2 = ${1 + 2}`)).toBe(true);
    });

    it("value -> an array", () => {
      expect(truthyFalsy([])).toBe(true);
      expect(truthyFalsy([1])).toBe(true);
      expect(truthyFalsy([1, 2, 3, 4, 5])).toBe(true);
    });

    it("value -> an object", () => {
      expect(truthyFalsy({})).toBe(true);
      expect(truthyFalsy({ a: 1 })).toBe(true);
    });
  });
});
