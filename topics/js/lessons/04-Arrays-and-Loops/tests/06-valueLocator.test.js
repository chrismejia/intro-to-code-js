import { valueLocator } from "../06-valueLocator.js";
import { arr, foundVals, notFoundVals } from "../data/06-valueLocator.data.js";

describe("#6: valueLocator", () => {
  expect(typeof valueLocator).toBe("function");

  describe("when searchValue is found in the array", () => {
    it("returns phrase containing search term", () => {
      foundVals.forEach(({ val }) => {
        const foundResult = valueLocator(val, arr);
        expect(foundResult).toContain(val);
      });
    });

    it("returns phrase containing original array", () => {
      foundVals.forEach(({ val }) => {
        const foundResult = valueLocator(val, arr);
        expect(foundResult).toContain(`[${arr}]`);
      });
    });

    it("returns phrase containing index of search term", () => {
      foundVals.forEach(({ val, idx }) => {
        const foundResult = valueLocator(val, arr);
        expect(foundResult).toContain(`at index ${idx}`);
      });
    });
  });

  describe("when searchValue is NOT found in the array", () => {
    it("returns phrase containing searchTerm", () => {
      notFoundVals.forEach((val) => {
        const absentResult = valueLocator(val, arr);
        expect(absentResult).toContain(val);
      });
    });

    it("returns phrase detailing the searchTerm is not found", () => {
      notFoundVals.forEach((val) => {
        const absentResult = valueLocator(val, arr);
        expect(absentResult).toContain("cannot be found in the array");
      });
    });

    it("returns phrase containing original array", () => {
      notFoundVals.forEach((val) => {
        const absentResult = valueLocator(val, arr);
        expect(absentResult).toContain(`[${arr}]`);
      });
    });
  });
});
