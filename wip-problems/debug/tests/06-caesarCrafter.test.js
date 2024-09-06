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

describe("#6: caesarCipher", () => {
  describe("returns the base cipher", () => {
    it("when the shiftAmount is 0", () => {
      const result = caesarCipher(0);
      expect(result).to.deep.equal(baseCaesar);
    });
  });

  describe("returns the correct cipher when shiftAmount is positive", () => {
    it("shiftAmount = 2", () => {
      const pos2 = caesarCipher(2);
      expect(pos2).to.deep.equal(byPos2);
    });

    it("shiftAmount = 13", () => {
      const pos13 = caesarCipher(13);
      expect(pos13).to.deep.equal(byPos13);
    });
  });

  describe("returns the correct cipher when shiftAmount is negative", () => {
    it("shiftAmount = -2", () => {
      const neg2 = caesarCipher(-2);
      expect(neg2).to.deep.equal(byNeg2);
    });

    it("shiftAmount = -13", () => {
      const neg13 = caesarCipher(-13);
      expect(neg13).to.deep.equal(byNeg13);
    });
  });

  describe("BONUS: shiftAmount > 26 OR shiftAmount < -26", () => {
    it("shiftAmount = 52", () => {
      const pos52 = caesarCipher(52);
      expect(pos52).to.deep.equal(byPos52);
    });

    it("shiftAmount = 125", () => {
      const pos125 = caesarCipher(125);
      expect(pos125).to.deep.equal(byPos125);
    });

    it("shiftAmount = -52", () => {
      const neg52 = caesarCipher(-52);
      expect(neg52).to.deep.equal(byNeg52);
    });

    it("shiftAmount = -125", () => {
      const neg125 = caesarCipher(-125);
      expect(neg125).to.deep.equal(byNeg125);
    });
  });
});
