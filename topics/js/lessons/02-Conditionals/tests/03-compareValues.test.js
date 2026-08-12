import { compareValues } from "../index.js";
import {
  looselyEqualPairs,
  strictlyEqualPairs,
  unequalPairs,
} from "../data/03-compareValues.data.js";

/**
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

describe("#3: compareValues", () => {
  it("returns `strictly equal` when values and types match", () => {
    strictlyEqualPairs.forEach(([valueA, valueB]) => {
      expect(compareValues(valueA, valueB)).toBe("strictly equal");
    });
  });

  it("returns `loosely equal` when equality requires type conversion", () => {
    looselyEqualPairs.forEach(([valueA, valueB]) => {
      expect(compareValues(valueA, valueB)).toBe("loosely equal");
    });
  });

  it("returns `not equal` when neither comparison matches", () => {
    unequalPairs.forEach(([valueA, valueB]) => {
      expect(compareValues(valueA, valueB)).toBe("not equal");
    });
  });
});
