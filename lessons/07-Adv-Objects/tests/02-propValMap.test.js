import { expect } from "chai";
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

describe("#2: propValMap", () => {
  it("returns a Map", () => {
    const result = propValMap(basicItems);
    expect(result).to.be.instanceOf(Map);
  });

  it("creates a Map with arrays of values for each unique property", () => {
    const result = propValMap(basicItems);
    expect(result).to.deep.equal(basicMap);
  });

  it("handles objects with mixed properties and maintains value arrays", () => {
    const result = propValMap(mixedItems);
    expect(result).to.deep.equal(mixedMap);
  });

  it("handles nested objects and arrays within the input objects", () => {
    const result = propValMap(nestedItems);
    expect(result).to.deep.equal(nestedMap);
  });

  it("returns an empty Map when the input array is empty", () => {
    const result = propValMap(emptyItems);
    expect(result).to.deep.equal(emptyMap);
  });
});
