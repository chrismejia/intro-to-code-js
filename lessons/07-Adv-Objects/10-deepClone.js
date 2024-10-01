/**
 * #10: deepClone
 *
 * The `deepClone` function accepts a single object, `inputObj`, and creates a deep copy of it.
 * This means that all nested objects and properties are also cloned.
 *
 * `deepClone` handles primitive values, and nested objects.
 *
 * BONUS: `deepClone` should also be able to handle special objects like Dates.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date Date on MDN}
 *
 * @category 07 - Adv Objects
 * @function deepClone
 * @param {Object} inputObj - The object to clone.
 * @returns {Object} A deep clone of the input object.
 *
 * @example
 * const original = { name: "Alice", age: 30 };
 * const clone = deepClone(original);
 * console.log(clone); // => { name: 'Alice', date: 30 }
 *
 * @example BONUS
 * const withDateObj = { name: 'Alice', date: new Date('2000-01-01') };
 * const clone = deepClone(withDateObj);
 * console.log(clone); // => { name: 'Alice', date: Date object }
 */
export function deepClone(inputObj) {
  const copy = {};

  for (const key in inputObj) {
    const val = inputObj[key];

    if (val instanceof Date) {
      // Handle Date objects by creating a new Date instance
      copy[key] = new Date(val.getTime());
    } else if (typeof val === "object" && val !== null) {
      // Handle plain objects by creating a shallow copy
      copy[key] = { ...val };
    } else {
      // Handle other types (primitives, functions, etc.)
      copy[key] = val;
    }
  }

  return copy;
}

// True Deep Clone
// export function deepClone(obj) {
//   // Handle non-objects (primitive values)
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   // Handle Date objects
//   if (obj instanceof Date) {
//     return new Date(obj.getTime());
//   }

//   // Initialize a stack to keep track of objects to clone
//   const stack = [{ source: obj, target: {} }];
//   const clone = stack[0].target;

//   // Process the stack until all objects are cloned
//   while (stack.length) {
//     const { source, target } = stack.pop();

//     // Iterate through each property in the source object
//     for (const key in source) {
//       if (source.hasOwnProperty(key)) {
//         const value = source[key];

//         // Handle nested objects and Date objects
//         if (value && typeof value === "object") {
//           if (value instanceof Date) {
//             target[key] = new Date(value.getTime());
//           } else {
//             target[key] = {}; // Create a placeholder for nested objects
//             stack.push({ source: value, target: target[key] });
//           }
//         } else {
//           // Directly assign primitive values
//           target[key] = value;
//         }
//       }
//     }
//   }

//   return clone;
// }
