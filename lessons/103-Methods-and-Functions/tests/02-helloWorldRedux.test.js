import { helloWorldRedux } from "../02-helloWorldRedux";
import { expect } from "chai";

describe("#2: helloWorldRedux", () => {
  it("returns a personalized greeting if a name is passed in", () => {
    expect(helloWorldRedux("Markus")).to.equal("Hello Markus!");
    expect(helloWorldRedux("Jon")).to.equal("Hello Jon!");
    expect(helloWorldRedux("Sally")).to.equal("Hello Sally!");
  });

  it('returns the phrase "Hello World!" if name is undefined', () => {
    expect(helloWorldRedux()).to.equal("Hello World!");
  });
});
