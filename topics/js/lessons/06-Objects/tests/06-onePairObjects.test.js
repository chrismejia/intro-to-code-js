import { onePairObjects } from "../06-onePairObjects.js";
import {
  singlePair,
  multipleTopLevelPairs,
  multipleTopLevelPairsAns,
  hasNestedObj,
  hasNestedObjAns,
  mixedTypesObj,
  mixedTypesAns,
} from "../data/06-onePairObject.data.js";

xdescribe("#6: onePairObjects", () => {
  it("returns an empty array for an empty input object", () => {
    const result = onePairObjects({});
    expect(result).toEqual([]);
  });

  it("returns an array with one object for an input object with one key-value pair", () => {
    const result = onePairObjects(singlePair);
    expect(result).toEqual([{ one: 1 }]);
  });

  it("returns an array with multiple objects for an input object with multiple key-value pairs", () => {
    const result = onePairObjects(multipleTopLevelPairs);
    expect(result).toEqual(multipleTopLevelPairsAns);
  });

  it("handles nested objects as values correctly", () => {
    const result = onePairObjects(hasNestedObj);
    expect(result).toEqual(hasNestedObjAns);
  });

  it("handles different types of values correctly", () => {
    const result = onePairObjects(mixedTypesObj);
    expect(result).toEqual(mixedTypesAns);
  });
});
