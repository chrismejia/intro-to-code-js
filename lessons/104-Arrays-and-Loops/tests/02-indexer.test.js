import { indexer } from "../02-indexer";
import { expect } from "chai";
import { arr1, arr2, arr3, arr4 } from "../data/02-indexer.data";

describe("#2: indexer", () => {
  describe("when idx is not a valid array index value", () => {
    it("returns 'Invalid index.'", () => {
      const message = "Invalid index.";

      expect(indexer(arr1, -19)).to.equal(message);
      expect(indexer(arr1, 2)).to.equal(message);

      expect(indexer(arr2, -99)).to.equal(message);
      expect(indexer(arr2, 10)).to.equal(message);

      expect(indexer(arr3, -2)).to.equal(message);
      expect(indexer(arr3, 5)).to.equal(message);

      expect(indexer(arr4, -8)).to.equal(message);
      expect(indexer(arr4, 8)).to.equal(message);
    });
  });

  describe("when idx is a valid array index value", () => {
    it("returns the value at the given index", () => {
      expect(indexer(arr1, 0)).to.equal(1);
      expect(indexer(arr2, 2)).to.equal("car");
      expect(indexer(arr3, 4)).to.equal(101);
      expect(indexer(arr4, 1)).to.equal(1332211);
    });
  });

  it("returns the array's first value when the index isn't defined", () => {
    expect(indexer(arr1)).to.equal(1);
    expect(indexer(arr2)).to.equal("business");
    expect(indexer(arr3)).to.equal(1);
    expect(indexer(arr4)).to.equal(true);
  });
});
