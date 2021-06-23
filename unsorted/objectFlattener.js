/**
 * Define the function objectFlattener.
 *
 * @category 06 - Objects
 * @function objectFlattener
 * @param {Object} object
 * @returns {Object}
 */
function objectFlattener(object) {
  for (const key in object) {
    const currValue = object[key];
    if (isAnObject(currValue)) {
      for (const subKey in currValue) {
        const subValue = currValue[subKey];
        object[subKey] = subValue;
      }
      delete object[key];
    }
  }
  return object;
}

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-05` in the Shell and hit Enter.
 */
import { expect } from "chai";

describe.only("#: objectFlattener", () => {
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
      describe("one sub object", () => {
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

      describe("multiple sub objects", () => {
        it("each having one key-value pair", () => {
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
          console.log(flatMultObjMultKeys);
          const hasMultObjMultKeys = multObjMultKeys.every(
            (key) => flatMultObjMultKeys.indexOf(key) !== -1
          );
          expect(hasMultObjMultKeys).to.be.true;
        });
      });
    });
  });
});
