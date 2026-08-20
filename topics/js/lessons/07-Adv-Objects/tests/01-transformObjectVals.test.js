import { transformObjectVals } from "../01-transformObjectVals.js";
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
} from "../data/01-transformObjectVals.data.js";

describe("#1: transformObjectVals", () => {
  it("returns an object", () => {
    const result = transformObjectVals(doubleInput, doubleTransform);
    expect(typeof result).toBe("object");
  });

  it("returns a different object with same input k-v pairs using an identity function", () => {
    const result = transformObjectVals(nestedObj, identityTransform);
    expect(result).not.toBe(nestedObj);
    expect(result).toEqual(nestedObjExpected);
  });

  it("returns a different object with same input k-v pairs using an unmatched type-specific function", () => {
    const result = transformObjectVals(uppercaseInput, numOnlyTransform);
    expect(result).not.toBe(uppercaseInput);
    expect(result).toEqual(uppercaseInput);
  });

  it("transforms numeric values using a doubling function", () => {
    const result = transformObjectVals(doubleInput, doubleTransform);
    expect(result).toEqual(doubleExpected);
  });

  it("transforms string values using an uppercase function", () => {
    const result = transformObjectVals(uppercaseInput, toUpperCase);
    expect(result).toEqual(uppercaseExpected);
  });

  it("negates boolean values using a negation function", () => {
    const result = transformObjectVals(booleanInput, negateBoolean);
    expect(result).toEqual(booleanExpected);
  });

  it("correctly handles mixed data types using a type-dependent function", () => {
    const result = transformObjectVals(mixedInput, mixedTransform);
    expect(result).toEqual(mixedExpected);
  });
});
