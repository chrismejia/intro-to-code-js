import {
  emptyObject,
  noObjects,
  oneObject,
  multipleObjects,
} from "./data/01-testObjects";
import { shortPrices } from "./data/priceTransformer";
import groceryPrices from "./data/05-groceryPrices";
import { noNull, oneNull, multipleNull, allNull } from "./data/nullDeleter";
import {
  noSubObject,
  oneSubKey,
  oneSubObjMultKeys,
  multSubObjOneKey,
  multSubObjMultKeys,
  allSubObjMixedKeys,
} from "./data/objectFlattener";

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
 * @see {@link }
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
 * D
 *
 * @category 06 - Objects
 * @function objectCount
 * @param {Object} outerObj
 * @returns {Number}
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
 * #: nullDeleter
 *
 * nullDeleter accepts an object that always has at least one key-value pair.
 * If a key's value is null, nullDeleter deletes that key-value pair from the object.
 * nullDeleter returns the object, free of all null key-value pairs.
 *
 * @category 06 - Objects
 * @function nullDeleter
 * @param {Object.<string, *>} object
 * @returns {Object}
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
 * #5: priceTransformer
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

/**
 * #9: Grocery Register
 *
 * Define a function groceryRegister that takes in an object variable, groceryList.
 *
 * groceryList is an object containing:
 * - grocery items as keys
 * - quantities of each items to buy as values
 *
 * See listOne and listTwo for examples.
 *
 * You will be given a groceryPrices object that contains prices for available goods to reference in the groceryRegister function.
 *
 * Write a function that returns the total cost of the items in groceryList.
 *
 * HINT: What does groceryRegister return? How would you initialize that value and when would you modify it?
 *
 * HINT: What is a shared trait between the groceryPrices and groceryList objects? How can you use it?
 *
 * @example
 * const listOne = {
 *   "milk": 1,
 *   "cereal": 1
 * }
 * groceryRegister(listOne) //==> 11.49
 *
 * const listTwo = {
 *   "rice": 1,
 *   "milk": 2,
 *   "mango": 3,
 *   "cereal": 1,
 *   "strawberries": 2
 * }
 *
 * groceryRegister(listTwo) //==> 39.45
 */

/**
 * APPROACH
 *
 * define function, accepts groceryList object
 * initialize total at 0
 *
 * for-in loop of groceryList (item)
 *    grab quantity needed in list using item key
 *    grab item price using item as list key
 *    use item key in groceryPrices to grab price
 *    subtotal is price x quantity
 *    add subtotal to total
 * END LOOP
 *
 * return total (number)
 */

function groceryRegister(groceryList) {
  let total = 0;

  for (let item in groceryList) {
    const quantityNeeded = groceryList[item];
    const itemPrice = groceryPrices[item];

    if (itemPrice) {
      const subtotal = itemPrice * quantityNeeded;
      total += subtotal;
    }
  }
  return total;
}

const listOne = {
  milk: 1,
  cereal: 1,
};

// groceryRegister(listOne) //==> 11.49

const listTwo = {
  rice: 1,
  milk: 2,
  mango: 3,
  cereal: 1,
  strawberries: 2,
};

// groceryRegister(listTwo); //==> 39.45

/**
 * Segmented category lists
 */

/**
 * #3: keyValidator
 * Define the function keyValidator.
 * keyValidator accepts two objects, a testObj and a targetObj.
 * keyValidator compares the keys of the targetObj to the ones the testObj has.
 * keyValidator returns an array of all the keys, as strings, missing from the testObj.
 *
 * If the testObj has all of the same keys as the targetObj, return the string "Both objects are the same."
 *
 * @function keyValidator
 * @param {Object} testObj
 * @param {Object} targetObj
 * @returns {String[]}
 */

function keyValidator(testObj, targetObj) {
  let missingKeys = [];
  const targetKeys = Object.keys(targetObj);
  for (const testKey of Object.keys(testObj)) {
    if (targetKeys.indexOf(testKey) === -1) {
      missingKeys.push(testKey);
    }
  }
  return missingKeys;
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

  describe("#: nullDeleter", () => {
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

  describe("#5: priceTransformer", () => {
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
        const hasAllFoodKeys = Object.keys(transformedObj).every(
          (key) => foodKeys.indexOf(key) !== -1
        );
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

  describe("#4: keyValidator", () => {
    describe("returns an array", () => {
      describe("that is empty", () => {
        it("when both objects are empty", () => {
          expect(keyValidator(emptyOne, emptyTwo)).to.eql([]);
        });
        describe("when each object has all the same keys", () => {
          it("with the same values", () => {
            expect(keyValidator(twoKeysOne, twoKeysTwo)).to.eql([]);
          });
          it("with different values", () => {
            expect(keyValidator(twoKeysOne, twoKeysThree)).to.eql([]);
          });
        });
      });
    });
  });
  describe("#: groceryRegister", () => {
    const orderOne = {
      milk: 1,
      cereal: 1,
    };

    const orderTwo = {
      rice: 1,
      milk: 2,
      mango: 3,
      cereal: 1,
      strawberries: 2,
    };

    const twoItemsMissing = {
      "sirloin steak": 3,
      "potato chips": 2,
      hamburgers: 10,
    };

    const allOOS = {
      "soup stock": 2,
    };

    const baseGroceryLists = Array.of(orderOne, orderTwo);
    it("returns a number representing the total price", () => {
      baseGroceryLists.map((list) => {
        expect(groceryRegister(list)).to.be.a("number");
      });
    });

    it("returns", () => {
      expect(groceryRegister(orderOne)).to.equal(11.49);
      expect(groceryRegister(orderTwo)).to.equal(39.45);
    });

    describe("BONUS: can handle orders where items are out of stock", () => {
      it("returns a number representing the total price", () => {});
    });
  });
});
