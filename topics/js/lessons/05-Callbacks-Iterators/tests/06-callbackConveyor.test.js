import { expect } from "chai";
import {
  addTen,
  minusTwenty,
  multiplyThree,
} from "../data/callbackConveyor.data";
import callbackConveyor from "../06-callbackConveyor";

describe("#6: callbackConveyor", () => {
  it("returns the correct result from one callback", () => {
    const oneResult = callbackConveyor(0, [addTen]);
    expect(oneResult).to.equal(10);
  });

  it("returns the correct chained result from two callbacks", () => {
    const oneResult = callbackConveyor(0, [minusTwenty, addTen]);
    expect(oneResult).to.equal(-10);
  });
  it("returns the correct chained result from three callbacks", () => {
    const oneResult = callbackConveyor(0, [minusTwenty, multiplyThree, addTen]);

    expect(oneResult).to.equal(-50);
  });
});
