import {
  emptyOne,
  emptyTwo,
  twoKeysOne,
  twoKeysTwo,
  twoKeysThree,
} from "./data/keyValidator";

/**
 * #4: keyValidator
 * Define the function keyValidator.
 * keyValidator accepts two objects, a testObj and a targetObj.
 * keyValidator compares the keys of the targetObj to the ones the testObj has.
 * keyValidator returns an array of all the keys, as strings, missing from the testObj.
 *
 * If the testObj has all of the same keys as the targetObj, return the string "Both objects are the same."
 *
 * @function keyValidator
 * @param {Object} testObj
 * @param {Object} targetObj
 * @returns {String[]}
 */

function keyValidator(testObj, targetObj) {
  let missingKeys = [];
  const targetKeys = Object.keys(targetObj);
  for (const testKey of Object.keys(testObj)) {
    if (targetKeys.indexOf(testKey) === -1) {
      missingKeys.push(testKey);
    }
  }
  return missingKeys;
}

describe("#4: keyValidator", () => {
  describe("returns an array", () => {
    describe("that is empty", () => {
      it("when both objects are empty", () => {
        expect(keyValidator(emptyOne, emptyTwo)).to.eql([]);
      });
      describe("when each object has all the same keys", () => {
        it("with the same values", () => {
          expect(keyValidator(twoKeysOne, twoKeysTwo)).to.eql([]);
        });
        it("with different values", () => {
          expect(keyValidator(twoKeysOne, twoKeysThree)).to.eql([]);
        });
      });
    });

    describe("that contains the missing keys", () => {
      it("", () => {});
    });
  });
});
