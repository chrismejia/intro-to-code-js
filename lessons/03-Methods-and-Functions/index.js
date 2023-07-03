/**
 * #1: helloWorld
 *
 * Define the function helloWorld.
 * helloWorld takes no inputs and returns the phrase "Hello World!"
 *
 * @category 03 - Methods and Functions
 * @function helloWorld
 * @returns {String}
 *
 * @example
 * helloWorld() => "Hello World!"
 */

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-03` in the Shell and hit Enter.
 */
import { expect } from "chai";

function helloWorld() {
  return "Hello World!";
}

/**
 * #2: helloWorldRedux
 *
 * Define the function helloWorldRedux.
 * helloWorldRedux takes in an optional input, name.
 * When a name value is passed, return a personalized greeting using the name.
 * Otherwise, return the phrase "Hello World!"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function helloWorldRedux
 * @param {?String} name - optional name input
 * @returns {String}
 *
 * @example
 * helloWorldRedux() => "Hello World!"
 * helloWorldRedux("Bob") => "Hello Bob!"
 */

function helloWorldRedux(name) {
  if (name) {
    return `Hello ${name}!`;
  }
  return "Hello World!";
}

// One-line function
// const helloWorldRedux = (name) => (name ? `Hello ${name}!` : `Hello World!`);

/**
 * #3: uppercaseThis
 *
 * Define the function uppercaseThis.
 * uppercaseThis takes in one input, phrase, a String of any length.
 * uppercaseThis returns phrase fully capitalized.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function uppercaseThis
 * @param {String} phrase - string to be all-capped
 * @returns {String} fully capitalized string
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase .toUpperCase()}
 *
 * @example
 * uppercaseThis("aaaa") => "AAAA"
 * uppercaseThis("BBBB") => "BBBB"
 * uppercaseThis("cCcC") => "CCCC"
 * uppercaseThis("d1D2d3") => "D1D2D3"
 */

function uppercaseThis(phrase) {
  return phrase.toUpperCase();
}

// One-line function
// const uppercaseThis = phrase => phrase.toUpperCase()

/**
 * #4: doesItAddUp
 *
 * Define the function doesItAddUp.
 * doesItAddUp accepts three number inputs.
 * doesItAddUp returns true when the first two inputs add up to the third.
 * Otherwise, doesItAddUp returns false.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function doesItAddUp
 * @param {Number} numA
 * @param {Number} numB
 * @param {Number} numC
 * @returns {Boolean}
 *
 * @example
 * doesItAddUp(10, 5, 15) => true
 * doesItAddUp(10, 5, 20) => false
 */

function doesItAddUp(numA, numB, numC) {
  if (numA + numB === numC) {
    return true;
  }
  return false;
}

// One-line answer
// const doesItAddUp = (numA, numB, numC) => numA + numB === numC;

/**
 * #5: arrayToString
 *
 * Define the function arrayToString.
 * arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
 * arrayToString returns a combined string made up of each string in the array attached together by the connector.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function arrayToString
 * @param {String[]} array - all entries are strings
 * @param {String} connector - any number random characters
 * @returns {String}
 *
 * @example
 * arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
 * arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
 * arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"
 */

function arrayToString(array, connector) {
  return array.join(connector);
}

// One-line answer
// const arrayToString = (string, separator) => array.join(separator)

/**
 * #6: smallTogetherNow
 *
 * Define the function smallTogetherNow.
 * smallTogetherNow accepts two strings of any length.
 * smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 *
 * @category 03 - Methods and Functions
 * @function smallTogetherNow
 * @param {String} str1
 * @param {String} str2
 * @returns {String}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase .toLowerCase()}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat .concat()}
 *
 * @example
 * smallTogetherNow("HELLO", "WORLD") => "helloworld"
 * smallTogetherNow("apple", "pie") => "applepie"
 * smallTogetherNow("mIxEd", "CaPiTaLs") => "mixedcapitals"
 */

function smallTogetherNow(str1, str2) {
  const lowerOne = str1.toLowerCase();
  const lowerTwo = str2.toLowerCase();

  return lowerOne + lowerTwo;
}

// One-line answer
// const smallTogetherNow = (str1, str2) =>
//   str1.toLowerCase().concat(str2.toLowerCase());

/**
 * #7: Dog owners and their dogs
 *
 * Define the function dogAndOwnerInfo.
 * dogAndOwnerInfo takes in four inputs:
 * - the dog's name
 * - the dog's age
 * - the dog owner's name
 * - the dog owner's age
 *
 * dogAndOwnerInfo converts the dog's age to human years by multiplying it by 7.
 *
 * @category 03 - Methods and Functions
 * @function dogAndOwnerInfo
 * @param {String} dogName
 * @param {Number} dogAge
 * @param {String} ownerName
 * @param {Number} ownerAge
 * @returns {String}
 *
 * @example
 * dogAndOwnerInfo("Turbo", 10, "Richard", 55) =>
 *    "Turbo is older than their owner, Richard, by 15 years."
 * dogAndOwnerInfo("Fido", 1, "Sara", 15) =>
 *    "Sara is older than their dog, Fido, by 8 years."
 * dogAndOwnerInfo("Star", 2, "John", 14) =>
 *    "John and Star are the both 14 years old."
 */

function dogAndOwnerInfo(dogName, dogAge, ownerName, ownerAge) {
  const dogAgeInHumanYears = dogAge * 7;

  if (dogAgeInHumanYears > ownerAge) {
    return `${dogName} is older than their owner, ${ownerName}, by ${
      dogAgeInHumanYears - ownerAge
    } years.`;
  } else if (dogAgeInHumanYears < ownerAge) {
    return `${ownerName} is older than their dog, ${dogName}, by ${
      ownerAge - dogAgeInHumanYears
    } years.`;
  } else {
    return `${ownerName} and ${dogName} are both ${ownerAge} years old.`;
  }
}

/**
 * #8: doesTheMathWork
 *
 * Define the function doesTheMathWork.
 * doesTheMathWork accept three inputs, each a number.
 * doesTheMathWork returns a phrase based on the following:
 * - first input + second input = third input -> "addition"
 * - first input - second input = third input -> "subtraction"
 * - first input * second input = third input -> "multiplication"
 * - first input / second input = third input -> "division"
 * - none of the above -> "no operation"
 *
 * NOTE:
 * Each set of three inputs resolves to only ONE of the given possible outputs.
 *
 * @category 03 - Methods and Functions
 * @function doesTheMathWork
 * @param {Number} numA
 * @param {Number} numB
 * @param {Number} numC
 * @returns {String}
 *
 * @example
 * doesTheMathWork(1, 2, 3) => "addition"
 * doesTheMathWork(7, 2, 5) => "subtraction"
 * doesTheMathWork(3, 3, 9) => "multiplication"
 * doesTheMathWork(81, 9, 9) => "division"
 * doesTheMathWork(11, 222, 3) = "no operation"
 */

function doesTheMathWork(numA, numB, numC) {
  if (numA + numB === numC) {
    return "addition";
  } else if (numA - numB === numC) {
    return "subtraction";
  } else if (numA * numB === numC) {
    return "multiplication";
  } else if (numA / numB === numC) {
    return "division";
  } else {
    return "no operation";
  }
}

/**
 * #9: allWordsLength
 *
 * Define the function allWordsLength.
 * allWordsLength accepts an array containing any number of strings, each of any length.
 * allWordsLength returns the total length of all the strings in the array.
 *
 * HINT: If you're familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it's not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function allWordsLength
 * @param {String[]} wordsArr
 * @returns {Number}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array Methods}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String String Methods}
 *
 * @example
 * allWordsLength(["apple"]) => 5
 * allWordsLength(["old", "textbook"]) => 11  (3 + 8)
 * allWordsLength(["cat", "dog", "moo"]) => 9 (3 + 3 + 3)
 * allWordsLength(["robin", "hood", "men", "in", "tights"]) => 19 (5 + 4 + 3 + 2 + 5)
 */

function allWordsLength(wordsArr) {
  return wordsArr.join("").length;
}

describe("03 - Methods and Functions", function () {
  describe("#1: helloWorld", function () {
    it("returns the phrase 'Hello World!'", function () {
      expect(helloWorld()).to.equal("Hello World!");
    });
  });

  describe("#2: helloWorldRedux", function () {
    it("returns a personalized greeting if a name is passed in", function () {
      expect(helloWorldRedux("Markus")).to.equal("Hello Markus!");
      expect(helloWorldRedux("Jon")).to.equal("Hello Jon!");
      expect(helloWorldRedux("Sally")).to.equal("Hello Sally!");
    });

    it('returns the phrase "Hello World!" if name is undefined', function () {
      expect(helloWorldRedux()).to.equal("Hello World!");
    });
  });

  describe("#3: uppercaseThis", function () {
    describe("returns the phrase completely capitalized", function () {
      it("when the phrase is all lowercase", function () {
        expect(uppercaseThis("aaaa")).to.equal("AAAA");
      });

      it("when the phrase is already all capitalized", function () {
        expect(uppercaseThis("BBBB")).to.equal("BBBB");
      });

      it("when the phrase has mixed capitals", function () {
        expect(uppercaseThis("cCcC")).to.equal("CCCC");
        expect(uppercaseThis("d1D2d3")).to.equal("D1D2D3");
      });
    });
  });

  describe("#4: doesItAddUp", function () {
    it("returns true -> first two inputs equal the third", function () {
      expect(doesItAddUp(1, 2, 3)).to.be.true;
      expect(doesItAddUp(2, 1, 3)).to.be.true;
      expect(doesItAddUp(4, 4, 8)).to.be.true;
      expect(doesItAddUp(10, 20, 30)).to.be.true;
    });

    it("returns false -> first two inputs don't equal the third", function () {
      expect(doesItAddUp(1, 5, 3)).to.be.false;
      expect(doesItAddUp(22, 64, 33)).to.be.false;
      expect(doesItAddUp(1, 1, 1)).to.be.false;
      expect(doesItAddUp(1, 9, 2)).to.be.false;
    });
  });

  describe("#5: arrayToString", function () {
    const array = ["cat", "dog", "moo"];
    describe("returns the correct string", function () {
      it("when the separator is an empty string ('')", function () {
        expect(arrayToString(array, "")).to.equal("catdogmoo");
      });

      it("when the separator is a single space (' ')", function () {
        expect(arrayToString(array, " ")).to.equal("cat dog moo");
      });

      it("when the separator is any other character sequence", function () {
        expect(arrayToString(array, "+-%")).to.equal("cat+-%dog+-%moo");
      });
    });
  });

  describe("#6: smallTogetherNow", function () {
    describe("returns a unified, lowercase string", function () {
      it("when two uppercase input strings are passed in", function () {
        expect(smallTogetherNow("HELLO", "WORLD")).to.equal("helloworld");
      });

      it("when two lowercase input strings are passed in", function () {
        expect(smallTogetherNow("hello", "world")).to.equal("helloworld");
      });

      it("when input strings of mixed cases are passed in", function () {
        expect(smallTogetherNow("HeLLo", "WorLD")).to.equal("helloworld");
      });
    });
  });

  describe("#7: Dog owners and their dogs", function () {
    describe("returns the correct phrase", function () {
      it("when dog is older than their owner", function () {
        expect(dogAndOwnerInfo("Turbo", 10, "Richard", 55)).to.equal(
          "Turbo is older than their owner, Richard, by 15 years."
        );
      });

      it("when owner is older than their dog", function () {
        expect(dogAndOwnerInfo("Fido", 1, "Sara", 15)).to.equal(
          "Sara is older than their dog, Fido, by 8 years."
        );
      });

      it("owner and dog are the same age", function () {
        expect(dogAndOwnerInfo("Star", 2, "John", 14)).to.equal(
          "John and Star are both 14 years old."
        );
      });
    });
  });

  describe("#8: doesTheMathWork", function () {
    describe("returns the correct operation", function () {
      it("first two inputs add (+) to third input -> 'addition'", function () {
        expect(doesTheMathWork(1, 2, 3)).to.equal("addition");
        expect(doesTheMathWork(5, 2, 7)).to.equal("addition");
        expect(doesTheMathWork(10, 2, 12)).to.equal("addition");
      });

      it("first two inputs subtract (-) to third input -> 'subtraction'", function () {
        expect(doesTheMathWork(3, 2, 1)).to.equal("subtraction");
        expect(doesTheMathWork(7, 2, 5)).to.equal("subtraction");
        expect(doesTheMathWork(12, 2, 10)).to.equal("subtraction");
      });

      it("first two inputs multiply (*) to third input -> 'multiplication'", function () {
        expect(doesTheMathWork(3, 3, 9)).to.equal("multiplication");
        expect(doesTheMathWork(15, 5, 75)).to.equal("multiplication");
        expect(doesTheMathWork(12, 2, 24)).to.equal("multiplication");
      });

      it("first two inputs divide (/) to third input -> 'division'", function () {
        expect(doesTheMathWork(50, 2, 25)).to.equal("division");
        expect(doesTheMathWork(81, 9, 9)).to.equal("division");
        expect(doesTheMathWork(48, 8, 6)).to.equal("division");
      });

      it("first two inputs don't resolve to third input -> 'no operation'", function () {
        expect(doesTheMathWork(1, 99, 72)).to.equal("no operation");
        expect(doesTheMathWork(5, 84, 7)).to.equal("no operation");
        expect(doesTheMathWork(11, 222, 333)).to.equal("no operation");
      });
    });
  });

  describe("#9: allWordsLength", function () {
    const testWords = [
      ["apple"],
      ["old", "textbook"],
      ["cat", "dog", "moo"],
      ["robin", "hood", "men", "in", "tights"],
    ];

    describe("returns the combined length of all strings in the array", function () {
      testWords.forEach((array) => {
        const func = (a) => a.join("").length;
        const result = func(array);
        it(`${JSON.stringify(array)} -> ${result}`, function () {
          expect(allWordsLength(array)).to.equal(result);
        });
      });
    });
  });
});
