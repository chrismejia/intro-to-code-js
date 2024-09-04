import { expect } from "chai";
import { deepClone } from "../10-deepClone";
import {
  objNoDate,
  clonedObjWithoutDate,
  objWithDate,
  clonedObjWithDate,
} from "../data/10-deepClone.data";

xdescribe("#10: deepClone", () => {
  it("should return an object", () => {
    const result = deepClone(objNoDate);
    expect(result).to.be.an("object");
  });

  it("should correctly clone objects without Date objects", () => {
    const result = deepClone(objNoDate);
    expect(result).to.deep.equal(clonedObjWithoutDate);
  });

  it("should not mutate the original object", () => {
    const result = deepClone(objNoDate);
    expect(result).to.not.equal(objNoDate);
    expect(result).to.deep.equal(clonedObjWithoutDate);
  });

  xdescribe("BONUS", () => {
    it("should correctly clone objects with Date objects", () => {
      const result = deepClone(objWithDate);
      expect(result).to.deep.equal(clonedObjWithDate);
    });

    it("should correctly clone Date objects and preserve their functionality", () => {
      const result = deepClone(objWithDate);
      expect(result.date).to.be.instanceOf(Date);
      expect(result.date.getTime()).to.equal(objWithDate.date.getTime());
    });
  });
});
