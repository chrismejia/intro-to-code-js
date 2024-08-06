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

export function objectCombiner() {}
