import { helloWorld } from "../01-helloWorld";
import { expect } from "chai";

describe("#1: helloWorld", () => {
  it("returns a string", () => {
    expect(helloWorld()).to.be.a("string");
  });

  it("returns the phrase 'Hello World!'", () => {
    expect(helloWorld()).to.equal("Hello World!");
  });
});
