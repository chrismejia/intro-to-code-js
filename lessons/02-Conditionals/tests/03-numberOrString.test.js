import { expect } from "chai";
import { numberOrString } from "..";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-02` in the Shell and hit Enter.
 */

describe("#3: numberOrString", () => {
  describe("returns the correct output", () => {
    it("string input -> 'This is a string'", () => {
      expect(numberOrString("")).to.equal("This is a string");
      expect(numberOrString("a")).to.equal("This is a string");
      expect(numberOrString("word")).to.equal("This is a string");
      expect(numberOrString("two words")).to.equal("This is a string");
      expect(numberOrString("a1b2c3")).to.equal("This is a string");
    });

    it("number input -> 'This is a number'", () => {
      for (let i = 1; i <= 100; i++) {
        let num = i * Math.ceil(Math.random() * 99);
        expect(numberOrString(num)).to.equal("This is a number");
      }
    });

    it("any other input -> 'This is not a string nor a number'", () => {
      let types = [{ a: 1 }, [1, 2, 3], false];

      types.forEach((type) => {
        expect(numberOrString(type)).to.be.a("string");
      });
    });
  });
});
