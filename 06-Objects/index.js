import {
  emptyObject,
  noObjects,
  oneObject,
  multipleObjects,
} from "./data/objectCount";
import { shortPrices } from "./data/priceTransformer";
import { noNull, oneNull, multipleNull, allNull } from "./data/nullDeleter";

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

/**
 * APPROACH
 * define the function isAnObject which takes in a single parameter of any type
 *    IF the data type of parameter is an object and is not an array, return TRUE
 *    ELSE, return FALSE
 */

// function isAnObject(input) {
//   if (typeof input === 'object' && Array.isArray(input) === false && input !== null) {
//     return true
//   } else {
//     return false
//   }
// }

export const isAnObject = (input) =>
  typeof input === "object" && !Array.isArray(input) && input !== null;

// console.log(typeof null)
// const type = typeof undefined // => "undefined"
// const typeofType = typeof type // typeof "undefined" => "string"
// console.log(type, typeofType)

// console.log(isAnObject({fruit: "banana"}))
// console.log("null test", isAnObject(null)) // => true

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
 * objectCount({}) // => 0
 * objectCount({ one: 1, two: 2, }) // => 0
 * objectCount({ one: true, two: {}, three: "word", four: 4 }) // => 1
 * objectCount({ one: {}, two: {}, three: false, four: {}, five: {} }) // => 4
 *
 * // BONUS
 * const bonusObj = {
 *  one: [{}, 1, {}, 3, {}],
 *  two: {},
 *  three: true,
 *  four: "banana",
 *  five: [5, {}, 7, {}, 9]
 * }
 * objectCount(bonusObj) // => 3 + 1 + 2 => 6
 */

/**
 * APPROACH
 *
 * define the function objectCount
 * define a variable to initialize count starting from 0
 *     START LOOP (through values)
 *        IF current value is an array
 *           START LOOP (through array)
 *              grab current element
 *              IF current element is an object, add 1 to value count
 *           END ARRAY LOOP
 *        ELSE IF current value is an object, add 1 to value count
 *     END LOOP
 * return value count
 */

/**
 *
 */

function objectCount(outerObj) {
  let valueCount = 0;

  for (const currValue of Object.values(outerObj)) {
    if (Array.isArray(currValue)) {
      for (const currElement of currValue) {
        if (isAnObject(currElement)) {
          valueCount++;
        }
      }
    } else if (isAnObject(currValue)) {
      valueCount++;
    }
  }
  return valueCount;
}

// function objectCount(outerObj) {
//   let valueCount = 0

//   // MOST DIRECT METHOD: for-of loop using Object.values to focus all the values
//   for (const currValue of Object.values(outerObj)) {
//     if (isAnObject(currValue)) {
//       valueCount++
//     }
//   }

//   // INDIRECT METHOD: for-of loop using Object.keys to grab a value to focus
//   // for (const key of Object.keys(outerObj)){
//   //   const value = outerObj[key]
//   //   if (isAnObject(value)) {
//   //     valueCount++
//   //   }
//   // }

//   // LEAST DIRECT METHOD: for-in loop using key to grab current value
//   // Based off how we can focus a single element in an array
//   // EXAMPLE ARRAY LOOP
//   // for (let i =0; i < arr.length; i++){
//   //   let currElement = arr[i] // collection[indexReference]
//   // }
//   //
//   // for (const key in outerObj) {
//   //   const value = outerObj[key]   // collection[reference]
//   //
//   //   if (isAnObject(value)) {
//   //     valueCount++
//   //   }
//   // }

//   return valueCount
// }

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

/**
 * APPROACH
 * define funtion nullDeleter
 * nullDeleter accepts an object with at least one key-value pair
 *    START LOOP (through key-value pairs)
 *      IF current value is null, remove property using 'delete'
 *     END LOOP
 * returns object without null values
 */
