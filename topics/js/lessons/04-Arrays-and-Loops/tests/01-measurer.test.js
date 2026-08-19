import { measurer } from "../01-measurer.js";

describe("#1: measurer", () => {
  expect(typeof measurer).toBe("function");

  const resultA = measurer([]);
  const resultB = measurer([1]);
  const resultC = measurer([1, 3, 5, 7, 9]);
  const resultD = measurer(["abc", true, { a: 1, b: 2 }]);

  it("returns a number", () => {
    expect(typeof resultA).toBe("number");
    expect(typeof resultB).toBe("number");
    expect(typeof resultC).toBe("number");
    expect(typeof resultD).toBe("number");
  });

  describe("returns the correct number of items", () => {
    it("when the array is empty", () => {
      expect(resultA).toBe(0);
    });

    it("when the array is not empty", () => {
      expect(resultB).toBe(1);
      expect(resultC).toBe(5);
      expect(resultD).toBe(3);
    });
  });
});
