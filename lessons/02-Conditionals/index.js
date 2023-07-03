/**
 * #1: Logically speaking
 *
 * Using the four given variables below, define four new variables and assign their values as follows:
 *
 * AND (&&)
 * a) Define andTrue. Use two of the givens and the && operator so that the evaluated value is true.
 * b) Define andFalse. Use two of the givens and the && operator so that the evaluated value is false.
 *
 * OR (||)
 * c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true.
 * d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is true.
 *
 * See:
 * AND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * OR: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-02` in the Shell and hit Enter.
 */
import { expect } from "chai";

const givenOne = 64 < 2; // false
const givenTwo = "cheese" === "cheese"; // true
const givenThree = 15 / 3 === 5; // true
const givenFour = 12 > 13; // false

const andTrue = givenTwo && givenThree; // true && true
const andFalse = givenOne && givenFour; // false && false

const orTrue = givenTwo || givenThree; // true || true
const orFalse = givenOne || givenFour; // false || false

/**
 * #2: 5 characters
 *
 * Define the variable notFiveChars.
 * Assign it a string that's not 5 characters long.
 *
 * Define the variable isItFiveChars.
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
 *
 * See:
 * String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * Ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

// Ternary helper: (true/false expression to test) ? true value : false value

const notFiveChars = "a1b2b3";
const isItFiveChars =
  notFiveChars.length === 5 ? "it's 5 characters" : "not 5 characters";

/**
 * #3: numberOrString
 *
 * numberOrString is a function that accepts one input, a value of any type.
 * numberOrString returns the following based on these conditions:
 *
 * - "This is a string" if the value is a String
 * - "This is a number" if the value is a Number
 * - "This is not a string nor a number" if it's neither
 *
 * SEE:
 * - return statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */

function numberOrString(value) {
  if (typeof value === "string") {
    return "This is a string";
  } else if (typeof value === "number") {
    return "This is a number";
  }
  return "This is not a string nor a number";
}

/**
 * #4: truthyFalsy
 *
 * truthyFalsy is a function that accepts one input, a value of any type.
 * Complete the function truthyFalsy given below by writing conditional statements in the function block that fulfill the following.
 *
 * - value is any of the following: 0, "", null, undefined, false
 *    -> return false
 * - value is anything else:
 *    -> return true
 *
 * You do not need to call the function with these values; the function will be automatically tested with them.
 *
 * Challenge:
 * There's a way to write this function using just one short if-statement expression.
 * Can you use the logical NOT (!) operator to make this function work?
 * See the link below for more on the logical NOT (!).
 *
 * See:
 * Logical NOT (!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 * Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * Truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

// There are a number of ways to complete this function, one of which combines different expressions to test using the Logical OR (||) to create a single case that'll return false on ANY of the matching expressions.
// You don't need an `else` to go with the if-statement because you simply `return true` if you don't enter the if code block. If there were more instructions to be run after that if-statement, then an `else` might be needed.

function truthyFalsy(value) {
  if (
    value === 0 ||
    value === "" ||
    value === null ||
    value === false ||
    value === undefined
  ) {
    return false;
  }
  return true;
}

// Another way to do this problem is by using a switch statement.
// The fact that you have are asked to return false given a number of different conditions makes this a good situation for the switch statement.
// You catch all the matching cases under one return and the default statement catches all other value possibilities.

// function truthyFalsy(value) {
//   switch (value) {
//     case 0:
//     case "":
//     case null:
//     case undefined:
//     case false:
//       return false;
//     default:
//       return true;
//   }
// }

/**
 * CHALLENGE ANSWER:
 * Using ! to negate the incoming value forces the value into a Boolean and negates it.
 * This is one to force a value to work in a Boolean context.
 * Comment out the function above and uncomment the one below to try it out
 */

// function truthyFalsy(value) {
//   console.log("value before forcing into Boolean with !:", value);
//   if (!value) {
//     console.log("same value after:", !value);
//     return false;
//   }
//   console.log("same value after:", !value);
//   return true;
// }

/**
 * #5: testGrader
 *
 * testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade that corresponding the
 * Complete the function testGrader given below by writing condtional statements that fulfill the following.
 *
 * - grade is 90 to 100
 *    -> return 'A'
 * - grade is 80 to 89
 *    -> return 'B'
 * - grade is 70 to 79
 *    -> return 'C'
 * - grade is 60 to 69
 *    -> return 'D'
 * - grade is below 60
 *    -> return 'F'
 */

// Here we connect various if and else-if statements with a final else because we have multiple different conditions to test, each with their own return statement.

function testGrader(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * #6: daysInTheMonth
 *
 * daysInTheMonth is a function that accepts one input: a monthNum that is between 1 and 12.
 *
 * Complete the function daysInTheMonth given below by writing conditional statements that fulfill the following.
 *
 * - if the month is 1, 3, 5, 7, 8, 10, or 12
 *    -> return 31
 * - if the month is 4, 6, 9, 11
 *    -> return 30
 * - if the month is 2
 *    -> return 28
 */

// This is a problem where many different conditions resolve to the same result. We have many possible results so this is a great place to use a switch statement.

function daysInTheMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
  }
}

