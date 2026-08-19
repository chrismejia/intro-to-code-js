import { objectCount } from "../03-objectCount.js";
import {
  emptyObject,
  noObjects,
  oneObject,
  multipleTopLevelObjects,
  noObjectsEmptyBonus,
  noObjectsWithElementsBonus,
  oneObjectBonus,
  multipleKeysWithObjectsBonus,
} from "../data/03-objectCount.data.js";

describe("#3: objectCount", () => {
  it("returns a number", () => {
    expect(typeof objectCount(emptyObject)).toBe("number");
    expect(typeof objectCount(noObjects)).toBe("number");
    expect(typeof objectCount(oneObject)).toBe("number");
    expect(typeof objectCount(multipleTopLevelObjects)).toBe("number");
  });

  describe("returns the correct number of objects found within the input object", () => {
    it("when the object is empty", () => {
      expect(typeof objectCount(emptyObject)).toBe("number");
      expect(objectCount(emptyObject)).toBe(0);
    });

    it("when the object has no object values", () => {
      expect(typeof objectCount(noObjects)).toBe("number");
      expect(objectCount(noObjects)).toBe(0);
    });

    it("when the object has 1 object value", () => {
      expect(typeof objectCount(oneObject)).toBe("number");
      expect(objectCount(oneObject)).toBe(1);
    });

    it("when the object has multiple object values", () => {
      expect(typeof objectCount(multipleTopLevelObjects)).toBe("number");
      expect(objectCount(multipleTopLevelObjects)).toBe(4);
    });
  });

  describe("BONUS", () => {
    describe("also examines array sub-values for objects and adds any found to the total count", () => {
      it("when the value array is empty", () => {
        expect(typeof objectCount(noObjectsEmptyBonus)).toBe("number");
        expect(objectCount(noObjectsEmptyBonus)).toBe(0);
      });

      it("when the value array has no objects", () => {
        expect(typeof objectCount(noObjectsWithElementsBonus)).toBe("number");
        expect(objectCount(noObjectsWithElementsBonus)).toBe(0);
      });

      it("when the value array has 1 object", () => {
        expect(typeof objectCount(oneObjectBonus)).toBe("number");
        expect(objectCount(oneObjectBonus)).toBe(2);
      });

      it("when the value array has multiple objects", () => {
        expect(typeof objectCount(multipleKeysWithObjectsBonus)).toBe("number");
        expect(objectCount(multipleKeysWithObjectsBonus)).toBe(9);
      });
    });
  });
});
