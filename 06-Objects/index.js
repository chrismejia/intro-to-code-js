import groceryPrices from "./groceryPrices.json";
import foodPrices from "./foodPrices.json";

/**
 * #1: isAnObject
 *
 * Define the function isAnObject.
 * isAnObject accepts a single input of any type.
 * isAnObject returns true or false depending on whether or not the input is an object.
 * @category 06 - Objects
 * @function isAnObject
 * @param {*} input
 * @returns {Boolean}
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

function keysToSuccess(object) {
  return Object.keys(object);
}

/**
 * Transpose objects in an array to a single object
 * #2: priceTransformer
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
 * priceTransformer(pricesOne) // => { "chips": 4.5 }
 */

function priceTransformer(arrayOfObj) {
  const transposedObj = {};

  for (const obj of arrayOfObj) {
    console.log(obj);
    // for (let key in obj) {
    //   transposedObj.key = obj[key];
    // }
  }
  return transposedObj;
}

/**
 * #9: Grocery Register
 *
 * Define a function groceryRegister that takes in an object variable, groceryList.
 *
 * `groceryList` is an object containing:
 * - grocery items as keys
 * - quantities of each items to buy as values
 *
 * See listOne and listTwo for examples.
 *
 * You will be given a `groceryPrices` object that contains prices for available goods to reference in the groceryRegister function.
 *
 * Write a function that returns the total cost of the items in groceryList.
 *
 * HINT: What does `groceryRegister` return? How would you initialize that value and when would you modify it?
 *
 * HINT: What is a shared trait between the `groceryPrices` and `groceryList` objects? How can you use it?
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

describe("05 - Callbacks and Iterators", () => {
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

  describe("#2: priceTransformer", () => {
    it("returns an object", () => {
      expect(priceTransformer(foodPrices)).to.be.an("object");
    });

    it("does not have the original keys present in each object", () => {
      // console.log(priceTransformer(foodPrices));
      expect(priceTransformer(foodPrices)).to.not.have.property("food");
      expect(priceTransformer(foodPrices)).to.not.have.property("price");
    });
  });

  describe("#3: keyValidator", () => {
    const emptyOne = {};
    const emptyTwo = {};
    const twoKeysOne = {
      word: "hello",
      nums: [1, 2, 3],
    };
    const twoKeysTwo = {
      word: "hello",
      nums: [1, 2, 3],
    };
    const twoKeysThree = {
      word: "banana",
      nums: [4, 5, 6],
    };
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
