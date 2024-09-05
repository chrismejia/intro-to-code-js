/**
 * Grocery Register
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
 * HINT: groceryRegister uses a for...in loop to go through each key-value pair in the list object. What is a shared trait between the groceryPrices object and the groceryList input? How can you use it?
 *
 * const listOne = {
 *   "milk": 1,
 *   "cereal": 1
 * }
 *
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

// To use in groceryRegister function
const groceryPrices = {
  "sirloin steak": 12.99,
  rice: 5.99,
  milk: 6.5,
  "arizona tea": 1,
  strawberries: 4.75,
  mango: 1.99,
  cereal: 4.99,
};

// const listOne = {
//   "milk": 1,
//   "cereal": 1
// }

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
    // console.log("current item:", item);

    const quantityNeeded = groceryList[item];
    // console.log("item quantity", quantityNeeded);

    const itemPrice = groceryPrices[item];
    // console.log("item price from groceryPrices", itemPrice);

    const subtotal = itemPrice * quantityNeeded;
    // console.log("subtotal:", subtotal);

    total += subtotal;
    // console.log("running total:", total, "\n\n");
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

groceryRegister(listTwo); //==> 39.45

/**
 * #6: Grocery Register
 *
 * Define a function groceryRegister that takes in an object variable, groceryList.
 *
 * groceryList is an object containing:
 * - grocery items as keys
 * - quantities of each items to buy as values
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
 * groceryRegister(listOne) // => 11.49
 *
 * const listTwo = {
 *   "rice": 1,
 *   "milk": 2,
 *   "mango": 3,
 *   "cereal": 1,
 *   "strawberries": 2
 * }
 *
 * groceryRegister(listTwo) // => 39.45
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
