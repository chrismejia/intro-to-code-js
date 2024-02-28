import { disemvoweler } from "../05-disemvoweler";
import { expect } from "chai";
import {
  noVowels,
  oneVowel,
  multiVowels,
  hasUppercase,
} from "../data/05-disemvoweler.data";

describe("#5: disemvoweler", () => {
  describe("returns a string", () => {
    describe("no vowels -> same as the input string", () => {
      noVowels.forEach(({ str }) => {
        it(`'${str}' -> '${str}'`, () => {
          const testResult = disemvoweler(str);
          expect(testResult).to.equal(str);
        });
      });
    });

    describe("has vowels", () => {
      describe("removes instances of one vowel", () => {
        oneVowel.forEach(({ str, result }) => {
          it(`'${str}' -> '${result}'`, () => {
            const testResult = disemvoweler(str);
            expect(testResult).to.equal(result);
          });
        });
      });

      describe("removes multiple instances of multiple vowels", () => {
        multiVowels.forEach(({ str, result }) => {
          it(`'${str}' -> '${result}'`, () => {
            const testResult = disemvoweler(str);
            expect(testResult).to.equal(result);
          });
        });
      });
    });
  });

  describe("BONUS: can handle UPPERCASE letters", () => {
    hasUppercase.forEach(({ str, result }) => {
      it(`'${str}' -> '${result}'`, () => {
        const testResult = disemvoweler(str);
        expect(testResult).to.equal(result);
      });
    });
  });
});
