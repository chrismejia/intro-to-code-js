import { expect } from "chai";
import {
  startCapWords,
  noCapWords,
  capsNotAtStart,
  mixedWords,
} from "../data/startingCapsOnly.data";
import { startingCapsOnly } from "../02-startingCapsOnly";

xdescribe("#2: startingCapsOnly", () => {
  it("returns an array", () => {
    expect(startingCapsOnly(startCapWords)).to.be.an("array");
    expect(startingCapsOnly(noCapWords)).to.be.an("array");
    expect(startingCapsOnly(capsNotAtStart)).to.be.an("array");
    expect(startingCapsOnly(mixedWords)).to.be.an("array");
  });

  it("removes no words if all words start with a capital letter", () => {
    expect(startingCapsOnly(startCapWords)).to.eql(startCapWords);
  });

  it("removes all words that don't start with a capital letter", () => {
    expect(startingCapsOnly(noCapWords)).to.eql([]);
    expect(startingCapsOnly(capsNotAtStart)).to.eql([]);
  });

  it("removes words that don't start with a capital letter from a mixed array", () => {
    expect(startingCapsOnly(mixedWords)).to.eql(startCapWords);
  });
});
