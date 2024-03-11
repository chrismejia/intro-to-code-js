import { doesItAddUp } from "../04-doesItAddUp";
import { expect } from "chai";

xdescribe("#4: doesItAddUp", () => {
  it("returns true -> first two inputs equal the third", () => {
    expect(doesItAddUp(1, 2, 3)).to.be.true;
    expect(doesItAddUp(2, 1, 3)).to.be.true;
    expect(doesItAddUp(4, 4, 8)).to.be.true;
    expect(doesItAddUp(10, 20, 30)).to.be.true;
  });

  it("returns false -> first two inputs don't equal the third", () => {
    expect(doesItAddUp(1, 5, 3)).to.be.false;
    expect(doesItAddUp(22, 64, 33)).to.be.false;
    expect(doesItAddUp(1, 1, 1)).to.be.false;
    expect(doesItAddUp(1, 9, 2)).to.be.false;
  });
});
