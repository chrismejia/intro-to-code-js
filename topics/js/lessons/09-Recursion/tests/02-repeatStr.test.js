import { jest } from "@jest/globals";
import { counts, repeated } from "../data/02-repeatStr.data.js";
import { wrapper } from "../02-repeatStr.js";

afterEach(() => {
  jest.restoreAllMocks();
});

xdescribe("#2: repeatStr", () => {
  it("returns a string", () => {
    counts.forEach((count) => {
      const result = wrapper.repeatStr("peko", count);

      expect(typeof result).toBe("string");
    });
  });

  it("returns the input string when count is 0", () => {
    const result = wrapper.repeatStr("peko", 0);

    expect(typeof result).toBe("string");
  });

  it("returns the correct string", () => {
    counts.forEach((count) => {
      const expected = repeated[count];
      const result = wrapper.repeatStr("peko", count);

      expect(result).toBe(expected);
    });
  });

  it("recursively calls itself the correct number of times", () => {
    counts.forEach((count) => {
      const repeatSpy = jest.spyOn(wrapper, "repeatStr");

      repeatSpy("peko", count);

      const expectedCalls = count;
      const calls = repeatSpy.mock.calls.length - 1;

      expect(calls).toBe(expectedCalls);

      repeatSpy.mockRestore();
    });
  });
});
