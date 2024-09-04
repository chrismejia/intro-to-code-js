import { expect } from "chai";
import { findObjectDifferences } from "../09-findObjectDifferences";
import {
  objectA,
  objectB,
  expectedDifferencesAB,
  objectX,
  objectY,
  expectedDifferencesXY,
  objectEmpty1,
  objectEmpty2,
  expectedDifferencesEmpty,
} from "../data/09-findObjectDifferences.data";

describe("#9: findObjectDifferences", function () {
  it("should find differences between two objects with some differing and some matching properties", function () {
    expect(findObjectDifferences(objectA, objectB)).to.deep.equal(
      expectedDifferencesAB
    );
  });

  it("should find differences when one object has additional properties", function () {
    expect(findObjectDifferences(objectX, objectY)).to.deep.equal(
      expectedDifferencesXY
    );
  });

  it("should handle cases where both objects are empty", function () {
    expect(findObjectDifferences(objectEmpty1, objectEmpty2)).to.deep.equal(
      expectedDifferencesEmpty
    );
  });

  it("should handle cases where one object is empty and the other has properties", function () {
    expect(findObjectDifferences(objectEmpty1, objectY)).to.deep.equal({
      size: [undefined, "M"],
      color: [undefined, "blue"],
      material: [undefined, "cotton"],
    });
    expect(findObjectDifferences(objectX, objectEmpty2)).to.deep.equal({
      color: ["red", undefined],
      size: ["M", undefined],
    });
  });
});
