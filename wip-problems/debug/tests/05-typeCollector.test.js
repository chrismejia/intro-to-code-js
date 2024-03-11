import { expect } from "chai";
import {
  oneOfOneType,
  manyOfOneType,
  manyOfManyTypes,
} from "../data/typeCollector.data";
import typeCollector from "../05-typeCollector";

describe.only("#5: typeCollector", () => {
  describe("returns an object", () => {
    it("when inputObj has only one value of one type", () => {
      oneOfOneType.forEach((obj) =>
        expect(typeCollector(obj)).to.be.an("object")
      );
    });

    it("when inputObj has many values of one type", () => {
      manyOfOneType.forEach((obj) =>
        expect(typeCollector(obj)).to.be.an("object")
      );
    });

    it("when inputObj has many values of many types", () => {
      manyOfManyTypes.forEach((obj) =>
        expect(typeCollector(obj)).to.be.an("object")
      );
    });
  });

  describe("that has the right number of keys", () => {
    describe("objects have one value of one type", () => {
      oneOfOneType.forEach((obj) => {
        it(`${JSON.stringify(obj)}`, () => {
          const testObjKeysCount = Object.keys(obj).length;
          const resultKeysCount = Object.keys(obj).length;

          expect(resultKeysCount).to.equal(testObjKeysCount);
        });
      });
    });

    describe("object has many values of one type", () => {
      manyOfOneType.forEach((obj) => {
        it(`${JSON.stringify(obj)}`, () => {
          const testObjKeysCount = Object.keys(obj).length;
          const resultKeysCount = Object.keys(obj).length;
          expect(resultKeysCount).to.equal(testObjKeysCount);
        });
      });
    });

    describe('object has many values of many types e.g. { a: 1, b: 2, c: "word }', () => {
      manyOfManyTypes.forEach((obj) => {
        it(`${JSON.stringify(obj)}`, () => {
          const testObjKeysCount = Object.keys(obj).length;
          const resultKeysCount = Object.keys(obj).length;
          expect(resultKeysCount).to.equal(testObjKeysCount);
        });
      });
    });
  });

  describe("has the correct key labels", () => {
    it("for objects with only one key-value pair", () => {
      const expectedKeys = oneOfOneType.map((singleObj) => {
        for (const value of Object.values(singleObj)) {
          if (typeof value === "object" && Array.isArray(value)) {
            return "array";
          } else {
            return typeof value;
          }
        }
      });

      const keyGrabber = (obj) => Object.keys(typeCollector(obj))[0];
      const resultKeys = oneOfOneType.map(keyGrabber);

      const keyTester = resultKeys.every(
        (key, index) => key === expectedKeys[index]
      );

      expect(keyTester).to.be.true;
    });
  });

  it("for objects with multiple key-value pairs of one type", () => {
    const expectedKeys = manyOfOneType.map((singleObj) => {});
  });
  // manyOfOneType.forEach((obj) => {
  //   const types = Object.values(obj).map((value) => {
  //     typeof value === "object" && Array.isArray(value)
  //       ? "array"
  //       : typeof value;
  //   });

  //   const resultKeys = Object.keys(typeCollector(obj));
  //   const typesCheck = types.every((type) => resultKeys.indexOf(type) !== -1);

  //   expect(resultKeys).to.equal(typesCheck);
  // });
  // manyOfManyTypes.forEach((obj) => {
  //   const types = Object.values(obj).map((value) => {
  //     typeof value === "object" && Array.isArray(value)
  //       ? "array"
  //       : typeof value;
  //   });

  //   const resultKeys = Object.keys(typeCollector(obj));
  //   const typesCheck = types.every((type) => resultKeys.indexOf(type) !== -1);

  //   expect(resultKeys).to.equal(typesCheck);
  // });
});
