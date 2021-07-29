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
 * #4: keyValidator
 * Define the function keyValidator.
 * keyValidator accepts two objects, a testObj and a targetObj.
 * keyValidator compares the keys of the targetObj to the ones the testObj has.
 * keyValidator returns an array of all the keys, as strings, missing from the testObj.
 *
 * If the testObj has all of the same keys as the targetObj, return the string "Both objects are the same."
 *
 * @function keyValidator
 * @param {Object} testObj
 * @param {Object} targetObj
 * @returns {String[]}
 */

function keyValidator(testObj, targetObj) {
  let missingKeys = [];
  const targetKeys = Object.keys(targetObj);
  for (const testKey of Object.keys(testObj)) {
    if (targetKeys.indexOf(testKey) === -1) {
      missingKeys.push(testKey);
    }
  }
  return missingKeys;
}

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

    describe("returns an array", () => {
      it("when all the numbers are cool", () => {
        expect(
          coolNumbersGetSquaredSquared(
            allCool,
            isNumberCool,
            coolSquaredNumbers
          )
        ).to.be.an("array");
      });

      it("when all the numbers are uncool", () => {
        expect(
          coolNumbersGetSquaredSquared(
            allUncool,
            isNumberCool,
            coolSquaredNumbers
          )
        ).to.be.an("array");
      });

      it("when there's a mix of cool and uncool numbers", () => {
        expect(
          coolNumbersGetSquaredSquared(
            mixedCool,
            isNumberCool,
            coolSquaredNumbers
          )
        ).to.be.an("array");
      });
    });

    it("removes all numbers if all numbers are", () => {
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

  describe("#4: keyValidator", () => {
    const emptyOne = {};
    const emptyTwo = {};
    const twoKeysOne = {
      word: "hello",
      nums: [1, 2, 3],
    };
    const twoKeysTwo = {
      word: "hello",
      nums: [1, 2, 3],
    };
    const twoKeysThree = {
      word: "banana",
      nums: [4, 5, 6],
    };
    describe("returns an array", () => {
      describe("that is empty", () => {
        it("when both objects are empty", () => {
          expect(keyValidator(emptyOne, emptyTwo)).to.eql([]);
        });
        describe("when each object has all the same keys", () => {
          it("with the same values", () => {
            expect(keyValidator(twoKeysOne, twoKeysTwo)).to.eql([]);
          });
          it("with different values", () => {
            expect(keyValidator(twoKeysOne, twoKeysThree)).to.eql([]);
          });
        });
      });
    });
  });
});
