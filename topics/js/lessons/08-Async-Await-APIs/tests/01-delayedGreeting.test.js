import { jest } from "@jest/globals";
import { delayedGreeting } from "../01-delayedGreeting.js";
import {
  validGreetingData,
  shorterDelayData,
  immediateGreetingData,
} from "../data/01-delayedGreeting.data.js";

describe("#1: delayedGreeting", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it("should return a greeting for the given name after the specified delay", () => {
    const { name, delay, expectedMessage } = validGreetingData;
    const callback = jest.fn();

    delayedGreeting(name, delay, callback);
    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(expectedMessage);
  });

  it("should return a greeting with a shorter delay", () => {
    const { name, delay, expectedMessage } = shorterDelayData;
    const callback = jest.fn();

    delayedGreeting(name, delay, callback);
    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(expectedMessage);
  });

  it("should return a greeting immediately when delay is 0", () => {
    const { name, delay, expectedMessage } = immediateGreetingData;
    const callback = jest.fn();

    delayedGreeting(name, delay, callback);
    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(expectedMessage);
  });
});
