import { allWordsLength } from "../09-allWordsLength";
import { expect } from "chai";

xdescribe("#9: allWordsLength", () => {
  const testWords = [
    ["apple"],
    ["old", "textbook"],
    ["cat", "dog", "moo"],
    ["robin", "hood", "men", "in", "tights"],
  ];

  it("returns a number", () => {
    testWords.forEach((array) => {
      const func = (a) => a.join("").length;
      const result = func(array);
      expect(allWordsLength(array)).to.be.a("number");
    });
  });

  describe("returns the combined length of all strings in the array", () => {
    testWords.forEach((array) => {
      const func = (a) => a.join("").length;
      const result = func(array);
      it(`${JSON.stringify(array)} -> ${result}`, () => {
        expect(allWordsLength(array)).to.equal(result);
      });
    });
  });
});
