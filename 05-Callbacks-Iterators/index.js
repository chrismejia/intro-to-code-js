/**
 * #1: Positives & Negatives
 *
 * Define the function `multiplyNums`.
 * `multiplyNums` accepts two numbers and returns their multiple.
 *
 * Define the function `isOddNum`.
 * `isOddNum` accepts two numbers and a function to be called within.
 * `isOddNum` returns a string containing `a`, `b`, and the multiple of both.
 * Where a times b is zero, the string reports that the multiple is zero.
 *
 * @function multiplyNums
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} the result of a times b
 *
 * @function isOddNum
 * @param {Number} a
 * @param {Number} b
 * @param {Function} multiplyFn - the function to invoke with `a` and `b`.
 * @returns {String} details whether the result of `multiplyFn` was a positive or negative number, or zero.
 *
 * @example
 * isOddNum(3, 5, multiplyNums) => "3 times 5 is a positive number."
 * isOddNum(-3, 5, multiplyNums) => "-3 times 5 is a negative number."
 * isOddNum(-3, -5, multiplyNums) => "-3 times -5 is a positive number."
 * isOddNum(-3, 0, multiplyNums) => "-3 times 0 is zero."
 * isOddNum(0, 5, multiplyNums) => "0 times 5 is zero."
 */

function multiplyNums(a, b) {
  return a * b;
}

function isOddNum(a, b, multiplyFn) {
  if (multiplyFn(a, b) > 0) {
    return `${a} times ${b} is a positive number.`;
  } else if (multiplyFn(a, b) < 0) {
    return `${a} times ${b} is a negative number.`;
  } else return `${a} times ${b} is zero.`;
}

/**
 * Define the function `startingCapsOnly`.
 * `startingCapsOnly` accepts an array of Strings; the array is always .length >= 1
 * `startingCapsOnly` returns a new array made of any words that begin with a capital letter.
 * Use `.filter`!
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * @function startingCapsOnly
 * @param {String[]} words
 * @returns {String[]}
 * @example
 * startingCapsOnly(["Microsoft", "Tokyo", "Charlie"]) // => ["Microsoft", "Tokyo", "Charlie"];
 * startingCapsOnly(["party", "car", "banana"]) // => [];
 * startingCapsOnly(["whOOps", "lION", "monkeY"]) // => [];
 * startingCapsOnly(["Microsoft", "party", "lION"]) // => ["Microsoft"]
 */

const uppers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function startingCapsOnly(words) {
  return words.filter((word) => uppers.indexOf(word[0]) !== -1);
}

/**
 * Define the function isNumberCool.
 * isNumberCool tells us that a number is cool if a number is an integer, that is, it has no decimal point.
 * Cool: 1, 4, 9
 * Uncool: 1.7, 3.14, 9.000001
 *
 * Define the function coolNumbersGetSquaredSquared.
 * Cool numbers grow large by getting squared twice in a row.
 * e.g. 2 ** 2 => 4; 4 ** 2 => 16
 *
 * @function coolNumbersGetSquaredSquared
 * @param {Number[]} nums
 * @returns {Number[]}
 */
function isNumberCool(num) {
  return Number.isInteger(num);
}

function coolSquaredNumbers(num) {
  return (num ** 2) ** 2;
}

function coolNumbersGetSquaredSquared(nums, coolCheck, squareCools) {
  return nums.filter(coolCheck).map(squareCools);
}

