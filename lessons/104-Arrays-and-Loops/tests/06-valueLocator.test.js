import { valueLocator } from "../06-valueLocator";
import { expect } from "chai";
import { arr, foundVals, notFoundVals } from "../data/06-valueLocator.data";

describe("#6: valueLocator", () => {
  describe("when searchValue is found in the array", () => {
    it("returns phrase containing search term", () => {
      foundVals.forEach(({ val }) => {
        const foundResult = valueLocator(val, arr);
        expect(foundResult).includes(val);
      });
    });

    it("returns phrase containing original array", () => {
      foundVals.forEach(({ val }) => {
        const foundResult = valueLocator(val, arr);
        expect(foundResult).includes(`[${arr}]`);
      });
    });

    it("returns phrase containing index of search term", () => {
      foundVals.forEach(({ val, idx }) => {
        const foundResult = valueLocator(val, arr);
        expect(foundResult).includes(`at index ${idx}`);
      });
    });
  });

  describe("when searchValue is NOT found in the array", () => {
    it("returns phrase containing searchTerm", () => {
      notFoundVals.forEach((val) => {
        const absentResult = valueLocator(val, arr);
        expect(absentResult).includes(val);
      });
    });

    it("returns phrase detailing the searchTerm is not found", () => {
      notFoundVals.forEach((val) => {
        const absentResult = valueLocator(val, arr);
        expect(absentResult).includes("cannot be found in the array");
      });
    });

    it("returns phrase containing original array", () => {
      notFoundVals.forEach((val) => {
        const absentResult = valueLocator(val, arr);
        expect(absentResult).includes(`[${arr}]`);
      });
    });
  });
});
