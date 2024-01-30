import objectFlattener from "../01-objectFlattener";
import {
  noSubObject,
  oneSubKey,
  oneSubObjMultKeys,
  multSubObjOneKey,
  multSubObjMultKeys,
  allSubObjMixedKeys,
} from "../data/objectFlattener.data.js";
import { expect } from "chai";

describe("#1: objectFlattener", () => {
  it("returns an object", () => {
    expect(objectFlattener(noSubObject)).to.be.an("object");
    expect(objectFlattener(oneSubKey)).to.be.an("object");
    expect(objectFlattener(oneSubObjMultKeys)).to.be.an("object");
    expect(objectFlattener(multSubObjMultKeys)).to.be.an("object");
  });

  describe("when the input has no object values", () => {
    it("the untouched input is returned", () => {
      expect(objectFlattener(noSubObject)).to.eql(noSubObject);
    });
  });

  describe("when the input has object values", () => {
    describe("the returned object has each sub object's key-value pairs", () => {
      describe("when there is one sub object", () => {
        it("one key-value pair e.g. { three: { four: 1 }}", () => {
          const flattenedOne = Object.keys(objectFlattener(oneSubKey));
          const hasOneSubKey = flattenedOne.indexOf("four") !== -1;
          expect(hasOneSubKey).to.be.true;
        });

        it("multiple key-value pairs e.g. { three: { four: 3, five: 'hello' }}", () => {
          const addedKeys = ["four", "five"];
          const flattenedOneMult = Object.keys(
            objectFlattener(oneSubObjMultKeys)
          );
          const hasOneSubMultKeys = addedKeys.every(
            (key) => flattenedOneMult.indexOf(key) !== -1
          );
          expect(hasOneSubMultKeys).to.be.true;
        });
      });

      describe("when there are multiple sub objects", () => {
        it("each having one key-value pair e.g. { one: { two: 1 }, three: { four: 4 } }", () => {
          const addedMultSubObjKeys = ["four", "five"];
          const flatMultSubOneKeys = Object.keys(
            objectFlattener(multSubObjOneKey)
          );
          const hasMultSubOneKeys = addedMultSubObjKeys.every(
            (key) => flatMultSubOneKeys.indexOf(key) !== -1
          );

          expect(hasMultSubOneKeys).to.be.true;
        });

        it("for multiple sub objects key-value pairs", () => {
          const multObjMultKeys = ["four", "five", "six", "seven", "eight"];
          const flatMultObjMultKeys = Object.keys(
            objectFlattener(multSubObjMultKeys)
          );
          const hasMultObjMultKeys = multObjMultKeys.every(
            (key) => flatMultObjMultKeys.indexOf(key) !== -1
          );
          expect(hasMultObjMultKeys).to.be.true;
        });
      });

      describe("when all input object values", () => {
        it("are objects with a mixed number of key-value pairs", () => {
          const allFlattenedKeys = [
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
          ];
          const flatAllMixedKeys = Object.keys(
            objectFlattener(allSubObjMixedKeys)
          );
          const hasAllMixedKeys = allFlattenedKeys.every(
            (key) => flatAllMixedKeys.indexOf(key) !== -1
          );

          expect(hasAllMixedKeys).to.be.true;
        });
      });
    });
  });
});
