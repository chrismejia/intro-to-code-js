// Test data for propValMap function
export const basicItems = [
  { color: "red", size: "M" },
  { color: "blue", price: 10 },
  { size: "L", price: 15 },
];

export const mixedItems = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25, city: "Wonderland" },
  { name: "Charlie", city: "Metropolis" },
];

export const nestedItems = [
  { a: 1, b: { nested: true } },
  { b: { nested: false }, c: [3, 4] },
  { a: 2, c: [5, 6] },
];

export const emptyItems = [];

// Expected Maps for the propValMap function
export const basicMap = new Map([
  ["color", ["red", "blue"]],
  ["size", ["M", "L"]],
  ["price", [10, 15]],
]);

export const mixedMap = new Map([
  ["name", ["Alice", "Bob", "Charlie"]],
  ["age", [30, 25]],
  ["city", ["Wonderland", "Metropolis"]],
]);

export const nestedMap = new Map([
  ["a", [1, 2]],
  ["b", [{ nested: true }, { nested: false }]],
  [
    "c",
    [
      [3, 4],
      [5, 6],
    ],
  ],
]);

export const emptyMap = new Map();
