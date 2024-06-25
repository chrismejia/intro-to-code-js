/**
 * #6: valueLocator
 *
 * Define valueLocator. Make sure to export it.
 * valueLocator accepts two parameters, searchVal & arr.
 *
 * valueLocator uses the searchVal to determine whether that val is present within arr.
 * When searchVal is present, valueLocator returns a string featuring searchVal, its index in the arr, and arr itself.
 * Otherwise, valueLocator returns a string featuring searchVal and arr itself.
 *
 * See examples for exact formatting.
 *
 * @category 04 - Arrays and Loops
 * @function valueLocator
 * @param {String} searchVal - the string to search for
 * @param {String[]} arr - the array to search within
 * @returns {String} A sentence detailing whether or not the search value was found, and at what index.
 *
 * @example
 * valueLocator("xyx", ["zyz", "xyx", "abc", "bd"]) =>
 *  "xyx is at index 1 of the array [zyz,xyx,abc,bd]."
 * valueLocator("not", ["zyz", "xyx", "abc", "bd"]) =>
 *  "not cannot be found in the array [zyz,xyx,abc,bd]."
 */
