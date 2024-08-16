/**
 * Creates a new object with modifications applied to the input object, preserving immutability.
 * This function uses object spread syntax to apply changes and return a new object instance,
 * ensuring the original object remains unchanged.
 *
 * @category 06 - Objects
 * @function immutableCreator
 * @param {Object} originalObj - The original object to modify.
 * @param {Object} updates - An object containing key-value pairs to update in the original object.
 * @returns {Object} - A new object with the applied updates.
 *
 * @example
 * const originalObj = { a: 1, b: 2 };
 * const updates = { b: 3, c: 4 };
 * const updatedObj = immutableCreator(originalObj, updates);
 * // updatedObj => { a: 1, b: 3, c: 4 }
 * // originalObj => { a: 1, b: 2 } // unchanged
 */

function immutableCreator(originalObj, updates) {
  return { ...originalObj, ...updates };
}
