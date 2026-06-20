/**
 * #7: objectCombiner
 *
 * objectCombiner combines any number of input objects into a single object.
 * objectCombiner will handle properties from later objects by overwriting those from earlier objects if they have the same key.
 *
 * @category 06 - Objects
 * @function objectCombiner
 * @param {...Object} args - The objects to be combined.
 * @returns {Object} - The combined object.
 *
 * @example
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 * const result = objectCombiner(obj1, obj2);
 * console.log(result); // { a: 1, b: 3, c: 4 } <- Notice that the "b" value from obj2 is used since it came last in the order.
 */

/**
 * The arguments object in JavaScript is not an array but an array-like object. This means it has some properties and behaviors of an array (like indexed access to its elements and a length property), but it does not have array methods like `.reduce()` directly available.
 *
 * To use array methods on the arguments object, you need to borrow them from the Array.prototype and call them with the arguments object as the context. This is done using `Array.prototype.reduce.call(arguments, callback)`.
 */
export function objectCombiner() {
  return Array.prototype.reduce.call(
    arguments,
    (acc, curr) => ({
      ...acc,
      ...curr,
    }),
    {}
  );
}

/**
 * However, a clearer and more modern way to handle this is to convert the arguments object to a real array using `Array.from()` or the spread operator `[...arguments]`, and then use array methods directly. Here's an updated version of the objectCombiner function using the spread operator:
 */
// export const objectCombiner = (...args) =>
//   args.reduce((prev, currObj) => ({ ...prev, ...currObj }), {});
