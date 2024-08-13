```
/**
 * Define the function `countToTen`.
 * `countToTen` accepts a single input, startNum.
 * `countToTen` logs the current number and doesn't return anything.
 * If the current number is less than then 10, `countToTen` calls itself with the number one greater than the current number.
 * `countToTen` stops logging numbers it has logged the number 10.
 *
 * NOTE: `startNum` will always be less than 10.
 *
 * @category 08 - Recursion
 * @function countToTen
 * @param {Number} startNum
 */

 /**
 * @category 08 - Recursion
 * @function repeatStr
 * @param {String} strInput
 * @param {Number} times
 *
 */

/**
 * Define the object method `collatzTripCounter` with the wrapper object.
 * `collatzTripCounter` accepts `startNum`, a number.
 *
 * `collatzTripCounter` counts the number of steps it takes for `startNum` to reach 1 according to a set of rules:
 *
 * - If the number is even: divide it by 2.
 * - If the number is odd: multiply it by 3 and add 1.
 *
 * NOTE: recursive calls within the object method NEED to be declared as `wrapper.collatzTripCounter` NOT `collatzTripCounter`
 *
 * @category 08- Recursion
 * @function collatzTripCounter
 * @param {Number} startNum
 * @returns {Number} the total number of steps it takes to reach 1.
 *
 * @example
 * collatzTripCounter(1) // already at 1 => 0
 * collatzTripCounter(2) // 2 → 1 => 1
 * collatzTripCounter(3) // 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 => 7
 * collatzTripCounter(4) // 4 → 2 → 1 => 2
 * collatzTripCounter(5) // 5 → 16 → 8 → 4 → 2 → 1 => 0
 */
```
