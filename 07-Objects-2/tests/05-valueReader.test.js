import { expect } from "chai";
import { dataObj } from "../data/valueReader.data";
import valueReader from "../05-valueReader";

describe.only("#5: valueReader", () => {
  describe("returns the correct value", () => {
    it("when the key-value pair exists in the data object", () => {
      expect(valueReader("alfa", dataObj)).to.equal("hello world");
      expect(valueReader("bravo", dataObj)).to.equal(123);
      expect(valueReader("foxtrot", dataObj)).to.equal(false);
      expect(valueReader("lima", dataObj)).to.eql([1, 2, 3]);
      expect(valueReader("tango", dataObj)).to.eql({ a: 1 });
    });

    it("when the key does not exist in the data object", () => {
      expect(valueReader("nope", dataObj)).to.equal(undefined);
      expect(valueReader("sierra", dataObj)).to.equal(undefined);
    });
  });
});
