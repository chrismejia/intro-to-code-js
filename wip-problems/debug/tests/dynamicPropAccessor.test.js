import { expect } from "chai";
import { DynamicPropAccessor } from "../dynamicPropAccessor";
import {
  baseData,
  baseExpected,
  caseOne,
  caseOneExpected,
} from "../../../wip-problems/data/dynamicPropAccessor.data";

describe("#XX: DynamicPropAccessor", () => {
  it("base condition met", () => {
    const result = DynamicPropAccessor(baseData);
    expect(result).to.deep.equal(baseExpected);
  });

  describe("nested set of conditions", () => {
    it("nested test condition", () => {
      const result = DynamicPropAccessor(baseData);
      expect(result).to.deep.equal(baseExpected);
    });

    it("other nested test condition", () => {
      const result = DynamicPropAccessor(caseOne);
      expect(result).to.deep.equal(caseOneExpected);
    });
  });
});