function nullDeleter(object) {
  for (const currKey in object) {
    let currValue = object[currKey];
    if (currValue === null) {
      delete object[currKey];
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

/**
 * APPROACH
 * define function priceTransformer
 * princeTransformer input(paramater) is an array of objects
 * define variable pricesObject for new object to be returned
 *     START FOR OF LOOP (for array of objects)
 *       grab the values from array of objects
 *       IF current value is from food key, change food value from value into key
 *       add new key to priceObjects
 *      ELSE IF current value is from price key add current value to new food property
 *      add new value to pricesObject
 *     END FOR OF LOOP
 * return pricesObject
 */
function priceTransformer(arrayOfObj) {
  const transposedObj = {};

  for (const priceObj of arrayOfObj) {
    // priceObj {food: "banana", price: 2}

    const combinedKey = priceObj.food; // "banana"
    const combinedPrice = priceObj.price; // 2

    // interpret combinedKey and assign it the value of combinedPrice
    transposedObj[combinedKey] = combinedPrice;
  }
  return transposedObj;
}

// function priceTransformer(arrayOfObj) {
//   let pricesObject = {};
//   for (const foodObj of arrayOfObj) {
//     // foodObj { food: "chips", price: 4.5, }
//     // make food value new key
//     // make price value new value
//     foodObj.food;
//     foodObj["food"];

//     const newKey = foodObj.food; // "chips"
//     const newValue = foodObj.price; // 4.5

//     // We use brackets here to set a new key-value pair because the newKey
//     // needs to be interpreted from the variable
//     // Dot-notation (pricesObject.newKey) would set a key in the object
//     // called "newKey" instead.
//     pricesObject[newKey] = newValue;
//   }

//   return pricesObject;
// }

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-05` in the Shell and hit Enter.
 */
import { expect } from "chai";

describe("06 - Objects", () => {
  describe("#1: isAnObject", () => {
    describe("returns false", () => {
      it("for a string", () => {
        expect(isAnObject("string")).to.be.false;
      });
      it("for a number", () => {
        expect(isAnObject(42)).to.be.false;
      });
      it("for a boolean", () => {
        expect(isAnObject(true)).to.be.false;
      });
      it("for a array", () => {
        expect(isAnObject([1, 2, 3])).to.be.false;
      });
      it("for null", () => {
        expect(isAnObject(null)).to.be.false;
      });
    });

    describe("returns true", () => {
      it("for an object", () => {
        expect(isAnObject({ fruit: "banana" })).to.be.true;
      });
    });
  });

  describe("#2: objectCount", () => {
    it("returns a number", () => {
      expect(objectCount(emptyObject)).to.be.a("number");
      expect(objectCount(noObjects)).to.be.a("number");
      expect(objectCount(oneObject)).to.be.a("number");
      expect(objectCount(multipleObjects)).to.be.a("number");
    });

    describe("returns the correct number of objects found within the input object", () => {
      it("when the input object is empty", () => {
        expect(objectCount(emptyObject)).to.be.a("number");
        expect(objectCount(emptyObject)).to.equal(0);
      });

      it("when the input object has no object values", () => {
        expect(objectCount(noObjects)).to.be.a("number");
        expect(objectCount(noObjects)).to.equal(0);
      });

      it("when the input has only 1 object value", () => {
        expect(objectCount(oneObject)).to.be.a("number");
        expect(objectCount(oneObject)).to.equal(1);
      });

      it("when the input has multiple object values", () => {
        expect(objectCount(multipleObjects)).to.be.a("number");
        expect(objectCount(multipleObjects)).to.equal(4);
      });
    });

    describe("BONUS", () => {
      context(
        "examines an array value for object elements and adds any found to the total count",
        () => {
          it("when the value array is empty", () => {
            noObjects.noneArr = [];
            expect(objectCount(noObjects)).to.be.a("number");
            expect(objectCount(noObjects)).to.equal(0);
          });

          it("when the value array has no objects", () => {
            noObjects.noneArr = [0, 1, 2, 3, 4];
            expect(objectCount(noObjects)).to.be.a("number");
            expect(objectCount(noObjects)).to.equal(0);
          });

          it("when the value array has 1 object", () => {
            oneObject.oneArr = [0, 1, {}, 3, 4];
            expect(objectCount(oneObject)).to.be.a("number");
            expect(objectCount(oneObject)).to.equal(2);
          });

          it("when the value array has multiple objects", () => {
            multipleObjects.firstArr = [{}, 1, {}, 3, {}];
            multipleObjects.secondArr = [0, {}, 2, {}, 4];
            expect(objectCount(multipleObjects)).to.be.a("number");
            expect(objectCount(multipleObjects)).to.equal(9);
          });
        }
      );
    });
  });

  describe("#3: nullDeleter", () => {
    it("returns an object", () => {
      expect(nullDeleter(noNull)).be.an("object");
      expect(nullDeleter(oneNull)).be.an("object");
      expect(nullDeleter(multipleNull)).be.an("object");
      expect(nullDeleter(allNull)).be.an("object");
    });

    describe("returns the untouched input", () => {
      it("when it has no null key-value pairs", () => {
        expect(nullDeleter(noNull)).to.eql(noNull);
      });
    });

    describe("removes all null key-value pairs", () => {
      it("when there's one present", () => {
        expect(nullDeleter(oneNull)).to.eql({
          one: 1,
          three: "goodbye",
        });
      });

      it("when there's multiple present", () => {
        expect(nullDeleter(multipleNull)).to.eql({
          three: "goodbye",
        });
      });

      it("when they're all null values", () => {
        expect(nullDeleter(allNull)).to.eql({});
      });
    });
  });

  describe("#4: priceTransformer", () => {
    const transformedObj = priceTransformer(shortPrices);

    it("returns an object", () => {
      expect(transformedObj).to.be.an("object");
    });
    describe("the returned object", () => {
      it("does not have the 'food' key", () => {
        expect(transformedObj).to.not.have.property("food");
      });

      it("does not have the 'price' key", () => {
        expect(transformedObj).to.not.have.property("price");
      });

      it("has each of the food values as keys", () => {
        const foodKeys = shortPrices.map(({ food }) => food);

        const transformedKeys = Object.keys(transformedObj);

        const hasAllFoodKeys = transformedKeys.every((key) => {
          return foodKeys.indexOf(key) !== -1;
        });

        expect(hasAllFoodKeys).to.be.true;
      });

      it("has each of the price values as values", () => {
        const priceValues = shortPrices.map(({ price }) => price);
        const hasAllPriceValues = Object.values(transformedObj).every(
          (values) => priceValues.indexOf(values) !== -1
        );
        expect(hasAllPriceValues).to.be.true;
      });
    });
  });
});
