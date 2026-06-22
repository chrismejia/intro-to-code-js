import { jest } from "@jest/globals";
import countToTen from "../01-countToTen.js";

xdescribe("#1: countToTen", () => {
  const runCountToTen = () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const countSpy = jest.fn(countToTen);
    const oneRun = countSpy(1);

    return {
      oneRun,
      countSpyCalls: logSpy.mock.calls,
    };
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns undefined", () => {
    const { oneRun } = runCountToTen();
    expect(oneRun).toBeUndefined();
  });

  describe("for numbers less than 10", () => {
    it("logs startNum first", () => {
      const { countSpyCalls } = runCountToTen();
      const firstLogNum = countSpyCalls[0][0];
      expect(firstLogNum).toBe(1);
    });

    it("logs each number between startNum and 10, inclusive", () => {
      const { countSpyCalls } = runCountToTen();

      if (countSpyCalls.length === 0) {
        expect.fail("No numbers have been logged.");
      } else {
        const twoToTenCalls = countSpyCalls.slice(1);

        twoToTenCalls.forEach(([currentLogVal], index) => {
          const indexMatchToTotal = index + 2; // 0 becomes 2, etc
          expect(indexMatchToTotal).toBe(currentLogVal);
        });
      }
    });

    it("recursively calls itself the correct number of times", () => {
      const { countSpyCalls } = runCountToTen();
      expect(countSpyCalls).toHaveLength(10);
    });
  });
});
