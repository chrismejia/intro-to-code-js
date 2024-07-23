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

export function priceTransformer(arrayOfObj) {
  const transposedObj = {};

  for (const priceObj of arrayOfObj) {
    const newKey = priceObj.food;
    const newPrice = priceObj.price;

    transposedObj[newKey] = newPrice;
  }
  return transposedObj;
}
