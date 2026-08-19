import { keyValidator } from "../06-keyValidator.js";
import {
  emptyOne,
  emptyTwo,
  oneKey,
  twoKeysBase,
  twoKeysSameVals,
  twoKeysDiffVals,
  twoKeysDiffKeys,
  manyKeys,
} from "../data/06-keyValidator.data.js";

describe("#6: keyValidator", () => {
  describe("returns an empty array", () => {
    it("for empty objects", () => {
      expect(keyValidator(emptyOne, emptyTwo)).toEqual([]);
    });

    describe("when each object has the same keys", () => {
      it("with the same values", () => {
        expect(keyValidator(twoKeysBase, twoKeysSameVals)).toEqual([]);
      });

      it("with different values", () => {
        expect(keyValidator(twoKeysBase, twoKeysDiffVals)).toEqual([]);
      });
    });

    it("when baseObj contains all of targetObj's keys and their own", () => {
      const result1 = keyValidator(twoKeysSameVals, oneKey);
      expect(result1).toEqual([]);

      const result2 = keyValidator(manyKeys, emptyOne);
      expect(result2).toEqual([]);
    });
  });

  describe("returns an array containing the missing keys", () => {
    it("when baseObj is missing one key", () => {
      const result1 = keyValidator(emptyOne, oneKey);
      expect(result1).toEqual(["a"]);

      const result2 = keyValidator(oneKey, twoKeysDiffVals);
      expect(result2).toEqual(["b"]);
    });

    it("when baseObj is missing more than one key", () => {
      const result1 = keyValidator(emptyOne, twoKeysBase);
      expect(result1).toEqual(["a", "b"]);

      const result2 = keyValidator(emptyTwo, manyKeys);
      expect(result2).toEqual(["e", "f", "g"]);

      const result3 = keyValidator(twoKeysBase, twoKeysDiffKeys);
      expect(result3).toEqual(["c", "d"]);
    });
  });
});
