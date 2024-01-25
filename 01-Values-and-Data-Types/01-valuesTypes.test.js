import { expect } from "chai";
import {
  myFirstName,
  myAge,
  codingIsFun,
  isNull,
  isUndefined,
  numA,
  numB,
  addedTo,
  subtractedBy,
  multipliedBy,
  dividedBy,
  remainderOf,
  myDetails,
  nameType,
  ageType,
  funType,
} from "../01-Values-and-Data-Types";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-01` in the Shell and hit Enter.
 */

describe("01 - Values and Types", () => {
  describe("#1: What's your name?", () => {
    describe("The variable myFirstName", () => {
      it("should be a string", () => {
        expect(myFirstName).to.be.a("string");
      });

      it("should not be an empty string", () => {
        expect(myFirstName).to.not.be.empty;
      });
    });
  });

  describe("#2: What's your age?", () => {
    describe("The variable myAge", () => {
      it("should be a number", () => {
        expect(myAge).to.be.a("number");
      });
    });
  });

  describe("#3: In fact, it's super fun", () => {
    describe("The variable codingIsFun", () => {
      it("should be a boolean value", () => {
        expect(codingIsFun).to.be.a("boolean");
      });

      it("should confirm that it's in fact fun to code ;p", () => {
        expect(codingIsFun).to.equal(true);
      });
    });
  });

  describe("#4: Null and undefined", () => {
    it("isNull -> should have a `null` value", () => {
      expect(isNull).to.be.a("null");
    });

    it("isUndefined -> should have an `undefined` value", () => {
      expect(isUndefined).to.be.a("undefined");
    });
  });

  describe("#5: Quickest Math Class Ever", () => {
    describe("Variable declarations and value assignements", () => {
      it("numA -> assigned a number value of 15", () => {
        expect(numA).to.be.a("number");
        expect(numA).to.equal(15);
      });
      it("numB -> assigned a number value of 3", () => {
        expect(numB).to.be.a("number");
        expect(numB).to.equal(3);
      });
    });

    describe("Math operations", () => {
      it("addedTo -> expression assignment evaluates to 18", () => {
        expect(addedTo).to.equal(18);
      });
      it("subtractedBy -> expression assignment evaluates to 12", () => {
        expect(subtractedBy).to.equal(12);
      });
      it("multipliedBy -> expression assignment evaluates to 45", () => {
        expect(multipliedBy).to.equal(45);
      });
      it("dividedBy -> expression assignment evaluates to 5", () => {
        expect(dividedBy).to.equal(5);
      });
      it("remainderOf -> expression assignment evaluates to 0", () => {
        expect(remainderOf).to.equal(0);
      });
    });
  });

  describe("#6: Values are more than values", () => {
    it("nameType -> correctly evaluates type", () => {
      expect(nameType).to.be.a("string");
      expect(nameType).to.equal("string");
    });
    it("ageType -> correctly evaluates type", () => {
      expect(ageType).to.be.a("string");
      expect(ageType).to.equal("number");
    });
    it("funType -> correctly evaluates type", () => {
      expect(funType).to.be.a("string");
      expect(funType).to.equal("boolean");
    });
  });

  describe("#7: Numbers and words, all together", () => {
    it("myDetails -> is a string", () => {
      expect(myDetails).to.be.a("string");
    });

    it("myDetails features the value of myFirstName", () => {
      expect(myDetails.split(" ")).to.include(`${myFirstName}`);
    });

    it("myDetails features the value of myAge", () => {
      expect(myDetails.split(" ")).to.include(`${myAge}`);
    });
  });
});
