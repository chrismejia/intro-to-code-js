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

export const wrapper = {
  collatzTripCounter: function (startNum) {
    if (startNum === 1) {
      return 0;
    }

    // Even odd test
    if (startNum % 2 === 0) {
      return 1 + wrapper.collatzTripCounter(startNum / 2);
    } else {
      return 1 + wrapper.collatzTripCounter(3 * startNum + 1);
    }
  },
};
