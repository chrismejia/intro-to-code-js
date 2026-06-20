import { smallTogetherNow } from "../06-smallTogetherNow";
import { expect } from "chai";

describe("#6: smallTogetherNow", () => {
  describe("returns a unified, lowercase string", () => {
    it("when two uppercase input strings are passed in", () => {
      expect(smallTogetherNow("HELLO", "WORLD")).to.equal("helloworld");
    });

    it("when two lowercase input strings are passed in", () => {
      expect(smallTogetherNow("hello", "world")).to.equal("helloworld");
    });

    it("when input strings of mixed cases are passed in", () => {
      expect(smallTogetherNow("HeLLo", "WorLD")).to.equal("helloworld");
    });
  });
});
