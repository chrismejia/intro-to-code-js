import { indexer } from "../02-indexer.js";
import { arr1, arr2, arr3, arr4 } from "../data/02-indexer.data.js";

describe("#2: indexer", () => {
  expect(typeof indexer).toBe("function");

  describe("when idx is not a valid array index value", () => {
    it("returns 'Invalid index.'", () => {
      const message = "Invalid index.";

      expect(indexer(arr1, -19)).toBe(message);
      expect(indexer(arr1, 2)).toBe(message);

      expect(indexer(arr2, -99)).toBe(message);
      expect(indexer(arr2, 10)).toBe(message);

      expect(indexer(arr3, -2)).toBe(message);
      expect(indexer(arr3, 5)).toBe(message);

      expect(indexer(arr4, -8)).toBe(message);
      expect(indexer(arr4, 8)).toBe(message);
    });
  });

  describe("when idx is a valid array index value", () => {
    it("returns the value at the given index", () => {
      expect(indexer(arr1, 0)).toBe(1);
      expect(indexer(arr2, 2)).toBe("car");
      expect(indexer(arr3, 4)).toBe(101);
      expect(indexer(arr4, 1)).toBe(1332211);
    });
  });

  it("returns the array's first value when the index isn't defined", () => {
    expect(indexer(arr1)).toBe(1);
    expect(indexer(arr2)).toBe("business");
    expect(indexer(arr3)).toBe(1);
    expect(indexer(arr4)).toBe(true);
  });
});
