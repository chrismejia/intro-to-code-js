import { expect } from "chai";
import {
  addTen,
  minusTwenty,
  multiplyThree,
} from "../data/callbackConveyor.data";
import callbackConveyor from "../06-callbackConveyor";

describe("#6: callbackConveyor", function () {
  it("returns the correct result from one callback", function () {
    const oneResult = callbackConveyor(0, [addTen]);
    expect(oneResult).to.equal(10);
  });

  it("returns the correct chained result from two callbacks", function () {
    const oneResult = callbackConveyor(0, [minusTwenty, addTen]);
    expect(oneResult).to.equal(-10);
  });
  it("returns the correct chained result from three callbacks", function () {
    const oneResult = callbackConveyor(0, [minusTwenty, multiplyThree, addTen]);

    expect(oneResult).to.equal(-50);
  });
});
