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
      expect(keyValidator(emptyOne, emptyTwo)).to.eql([]);
    });

    describe("when each object has the same keys", () => {
      it("with the same values", () => {
        expect(keyValidator(twoKeysBase, twoKeysSameVals)).to.eql([]);
      });

      it("with different values", () => {
        expect(keyValidator(twoKeysBase, twoKeysDiffVals)).to.eql([]);
      });
    });

    it("when baseObj contains all of targetObj's keys and their own", () => {
      const result1 = keyValidator(twoKeysSameVals, oneKey);
      expect(result1).to.eql([]);

      const result2 = keyValidator(manyKeys, emptyOne);
      expect(result2).to.eql([]);
    });
  });

  describe("returns an array containing the missing keys", () => {
    it("when baseObj is missing one key", () => {
      const result1 = keyValidator(emptyOne, oneKey);
      expect(result1).to.eql(["a"]);

      const result2 = keyValidator(oneKey, twoKeysDiffVals);
      expect(result2).to.eql(["b"]);
    });

    it("when baseObj is missing more than one key", () => {
      const result1 = keyValidator(emptyOne, twoKeysBase);
      expect(result1).to.eql(["a", "b"]);

      const result2 = keyValidator(emptyTwo, manyKeys);
      expect(result2).to.eql(["e", "f", "g"]);

      const result3 = keyValidator(twoKeysBase, twoKeysDiffKeys);
      expect(result3).to.eql(["c", "d"]);
    });
  });
});
