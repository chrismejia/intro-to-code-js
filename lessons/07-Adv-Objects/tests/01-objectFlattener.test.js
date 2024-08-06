import { expect } from "chai";
import objectFlattener from "../01-objectFlattener";
import {
  noObjVal,
  oneObjVal,
  oneObjExpected,
  arrayObjVal,
  arrayObjExpected,
  multiObjExpected,
  originalObjExpected,
} from "../data/objectFlattener.data";

describe("#1: objectFlattener", () => {
  describe("objectFlattener", () => {
    it("returns the same object if there are no nested objects", () => {
      const result = objectFlattener(noObjVal);
      expect(result).to.deep.equal(noObjVal);
    });

    it("flattens a single-nested object", () => {
      const result = objectFlattener(oneObjVal);
      expect(result).to.deep.equal(oneObjExpected);
    });

    it("flattens multiple nested objects", () => {
      const result = objectFlattener(multiObjVal);
      expect(result).to.deep.equal(multiObjExpected);
    });

    it("flattens nested objects with array values", () => {
      const result = objectFlattener(arrayObjVal);
      expect(result).to.deep.equal(arrayObjExpected);
    });

    it("should not modify the original object reference", () => {
      const result = objectFlattener(originalObj);
      expect(result).to.not.equal(originalObj);
      expect(originalObj).to.deep.equal(originalObjExpected);
    });
  });
});
