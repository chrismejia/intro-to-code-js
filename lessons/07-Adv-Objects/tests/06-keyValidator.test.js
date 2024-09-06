import { expect } from "chai";
import { keyValidator } from "../06-keyValidator";
import {
  emptyOne,
  emptyTwo,
  oneKey,
  twoKeysBase,
  twoKeysSameVals,
  twoKeysDiffVals,
  twoKeysDiffKeys,
  manyKeys,
} from "../data/06-keyValidator.data";

describe("#6: keyValidator", () => {
  describe("returns an empty array", () => {
    it("for empty objects", () => {
      expect(keyValidator(emptyOne, emptyTwo)).to.deep.equal([]);
    });

    describe("when each object has the same keys", () => {
      it("with the same values", () => {
        expect(keyValidator(twoKeysBase, twoKeysSameVals)).to.deep.equal([]);
      });

      it("with different values", () => {
        expect(keyValidator(twoKeysBase, twoKeysDiffVals)).to.deep.equal([]);
      });
    });

    it("when baseObj contains all of targetObj's keys and their own", () => {
      const result1 = keyValidator(twoKeysSameVals, oneKey);
      expect(result1).to.deep.equal([]);

      const result2 = keyValidator(manyKeys, emptyOne);
      expect(result2).to.deep.equal([]);
    });
  });

  describe("returns an array containing the missing keys", () => {
    it("when baseObj is missing one key", () => {
      const result1 = keyValidator(emptyOne, oneKey);
      expect(result1).to.deep.equal(["a"]);

      const result2 = keyValidator(oneKey, twoKeysDiffVals);
      expect(result2).to.deep.equal(["b"]);
    });

    it("when baseObj is missing more than one key", () => {
      const result1 = keyValidator(emptyOne, twoKeysBase);
      expect(result1).to.deep.equal(["a", "b"]);

      const result2 = keyValidator(emptyTwo, manyKeys);
      expect(result2).to.deep.equal(["e", "f", "g"]);

      const result3 = keyValidator(twoKeysBase, twoKeysDiffKeys);
      expect(result3).to.deep.equal(["c", "d"]);
    });
  });
});
