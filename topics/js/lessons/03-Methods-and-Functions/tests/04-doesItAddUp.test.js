import { doesItAddUp } from "../04-doesItAddUp.js";

describe("#4: doesItAddUp", () => {
  it("returns true -> first two inputs equal the third", () => {
    expect(doesItAddUp(1, 2, 3)).toBe(true);
    expect(doesItAddUp(2, 1, 3)).toBe(true);
    expect(doesItAddUp(4, 4, 8)).toBe(true);
    expect(doesItAddUp(10, 20, 30)).toBe(true);
  });

  it("returns false -> first two inputs don't equal the third", () => {
    expect(doesItAddUp(1, 5, 3)).toBe(false);
    expect(doesItAddUp(22, 64, 33)).toBe(false);
    expect(doesItAddUp(1, 1, 1)).toBe(false);
    expect(doesItAddUp(1, 9, 2)).toBe(false);
  });
});
