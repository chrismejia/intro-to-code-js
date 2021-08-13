import { expect } from "chai";
import priceTotaler from "../05-priceTotaler";

xdescribe("#5: priceTotaler", () => {
  const returnFn = priceTotaler("NY");
  it("returns a function (unlocks 3 more tests)", () => {
    expect(returnFn).to.be.a("function");
  });

  if (returnFn) {
    describe("the returned function correctly calculates the final price for", () => {
      const nyTotaler = priceTotaler("NY");
      const njTotaler = priceTotaler("NJ");
      const ctTotaler = priceTotaler("CT");

      const nyResult = nyTotaler(1000);
      const njResult = njTotaler(1000);
      const ctResult = ctTotaler(1000);

      it("NY", () => {
        expect(nyResult).to.be.a("number");
        expect(nyResult).to.equal(1095.405);
      });

      it("NJ", () => {
        expect(njResult).to.be.a("number");
        expect(njResult).to.equal(1109.5625);
      });

      it("CT", () => {
        expect(ctResult).to.be.a("number");
        expect(ctResult).to.equal(1102.4);
      });
    });
  }
});
