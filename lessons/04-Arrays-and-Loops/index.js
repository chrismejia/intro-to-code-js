/**
 * #1: measurer
 *
 * CHALLENGE: measurer can be written as a one-liner.
 *
 * @category 04 - Arrays and Loops
 * @function measurer
 * @param {...Number[]} arr - Always at least one number in the sample arrays/
 * @returns {Number} The length of the array.
 *
 * @example
 * measurer([1]) => 1
 * measurer([1,3,5,7,9]) => 5
 * measurer(["abc", true, { "a": 1, "b": 2 } ]) => 3
 */

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-04` in the Shell and hit Enter.
 */
import { expect } from "chai";
function measurer(arr) {
  return arr.length;
}

// One-line function
// const measurer = (arr) => arr.length;

/**
 * #2: indexer
 *
 * CHALLENGE: indexer can be written as a one-liner.
 *
 * @category 04 - Arrays and Loops
 * @function indexer
 * @param {Array} arr - array of any length, containing entries of any type
 * @param {?Number} index - optional number
 * @returns {*} When index is defined, indexer returns the value stored. Otherwise, indexer returns the first value in the array.
 *
 * @example
 * indexer([1], 0) => 1
 * indexer([1, 3, "value", 7, 9 ], 2) => "value"
 * indexer([false, 2, "string"]) => false
 */

function indexer(arr, index) {
  if (index !== undefined) {
    return arr[index];
  }
  return arr[0];
}

// One-line function
// const indexer = (arr, index) => (index !== undefined ? arr[index] : arr[0]);

/**
 * #3: frontOrBack
 *
 * Define the function frontOrBack.
 * frontOr back accepts an array, a place, an action, and a value.
 *
 * @category 04 - Arrays and Loops
 * @function frontOrBack
 * @param {Number[]} array - an array containing at least one number
 * @param {String} place - one of `"front"` or `"back"`
 * @param {String} action - one of `"add"` or `"remove"`
 * @param {Number} value - value to use when processing the input commands
 * @returns {...Number[]}
 *
 * @example
 * const array = [1, 2, 3, 4];
 *
 * frontOrBack(array, "front", "add", 5) => [5, 1, 2, 3, 4];
 * frontOrBack(array, "back", "add", 5) => [1, 2, 3, 4, 5];
 * frontOrBack(array, "front", "remove", 5) => [2, 3, 4];
 * frontOrBack(array, "back", "remove", 5) => [1, 2, 3];
 */

function frontOrBack(array, place, action, value) {
  if (place === "front") {
    if (action === "add") {
      array.unshift(value);
      return array;
    } else {
      array.shift();
      return array;
    }
  } else {
    if (action === "add") {
      array.push(value);
      return array;
    } else {
      array.pop();
      return array;
    }
  }
}

/**
 * #4: repeater
 *
 * Define the function repeater.
 * repeater accepts a string and a number.
 * repeater returns a string that is the input string repeated `times` number of times.
 *
 * @category 04 - Arrays and Loops
 * @function repeater
 * @param {String} str - the input string
 * @param {Number} times - always >= 0
 * @returns {String} the input string repeated `times` number
 *
 * @example
 * repeater("empty string", 0) => ""
 * repeater("one time only", 1) => "one time only"
 * repeater("Hello", 2) => "HelloHello"
 * repeater("abc123", 3) => "abc123abc123abc123"
 */

function repeater(string, times) {
  let repeatedStr = "";
  for (let i = 1; i <= times; i++) {
    repeatedStr += string;
  }
  return repeatedStr;
}

/**
 * #5: disemvoweler
 *
 * Define the function disemvoweler.
 * disemvoweler takes in a string and returns it stripped of its vowels.
 * BONUS: disemvoweler strips the input string of any capitalized vowels present.
 *
 * @category 04 - Arrays and Loops
 * @function disemvoweler
 * @param {String} string - the input string
 * @returns {String} the input string with all its vowels removed
 * @example
 * disemvoweler("b") => "b"
 * disemvoweler("xyz") => "xyz"
 * disemvoweler("a") => ""
 * disemvoweler("cr") => "cr"
 * disemvoweler("dictionary") => "dctnry"
 * disemvoweler("aaeeiioouu") => ""
 *
 * // BONUS
 * disemvoweler("BeaR") => "BR"
 * disemvoweler("diCTIONAry") => "dCTNry"
 */
const vowels = ["a", "e", "i", "o", "u"];

function disemvoweler(string) {
  let noVowelStr = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      const currChar = string[i];
      const currVowel = vowels[j];
      if (currChar.toLowerCase() === currVowel) {
        break;
      } else if (currChar !== currVowel && j === vowels.length - 1) {
        noVowelStr += currChar;
      }
    }
  }
  return noVowelStr;
}

/**
 * #6: valueLocator
 *
 * @category 04 - Arrays and Loops
 * @function valueLocator
 * @param {String} searchValue - the string to search for
 * @param {String[]} arr - the array to search within
 * @returns {String} A sentence detailing whether or not the search value was found, and at what index.
 * @example
 * valueLocator("xyx", ["zyz", "xyx", "abc", "bd"]) =>
 *  "xyx is at index 1 of the array [zyz,xyx,abc,bd]."
 * valueLocator("not", ["zyz", "xyx", "abc", "bd"]) =>
 *  "not cannot be found in the array [zyz,xyx,abc,bd]."
 */

function valueLocator(searchValue, arr) {
  const idx = arr.indexOf(searchValue);
  if (idx !== -1) {
    return `${searchValue} is at index ${idx} of the array [${arr}].`;
  }
  return `${searchValue} cannot be found in the array [${arr}].`;
}

// One-liner
// const valueLocator = (searchValue, arr) =>
//   arr.indexOf(searchValue) !== -1
//     ? `${searchValue} is at index ${idx} of the array ${arr}.`
//     : `${searchValue} cannot be found in the array ${arr}.`;

/**
 * #7: reversomatic
 *
 * Define the function reversomatic.
 * reversomatic adds the array's elements to the end of a new array, one at a time.
 * When reversomatic encounters the string "reverse", reversomatic switches so that from the next element in the array, it adds them to front instead of the back.
 *
 * NB:
 * Not every input array may contain a "reverse" string.
 * Input arrays will contain at most ONE (1) "reverse" string, if present.
 *
 * @category 04 - Arrays and Loops
 * @function reversomatic
 * @param {Number|?String[]} array - an array of at least size 1, made of entries of any type.
 * @returns {Number[]} array of entries that have been properly added to the new array
 * @example
 * reversomatic([1, 2, 3, 4, 5]) => [1, 2, 3, 4, 5]
 * reversomatic([["reverse", 1, 2, 3, 4, 5]]) => [5, 4, 3, 2, 1]
 * reversomatic([1, 2, "reverse", 3, 4, 5]) => [5, 4, 3, 1, 2]
 * reversomatic([1, 2, 3, 4, 5, "reverse"]) => [1, 2, 3, 4, 5]
 */

function reversomatic(array) {
  const output = [];
  let reverse = false;
  for (let i = 0; i < array.length; i++) {
    const currValue = array[i];
    if (reverse) {
      output.unshift(currValue);
    } else if (currValue === "reverse") {
      reverse = true;
    } else {
      output.push(currValue);
    }
  }
  return output;
}

/**
 * #8: uniquesOnly
 *
 * Define the function uniquesOnly.
 * uniquesOnly accepts an string and returns an array. Each entry in the array is one of the unique characters from the input string.
 *
 * @category 04 - Arrays and Loops
 * @function uniquesOnly
 * @param {String} inputStr - string made up of random characters with possible repeats
 * @returns {String[]}
 * @example
 * uniquesOnly("a") => ['a']
 * uniquesOnly("aaa") => ['a']
 * uniquesOnly("abc") => ['a', 'b', 'c']
 * uniquesOnly("abcbabcbabcbabcba") => ['a', 'b', 'c']
 */

function uniqueCharsOnly(inputStr) {
  const uniques = [];
  for (let i = 0; i < inputStr.length; i++) {
    const currChar = inputStr[i];
    if (uniques.indexOf(currChar) === -1) {
      uniques.push(currChar);
    }
  }
  return uniques;
}

/**
 * #9: wordCalculator
 *
 * Define the function wordCalculator.
 * wordCalculator accepts an array of numbers and an array of strings, each representing a math operation.
 * wordCalculator has an initial value of 0 and only accepts the valid math operations: "add", "sub", "mult", and "div".
 * wordCalculator returns the total of all the values and operations passed into it.
 *
 * NOTE:
 * The nums and operations arrays will always be the same .length
 *
 * @category 04 - Arrays and Loops
 * @function wordCalculator
 * @param {Number[]} nums - array of numbers; nums.length always >= 1
 * @param {String[]} operations - array of strings, representing operations; operations.length always >= 1
 * @return {Number} resulting value after all operations have been computed
 * @example
 * wordCalculator([1], ["nope"]) => 0
 * wordCalculator([1], ["add"]) => 1
 * wordCalculator([2], ["sub"]) => 2
 * wordCalculator([3], ["mult"]) => 2
 * wordCalculator([5, 6], ["add", "mult"]) => 30
 * wordCalculator([7, 11, 12], ["sub", "mult", "add"]) => -65
 */

function wordCalculator(nums, operations) {
  let result = 0;
  // Both input arrays are the same size
  // Use the i pointer from the loop to grab current entry per iteration
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const currOp = operations[i];
    switch (currOp) {
      case "add":
        result += currNum;
        break;
      case "sub":
        result -= currNum;
        break;
      case "mult":
        result *= currNum;
        break;
      case "div":
        result /= currNum;
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * #10: pairMultiplier
 *
 * Define the function pairMultiplier.
 * pairMultiplier accepts two arrays of numbers.
 * pairMultiplier returns an array of numbers made up of all the numbers from arr1 multiplied by all the numbers in arr2.
 *
 * NB: arr1 and arr2 will not always be the same length.
 *
 * @category 04 - Arrays and Loops
 * @function pairMultiplier
 * @param {Number[]} arr1 - array of numbers; arr1.length always > 1
 * @param {Number[]} arr2 - array of numbers; arr2.length always > 1
 * @returns {Number[]} array of all the multiples of each entry from arr1 and arr2, in the correct order.
 * @example
 * pairMultiplier([6],[4]) => [24]
 * pairMultiplier([7], [2, 3]) => [14, 21]
 * pairMultiplier([3, 8], [5, 2]) => [15, 6, 40, 16]
 * pairMultiplier([3, 5, 8], [2, 4]) => [6, 12, 10, 20, 16, 32]
 */

function pairMultiplier(arr1, arr2) {
  const productsArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const numOne = arr1[i];
      const numTwo = arr2[j];
      productsArr.push(numOne * numTwo);
    }
  }
  return productsArr;
}

/**
 * #11: fizzBuzz
 *
 * Define the function fizzBuzz.
 * fizzBuzz accepts a number parameter, stop.
 * fizzBuzz returns an array where every number from 1 to stop is added as a string.
 * If the current number is divisible by 3, add "Fizz" to the array instead of the number.
 * If the current number is divisible by 4, add "Buzz" to the array instead of the number.
 * If the current number is divisible by both 3 and 4, add "FizzBuzz" to the array.
 *
 * @category 04 - Arrays and Loops
 * @function fizzBuzz
 * @param {Number} stopNum - the number to stop the loop at (inclusive)
 * @returns {String[]} an array of strings
 * @example
 * fizzBuzz(12) => ["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]
 */

function fizzBuzz(stopNum) {
  const result = [];
  for (let i = 1; i <= stopNum; i++) {
    let entry = "";
    if (i % 3 === 0) entry += "Fizz";
    if (i % 4 === 0) entry += "Buzz";
    result.push(entry || i);
  }
  return result;
}

describe("04 - Arrays and Loops", function () {
  describe("#1: measurer", function () {
    it("returns the length of an array", function () {
      expect(measurer([1])).to.equal(1);
      expect(measurer([1, 3, 5, 7, 9])).to.equal(5);
      expect(measurer(["abc", true, { a: 1, b: 2 }])).to.equal(3);
    });
  });

  describe("#2: indexer", function () {
    it("returns the value at the given index", function () {
      expect(indexer([1], 0)).to.equal(1);
      expect(indexer([1, 3, "value", 7, 9], 2)).to.equal("value");
      expect(indexer(["abc", true, { a: 1, b: 2 }], 1)).to.equal(true);
    });

    it("returns the array's first value when the index isn't defined", function () {
      expect(indexer([1])).to.equal(1);
      expect(indexer([1, 3, "value", 7, 9])).to.equal(1);
      expect(indexer(["abc", true, { a: 1, b: 2 }])).to.equal("abc");
    });
  });

  describe("#3: frontOrBack", function () {
    describe("returns an array modified correctly based on place and action", function () {
      it('place = "front"; action = "add"', function () {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "front", "add", 5)).to.eql([5, 1, 2, 3, 4]);
      });

      it('place = "back"; action = "add"', function () {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "back", "add", 5)).to.eql([1, 2, 3, 4, 5]);
      });

      it('place = "front"; action = "remove"', function () {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "front", "remove", 5)).to.eql([2, 3, 4]);
      });

      it('place = "back"; action = "remove"', function () {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "back", "remove", 5)).to.eql([1, 2, 3]);
      });
    });
  });

  describe("#4: repeater", function () {
    describe("returns a string", function () {
      it("repeated 0 times; an empty string", function () {
        expect(repeater("empty string")).to.equal("");
      });

      it("repeated 1 time; the input string", function () {
        expect(repeater("one time only", 1)).to.equal("one time only");
      });

      describe("repeated multiple times", function () {
        const strings = [
          { str: "Hello", times: 2, result: "HelloHello" },
          { str: "abc123", times: 3, result: "abc123abc123abc123" },
          { str: "catDog", times: 4, result: "catDogcatDogcatDogcatDog" },
          { str: "Five", times: 5, result: "FiveFiveFiveFiveFive" },
        ];
        strings.forEach(({ str, times, result }) => {
          it(`'${str}', ${times} -> '${result}'`, function () {
            expect(repeater(str, times)).to.equal(result);
          });
        });
      });
    });
  });

  describe("#5: disemvoweler", function () {
    describe("returns a string", function () {
      describe("no vowels -> same as the input string", function () {
        const noVowels = [
          { str: "b" },
          { str: "sss" },
          { str: "xyz" },
          { str: "qwrtyp" },
        ];

        noVowels.forEach(({ str }) => {
          it(`'${str}' -> '${str}'`, function () {
            expect(disemvoweler(str)).to.equal(str);
          });
        });
      });

      describe("has vowels", function () {
        describe("removes instances of one vowel", function () {
          const oneVowel = [
            {
              str: "a",
              result: "",
            },
            {
              str: "car",
              result: "cr",
            },
            {
              str: "aeiou",
              result: "",
            },
            { str: "education", result: "dctn" },
          ];

          oneVowel.forEach(({ str, result }) => {
            it(`'${str}' -> '${result}'`, function () {
              expect(disemvoweler(str)).to.equal(result);
            });
          });
        });

        describe("removes multiple instances of multiple vowels", function () {
          const multiVowels = [
            { str: "beer", result: "br" },
            { str: "aaabcdeee", result: "bcd" },
            { str: "dictionary", result: "dctnry" },
            { str: "aaeeiioouu", result: "" },
          ];
          multiVowels.forEach(({ str, result }) => {
            it(`'${str}' -> '${result}'`, function () {
              expect(disemvoweler(str)).to.equal(result);
            });
          });
        });
      });

      describe("BONUS: can handle UPPERCASE letters", function () {
        const uppercaseOptions = [
          { str: "BeaR", result: "BR" },
          { str: "aAAabcdefgGGg", result: "bcdfgGGg" },
          { str: "diCTIONAry", result: "dCTNry" },
          { str: "aAeEiIoOuU", result: "" },
        ];
        uppercaseOptions.forEach(({ str, result }) => {
          it(`'${str}' -> '${result}'`, function () {
            expect(disemvoweler(str)).to.equal(result);
          });
        });
      });
    });
  });

  describe("#6: valueLocator", function () {
    describe("when searchValue is found in the array", function () {
      describe("returns the correct phrase", function () {
        const arr = ["zyz", "xyx", "abc", "bd"];
        const term = "xyx";

        it("containing the search term", function () {
          expect(valueLocator(term, arr).includes(term));
        });

        it("containing the index of the search term in the array", function () {
          expect(valueLocator(term, arr).includes("at index 1"));
        });

        it("containing the original array", function () {
          expect(valueLocator(term, arr).includes(`[${arr}]`));
        });
      });

      describe("if the searchValue is found in the array", function () {
        const arr = ["zyz", "xyx", "abc", "bd"];
        const term = "not";

        it("containing the search term", function () {
          expect(valueLocator(term, arr).includes(term));
        });

        it("containing the original array", function () {
          expect(valueLocator(term, arr).includes(`[${arr}]`));
        });

        it("detailing that the term is not in the array", function () {
          expect(
            valueLocator(term, arr).includes("cannot be found in the array")
          );
        });
      });
    });
  });

  describe("#7: reversomatic", function () {
    const revStart = ["reverse", 1, 2, 3, 4, 5];
    const revEnd = [1, 2, 3, 4, 5, "reverse"];
    const hasRev1 = [1, "reverse", 2, 3, 4, 5];
    const hasRev2 = [1, 2, "reverse", 3, 4, 5];
    const hasRev3 = [1, 2, 3, "reverse", 4, 5];
    const hasRev4 = [1, 2, 3, 4, "reverse", 5];

    const revArrs = [revStart, revEnd, hasRev1, hasRev2, hasRev3, hasRev4];

    const noRev1 = ["a", 1, "b", 2];
    const noRev2 = [true, false, 1, 2, { a: 1, b: 2 }];

    const noRevArrs = [noRev1, noRev2];

    const allArrays = [...revArrs, ...noRevArrs];

    describe("regardless of the 'reverse' string", function () {
      it("returns an array", function () {
        allArrays.forEach((arr) => {
          const result = reversomatic(arr);
          expect(result).to.be.an("array");
        });
      });

      describe("only add numbers to the array, in the correct order", function () {
        describe("if there's a 'reverse' string in the input array", function () {
          it("at the front of the array", function () {
            expect(reversomatic(revStart)).to.eql([5, 4, 3, 2, 1]);
          });

          it("at the back of the array", function () {
            expect(reversomatic(revEnd)).to.eql([1, 2, 3, 4, 5]);
          });

          it("somewhere in the middle of the array", function () {
            expect(reversomatic(hasRev1)).to.eql([5, 4, 3, 2, 1]);
            expect(reversomatic(hasRev2)).to.eql([5, 4, 3, 1, 2]);
            expect(reversomatic(hasRev3)).to.eql([5, 4, 1, 2, 3]);
            expect(reversomatic(hasRev4)).to.eql([5, 1, 2, 3, 4]);
          });
        });

        it("if there's no 'reverse' string in the array", function () {
          expect(reversomatic(noRev1)).to.eql(noRev1);
          expect(reversomatic(noRev2)).to.eql(noRev2);
        });
      });
    });
  });

  describe("#8: uniqueCharsOnly", function () {
    describe("returns an array of the unique characters in the string", function () {
      it("if the string is one repeating character", function () {
        expect(uniqueCharsOnly("aaaa")).to.eql(["a"]);
      });
      it("if the string is made up a few recurring characters", function () {
        expect(uniqueCharsOnly("abcabcabc")).to.eql(["a", "b", "c"]);
        expect(uniqueCharsOnly("abcbabcbabcbabcba")).to.eql(["a", "b", "c"]);
      });
      it("if each character in the string is unique", function () {
        expect(uniqueCharsOnly("abc")).to.eql(["a", "b", "c"]);
        expect(uniqueCharsOnly("a1b2")).to.eql(["a", "1", "b", "2"]);
        expect(uniqueCharsOnly("abc123")).to.eql([
          "a",
          "b",
          "c",
          "1",
          "2",
          "3",
        ]);
      });
    });
  });

  describe("#9: wordCalculator", function () {
    const calc1 = { nums: [1], ops: ["add"], result: 1 };
    const calc2 = { nums: [2], ops: ["sub"], result: -2 };
    const calc3 = { nums: [3], ops: ["mult"], result: 0 };
    const calc4 = { nums: [5, 6], ops: ["add", "mult"], result: 30 };
    const calc5 = { nums: [4, 2], ops: ["add", "div"], result: 2 };
    const calc6 = {
      nums: [7, 11, 12],
      ops: ["sub", "mult", "add"],
      result: -65,
    };
    const calc7 = {
      nums: [6, 10, 3, 8],
      ops: ["add", "mult", "div", "sub"],
      result: 12,
    };

    const calcData = [calc1, calc2, calc3, calc4, calc5, calc6, calc7];

    it("starts at 0", function () {
      expect(wordCalculator([1], ["test"])).to.equal(0);
    });

    it("returns a number", function () {
      calcData.forEach(({ nums, ops }) => {
        expect(wordCalculator(nums, ops)).to.be.a("number");
      });
    });

    describe("returns the correct answer", function () {
      describe("when there's only one operation to do", function () {
        const oneOp = calcData.slice(0, 3);
        oneOp.forEach(({ nums, ops, result }) => {
          it(`[${nums}], [${ops}] -> ${result}`, function () {
            expect(wordCalculator(nums, ops)).to.equal(result);
          });
        });
      });

      describe("when there are two or more operations to do", function () {
        const multiOp = calcData.slice(3);
        multiOp.forEach(({ nums, ops, result }) => {
          it(`[${nums}], [${ops}] -> ${result}`, function () {
            expect(wordCalculator(nums, ops)).to.equal(result);
          });
        });
      });
    });
  });

  describe("#10: pairMultiplier", function () {
    describe("returns an array of multiplied numbers, in the correct order", function () {
      describe("when both arrays are the same size", function () {
        const sameSize = [
          {
            arr1: [6],
            arr2: [4],
            result: [24],
          },
          { arr1: [3, 8], arr2: [5, 2], result: [15, 6, 40, 16] },
          {
            arr1: [2, 7, 9],
            arr2: [5, 4, 6],
            result: [10, 8, 12, 35, 28, 42, 45, 36, 54],
          },
        ];

        sameSize.forEach(({ arr1, arr2, result }) => {
          it(`[${arr1}], [${arr2}] -> [${result}]`, function () {
            expect(pairMultiplier(arr1, arr2)).to.eql(result);
          });
        });
      });

      describe("first array smaller than second", function () {
        const firstSmaller = [
          { arr1: [7], arr2: [2, 3], result: [14, 21] },
          { arr1: [2, 3], arr2: [4, 5, 6], result: [8, 10, 12, 12, 15, 18] },
        ];

        firstSmaller.forEach(({ arr1, arr2, result }) => {
          it(`[${arr1}], [${arr2}] -> [${result}]`, function () {
            expect(pairMultiplier(arr1, arr2)).to.eql(result);
          });
        });
      });

      describe("second array smaller than first", function () {
        const secondSmaller = [
          { arr1: [7, 3], arr2: [9], result: [63, 27] },
          { arr1: [3, 5, 8], arr2: [2, 4], result: [6, 12, 10, 20, 16, 32] },
        ];

        secondSmaller.forEach(({ arr1, arr2, result }) => {
          it(`[${arr1}], [${arr2}] -> [${result}]`, function () {
            expect(pairMultiplier(arr1, arr2)).to.eql(result);
          });
        });
      });
    });
  });

  describe("#11: fizzBuzz", function () {
    const result = fizzBuzz(100);
    const lengthTest = [1, 12, 50, 100];

    it("returns an array", function () {
      expect(result).to.be.an("array");
    });

    it("the array is the correct length", function () {
      lengthTest.forEach((length) => {
        expect(fizzBuzz(length)).to.have.lengthOf(length);
      });
    });

    it("each number not divisible by either 3 or 4 is itself", function () {
      const eachStringNumAppears = result
        .filter((_, idx) => (idx + 1) % 3 !== 0 && (idx + 1) % 4 !== 0)
        .every((entry) => typeof entry === "number");
      expect(eachStringNumAppears).to.be.true;
    });

    it("each number divisible only by 3 is `Fizz`", function () {
      const eachFizzAppears = result
        .filter((_, idx) => (idx + 1) % 3 === 0 && (idx + 1) % 12 !== 0)
        .every((entry) => entry === "Fizz");
      expect(eachFizzAppears).to.be.true;
    });

    it("each number divisible only by 4 is `Buzz`", function () {
      const eachBuzzAppears = result
        .filter((_, idx) => (idx + 1) % 4 === 0 && (idx + 1) % 12 !== 0)
        .every((entry) => entry === "Buzz");
      expect(eachBuzzAppears).to.be.true;
    });

    it("each number divisible by both 3 and 4 is `FizzBuzz`", function () {
      const eachFizzBuzzAppears = result
        .filter((_, idx) => (idx + 1) % 12 === 0)
        .every((entry) => entry === "FizzBuzz");
      expect(eachFizzBuzzAppears).to.be.true;
    });
  });
});
