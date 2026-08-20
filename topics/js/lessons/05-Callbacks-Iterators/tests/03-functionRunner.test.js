import { jest } from "@jest/globals";
import {
  numDoubler,
  numsArrInput,
  fourRunsNums,
  strDoubler,
  strInput,
  fourRunsLetter,
} from "../data/functionRunner.data.js";
import functionRunner from "../03-functionRunner.js";

const getFunctionRunnerCases = () => {
  const noRunStr = jest.fn(strDoubler);
  const noRunStrResult = functionRunner(strInput, noRunStr, 0);

  const fourRunStrSpy = jest.fn(strDoubler);
  const fourRunStrResult = functionRunner(strInput, fourRunStrSpy, 4);

  const noRunNum = jest.fn(numDoubler);
  const noRunResult = functionRunner(numsArrInput, noRunNum, 0);

  const fourRunNumSpy = jest.fn(numDoubler);
  const fourRunNumResult = functionRunner(numsArrInput, fourRunNumSpy, 4);

  return {
    noRunStr,
    noRunStrResult,
    fourRunStrSpy,
    fourRunStrResult,
    noRunNum,
    noRunResult,
    fourRunNumSpy,
    fourRunNumResult,
  };
};

xdescribe("#3: functionRunner", () => {
  it("is a function", () => {
    expect(typeof functionRunner).toBe("function");
  });

  describe("when runCount is less than 1", () => {
    it("the callback doesn't run", () => {
      const { noRunStr, noRunNum } = getFunctionRunnerCases();

      expect(noRunStr).not.toHaveBeenCalled();
      expect(noRunNum).not.toHaveBeenCalled();
    });

    it("the inputVal is returned untouched", () => {
      const { noRunStrResult, noRunResult } = getFunctionRunnerCases();

      expect(noRunStrResult).toBe(strInput);
      expect(noRunResult).toEqual(numsArrInput);
    });
  });

  describe("when runCount is 1 or more", () => {
    it("runs the callback runCount number of times", () => {
      const { fourRunStrSpy, fourRunNumSpy } = getFunctionRunnerCases();

      expect(fourRunStrSpy).toHaveBeenCalledTimes(4);
      expect(fourRunNumSpy).toHaveBeenCalledTimes(4);
    });

    describe("each callback's inputs", () => {
      it("uses inputVal as input for the first callback run", () => {
        const { fourRunStrSpy, fourRunNumSpy } = getFunctionRunnerCases();
        const firstRunStrInput = fourRunStrSpy.mock.calls[0][0];
        expect(firstRunStrInput).toEqual(strInput);

        const firstRunNumInput = fourRunNumSpy.mock.calls[0][0];
        expect(firstRunNumInput).toEqual(numsArrInput);
      });

      it("uses the return of previous callback run as input for the next", () => {
        const { fourRunStrSpy, fourRunNumSpy } = getFunctionRunnerCases();
        const strSpyCallInfo = fourRunStrSpy.mock;
        const numSpyCallInfo = fourRunNumSpy.mock;

        for (let run = 1; run < strSpyCallInfo.calls.length; run++) {
          const lastReturn = strSpyCallInfo.results[run - 1].value;
          const currRunArgs = strSpyCallInfo.calls[run][0];

          expect(lastReturn).toBe(currRunArgs);
        }

        for (let run = 1; run < numSpyCallInfo.calls.length; run++) {
          const lastReturn = numSpyCallInfo.results[run - 1].value;
          const currRunArgs = numSpyCallInfo.calls[run][0];

          expect(lastReturn).toEqual(currRunArgs);
        }
      });

      it("returns the correct value after each callback run", () => {
        const { fourRunStrSpy, fourRunNumSpy } = getFunctionRunnerCases();

        fourRunStrSpy.mock.results.forEach((result, callNum) => {
          const currCallbackResult = result.value;
          const currExpectedResult = fourRunsLetter[callNum];

          expect(currCallbackResult).toBe(currExpectedResult);
        });

        fourRunNumSpy.mock.results.forEach((result, callNum) => {
          const currCallbackResult = result.value;
          const currExpectedResult = fourRunsNums[callNum];

          expect(currCallbackResult).toEqual(currExpectedResult);
        });
      });

      it("returns the correct final value after all callback runs are complete", () => {
        const {
          fourRunStrSpy,
          fourRunStrResult,
          fourRunNumSpy,
          fourRunNumResult,
        } = getFunctionRunnerCases();

        const lastStrCallResult =
          fourRunStrSpy.mock.results[fourRunStrSpy.mock.results.length - 1]
            .value;

        expect(lastStrCallResult).toBe(fourRunStrResult);

        const lastNumCallResult =
          fourRunNumSpy.mock.results[fourRunNumSpy.mock.results.length - 1]
            .value;

        expect(lastNumCallResult).toEqual(fourRunNumResult);
      });
    });
  });
});
