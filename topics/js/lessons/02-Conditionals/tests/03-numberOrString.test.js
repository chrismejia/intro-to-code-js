import { numberOrString } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

xdescribe("#3: numberOrString", () => {
  describe("returns the correct output", () => {
    it("string input -> 'This is a string'", () => {
      expect(numberOrString("")).toBe("This is a string");
      expect(numberOrString("a")).toBe("This is a string");
      expect(numberOrString("word")).toBe("This is a string");
      expect(numberOrString("two words")).toBe("This is a string");
      expect(numberOrString("a1b2c3")).toBe("This is a string");
    });

    it("number input -> 'This is a number'", () => {
      expect(numberOrString(0)).toBe("This is a number");
      expect(numberOrString(42)).toBe("This is a number");
      expect(numberOrString(-12)).toBe("This is a number");
      expect(numberOrString(3.14)).toBe("This is a number");
    });

    it("any other input -> 'This is not a string nor a number'", () => {
      const types = [{ a: 1 }, [1, 2, 3], false, null, undefined];

      types.forEach((type) => {
        expect(numberOrString(type)).toBe(
          "This is not a string nor a number",
        );
      });
    });
  });
});
