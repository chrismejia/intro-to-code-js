import { jest } from "@jest/globals";
import {
  moreThanFiveChars,
  allLessThanFive,
  allLTFResult,
  halfLessThanFive,
  halfLTFResult,
  allMoreThanFive,
  allMTFResult,
  startsWithCapital,
  allCapStart,
  acsResult,
  someCapStart,
  scsResult,
  noCapStart,
  ncsResult,
} from "./data/stringSorter.data";
import { stringSorter } from "../05-stringSorter";

describe("#5: stringSorter", () => {
  describe("accepts two inputs", () => {
    const sortCBSpy = jest.fn(moreThanFiveChars);
    const sorterSpy = jest.fn(stringSorter);
    sorterSpy(allLessThanFive, sortCBSpy);

    it("a string array", () => {
      expect(sorterSpy).toHaveBeenCalledWith(allLessThanFive, sortCBSpy);
    });

    it("a callback function", () => {
      expect(true).toBe(false);
    });
  });

  it("returns an object", () => {
    expect(true).toBe(false);
  });
});
