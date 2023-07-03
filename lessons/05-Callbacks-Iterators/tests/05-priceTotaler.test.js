import { expect } from "chai";
import sinon from "sinon";
import priceTotaler from "../05-priceTotaler";

describe("#5: priceTotaler", function () {
  const nySpy = sinon.spy(priceTotaler);
  const njSpy = sinon.spy(priceTotaler);
  const ctSpy = sinon.spy(priceTotaler);

  const nyTotaler = nySpy("NY");
  const njTotaler = njSpy("NJ");
  const ctTotaler = ctSpy("CT");

  const nyResult = nyTotaler(1000);
  const njResult = njTotaler(1000);
  const ctResult = ctTotaler(1000);

  it("returns a function", function () {
    expect(nyTotaler).to.be.a("function");
    expect(njTotaler).to.be.a("function");
    expect(ctTotaler).to.be.a("function");
  });

  describe("the returned function correctly calculates the final price for", function () {
    it("NY", function () {
      expect(nyResult).to.be.a("number");
      expect(nyResult).to.equal(1095.405);
    });

    it("NJ", function () {
      expect(njResult).to.be.a("number");
      expect(njResult).to.equal(1109.5625);
    });

    it("CT", function () {
      expect(ctResult).to.be.a("number");
      expect(ctResult).to.equal(1102.4);
    });
  });
});
