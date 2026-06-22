import { helloWorld } from "../01-helloWorld.js";

describe("#1: helloWorld", () => {
  it("returns a string", () => {
    expect(typeof helloWorld()).toBe("string");
  });

  it("returns the phrase 'Hello World!'", () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});
