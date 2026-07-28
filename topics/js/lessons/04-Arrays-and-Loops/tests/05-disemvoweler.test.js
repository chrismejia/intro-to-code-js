import { disemvoweler } from "../05-disemvoweler.js";
import {
  noVowels,
  oneVowel,
  multiVowels,
  hasUppercase,
} from "../data/05-disemvoweler.data.js";

describe("#5: disemvoweler", () => {
  expect(typeof disemvoweler).toBe("function");
  describe("returns a string", () => {
    describe("no vowels -> same as the input string", () => {
      noVowels.forEach(({ str }) => {
        it(`'${str}' -> '${str}'`, () => {
          const testResult = disemvoweler(str);
          expect(testResult).toBe(str);
        });
      });
    });

    describe("has vowels", () => {
      describe("removes instances of one vowel", () => {
        oneVowel.forEach(({ str, result }) => {
          it(`'${str}' -> '${result}'`, () => {
            const testResult = disemvoweler(str);
            expect(testResult).toBe(result);
          });
        });
      });

      describe("removes multiple instances of multiple vowels", () => {
        multiVowels.forEach(({ str, result }) => {
          it(`'${str}' -> '${result}'`, () => {
            const testResult = disemvoweler(str);
            expect(testResult).toBe(result);
          });
        });
      });
    });
  });

  describe("BONUS: can handle UPPERCASE letters", () => {
    hasUppercase.forEach(({ str, result }) => {
      it(`'${str}' -> '${result}'`, () => {
        const testResult = disemvoweler(str);
        expect(testResult).toBe(result);
      });
    });
  });
});
