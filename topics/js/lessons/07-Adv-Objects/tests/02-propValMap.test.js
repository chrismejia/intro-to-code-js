import { propValMap } from "../02-propValMap.js";
import {
  basicItems,
  mixedItems,
  nestedItems,
  emptyItems,
  basicMap,
  mixedMap,
  nestedMap,
  emptyMap,
} from "../data/02-propValMap.data.js";

xdescribe("#2: propValMap", () => {
  it("returns a Map", () => {
    const result = propValMap(basicItems);
    expect(result).toBeInstanceOf(Map);
  });

  it("creates a Map with arrays of values for each unique property", () => {
    const result = propValMap(basicItems);
    expect(result).toEqual(basicMap);
  });

  it("handles objects with mixed properties and maintains value arrays", () => {
    const result = propValMap(mixedItems);
    expect(result).toEqual(mixedMap);
  });

  it("handles nested objects and arrays within the input objects", () => {
    const result = propValMap(nestedItems);
    expect(result).toEqual(nestedMap);
  });

  it("returns an empty Map when the input array is empty", () => {
    const result = propValMap(emptyItems);
    expect(result).toEqual(emptyMap);
  });
});
