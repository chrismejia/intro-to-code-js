/**
 * Define the function isNumberCool.
 * isNumberCool tells us that a number is cool if a number is an integer, that is, it has no decimal point.
 * Cool: 1, 4, 9
 * Uncool: 1.7, 3.14, 9.000001
 *
 * Define the function coolNumbersGetSquaredSquared.
 * Cool numbers grow large by getting squared twice in a row.
 * e.g. 2 ** 2 => 4; 4 ** 2 => 16
 *
 * @function coolNumbersGetSquaredSquared
 * @param {Number[]} nums
 * @returns {Number[]}
 */
function isNumberCool(num) {
  return Number.isInteger(num);
}

function coolSquaredNumbers(num) {
  return (num ** 2) ** 2;
}

function coolNumbersGetSquaredSquared(nums, coolCheck, squareCools) {
  return nums.filter(coolCheck).map(squareCools);
}

// Chained methods
// function coolNumbersGetSquaredSquared(nums, coolCheck, squareCools) {
//   return nums
//     .filter((num) => !Number.isInteger(num))
//     .map((num) => (num ** 2) ** 2);
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

describe("05 - Callbacks and Iterators", () => {
  describe("#3: coolNumbersGetSquaredSquared", () => {
    const allCool = [2, 5, 8, 12];
    const allUncool = [2.22, 5.55, 8.88, 12.12];
    const mixedCool = [...allCool, allUncool];

    describe("returns an array", () => {
      it("when all the numbers are cool", () => {
        expect(
          coolNumbersGetSquaredSquared(
            allCool,
            isNumberCool,
            coolSquaredNumbers
          )
        ).to.be.an("array");
      });

      it("when all the numbers are uncool", () => {
        expect(
          coolNumbersGetSquaredSquared(
            allUncool,
            isNumberCool,
            coolSquaredNumbers
          )
        ).to.be.an("array");
      });

      it("when there's a mix of cool and uncool numbers", () => {
        expect(
          coolNumbersGetSquaredSquared(
            mixedCool,
            isNumberCool,
            coolSquaredNumbers
          )
        ).to.be.an("array");
      });
    });

    it("removes all numbers if all numbers are", () => {
      console.log(allUncool.filter(isNumberCool));
      expect(
        coolNumbersGetSquaredSquared(
          allUncool,
          isNumberCool,
          coolSquaredNumbers
        )
      ).to.eql([]);
    });
  });
});
