import { jest } from "@jest/globals";
import {
  capitalize,
  wordsArr,
  cappedArr,
  cubeNum,
  cubeArr,
  evenCubed,
} from "../data/everyOtherTime.data.js";
import everyOtherTime from "../04-everyOtherTime.js";

xdescribe("#4: everyOtherTime", () => {
  it("runs the callback the correct number of times", () => {
    const capSpy = jest.fn(capitalize);
    const cubeSpy = jest.fn(cubeNum);

    everyOtherTime(wordsArr, capSpy);
    everyOtherTime(cubeArr, cubeSpy);

    expect(capSpy).toHaveBeenCalledTimes(3);
    expect(cubeSpy).toHaveBeenCalledTimes(2);
  });

  it("returns the correct value", () => {
    expect(everyOtherTime(wordsArr, capitalize)).toEqual(cappedArr);
    expect(everyOtherTime(cubeArr, cubeNum)).toEqual(evenCubed);
  });
});
