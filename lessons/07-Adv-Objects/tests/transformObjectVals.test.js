import { expect } from "chai";
import { transformObjectVals } from "../transformObjectVals.js";
import {
  doubleInput,
  doubleExpected,
  uppercaseInput,
  uppercaseExpected,
  booleanInput,
  booleanExpected,
  mixedInput,
  mixedExpected,
  nestedObj,
  nestedObjExpected,
  doubleTransform,
  toUpperCase,
  negateBoolean,
  mixedTransform,
  identityTransform,
  numOnlyTransform,
} from "../data/transformObjectVals.data.js";

describe("transformObjectVals", () => {
  it("returns an object", () => {
    const result = transformObjectVals(doubleInput, (x) => x * 2);
    expect(result).to.be.an("object");
  });

  it("returns a different object with same input k-v pairs using an identity function", () => {
    const result = transformObjectVals(nestedObj, identityTransform);
    expect(result).to.not.equal(nestedObjExpected);
  });

  it("transforms numeric values using a doubling function", () => {
    const result = transformObjectVals(doubleInput, doubleTransform);
    expect(result).to.deep.equal(doubleExpected);
  });

  it("transforms string values using an uppercase function", () => {
    const result = transformObjectVals(uppercaseInput, toUpperCase);
    expect(result).to.deep.equal(uppercaseExpected);
  });

  it("negates boolean values using a negation function", () => {
    const result = transformObjectVals(booleanInput, negateBoolean);
    expect(result).to.deep.equal(booleanExpected);
  });

  it("correctly handles mixed data types using a type-dependent function", () => {
    const result = transformObjectVals(mixedInput, mixedTransform);
    expect(result).to.deep.equal(mixedExpected);
  });

  it("returns a different object with same input k-v pairs using an unmatched type-specific function", () => {
    const result = transformObjectVals(uppercaseInput, numOnlyTransform);
    expect(result).to.not.deep.equal(uppercaseExpected);
  });
});
