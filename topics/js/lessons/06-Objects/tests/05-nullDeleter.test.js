import { nullDeleter } from "../05-nullDeleter.js";
import {
  noNull,
  oneNull,
  multipleNull,
  allNull,
  mixedTypes,
  noNullsNested,
  oneNullTopLevel,
  oneNullNested,
  allNullsNested,
} from "../data/05-nullDeleter.data.js";

describe("#5: nullDeleter", () => {
  it("returns an object", () => {
    expect(typeof nullDeleter(noNull)).toBe("object");
    expect(typeof nullDeleter(oneNull)).toBe("object");
    expect(typeof nullDeleter(multipleNull)).toBe("object");
    expect(typeof nullDeleter(allNull)).toBe("object");
  });

  it("should handle an empty object", () => {
    const result = nullDeleter({});
    expect(result).toEqual({});
  });

  describe("returns the input untouched", () => {
    it("when it has no null key-value pairs", () => {
      expect(nullDeleter(noNull)).toEqual(noNull);
    });
  });

  describe("removes all null key-value pairs", () => {
    it("when there's one present", () => {
      const result = nullDeleter(mixedTypes);
      expect(result).toEqual({
        num: 1,
        bool: true,
        str: "hello",
        obj: { key: "value" },
        arr: [1, 2, 3],
      });
    });

    it("when there's multiple present", () => {
      expect(nullDeleter(multipleNull)).toEqual({
        three: "goodbye",
      });
    });

    it("when they're all null values", () => {
      expect(nullDeleter(allNull)).toEqual({});
    });
  });

  xdescribe("BONUS", () => {
    it("should handle nested objects with no null values", () => {
      const result = nullDeleter(noNullsNested);
      expect(result).toEqual(noNullsNested);
    });

    it("should handle top-level null values in a nested object", () => {
      const result = nullDeleter(oneNullTopLevel);
      expect(result).toEqual({
        one: 1,
        three: "goodbye",
        nested: noNull,
      });
    });

    it("should handle nested objects with null values", () => {
      const result = nullDeleter(oneNullNested);
      expect(result).toEqual({
        ...noNull,
        nested: { one: 1, three: "goodbye" },
      });
    });

    it("should handle completely null nested objects", () => {
      const result = nullDeleter(allNullsNested);
      expect(result).toEqual({ nested: {} });
    });
  });
});
