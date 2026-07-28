import { jest } from "@jest/globals";
import { testNums, correctCounts } from "../data/03-collatzTraveler.data.js";
import { wrapper } from "../03-collatzTraveler.js";

describe.skip("#3: collatzTripCounter", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns a number", () => {
    testNums.forEach((num) => {
      expect(typeof wrapper.collatzTripCounter(num)).toBe("number");
    });
  });

  it("recursively calls itself the correct number of times", () => {
    testNums.forEach((num) => {
      const collatzSpy = jest.spyOn(wrapper, "collatzTripCounter");

      // call collatz using num
      collatzSpy(num);

      // subtract the spy call from the total callCount (off by one error)
      const calls = collatzSpy.mock.calls.length - 1;
      const expectedTripLength = correctCounts[num];

      expect(calls).toBe(expectedTripLength);

      // reset log spy for next loop
      collatzSpy.mockRestore();
    });
  });
});
