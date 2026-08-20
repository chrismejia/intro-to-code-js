import priceTotaler from "../05-priceTotaler.js";

xdescribe("#5: priceTotaler", () => {
  const nyTotaler = priceTotaler("NY");
  const njTotaler = priceTotaler("NJ");
  const ctTotaler = priceTotaler("CT");

  const nyResult = nyTotaler(1000);
  const njResult = njTotaler(1000);
  const ctResult = ctTotaler(1000);

  it("returns a function", () => {
    expect(typeof nyTotaler).toBe("function");
    expect(typeof njTotaler).toBe("function");
    expect(typeof ctTotaler).toBe("function");
  });

  describe("the returned function correctly calculates the final price for", () => {
    it("NY", () => {
      expect(typeof nyResult).toBe("number");
      expect(nyResult).toBe(1095.405);
    });

    it("NJ", () => {
      expect(typeof njResult).toBe("number");
      expect(njResult).toBe(1109.5625);
    });

    it("CT", () => {
      expect(typeof ctResult).toBe("number");
      expect(ctResult).toBe(1102.4);
    });
  });
});
