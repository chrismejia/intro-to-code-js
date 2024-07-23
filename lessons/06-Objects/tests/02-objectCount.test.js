import { expect } from "chai";
import { objectCount } from "../02-objectCount";
import {
  emptyObject,
  noObjects,
  oneObject,
  multipleTopLevelObjects,
  noObjectsEmptyBonus,
  noObjectsWithElementsBonus,
  oneObjectBonus,
  multipleKeysWithObjectsBonus,
} from "../data/02-objectCount.data";

describe("#2: objectCount", () => {
  it("returns a number", () => {
    expect(objectCount(emptyObject)).to.be.a("number");
    expect(objectCount(noObjects)).to.be.a("number");
    expect(objectCount(oneObject)).to.be.a("number");
    expect(objectCount(multipleTopLevelObjects)).to.be.a("number");
  });

  describe("returns the correct number of objects found within the input object", () => {
    it("when the object is empty", () => {
      expect(objectCount(emptyObject)).to.be.a("number");
      expect(objectCount(emptyObject)).to.equal(0);
    });

    it("when the object has no object values", () => {
      expect(objectCount(noObjects)).to.be.a("number");
      expect(objectCount(noObjects)).to.equal(0);
    });

    it("when the object has 1 object value", () => {
      expect(objectCount(oneObject)).to.be.a("number");
      expect(objectCount(oneObject)).to.equal(1);
    });

    it("when the object has multiple object values", () => {
      expect(objectCount(multipleTopLevelObjects)).to.be.a("number");
      expect(objectCount(multipleTopLevelObjects)).to.equal(4);
    });
  });

  describe("BONUS", () => {
    describe("also examines array sub-values for objects and adds any found to the total count", () => {
      it("when the value array is empty", () => {
        expect(objectCount(noObjectsEmptyBonus)).to.be.a("number");
        expect(objectCount(noObjectsEmptyBonus)).to.equal(0);
      });

      it("when the value array has no objects", () => {
        expect(objectCount(noObjectsWithElementsBonus)).to.be.a("number");
        expect(objectCount(noObjectsWithElementsBonus)).to.equal(0);
      });

      it("when the value array has 1 object", () => {
        expect(objectCount(oneObjectBonus)).to.be.a("number");
        expect(objectCount(oneObjectBonus)).to.equal(2);
      });

      it("when the value array has multiple objects", () => {
        expect(objectCount(multipleKeysWithObjectsBonus)).to.be.a("number");
        expect(objectCount(multipleKeysWithObjectsBonus)).to.equal(9);
      });
    });
  });
});
