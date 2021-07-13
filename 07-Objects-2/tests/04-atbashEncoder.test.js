import { expect } from "chai";
import { characters } from "../data/atbashEncoder.data";
import atbashEncoder from "../04-atbashEncoder";

describe("#4 - atbashEncoder", () => {
  const result = atbashEncoder();
  it("returns an object", () => {
    expect(result).to.be.an("object");
  });

  it("that has 26 keys for the 26 letters of the alphabet", () => {
    const keyCount = Object.keys(result).length;
    expect(keyCount).to.equal(26);
  });

  it("has the correct encoded letter value assigned to each key", () => {
    characters.forEach((char, index, arr) => {
      const encodedChar = arr[25 - index];
      const currTestValue = result[char];
      expect(currTestValue).to.equal(encodedChar);
    });
  });
});
