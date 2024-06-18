import { expect } from "chai";
import sinon from "sinon";
import { testNums, correctCounts } from "../data/collatzTripCounter.data";
import { wrapper } from "../03-collatzTraveler";

xdescribe("#3: collatzTripCounter", () => {
  console.log(typeof wrapper.collatzTripCounter);

  it("returns a number", () => {
    testNums.forEach((num) => {
      expect(wrapper.collatzTripCounter(num)).to.be.a("number");
    });
  });

  it("recursively calls itself the correct number of times", () => {
    testNums.forEach((num) => {
      // spy on console.log
      const collatzSpy = sinon.spy(wrapper, "collatzTripCounter");

      // call collatz using num
      collatzSpy(num);

      // subtract the spy call from the total callCount (off by one error)
      const calls = collatzSpy.callCount - 1;
      const expectedTripLength = correctCounts[num];

      expect(expectedTripLength).to.equal(calls);

      // reset log spy for next loop
      collatzSpy.restore();
    });
  });
});
