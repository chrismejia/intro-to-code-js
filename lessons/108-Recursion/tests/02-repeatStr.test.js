import { expect } from "chai";
import sinon from "sinon";
import { counts, repeated } from "../data/repeatStr.data";
import { wrapper } from "../02-repeatStr";

describe("#2: repeatStr", () => {
  it("returns a string", () => {
    counts.forEach((count) => {
      const result = wrapper.repeatStr("peko", count);

      expect(result).to.be.a.string;
    });
  });

  it("returns the input string when count is 0", () => {
    const result = wrapper.repeatStr("peko", 0);

    expect(result).to.be.a("string");
  });

  it("returns the correct string", () => {
    counts.forEach((count) => {
      const expected = repeated[count];
      const result = wrapper.repeatStr("peko", count);

      expect(expected).to.equal(result);
    });
  });

  it("recursively calls itself the correct number of times", () => {
    counts.forEach((count) => {
      const repeatSpy = sinon.spy(wrapper, "repeatStr");

      repeatSpy("peko", count);

      const expectedCalls = count;
      const calls = repeatSpy.callCount - 1;

      expect(expectedCalls).to.equal(calls);

      repeatSpy.restore();
    });
  });
});