describe("02 - Conditionals", function () {
  describe("#1: Logically speaking", function () {
    describe("Using the && (AND) operator", function () {
      it("andTrue -> evaluates two givens with && to TRUE", function () {
        expect(andTrue).to.be.true;
      });

      it("andFalse -> evaluates two givens with && to FALSE", function () {
        expect(andFalse).to.be.false;
      });
    });

    describe("Using the || (OR) operator", function () {
      it("orTrue -> evaluates two givens with || to TRUE", function () {
        expect(orTrue).to.be.true;
      });

      it("orFalse -> evaluates two givens with || to FALSE", function () {
        expect(orFalse).to.be.false;
      });
    });
  });

  describe("#2: 5 characters", function () {
    describe("notFiveChars", function () {
      it("is a string that isn't 5 characters long", function () {
        expect(notFiveChars).to.be.a("string").to.not.have.lengthOf(5);
      });
    });

    describe("isItFiveChars", function () {
      it("resolves to the String `it's 5 characters`", function () {
        expect(isItFiveChars).to.equal("not 5 characters");
      });
    });
  });

  describe("#3: numberOrString", function () {
    describe("returns the correct output", function () {
      it("string input -> 'This is a string'", function () {
        expect(numberOrString("")).to.equal("This is a string");
        expect(numberOrString("a")).to.equal("This is a string");
        expect(numberOrString("word")).to.equal("This is a string");
        expect(numberOrString("two words")).to.equal("This is a string");
        expect(numberOrString("a1b2c3")).to.equal("This is a string");
      });

      it("number input -> 'This is a number'", function () {
        for (let i = 1; i <= 100; i++) {
          const num = i * Math.ceil(Math.random() * 99);
          expect(numberOrString(num)).to.equal("This is a number");
        }
      });

      it("any other input -> 'This is not a string nor a number'", function () {
        const types = [{ a: 1 }, [1, 2, 3], false];

        types.forEach((type) => {
          expect(numberOrString(type)).to.be.a("string");
        });
      });
    });
  });
  describe("#4: truthyFalsy", function () {
    describe("returns false", function () {
      it("value -> 0", function () {
        const result = truthyFalsy(0);

        expect(result).to.be.false;
      });

      it('value -> ""', function () {
        expect(truthyFalsy("")).to.be.false;
      });

      it("value -> null", function () {
        expect(truthyFalsy(null)).to.be.false;
      });

      it("value -> undefined", function () {
        expect(truthyFalsy(undefined)).to.be.false;
      });
    });

    describe("returns true", function () {
      it("value -> false", function () {
        expect(truthyFalsy(false)).to.be.false;
      });

      it("value -> any other number", function () {
        expect(truthyFalsy(1)).to.be.true;
        expect(truthyFalsy(Math.PI)).to.be.true;
        expect(truthyFalsy(Infinity)).to.be.true;
      });

      it("value -> any other string", function () {
        expect(truthyFalsy("a")).to.be.true;
        expect(truthyFalsy("hello 'world'")).to.be.true;
        expect(truthyFalsy(`template expression 1 + 2 = ${1 + 2}`)).to.be.true;
      });

      it("value -> an array", function () {
        expect(truthyFalsy([])).to.be.true;
        expect(truthyFalsy([1])).to.be.true;
        expect(truthyFalsy([1, 2, 3, 4, 5])).to.be.true;
      });

      it("value -> an object", function () {
        expect(truthyFalsy({})).to.be.true;
        expect(truthyFalsy({ a: 1 })).to.be.true;
      });
    });
  });

  describe("#5: testGrader", function () {
    describe("returns the correct grade", function () {
      it("when grade is between 90 and 100", function () {
        expect(testGrader(100)).to.equal("A");
        expect(testGrader(97)).to.equal("A");
        expect(testGrader(93)).to.equal("A");
        expect(testGrader(90)).to.equal("A");
      });

      it("when grade is between 80 and 89", function () {
        expect(testGrader(89)).to.equal("B");
        expect(testGrader(87)).to.equal("B");
        expect(testGrader(83)).to.equal("B");
        expect(testGrader(80)).to.equal("B");
      });

      it("when grade is between 70 and 79", function () {
        expect(testGrader(79)).to.equal("C");
        expect(testGrader(77)).to.equal("C");
        expect(testGrader(73)).to.equal("C");
        expect(testGrader(70)).to.equal("C");
      });

      it("when grade is between 60 and 69", function () {
        expect(testGrader(69)).to.equal("D");
        expect(testGrader(67)).to.equal("D");
        expect(testGrader(63)).to.equal("D");
        expect(testGrader(60)).to.equal("D");
      });

      it("when grade is below 60", function () {
        for (let i = 0; i < 60; i++) {
          const gradeUnder60 = Math.ceil(Math.random() * 59);
          expect(testGrader(gradeUnder60)).to.equal("F");
        }
      });
    });
  });

  describe("#6: daysInTheMonth", function () {
    describe("returns the correct number of days", function () {
      it("when the month is 1, 3, 5, 7, 8, 10, 12", function () {
        expect(daysInTheMonth(1)).to.equal(31);
        expect(daysInTheMonth(3)).to.equal(31);
        expect(daysInTheMonth(5)).to.equal(31);
        expect(daysInTheMonth(7)).to.equal(31);
        expect(daysInTheMonth(8)).to.equal(31);
        expect(daysInTheMonth(10)).to.equal(31);
        expect(daysInTheMonth(12)).to.equal(31);
      });

      it("when the month is 4, 6, 9, 11", function () {
        expect(daysInTheMonth(4)).to.equal(30);
        expect(daysInTheMonth(6)).to.equal(30);
        expect(daysInTheMonth(9)).to.equal(30);
        expect(daysInTheMonth(11)).to.equal(30);
      });

      it("when the month is 2", function () {
        expect(daysInTheMonth(2)).to.equal(28);
      });
    });
  });
});
