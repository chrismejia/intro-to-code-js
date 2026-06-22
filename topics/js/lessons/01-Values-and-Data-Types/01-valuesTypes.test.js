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
  exponentiatedTo,
} from "./index.js";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test:01` in the Shell and hit Enter.
 */

describe("01 - Values and Types", () => {
  describe("#1: What's your name?", () => {
    describe("The variable myFirstName", () => {
      it("should be a string", () => {
        expect(typeof myFirstName).toBe("string");
      });

      it("should not be an empty string", () => {
        expect(myFirstName).not.toBe("");
      });
    });
  });

  describe("#2: What's your age?", () => {
    describe("The variable myAge", () => {
      it("should be a number", () => {
        expect(typeof myAge).toBe("number");
      });
    });
  });

  describe("#3: In fact, it's super fun", () => {
    describe("The variable codingIsFun", () => {
      it("should be a boolean value", () => {
        expect(typeof codingIsFun).toBe("boolean");
      });

      it("should confirm that it's in fact fun to code ;p", () => {
        expect(codingIsFun).toBe(true);
      });
    });
  });

  describe("#4: Null and undefined", () => {
    it("isNull -> should have a `null` value", () => {
      expect(isNull).toBeNull();
    });

    it("isUndefined -> should have an `undefined` value", () => {
      expect(isUndefined).toBeUndefined();
    });
  });

  describe("#5: Quickest Math Class Ever", () => {
    describe("Variable declarations and value assignements", () => {
      it("numA -> assigned a number value of 15", () => {
        expect(typeof numA).toBe("number");
        expect(numA).toBe(15);
      });
      it("numB -> assigned a number value of 3", () => {
        expect(typeof numB).toBe("number");
        expect(numB).toBe(3);
      });
    });

    describe("Math operations", () => {
      it("addedTo -> expression assignment evaluates to 18", () => {
        expect(addedTo).toBe(18);
      });
      it("subtractedBy -> expression assignment evaluates to 12", () => {
        expect(subtractedBy).toBe(12);
      });
      it("multipliedBy -> expression assignment evaluates to 45", () => {
        expect(multipliedBy).toBe(45);
      });
      it("dividedBy -> expression assignment evaluates to 5", () => {
        expect(dividedBy).toBe(5);
      });
      it("remainderOf -> expression assignment evaluates to 0", () => {
        expect(remainderOf).toBe(0);
      });
      it("exponentiatedTo -> expression assignment evaluates to 3375", () => {
        expect(exponentiatedTo).toBe(3375);
      });
    });
  });

  describe("#6: Values are more than values", () => {
    it("nameType -> correctly evaluates type", () => {
      expect(typeof nameType).toBe("string");
      expect(nameType).toBe("string");
    });
    it("ageType -> correctly evaluates type", () => {
      expect(typeof ageType).toBe("string");
      expect(ageType).toBe("number");
    });
    it("funType -> correctly evaluates type", () => {
      expect(typeof funType).toBe("string");
      expect(funType).toBe("boolean");
    });
  });

  describe("#7: Numbers and words, all together", () => {
    it("myDetails -> is a string", () => {
      expect(typeof myDetails).toBe("string");
    });

    it("myDetails features the value of myFirstName", () => {
      expect(myDetails).toContain(`${myFirstName}`);
    });

    it("myDetails features the value of myAge", () => {
      expect(myDetails).toContain(`${myAge}`);
    });
  });
});
