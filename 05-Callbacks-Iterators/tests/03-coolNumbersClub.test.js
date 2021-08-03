import { expect } from "chai";
import sinon from "sinon";
import { allCool, allUncool, mixedCool } from "../data/coolNumbersClub.data";
import { coolNumbersClub } from "../03-coolNumbersClub";

describe("#3: coolNumbersClub", () => {
  describe("returns an array", () => {
    it("when all the numbers are cool", () => {
      expect(
        coolNumbersClub(allCool, isNumberCool, coolSquaredNumbers)
      ).to.be.an("array");
    });

    it("when all the numbers are uncool", () => {
      expect(
        coolNumbersClub(allUncool, isNumberCool, coolSquaredNumbers)
      ).to.be.an("array");
    });

    it("when there's a mix of cool and uncool numbers", () => {
      expect(
        coolNumbersClub(mixedCool, isNumberCool, coolSquaredNumbers)
      ).to.be.an("array");
    });
  });

  it("removes all numbers if all numbers are", () => {
    console.log(allUncool.filter(isNumberCool));
    expect(coolNumbersClub(allUncool, isNumberCool, coolSquaredNumbers)).to.eql(
      []
    );
  });
});
