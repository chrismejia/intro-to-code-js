/**
 * Define the function `callbackConveyor`.
 * `callbackConveyor` accepts a number, and an array of callback functions.
 *
 * `callbackConveyor` should pass the number input as the input of the first callback function in the array, the first callback's functions result as the input of the next callback function, etc, until there are no more callbacks left in the array.
 * `callbackConveyor` then returns that final processed value.
 *
 * @category 05 - Callbacks
 * @param {Number} number
 * @param {Function[]} callbacksArr - any number of callbacks in arr
 * @returns {Number} the number result of all the chained callbacks
 *
 * @example
 * const addTen = (num) => num + 10;
 * const minusTwenty = (num) => num - 20;
 * const multiplyThree = (num) => num * 3;
 *
 * callbackConveyor(0, [addTen]) // => 10
 * callbackConveyor(0, [minusTwenty, addTen]) // => -10
 * callbackConveyor(0, [minusTwenty, multiplyThree, addTen]) // => -50
 */
function callbackConveyor(number, callbacksArr) {
  callbacksArr.forEach((callback) => {
    number = callback(number);
  });

  return number;
}

export default callbackConveyor;
