import { expect } from "chai";
import { objectCombiner } from "../07-objectCombiner";
import {
  hasOverlappingKeys,
  multipleHasOverlap,
  multipleNoOverlap,
  noOverlappingKeys,
} from "../data/07-objectCombiner.data";

xdescribe("#7: objectCombiner", () => {
  it("should handle no arguments and return an empty object", () => {
    const result = objectCombiner();
    expect(result).to.deep.equal({});
  });

  it("should handle one argument and return the same object", () => {
    const obj1 = { a: 1, b: 2 };
    const result = objectCombiner(obj1);
    expect(result).to.deep.equal({ a: 1, b: 2 });
  });

  describe("should combine", () => {
    it("two objects without overlapping keys", () => {
      const result = objectCombiner(...noOverlappingKeys);
      expect(result).to.deep.equal({ a: 1, b: 2, c: 3, d: 4 });
    });

    it("two objects with overlapping keys", () => {
      const result = objectCombiner(...hasOverlappingKeys);
      expect(result).to.deep.equal({ a: 1, b: 3, d: 4 });
    });

    it("multiple objects without overlapping keys", () => {
      const result = objectCombiner(...multipleNoOverlap);
      expect(result).to.deep.equal({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
    });

    it("multiple objects with overlapping keys", () => {
      const result = objectCombiner(...multipleHasOverlap);
      expect(result).to.deep.equal({ a: 4, b: 5, c: 6 });
    });
  });
});
