import { numberOrString } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * To check one exercise at a time with Jest:
 * 1. Find the exercise you're working on.
 * 2. Remove the `x` from `xdescribe` or `xit` for that exercise.
 * 3. Run `npm run test:02` from the repo root.
 * 4. Read the Jest output for passing and failing checks.
 */

describe("#3: numberOrString", () => {
  describe("returns the correct output", () => {
    it("string input -> 'This is a string'", () => {
      expect(numberOrString("")).toBe("This is a string");
      expect(numberOrString("a")).toBe("This is a string");
      expect(numberOrString("word")).toBe("This is a string");
      expect(numberOrString("two words")).toBe("This is a string");
      expect(numberOrString("a1b2c3")).toBe("This is a string");
    });

    it("number input -> 'This is a number'", () => {
      for (let i = 1; i <= 100; i++) {
        let num = i * Math.ceil(Math.random() * 99);
        expect(numberOrString(num)).toBe("This is a number");
      }
    });

    it("any other input -> 'This is not a string nor a number'", () => {
      let types = [{ a: 1 }, [1, 2, 3], false];

      types.forEach((type) => {
        expect(typeof numberOrString(type)).toBe("string");
      });
    });
  });
});
