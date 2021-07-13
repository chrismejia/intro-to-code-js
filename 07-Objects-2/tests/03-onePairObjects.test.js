import { expect } from "chai";
import { onePairObjects } from "../03-onePairObjects";
import {
  noPairs,
  onePairVariety,
  multiPairObj,
} from "../data/onePairObject.data";

describe("#3: onePairObjects", () => {
  it("returns an array", () => {
    expect(onePairObjects(noPairs)).to.be.an("array");

    onePairVariety.forEach((singleObj) => {
      expect(onePairObjects(singleObj)).to.be.an("array");
    });

    expect(onePairObjects(multiPairObj)).to.be.an("array");
  });

  describe("returns the correct number of array entries", () => {
    it("when inputObj is empty", () => {
      expect(onePairObjects(noPairs).length).to.equal(0);
    });

    it("when inputObj has one key-value pair", () => {
      onePairVariety.forEach((singleObj) => {
        expect(onePairObjects(singleObj).length).to.equal(1);
      });
    });

    it("when inputObj has multiple key-value pairs", () => {
      expect(onePairObjects(multiPairObj).length).to.equal(3);
    });
  });

  describe("returns the correct array entries in the correct order", () => {
    it("when inputObj is empty", () => {
      expect(onePairObjects(noPairs)).to.eql([]);
    });

    it("when inputObj has one key-value pair", () => {
      onePairVariety.forEach((singleObj) => {
        expect(onePairObjects(singleObj)[0]).to.eql(singleObj);
      });
    });

    it("when inputObj has multiple key-value pairs", () => {
      const multiTestOrder = [];

      for (const key in multiPairObj) {
        const oneObj = {};
        oneObj[key] = multiPairObj[key];
        multiTestOrder.push(oneObj);
      }

      const multiResult = onePairObjects(multiPairObj);

      multiTestOrder.forEach((entry, idx) => {
        expect(multiResult[idx]).to.eql(entry);
      });
    });
  });
});
