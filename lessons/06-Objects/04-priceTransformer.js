/**
 * #4: priceTransformer
 *
 * Define the function priceTransformer.
 * priceTransformer takes in an array of objects.
 * Each object in the array has `food` and `price` keys.
 *
 * priceTransformer returns a single object where the keys are the values of each original `food` value, and its values are the values of each original `price` value..
 *
 * CHALLENGE:
 * Can you write priceTransformer as a one-liner?
 *
 * @category 06 - Objects
 * @function priceTransformer
 * @param {Object[]} objArr
 * @prop {String} objArr[].food - the kind of food
 * @prop {Number} objArr[].price - the food's price
 * @returns {Object} the transformed object
 *
 * @example
 * const pricesOne = [ { food: "chips", price: 4.5, } ]
 * priceTransformer(pricesOne) // => { chips: 4.5 }
 *
 * const pricesTwo = [ { food: "yogurt", price: 1.5, }, { food: "banana", price: 1.99, } ]
 * priceTransformer(pricesTwo) // => { yogurt: 1.5, banana: 1.99 }
 */

// Without destructuring priceObj
// export function priceTransformer(objArr) {
//   const transformedObj = {};

//   for (const priceObj of objArr) {
//     const newKey = priceObj.food;
//     const newPrice = priceObj.price;

//     transformedObj[newKey] = newPrice;
//   }
//   return transformedObj;
// }

// Destructuring priceObj
export function priceTransformer(objArr) {
  const transformedObj = {};

  for (const { food, price } of objArr) {
    transformedObj[food] = price;
  }

  return transformedObj;
}

// One-liner
// export const priceTransformer = (objArr) =>
//   objArr.reduce((prev, { food, price }) => {
//     prev[food] = price;
//     return prev;
//   }, {});
