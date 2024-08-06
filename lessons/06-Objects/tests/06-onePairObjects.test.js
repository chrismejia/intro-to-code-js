import { expect } from "chai";
import { onePairObjects } from "../06-onePairObjects";
import {
  singlePair,
  multipleTopLevelPairs,
  multipleTopLevelPairsAns,
  hasNestedObj,
  hasNestedObjAns,
  mixedTypesObj,
  mixedTypesAns,
} from "../data/06-onePairObject.data";

xdescribe("#6: onePairObjects", () => {
  it("returns an empty array for an empty input object", () => {
    const result = onePairObjects({});
    expect(result).to.deep.equal([]);
  });

  it("returns an array with one object for an input object with one key-value pair", () => {
    const result = onePairObjects(singlePair);
    expect(result).to.deep.equal([{ one: 1 }]);
  });

  it("returns an array with multiple objects for an input object with multiple key-value pairs", () => {
    const result = onePairObjects(multipleTopLevelPairs);
    expect(result).to.deep.equal(multipleTopLevelPairsAns);
  });

  it("handles nested objects as values correctly", () => {
    const result = onePairObjects(hasNestedObj);
    expect(result).to.deep.equal(hasNestedObjAns);
  });

  it("handles different types of values correctly", () => {
    const result = onePairObjects(mixedTypesObj);
    expect(result).to.deep.equal(mixedTypesAns);
  });
});
