import { helloWorldRedux } from "../02-helloWorldRedux.js";

describe("#2: helloWorldRedux", () => {
  it("returns a personalized greeting if a name is passed in", () => {
    expect(helloWorldRedux("Markus")).toBe("Hello Markus!");
    expect(helloWorldRedux("Jon")).toBe("Hello Jon!");
    expect(helloWorldRedux("Sally")).toBe("Hello Sally!");
  });

  it('returns the phrase "Hello World!" if name is undefined', () => {
    expect(helloWorldRedux()).toBe("Hello World!");
  });
});
