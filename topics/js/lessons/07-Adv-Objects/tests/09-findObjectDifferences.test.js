import { findObjectDifferences } from "../09-findObjectDifferences.js";
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
} from "../data/09-findObjectDifferences.data.js";

xdescribe("#9: findObjectDifferences", function () {
  it("should find differences between two objects with some differing and some matching properties", function () {
    expect(findObjectDifferences(objectA, objectB)).toEqual(
      expectedDifferencesAB
    );
  });

  it("should find differences when one object has additional properties", function () {
    expect(findObjectDifferences(objectX, objectY)).toEqual(
      expectedDifferencesXY
    );
  });

  it("should handle cases where both objects are empty", function () {
    expect(findObjectDifferences(objectEmpty1, objectEmpty2)).toEqual(
      expectedDifferencesEmpty
    );
  });

  it("should handle cases where one object is empty and the other has properties", function () {
    expect(findObjectDifferences(objectEmpty1, objectY)).toEqual({
      size: [undefined, "M"],
      color: [undefined, "blue"],
      material: [undefined, "cotton"],
    });
    expect(findObjectDifferences(objectX, objectEmpty2)).toEqual({
      color: ["red", undefined],
      size: ["M", undefined],
    });
  });
});
