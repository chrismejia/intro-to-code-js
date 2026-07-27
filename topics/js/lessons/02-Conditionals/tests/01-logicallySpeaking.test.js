import { andTrue, andFalse, orTrue, orFalse } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * To check one exercise at a time with Jest:
 * 1. Find the exercise you're working on.
 * 2. Remove the `x` from `xdescribe` or `xit` for that exercise.
 * 3. Run `npm run test:02` from the repo root.
 * 4. Read the Jest output for passing and failing checks.
 */

describe("#1: Logically speaking", () => {
  describe("Using the && (AND) operator", () => {
    it("andTrue -> is defined", () => {
      expect(andTrue).not.toBeUndefined();
    });

    it("andTrue -> evaluates two givens with && to TRUE", () => {
      expect(andTrue).toBe(true);
    });

    it("andFalse -> is defined", () => {
      expect(andFalse).not.toBeUndefined();
    });

    it("andFalse -> evaluates two givens with && to FALSE", () => {
      expect(andFalse).toBe(false);
    });
  });

  describe("Using the || (OR) operator", () => {
    it("orTrue -> is defined", () => {
      expect(orTrue).not.toBeUndefined();
    });

    it("orTrue -> evaluates two givens with || to TRUE", () => {
      expect(orTrue).toBe(true);
    });

    it("orFalse -> is defined", () => {
      expect(orFalse).not.toBeUndefined();
    });

    it("orFalse -> evaluates two givens with || to FALSE", () => {
      expect(orFalse).toBe(false);
    });
  });
});
