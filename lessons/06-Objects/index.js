import {
  emptyObject,
  noObjects,
  oneObject,
  multipleObjects,
} from "./data/objectCount";
import { shortPrices } from "./data/priceTransformer";
import { noNull, oneNull, multipleNull, allNull } from "./data/nullDeleter";

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-06` in the Shell and hit Enter.
 */
import { expect } from "chai";

/**
 * #1: isAnObject
 *
 * Define the function isAnObject.
 * isAnObject accepts a single input of any type.
 * isAnObject returns true or false depending on whether or not the input is an object.
 *
 * @category 06 - Objects
 * @function isAnObject
 * @param {*} input - any type
 * @returns {Boolean}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures JavaScript data types and data structures}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof typeof}
 *
 * @example
 * isAnObject("string") // false
 * isAnObject(42) // false
 * isAnObject(true) // false
 * isAnObject( [1, 2, 3] ) // false
 * isAnObject( { fruit: "banana" } ) // true
 */

function isAnObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}

/**
 * #2: objectCount
 *
 * Define the function objectCount.
 * objectCount accepts a single object with any number of key-value pairs.
 * objectCount counts the number of object sub-values the object contains.
 *
 * HINT: What can you use to help you determine whether or not a value is an object?
 *
 * @category 06 - Objects
 * @function objectCount
 * @param {Object} outerObj
 * @returns {Number}
 * @example
 * emptyObject({}) // => 0
 * emptyObject({ one: 1, two: 2, }) // => 0
 * emptyObject({ one: true, two: {}, three: "word", four: 4 }) // => 1
 * emptyObject({ one: {}, two: {}, three: false, four: {}, five: {} }) // => 4
 */

function objectCount(outerObj) {
  let count = 0;
  for (const value of Object.values(outerObj)) {
    if (Array.isArray(value)) {
      for (const element of value) {
        if (isAnObject(element)) {
          count++;
        }
      }
    } else if (isAnObject(value)) {
      count++;
    }
  }
  return count;
}

/**
 * #3: nullDeleter
 *
 * nullDeleter accepts an object that always has at least one key-value pair.
 * If a key's value is null, nullDeleter deletes that key-value pair from the object.
 * nullDeleter returns the object, free of all null key-value pairs.
 *
 * @category 06 - Objects
 * @function nullDeleter
 * @param {Object.<string, *>} object
 * @returns {Object}
 * @example
 * nullDeleter({ one: 1 }) // => { one: 1 }
 * nullDeleter({ one: 1, two: null }) // => { one: 1 }
 * nullDeleter({ one: null, two: null, three: "goodbye" }) // => { three: "goodbye" }
 * nullDeleter({ one: null, two: null, three: null }) // => {}
 */
function nullDeleter(object) {
  for (const key in object) {
    const currValue = object[key];
    if (currValue === null) {
      delete object[key];
    }
  }
  return object;
}

/**
 * #4: priceTransformer
 *
 * Define the function priceTransformer.
 * priceTransformer takes in an array of objects.
 * Each object in the array has `food` and `price` keys.
 *
 * priceTransformer returns a single object where the keys are the values of each original `food` value, and its values are the values of each original `price` value.
 *
 * @category 06 - Objects
 * @function priceTransformer
 * @param {Object[]} arrayOfObj
 * @prop {Object.<string, string>} food
 * @prop {Object.<string, number>} price
 * @returns {Object} the transformed object
 *
 * @example
 * const pricesOne = [ { food: "chips", price: 4.5, } ]
 * priceTransformer(pricesOne) // => { chips: 4.5 }
 *
 * const pricesTwo = [ { food: "yogurt", price: 1.5, }, { food: "banana", price: 1.99, } ]
 * priceTransformer(pricesTwo) // => { yogurt: 1.5, banana: 1.99 }
 */

function priceTransformer(arrayOfObj) {
  const transposedObj = {};

  for (const priceObj of arrayOfObj) {
    const newKey = priceObj.food;
    const newPrice = priceObj.price;

    transposedObj[newKey] = newPrice;
  }
  return transposedObj;
}

describe("06 - Objects", function () {
  describe("#1: isAnObject", function () {
    describe("returns false", function () {
      it("for a string", function () {
        expect(isAnObject("string")).to.be.false;
      });
      it("for a number", function () {
        expect(isAnObject(42)).to.be.false;
      });
      it("for a boolean", function () {
        expect(isAnObject(true)).to.be.false;
      });
      it("for a array", function () {
        expect(isAnObject([1, 2, 3])).to.be.false;
      });
    });

    describe("returns true", function () {
      it("for an object", function () {
        expect(isAnObject({ fruit: "banana" })).to.be.true;
      });
    });
  });

  describe("#2: objectCount", function () {
    it("returns a number", function () {
      expect(objectCount(emptyObject)).to.be.a("number");
      expect(objectCount(noObjects)).to.be.a("number");
      expect(objectCount(oneObject)).to.be.a("number");
      expect(objectCount(multipleObjects)).to.be.a("number");
    });

    describe("returns the correct number of objects found within the input object", function () {
      it("when the input object is empty", function () {
        expect(objectCount(emptyObject)).to.be.a("number");
        expect(objectCount(emptyObject)).to.equal(0);
      });

      it("when the input object has no object values", function () {
        expect(objectCount(noObjects)).to.be.a("number");
        expect(objectCount(noObjects)).to.equal(0);
      });

      it("when the input has only 1 object value", function () {
        expect(objectCount(oneObject)).to.be.a("number");
        expect(objectCount(oneObject)).to.equal(1);
      });

      it("when the input has multiple object values", function () {
        expect(objectCount(multipleObjects)).to.be.a("number");
        expect(objectCount(multipleObjects)).to.equal(4);
      });
    });

    describe("BONUS", function () {
      context(
        "examines an array value for object elements and adds any found to the total count",
        function () {
          it("when the value array is empty", function () {
            noObjects.noneArr = [];
            expect(objectCount(noObjects)).to.be.a("number");
            expect(objectCount(noObjects)).to.equal(0);
          });

          it("when the value array has no objects", function () {
            noObjects.noneArr = [0, 1, 2, 3, 4];
            expect(objectCount(noObjects)).to.be.a("number");
            expect(objectCount(noObjects)).to.equal(0);
          });

          it("when the value array has 1 object", function () {
            oneObject.oneArr = [0, 1, {}, 3, 4];
            expect(objectCount(oneObject)).to.be.a("number");
            expect(objectCount(oneObject)).to.equal(2);
          });

          it("when the value array has multiple objects", function () {
            multipleObjects.firstArr = [{}, 1, {}, 3, {}];
            multipleObjects.secondArr = [0, {}, 2, {}, 4];
            expect(objectCount(multipleObjects)).to.be.a("number");
            expect(objectCount(multipleObjects)).to.equal(9);
          });
        }
      );
    });
  });

  describe("#3: nullDeleter", function () {
    it("returns an object", function () {
      expect(nullDeleter(noNull)).be.an("object");
      expect(nullDeleter(oneNull)).be.an("object");
      expect(nullDeleter(multipleNull)).be.an("object");
      expect(nullDeleter(allNull)).be.an("object");
    });

    describe("returns the untouched input", function () {
      it("when it has no null key-value pairs", function () {
        expect(nullDeleter(noNull)).to.eql(noNull);
      });
    });

    describe("removes all null key-value pairs", function () {
      it("when there's one present", function () {
        expect(nullDeleter(oneNull)).to.eql({
          one: 1,
          three: "goodbye",
        });
      });

      it("when there's multiple present", function () {
        expect(nullDeleter(multipleNull)).to.eql({
          three: "goodbye",
        });
      });

      it("when they're all null values", function () {
        expect(nullDeleter(allNull)).to.eql({});
      });
    });
  });

  describe("#4: priceTransformer", function () {
    const transformedObj = priceTransformer(shortPrices);

    it("returns an object", function () {
      expect(transformedObj).to.be.an("object");
    });
    describe("the returned object", function () {
      it("does not have the 'food' key", function () {
        expect(transformedObj).to.not.have.property("food");
      });

      it("does not have the 'price' key", function () {
        expect(transformedObj).to.not.have.property("price");
      });

      it("has each of the food values as keys", function () {
        const foodKeys = shortPrices.map(({ food }) => food);
        const hasAllFoodKeys = Object.keys(transformedObj).every(
          (key) => foodKeys.indexOf(key) !== -1
        );
        expect(hasAllFoodKeys).to.be.true;
      });

      it("has each of the price values as values", function () {
        const priceValues = shortPrices.map(({ price }) => price);
        const hasAllPriceValues = Object.values(transformedObj).every(
          (values) => priceValues.indexOf(values) !== -1
        );
        expect(hasAllPriceValues).to.be.true;
      });
    });
  });
});
