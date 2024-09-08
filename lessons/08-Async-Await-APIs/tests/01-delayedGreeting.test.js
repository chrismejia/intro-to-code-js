import { expect } from "chai";
import { delayedGreeting } from "../01-delayedGreeting";
import {
  validGreetingData,
  shorterDelayData,
  immediateGreetingData,
} from "../data/01-delayedGreeting.data";

describe("#1: delayedGreeting", function () {
  it("should return a greeting for the given name after the specified delay", function (done) {
    this.timeout(2500); // Allow time for the delay (slightly more than 2s)

    const { name, delay, expectedMessage } = validGreetingData;

    delayedGreeting(name, delay, (greeting) => {
      expect(greeting).to.equal(expectedMessage);
      done();
    });
  });

  it("should return a greeting with a shorter delay", function (done) {
    this.timeout(1500); // Slightly more than 1 second

    const { name, delay, expectedMessage } = shorterDelayData;

    delayedGreeting(name, delay, (greeting) => {
      expect(greeting).to.equal(expectedMessage);
      done();
    });
  });

  it("should return a greeting immediately when delay is 0", function (done) {
    // No mocha timeout adjustment needed.
    const { name, delay, expectedMessage } = immediateGreetingData;

    delayedGreeting(name, delay, (greeting) => {
      expect(greeting).to.equal(expectedMessage);
      done();
    });
  });
});