// Chained methods
// function coolNumbersGetSquaredSquared(nums, coolCheck, squareCools) {
//   return nums
//     .filter((num) => !Number.isInteger(num))
//     .map((num) => (num ** 2) ** 2);
// }

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-05` in the Shell and hit Enter.
 */
import { expect } from "chai";

describe("05 - Callbacks and Iterators", () => {
  describe("#1: Positives & Negatives", () => {
    const a = 3;
    const b = 5;
    const c = -3;
    const d = -5;
    const e = 0;

    describe("returns a string", () => {
      it("when the multiple is positive", () => {
        expect(isOddNum(a, b, multiplyNums)).to.be.a("string");
        expect(isOddNum(c, d, multiplyNums)).to.be.a("string");
      });
      it("when the multiple is negative", () => {
        expect(isOddNum(c, b, multiplyNums)).to.be.a("string");
        expect(isOddNum(a, d, multiplyNums)).to.be.a("string");
      });
      it("when the multiple is zero", () => {
        expect(isOddNum(a, e, multiplyNums)).to.be.a("string");
        expect(isOddNum(e, b, multiplyNums)).to.be.a("string");
      });
    });

    describe("features the multiples in the correct order in the return string", () => {
      it("when the multiple is positive", () => {
        expect(isOddNum(a, b, multiplyNums)).to.include(`${a} times ${b}`);
        expect(isOddNum(c, d, multiplyNums)).to.include(`${c} times ${d}`);
      });
      it("when the multiple is negative", () => {
        expect(isOddNum(c, b, multiplyNums)).to.include(`${c} times ${b}`);
        expect(isOddNum(a, d, multiplyNums)).to.include(`${a} times ${d}`);
      });
      it("when the multiple is zero", () => {
        expect(isOddNum(a, e, multiplyNums)).to.include(`${a} times ${e}`);
        expect(isOddNum(e, b, multiplyNums)).to.include(`${e} times ${b}`);
      });
    });

    describe("correctly reports", () => {
      it("when the multiple is positive", () => {
        expect(isOddNum(a, b, multiplyNums)).to.include(`positive`);
        expect(isOddNum(c, d, multiplyNums)).to.include(`positive`);
      });
      it("when the multiple is negative", () => {
        expect(isOddNum(c, b, multiplyNums)).to.include(`negative`);
        expect(isOddNum(a, d, multiplyNums)).to.include(`negative`);
      });
      it("when the multiple is zero", () => {
        expect(isOddNum(a, e, multiplyNums)).to.include(`is zero.`);
        expect(isOddNum(e, b, multiplyNums)).to.include(`is zero.`);
      });
    });
  });

  describe("#2: startingCapsOnly", () => {
    const startCapWords = ["Microsoft", "Tokyo", "Charlie"];
    const noCapWords = ["party", "car", "banana"];
    const capsNotAtStart = ["whOOps", "lION", "monkeY"];
    const mixedWords = [...startCapWords, ...noCapWords, ...capsNotAtStart];

    it("returns an array", () => {
      expect(startingCapsOnly(startCapWords)).to.be.an("array");
      expect(startingCapsOnly(noCapWords)).to.be.an("array");
      expect(startingCapsOnly(capsNotAtStart)).to.be.an("array");
      expect(startingCapsOnly(mixedWords)).to.be.an("array");
    });

    it("removes no words if all words start with a capital letter", () => {
      expect(startingCapsOnly(startCapWords)).to.eql(startCapWords);
    });

    it("removes all words that don't start with a capital letter", () => {
      expect(startingCapsOnly(noCapWords)).to.eql([]);
      expect(startingCapsOnly(capsNotAtStart)).to.eql([]);
    });

    it("removes words that don't start with a capital letter from a mixed array", () => {
      expect(startingCapsOnly(mixedWords)).to.eql(startCapWords);
    });
  });

  describe("#3: coolNumbersGetSquaredSquared", () => {
    const allCool = [2, 5, 8, 12];
    const allUncool = [2.2, 5.5, 8.8, 12.12];
    const mixedCool = [...allCool, allUncool];

    it("returns an array", () => {
      expect(
        coolNumbersGetSquaredSquared(allCool, isNumberCool, coolSquaredNumbers)
      ).to.be.an("array");
      expect(
        coolNumbersGetSquaredSquared(
          allUncool,
          isNumberCool,
          coolSquaredNumbers
        )
      ).to.be.an("array");
      expect(
        coolNumbersGetSquaredSquared(
          mixedCool,
          isNumberCool,
          coolSquaredNumbers
        )
      ).to.be.an("array");
    });

    it("removes all numbers if all numbers are ", () => {
      console.log(allUncool.filter(isNumberCool));
      expect(
        coolNumbersGetSquaredSquared(
          allUncool,
          isNumberCool,
          coolSquaredNumbers
        )
      ).to.eql([]);
    });
  });
});
