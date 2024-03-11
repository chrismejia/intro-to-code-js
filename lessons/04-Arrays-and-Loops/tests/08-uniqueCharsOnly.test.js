import { uniqueCharsOnly } from "../08-uniqueCharsOnly";
import { expect } from "chai";
import {
  singleRepeatingStr,
  fewCharRepeats,
  hasDoubleLetters,
  allUniqueLetters,
} from "../data/08-uniqueCharsOnly.data";

xdescribe("#8: uniqueCharsOnly", () => {
  expect(uniqueCharsOnly).to.be.a(
    "function",
    "No `uniqueCharsOnly` function found; please check if defined and exported correctly."
  );

  describe("returns an array of the unique characters in the string", () => {
    describe("if the string is one repeating character", () => {
      singleRepeatingStr.forEach(({ val, ans }) => {
        it(`"${val}" => ${JSON.stringify(ans)}`, () => {
          const result = uniqueCharsOnly(val);
          expect(result).to.eql(ans);
        });
      });
    });

    describe("if the string is just a few repeating characters", () => {
      fewCharRepeats.forEach(({ val, ans }) => {
        it(`"${val}" => ${JSON.stringify(ans)}`, () => {
          const result = uniqueCharsOnly(val);
          expect(result).to.eql(ans);
        });
      });
    });

    describe("if the string is made up a few recurring characters", () => {
      hasDoubleLetters.forEach(({ val, ans }) => {
        it(`"${val}" => ${JSON.stringify(ans)}`, () => {
          const result = uniqueCharsOnly(val);
          expect(result).to.eql(ans);
        });
      });
    });

    describe("if each character in the string is unique", () => {
      allUniqueLetters.forEach(({ val, ans }) => {
        it(`"${val}" => ${JSON.stringify(ans)}`, () => {
          const result = uniqueCharsOnly(val);
          expect(result).to.eql(ans);
        });
      });
    });
  });
});
