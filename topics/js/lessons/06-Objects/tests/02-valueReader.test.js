import { dataObj } from "../data/02-valueReader.data.js";
import { valueReader } from "../02-valueReader.js";

describe("#2: valueReader", () => {
  describe("returns the correct value", () => {
    it("when the key-value pair exists in the data object", () => {
      expect(valueReader("alfa", dataObj)).toBe("hello world");
      expect(valueReader("bravo", dataObj)).toBe(123);
      expect(valueReader("foxtrot", dataObj)).toBe(false);
      expect(valueReader("lima", dataObj)).toEqual([1, 2, 3]);
      expect(valueReader("tango", dataObj)).toEqual({ a: 1 });
    });

    it("when the key does not exist in the data object", () => {
      expect(valueReader("nope", dataObj)).toBe(undefined);
      expect(valueReader("sierra", dataObj)).toBe(undefined);
    });
  });
});
