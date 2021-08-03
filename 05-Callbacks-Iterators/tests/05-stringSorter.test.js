import { expect } from "chai";
import sinon from "sinon";
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
} from "../data/stringSorter.data";
import { stringSorter } from "../05-stringSorter";

describe.only("#5: stringSorter", () => {
  describe("accepts two inputs", () => {
    const sortCBSpy = sinon.spy(moreThanFiveChars);
    const sorterSpy = sinon.spy(stringSorter);
    sorterSpy(allLessThanFive, sortCBSpy);

    it("a string array", () => {
      const hasStringArr = sorterSpy.calledWith(allLessThanFive);
      expect(hasStringArr).to.be.true;
    });

    it("a callback function", () => {
      expect(true).to.be.false;
    });
  });

  it("returns an object", () => {
    expect(true).to.be.false;
  });
});
