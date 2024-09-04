import { expect } from "chai";
import { objectFlattener } from "../13-objectFlattener";
import {
  noObjVal,
  oneObjVal,
  oneObjExpected,
  arrayObjVal,
  arrayObjExpected,
  multiObjVal,
  multiObjExpected,
} from "../data/13-objectFlattener.data";

describe("#13: objectFlattener", () => {
  describe("objectFlattener", () => {
    it("returns the same object untouched if there are no nested objects", () => {
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
  });
});
