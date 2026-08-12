import { testGrader } from "../index.js";

/**
 * The code below is what tests your answers.
 *
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

describe("#8: testGrader", () => {
  describe("returns the correct grade", () => {
    it("when grade is between 90 and 100", () => {
      expect(testGrader(100)).toBe("A");
      expect(testGrader(97)).toBe("A");
      expect(testGrader(93)).toBe("A");
      expect(testGrader(90)).toBe("A");
    });

    it("when grade is between 80 and 89", () => {
      expect(testGrader(89)).toBe("B");
      expect(testGrader(87)).toBe("B");
      expect(testGrader(83)).toBe("B");
      expect(testGrader(80)).toBe("B");
    });

    it("when grade is between 70 and 79", () => {
      expect(testGrader(79)).toBe("C");
      expect(testGrader(77)).toBe("C");
      expect(testGrader(73)).toBe("C");
      expect(testGrader(70)).toBe("C");
    });

    it("when grade is between 60 and 69", () => {
      expect(testGrader(69)).toBe("D");
      expect(testGrader(67)).toBe("D");
      expect(testGrader(63)).toBe("D");
      expect(testGrader(60)).toBe("D");
    });

    it("when grade is between 0 and 60", () => {
      expect(testGrader(59)).toBe("F");
      expect(testGrader(30)).toBe("F");
      expect(testGrader(1)).toBe("F");
      expect(testGrader(0)).toBe("F");
    });
  });

  describe("handles wrong inputs correctly", () => {
    const err = "Not a valid grade.";

    it("invalid numbers", () => {
      expect(testGrader(-12)).toBe(err);
      expect(testGrader(-1)).toBe(err);
      expect(testGrader(101)).toBe(err);
      expect(testGrader(255)).toBe(err);
    });

    it("other invalid inputs", () => {
      expect(testGrader("month")).toBe(err);
      expect(testGrader("February")).toBe(err);
      expect(testGrader("12")).toBe(err);
      expect(testGrader("1")).toBe(err);
      expect(testGrader([1, 2, 3])).toBe(err);
      expect(testGrader({})).toBe(err);
    });
  });
});
