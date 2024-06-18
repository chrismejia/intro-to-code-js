import { uppercaseThis } from "../03-uppercaseThis";
import { expect } from "chai";

describe("#3: uppercaseThis", () => {
  it("returns a string", () => {
    expect(uppercaseThis("zzzz")).to.be.a("string");
    expect(uppercaseThis("aaaa")).to.be.a("string");
    expect(uppercaseThis("BBBB")).to.be.a("string");
    expect(uppercaseThis("cCcC")).to.be.a("string");
    expect(uppercaseThis("d1D2d3")).to.be.a("string");
  });

  describe("returns the phrase completely capitalized", () => {
    it("when the phrase is all lowercase", () => {
      expect(uppercaseThis("aaaa")).to.equal("AAAA");
    });

    it("when the phrase is already all capitalized", () => {
      expect(uppercaseThis("BBBB")).to.equal("BBBB");
    });

    it("when the phrase has mixed capitals", () => {
      expect(uppercaseThis("cCcC")).to.equal("CCCC");
      expect(uppercaseThis("d1D2d3")).to.equal("D1D2D3");
    });
  });
});
