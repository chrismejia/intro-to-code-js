/**
 * #1: What's your name?
 *
 * Define the variable myFirstName.
 * Assign it the string of your name.
 */

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-01` in the Shell and hit Enter.
 */
import { expect } from "chai";

const myFirstName = "name";

/**
 * #2: What's your age?
 *
 * Define the variable myAge.
 * Assign it the value of your age.
 */

const myAge = 40;

/**
 * #3: In fact, it's super fun.
 *
 * Define the variable codingIsFun and assign it a boolean value.
 * There's only one right answer here.
 */

const codingIsFun = true;

/**
 * #4: Null and undefined
 *
 * Null represents the intentional absence of value.
 * Undefined represents a lack of defined value. Variables that are declared but don't have an initial value set will be assigned the value `undefined`.
 *
 * Define two variables: isNull and isUndefined.
 * Assign the value null to isNull and the value undefined to isUndefined.
 */

const isNull = null;
const isUndefined = undefined;

/**
 * #5: Quickest math class ever.
 *
 * Define the variable numA. Assign it the value 15.
 * Define the variable numB. Assign it the value 3.
 *
 * Define the variable addedTo. Assign it the expression (don't solve) of numA being added to numB.
 * Define the variable subtractedBy. Assign it the expression (don't solve) of numA subtracted by numB.
 * Define the variable multipliedBy. Assign it the expression (don't solve) of numA being multiplied by numB.
 * Define the variable dividedBy. Assign it the expression (don't solve) of numA being divided by numB.
 * Define the variable moduloOf. Assign it the expression (don't solve) of numA being added to numB.
 *
 * Do not reassign or directly use the values of numA and numB in the math variable value defintions.
 * Do not enter the solved math expression's result for any of the math variable values.
 *
 * Pass numA and numB in as variables, not as their values.
 */

const numA = 15;
const numB = 3;

const addedTo = numA + numB;
const subtractedBy = numA - numB;
const multipliedBy = numA * numB;
const dividedBy = numA / numB;
const moduloOf = numA % numB;

/**
 * #6: Numbers and Words, all together
 *
 * Define the variable myDetails.
 * Assign it the value of a template literal that has the myFirstName and myAge variables embedded within. DO NOT direct embed the values into myDetails.
 *
 * e.g. if myFirstName = "Christian" and myAge = 32:
 * My name is Christian and I'm 32 years old.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#expression_interpolation
 */

const myDetails = `My name is ${myFirstName} and I'm ${myAge} years old.`;

describe("01 - Values and Types", function () {
  describe("#1: What's your name?", function () {
    describe("The variable myFirstName", function () {
      it("should be a string", function () {
        expect(myFirstName).to.be.a("string");
      });

      it("should not be an empty string", function () {
        expect(myFirstName).to.not.be.empty;
      });
    });
  });

  describe("#2: What's your age?", function () {
    describe("The variable myAge", function () {
      it("should be a number", function () {
        expect(myAge).to.be.a("number");
      });
    });
  });

  describe("#3: In fact, it's super fun", function () {
    describe("The variable codingIsFun", function () {
      it("should be a boolean value", function () {
        expect(codingIsFun).to.be.a("boolean");
      });

      it("should confirm that it's in fact fun to code ;p", function () {
        expect(codingIsFun).to.equal(true);
      });
    });
  });

  describe("#4: Null and undefined", function () {
    it("isNull -> should have a `null` value", function () {
      expect(isNull).to.be.a("null");
    });

    it("isUndefined -> should have an `undefined` value", function () {
      expect(isUndefined).to.be.a("undefined");
    });
  });

  describe("#5: Quickest Math Class Ever", function () {
    describe("Variable declarations and value assignements", function () {
      it("numA -> assigned a number value of 15", function () {
        expect(numA).to.be.a("number");
        expect(numA).to.equal(15);
      });
      it("numB -> assigned a number value of 3", function () {
        expect(numB).to.be.a("number");
        expect(numB).to.equal(3);
      });
    });

    describe("Math operations", function () {
      it("addedTo -> expression assignment evaluates to 18", function () {
        expect(addedTo).to.equal(18);
      });
      it("subtractedBy -> expression assignment evaluates to 12", function () {
        expect(subtractedBy).to.equal(12);
      });
      it("multipliedBy -> expression assignment evaluates to 45", function () {
        expect(multipliedBy).to.equal(45);
      });
      it("dividedBy -> expression assignment evaluates to 5", function () {
        expect(dividedBy).to.equal(5);
      });
      it("moduloOf -> expression assignment evaluates to 0", function () {
        expect(moduloOf).to.equal(0);
      });
    });
  });

  describe("#6: Numbers and words, all together", function () {
    it("myDetails -> is a string", function () {
      expect(myDetails).to.be.a("string");
    });

    it("myDetails features the value of myFirstName", function () {
      expect(myDetails.split(" ")).to.include(`${myFirstName}`);
    });

    it("myDetails features the value of myAge", function () {
      expect(myDetails.split(" ")).to.include(`${myAge}`);
    });
  });
});
