import { expect } from "chai";
import sinon from "sinon";
import {
  numDoubler,
  numsArrInput,
  fourRunsNums,
  strDoubler,
  strInput,
  fourRunsLetter,
} from "../data/functionRunner.data";
import functionRunner from "../06-functionRunner";

describe("#6: functionRunner", () => {
  const noRunStr = sinon.spy(strDoubler);
  const noRunStrResult = functionRunner(strInput, noRunStr, 0);

  const fourRunStrSpy = sinon.spy(strDoubler);
  const fourRunStrResult = functionRunner(strInput, fourRunStrSpy, 4);

  const noRunNum = sinon.spy(numDoubler);
  const noRunResult = functionRunner(numsArrInput, noRunNum, 0);

  const fourRunNumSpy = sinon.spy(numDoubler);
  const fourRunNumResult = functionRunner(numsArrInput, fourRunNumSpy, 4);

  it("is a function", () => {
    expect(functionRunner).to.be.a("function");
  });

  describe("when runCount is less than 1", () => {
    it("the callback doesn't run", () => {
      expect(noRunStr.callCount).to.equal(0);
      expect(noRunNum.callCount).to.equal(0);
    });

    it("the inputVal is returned untouched", () => {
      expect(noRunStrResult).to.equal(strInput);
      expect(noRunResult).to.eql(numsArrInput);
    });
  });

  describe("when runCount is 1 or more", () => {
    it("runs the callback runCount number of times", () => {
      expect(fourRunStrSpy.callCount).to.equal(4);
      expect(fourRunNumSpy.callCount).to.equal(4);
    });

    describe("each callback's inputs", () => {
      const strSpyCallInfo = fourRunStrSpy.getCalls();
      const numSpyCallInfo = fourRunNumSpy.getCalls();

      it("uses inputVal as input for the first callback run", () => {
        const firstRunStrInput = fourRunStrSpy.getCall(0).args[0];
        expect(firstRunStrInput).to.eql(strInput);

        const firstRunNumInput = fourRunNumSpy.getCall(0).args[0];
        expect(firstRunNumInput).to.eql(numsArrInput);
      });

      it("uses the return of previous callback run as input for the next", () => {
        for (let run = 1; run < strSpyCallInfo.length; run++) {
          const lastReturn = strSpyCallInfo[run - 1].returnValue;
          const currRunArgs = strSpyCallInfo[run].args[0];

          expect(lastReturn).to.equal(currRunArgs);
        }

        for (let run = 1; run < numSpyCallInfo.length; run++) {
          const lastReturn = numSpyCallInfo[run - 1].returnValue;
          const currRunArgs = numSpyCallInfo[run].args[0];

          expect(lastReturn).to.eql(currRunArgs);
        }
      });

      it("returns the correct value after each callback run", () => {
        strSpyCallInfo.forEach((infoObj, callNum) => {
          const currCallbackResult = infoObj.returnValue;
          const currExpectedResult = fourRunsLetter[callNum];

          expect(currCallbackResult).to.equal(currExpectedResult);
        });

        numSpyCallInfo.forEach((infoObj, callNum) => {
          const currCallbackResult = infoObj.returnValue;
          const currExpectedResult = fourRunsNums[callNum];

          expect(currCallbackResult).to.eql(currExpectedResult);
        });
      });

      it("returns the correct final value after all callback runs are complete", () => {
        const lastStrCallResult =
          strSpyCallInfo[strSpyCallInfo.length - 1].returnValue;

        expect(lastStrCallResult).to.equal(fourRunStrResult);

        const lastNumCallResult =
          numSpyCallInfo[numSpyCallInfo.length - 1].returnValue;

        expect(lastNumCallResult).to.eql(fourRunNumResult);
      });
    });
  });
});
