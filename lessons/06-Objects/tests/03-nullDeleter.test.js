import { expect } from "chai";
import { nullDeleter } from "../03-nullDeleter";
import {
  noNull,
  oneNull,
  multipleNull,
  allNull,
} from "../data/03-nullDeleter.data";

describe("#3: nullDeleter", () => {
  it("returns an object", () => {
    expect(nullDeleter(noNull)).be.an("object");
    expect(nullDeleter(oneNull)).be.an("object");
    expect(nullDeleter(multipleNull)).be.an("object");
    expect(nullDeleter(allNull)).be.an("object");
  });

  describe("returns the input untouched", () => {
    it("when it has no null key-value pairs", () => {
      expect(nullDeleter(noNull)).to.eql(noNull);
    });
  });

  describe("removes all null key-value pairs", () => {
    it("when there's one present", () => {
      expect(nullDeleter(oneNull)).to.eql({
        one: 1,
        three: "goodbye",
      });
    });

    it("when there's multiple present", () => {
      expect(nullDeleter(multipleNull)).to.eql({
        three: "goodbye",
      });
    });

    it("when they're all null values", () => {
      expect(nullDeleter(allNull)).to.eql({});
    });
  });
});
