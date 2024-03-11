import { disemvoweler } from "../05-disemvoweler";
import { expect } from "chai";
import {
  noVowels,
  oneVowel,
  multiVowels,
  hasUppercase,
} from "../data/05-disemvoweler.data";

xdescribe("#5: disemvoweler", () => {
  expect(disemvoweler).to.be.a(
    "function",
    "No `disemvoweler` function found; please check if defined and exported correctly."
  );
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

  xdescribe("BONUS: can handle UPPERCASE letters", () => {
    hasUppercase.forEach(({ str, result }) => {
      it(`'${str}' -> '${result}'`, () => {
        const testResult = disemvoweler(str);
        expect(testResult).to.equal(result);
      });
    });
  });
});
