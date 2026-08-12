import { andTrue, andFalse, orTrue, orFalse } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * To check one exercise at a time with Jest:
 * 1. Start with this first active exercise.
 * 2. Run `npm run test:02` from the repo root.
 * 3. Read the Jest output and update your answer until its tests pass.
 * 4. Open the next numbered test file and remove the `x` from `xdescribe`.
 * 5. Repeat until every exercise is active and passing.
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
