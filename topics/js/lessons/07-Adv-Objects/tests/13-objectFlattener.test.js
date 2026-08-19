import { objectFlattener } from "../13-objectFlattener.js";
import {
  noObjVal,
  oneObjVal,
  oneObjExpected,
  arrayObjVal,
  arrayObjExpected,
  multiObjVal,
  multiObjExpected,
} from "../data/13-objectFlattener.data.js";

xdescribe("#13: objectFlattener", () => {
  describe("objectFlattener", () => {
    it("returns the same object untouched if there are no nested objects", () => {
      const result = objectFlattener(noObjVal);
      expect(result).toEqual(noObjVal);
    });

    it("flattens a single-nested object", () => {
      const result = objectFlattener(oneObjVal);
      expect(result).toEqual(oneObjExpected);
    });

    it("flattens multiple nested objects", () => {
      const result = objectFlattener(multiObjVal);
      expect(result).toEqual(multiObjExpected);
    });

    it("flattens nested objects with array values", () => {
      const result = objectFlattener(arrayObjVal);
      expect(result).toEqual(arrayObjExpected);
    });
  });
});
