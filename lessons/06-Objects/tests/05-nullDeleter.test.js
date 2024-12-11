import { expect } from "chai";
import { nullDeleter } from "../05-nullDeleter";
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
} from "../data/05-nullDeleter.data";

xdescribe("#5: nullDeleter", () => {
  it("returns an object", () => {
    expect(nullDeleter(noNull)).be.an("object");
    expect(nullDeleter(oneNull)).be.an("object");
    expect(nullDeleter(multipleNull)).be.an("object");
    expect(nullDeleter(allNull)).be.an("object");
  });

  it("should handle an empty object", () => {
    const result = nullDeleter({});
    expect(result).to.deep.equal({});
  });

  describe("returns the input untouched", () => {
    it("when it has no null key-value pairs", () => {
      expect(nullDeleter(noNull)).to.deep.equal(noNull);
    });
  });

  describe("removes all null key-value pairs", () => {
    it("when there's one present", () => {
      const result = nullDeleter(mixedTypes);
      expect(result).to.deep.equal({
        num: 1,
        bool: true,
        str: "hello",
        obj: { key: "value" },
        arr: [1, 2, 3],
      });
    });

    it("when there's multiple present", () => {
      expect(nullDeleter(multipleNull)).to.deep.equal({
        three: "goodbye",
      });
    });

    it("when they're all null values", () => {
      expect(nullDeleter(allNull)).to.deep.equal({});
    });
  });

  xdescribe("BONUS", () => {
    it("should handle nested objects with no null values", () => {
      const result = nullDeleter(noNullsNested);
      expect(result).to.deep.equal(noNullsNested);
    });

    it("should handle top-level null values in a nested object", () => {
      const result = nullDeleter(oneNullTopLevel);
      expect(result).to.deep.equal({
        one: 1,
        three: "goodbye",
        nested: noNull,
      });
    });

    it("should handle nested objects with null values", () => {
      const result = nullDeleter(oneNullNested);
      expect(result).to.deep.equal({
        ...noNull,
        nested: { one: 1, three: "goodbye" },
      });
    });

    it("should handle completely null nested objects", () => {
      const result = nullDeleter(allNullsNested);
      expect(result).to.deep.equal({ nested: {} });
    });
  });
});
