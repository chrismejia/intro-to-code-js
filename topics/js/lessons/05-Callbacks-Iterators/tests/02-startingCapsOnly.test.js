import {
  startCapWords,
  noCapWords,
  capsNotAtStart,
  mixedWords,
} from "../data/startingCapsOnly.data.js";
import { startingCapsOnly } from "../02-startingCapsOnly.js";

describe("#2: startingCapsOnly", () => {
  it("returns an array", () => {
    expect(Array.isArray(startingCapsOnly(startCapWords))).toBe(true);
    expect(Array.isArray(startingCapsOnly(noCapWords))).toBe(true);
    expect(Array.isArray(startingCapsOnly(capsNotAtStart))).toBe(true);
    expect(Array.isArray(startingCapsOnly(mixedWords))).toBe(true);
  });

  it("removes no words if all words start with a capital letter", () => {
    expect(startingCapsOnly(startCapWords)).toEqual(startCapWords);
  });

  it("removes all words that don't start with a capital letter", () => {
    expect(startingCapsOnly(noCapWords)).toEqual([]);
    expect(startingCapsOnly(capsNotAtStart)).toEqual([]);
  });

  it("removes words that don't start with a capital letter from a mixed array", () => {
    expect(startingCapsOnly(mixedWords)).toEqual(startCapWords);
  });
});
