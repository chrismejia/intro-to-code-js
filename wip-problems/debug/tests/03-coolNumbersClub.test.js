import { allCool, allUncool, mixedCool } from "../data/coolNumbersClub.data";
import { coolNumbersClub } from "../03-coolNumbersClub";

describe("#3: coolNumbersClub", () => {
  describe("returns an array", () => {
    it("when all the numbers are cool", () => {
      expect(
        coolNumbersClub(allCool, isNumberCool, coolSquaredNumbers)
      ).toEqual(expect.any(Array));
    });

    it("when all the numbers are uncool", () => {
      expect(
        coolNumbersClub(allUncool, isNumberCool, coolSquaredNumbers)
      ).toEqual(expect.any(Array));
    });

    it("when there's a mix of cool and uncool numbers", () => {
      expect(
        coolNumbersClub(mixedCool, isNumberCool, coolSquaredNumbers)
      ).toEqual(expect.any(Array));
    });
  });

  it("removes all numbers if all numbers are", () => {
    console.log(allUncool.filter(isNumberCool));
    expect(
      coolNumbersClub(allUncool, isNumberCool, coolSquaredNumbers)
    ).toEqual([]);
  });
});
