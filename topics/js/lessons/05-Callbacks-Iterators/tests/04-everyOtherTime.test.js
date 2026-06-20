import { expect } from "chai";
import sinon from "sinon";
import {
  capitalize,
  wordsArr,
  cappedArr,
  cubeNum,
  cubeArr,
  evenCubed,
} from "../data/everyOtherTime.data";
import everyOtherTime from "../04-everyOtherTime";

describe("#4: everyOtherTime", () => {
  const capSpy = sinon.spy(capitalize);
  const cubeSpy = sinon.spy(cubeNum);

  const capResult = everyOtherTime(wordsArr, capSpy);
  const cubeResult = everyOtherTime(cubeArr, cubeSpy);

  it("runs the callback the correct number of times", () => {
    expect(capSpy.callCount).to.equal(3);
    expect(cubeSpy.callCount).to.equal(2);
  });

  it("returns the correct value", () => {
    expect(capResult).to.eql(cappedArr);
    expect(cubeResult).to.eql(evenCubed);
  });
});
