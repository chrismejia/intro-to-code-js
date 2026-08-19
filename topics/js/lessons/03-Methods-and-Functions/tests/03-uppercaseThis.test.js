import { uppercaseThis } from "../03-uppercaseThis.js";

describe("#3: uppercaseThis", () => {
  it("returns a string", () => {
    expect(typeof uppercaseThis("zzzz")).toBe("string");
    expect(typeof uppercaseThis("aaaa")).toBe("string");
    expect(typeof uppercaseThis("BBBB")).toBe("string");
    expect(typeof uppercaseThis("cCcC")).toBe("string");
    expect(typeof uppercaseThis("d1D2d3")).toBe("string");
  });

  describe("returns the phrase completely capitalized", () => {
    it("when the phrase is all lowercase", () => {
      expect(uppercaseThis("aaaa")).toBe("AAAA");
    });

    it("when the phrase is already all capitalized", () => {
      expect(uppercaseThis("BBBB")).toBe("BBBB");
    });

    it("when the phrase has mixed capitals", () => {
      expect(uppercaseThis("cCcC")).toBe("CCCC");
      expect(uppercaseThis("d1D2d3")).toBe("D1D2D3");
    });
  });
});
