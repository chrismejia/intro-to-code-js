import { uniquePropCollector } from "../06-uniquePropCollector";
import {
  hasAllUnique,
  hasAllUniqueExpected,
  hasDiffDataTypes,
  hasDiffDataTypesExpected,
  hasNested,
  hasNestedExpected,
  hasNull,
  hasNullExpected,
  hasOverlapping,
  hasOverlappingExpected,
  hasUndef,
  hasUndefExpected,
  multipleIdentical,
  multipleIdenticalExpected,
  oneObjSingleKV,
  oneObjSingleKVExpected,
} from "../../data/06-uniquePropCollector.data";

describe("uniquePropCollector", () => {
  it("should handle an empty array", () => {
    const result = uniquePropCollector([]);
    expect(result).toEqual({});
  });

  describe("array with a single object", () => {
    it("single-key value pair", () => {
      const result = uniquePropCollector(oneObjSingleKV);
      expect(result).toEqual(oneObjSingleKVExpected);
    });

    it("multiple key-value pairs", () => {
      const result = uniquePropCollector(oneObjSingleKV);
      expect(result).toEqual(oneObjSingleKVExpected);
    });
  });

  describe("array with multiple objects", () => {
    it("multiple identical objects", () => {
      const result = uniquePropCollector(multipleIdentical);
      expect(result).toEqual(multipleIdenticalExpected);
    });

    it("should handle properties with undefined values", () => {
      const result = uniquePropCollector(hasUndef);
      expect(result).toEqual(hasUndefExpected);
    });

    it("should handle properties with null values", () => {
      const result = uniquePropCollector(hasNull);
      expect(result).toEqual(hasNullExpected);
    });

    it("should collect unique values for each property", () => {
      const result = uniquePropCollector(hasAllUnique);
      expect(result).toEqual(hasAllUniqueExpected);
    });

    it("should handle objects with overlapping and unique properties", () => {
      const result = uniquePropCollector(hasOverlapping);
      expect(result).toEqual(hasOverlappingExpected);
    });

    it("should handle different data types", () => {
      const result = uniquePropCollector(hasDiffDataTypes);
      expect(result).toEqual(hasDiffDataTypesExpected);
    });

    it("should not process nested properties", () => {
      const result = uniquePropCollector(hasNested);
      console.log(result);
      expect(result).toEqual(hasNestedExpected);
    });

    it("should handle objects with large number of properties", () => {
      const largeObject = {};
      for (let i = 0; i < 1000; i++) {
        largeObject[`prop${i}`] = i;
      }
      const result = uniquePropCollector([largeObject]);
      const expected = {};
      for (let i = 0; i < 1000; i++) {
        expected[`prop${i}`] = new Set([i]);
      }
      expect(result).toEqual(expected);
    });
  });
});
