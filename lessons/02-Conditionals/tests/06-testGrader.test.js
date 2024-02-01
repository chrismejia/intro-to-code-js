import { expect } from "chai";
import { testGrader } from "..";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-02` in the Shell and hit Enter.
 */

describe("#6: testGrader", () => {
  describe("returns the correct grade", () => {
    it("when grade is between 90 and 100", () => {
      expect(testGrader(100)).to.equal("A");
      expect(testGrader(97)).to.equal("A");
      expect(testGrader(93)).to.equal("A");
      expect(testGrader(90)).to.equal("A");
    });

    it("when grade is between 80 and 89", () => {
      expect(testGrader(89)).to.equal("B");
      expect(testGrader(87)).to.equal("B");
      expect(testGrader(83)).to.equal("B");
      expect(testGrader(80)).to.equal("B");
    });

    it("when grade is between 70 and 79", () => {
      expect(testGrader(79)).to.equal("C");
      expect(testGrader(77)).to.equal("C");
      expect(testGrader(73)).to.equal("C");
      expect(testGrader(70)).to.equal("C");
    });

    it("when grade is between 60 and 69", () => {
      expect(testGrader(69)).to.equal("D");
      expect(testGrader(67)).to.equal("D");
      expect(testGrader(63)).to.equal("D");
      expect(testGrader(60)).to.equal("D");
    });

    it("when grade is between 0 and 60", () => {
      for (let i = 0; i < 60; i++) {
        let gradeUnder60 = Math.ceil(Math.random() * 59);
        expect(testGrader(gradeUnder60)).to.equal("F");
      }
    });
  });

  describe("handles wrong inputs correctly", () => {
    const err = "Not a valid grade.";

    it("invalid numbers", () => {
      expect(testGrader(-12)).to.equal(err);
      expect(testGrader(-1)).to.equal(err);
      expect(testGrader(101)).to.equal(err);
      expect(testGrader(255)).to.equal(err);
    });

    it("other invalid inputs", () => {
      expect(testGrader("month")).to.equal(err);
      expect(testGrader("February")).to.equal(err);
      expect(testGrader("12")).to.equal(err);
      expect(testGrader("1")).to.equal(err);
      expect(testGrader([1, 2, 3])).to.equal(err);
      expect(testGrader({})).to.equal(err);
    });
  });
});
