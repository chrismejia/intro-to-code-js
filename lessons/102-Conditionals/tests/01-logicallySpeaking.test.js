import { andTrue, andFalse, orTrue, orFalse } from "..";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-02` in the Shell and hit Enter.
 */
import { expect } from "chai";

describe("#1: Logically speaking", () => {
  describe("Using the && (AND) operator", () => {
    it("andTrue -> is defined", () => {
      expect(andTrue).not.to.be.undefined;
    });

    it("andTrue -> evaluates two givens with && to TRUE", () => {
      expect(andTrue).to.be.true;
    });

    it("andFalse -> is defined", () => {
      expect(andFalse).not.to.be.undefined;
    });

    it("andFalse -> evaluates two givens with && to FALSE", () => {
      expect(andFalse).to.be.false;
    });
  });

  describe("Using the || (OR) operator", () => {
    it("orTrue -> is defined", () => {
      expect(orTrue).not.to.be.undefined;
    });

    it("orTrue -> evaluates two givens with || to TRUE", () => {
      expect(orTrue).to.be.true;
    });

    it("orFalse -> is defined", () => {
      expect(orFalse).not.to.be.undefined;
    });

    it("orFalse -> evaluates two givens with || to FALSE", () => {
      expect(orFalse).to.be.false;
    });
  });
});
