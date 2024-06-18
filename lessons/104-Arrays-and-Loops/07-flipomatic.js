/**
 * #7: flipomatic
 *
 * Define the function flipomatic. Make sure to export it.
 * flipomatic accepts an array of at least one number, and possibly a "flip" value.
 * flipomatic adds the array's elements to the end of a new array, one at a time.
 * When flipomatic encounters the string "flip", flipomatic switches so that from the next non-"flip" element in the array, it adds them to front instead of the back.
 *
 * NB: Not every input array may contain a "flip" string.
 *
 * BONUS: flipomatic can handle multiple 'flip' values in the array.
 *
 * @category 04 - Arrays and Loops
 * @function flipomatic
 * @param {Number | String[]} array - an array of at least size 1, made of entries of any type.
 * @returns {Number[]} array of number in the correct order
 *
 * @example
 * flipomatic([1, 2, 3, 4, 5]) => [1, 2, 3, 4, 5]
 * flipomatic(["flip", 1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
 * flipomatic([1, 2, "flip", 3, 4, 5]) => [5, 4, 3, 1, 2]
 * flipomatic([1, 2, 3, 4, 5, "flip"]) => [1, 2, 3, 4, 5]
 */

export function flipomatic(array) {
  let output = [];
  let flip = false;
  for (let i = 0; i < array.length; i++) {
    const currValue = array[i];

    if (currValue === "flip") {
      flip = !flip;
    } else if (flip) {
      output.unshift(currValue);
    } else {
      output.push(currValue);
    }
  }
  return output;
}
