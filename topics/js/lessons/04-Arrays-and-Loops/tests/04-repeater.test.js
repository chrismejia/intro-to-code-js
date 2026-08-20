import { repeater } from "../04-repeater.js";

xdescribe("#4: repeater", () => {
  expect(typeof repeater).toBe("function");

  describe("returns a string", () => {
    it("repeated 0 times -> an empty string", () => {
      expect(repeater("empty string")).toBe("");
    });

    it("repeated 1 time -> the input string", () => {
      expect(repeater("one time only", 1)).toBe("one time only");
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
          expect(repeater(str, times)).toBe(result);
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
        expect(result).toBe("");
      });
    });
  });
});
