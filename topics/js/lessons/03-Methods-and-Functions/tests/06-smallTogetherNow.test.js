import { smallTogetherNow } from "../06-smallTogetherNow.js";

xdescribe("#6: smallTogetherNow", () => {
  describe("returns a unified, lowercase string", () => {
    it("when two uppercase input strings are passed in", () => {
      expect(smallTogetherNow("HELLO", "WORLD")).toBe("helloworld");
    });

    it("when two lowercase input strings are passed in", () => {
      expect(smallTogetherNow("hello", "world")).toBe("helloworld");
    });

    it("when input strings of mixed cases are passed in", () => {
      expect(smallTogetherNow("HeLLo", "WorLD")).toBe("helloworld");
    });
  });
});
