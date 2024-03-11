import { repeater } from "../04-repeater";
import { expect } from "chai";

xdescribe("#4: repeater", () => {
  expect(repeater).to.be.a(
    "function",
    "No `repeater` function found; please check if defined and exported correctly."
  );

  describe("returns a string", () => {
    it("repeated 0 times -> an empty string", () => {
      expect(repeater("empty string")).to.equal("");
    });

    it("repeated 1 time -> the input string", () => {
      expect(repeater("one time only", 1)).to.equal("one time only");
    });

    describe("repeated multiple times", () => {
      const strings = [
        { str: "Hello", times: 2, result: "HelloHello" },
        { str: "abc123", times: 3, result: "abc123abc123abc123" },
        { str: "catDog", times: 4, result: "catDogcatDogcatDogcatDog" },
        { str: "Five", times: 5, result: "FiveFiveFiveFiveFive" },
      ];

      strings.forEach(({ str, times, result }) => {
        it(`'${str}', ${times} -> '${result}'`, () => {
          expect(repeater(str, times)).to.equal(result);
        });
      });
    });
  });

  describe("handles negative repetitions", () => {
    it("returns an empty string", () => {
      const baseStr = "should be empty";
      const negVals = [-1, -20, -99];

      negVals.forEach((val) => {
        const result = repeater(baseStr, val);
        expect(result).to.equal("");
      });
    });
  });
});
