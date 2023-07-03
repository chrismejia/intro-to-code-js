import caesarCipher from "../06-caesarCrafter";
import { baseCaesar } from "../data/caesarCrafter.data";
import {
  byPos2,
  byPos13,
  byNeg2,
  byNeg13,
  byPos52,
  byPos125,
  byNeg52,
  byNeg125,
} from "./06-caesarCrafter.test.data";
import { expect } from "chai";

describe("#6: caesarCipher", function () {
  describe("returns the base cipher", function () {
    it("when the shiftAmount is 0", function () {
      const result = caesarCipher(0);
      expect(result).to.eql(baseCaesar);
    });
  });

  describe("returns the correct cipher when shiftAmount is positive", function () {
    it("shiftAmount = 2", function () {
      const pos2 = caesarCipher(2);
      expect(pos2).to.eql(byPos2);
    });

    it("shiftAmount = 13", function () {
      const pos13 = caesarCipher(13);
      expect(pos13).to.eql(byPos13);
    });
  });

  describe("returns the correct cipher when shiftAmount is negative", function () {
    it("shiftAmount = -2", function () {
      const neg2 = caesarCipher(-2);
      expect(neg2).to.eql(byNeg2);
    });

    it("shiftAmount = -13", function () {
      const neg13 = caesarCipher(-13);
      expect(neg13).to.eql(byNeg13);
    });
  });

  describe("BONUS: shiftAmount > 26 OR shiftAmount < -26", function () {
    it("shiftAmount = 52", function () {
      const pos52 = caesarCipher(52);
      expect(pos52).to.eql(byPos52);
    });

    it("shiftAmount = 125", function () {
      const pos125 = caesarCipher(125);
      expect(pos125).to.eql(byPos125);
    });

    it("shiftAmount = -52", function () {
      const neg52 = caesarCipher(-52);
      expect(neg52).to.eql(byNeg52);
    });

    it("shiftAmount = -125", function () {
      const neg125 = caesarCipher(-125);
      expect(neg125).to.eql(byNeg125);
    });
  });
});
