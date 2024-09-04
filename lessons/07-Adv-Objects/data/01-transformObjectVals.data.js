export const doubleInput = { a: 1, b: 2, c: 3 };
export const doubleExpected = { a: 2, b: 4, c: 6 };

export const uppercaseInput = { x: "hello", y: "world" };
export const uppercaseExpected = { x: "HELLO", y: "WORLD" };

export const booleanInput = { p: true, q: false };
export const booleanExpected = { p: false, q: true };

export const mixedInput = { num: 5, str: "test", bool: true };
export const mixedExpected = { num: 6, str: "TEST", bool: false };

export const nestedObj = { a: { b: 1 }, c: { d: 2 } };
export const nestedObjExpected = { a: { b: 1 }, c: { d: 2 } };

// Test Transformation functions
export const doubleTransform = (x) => x * 2;
export const toUpperCase = (x) => x.toUpperCase();
export const negateBoolean = (x) => !x;
export const mixedTransform = (x) =>
  typeof x === "number" ? x + 1 : typeof x === "boolean" ? !x : x.toUpperCase();
export const identityTransform = (obj) => obj;
export const numOnlyTransform = (x) => (typeof x === "number" ? x * 3 : x);
