export const updateExistingProperties = {
  obj: { a: 1, b: 2 },
  operations: [["a", 3]],
  expected: { a: 3, b: 2 },
};

export const addNewProperties = {
  obj: { a: 1 },
  operations: [["b", 2]],
  expected: { a: 1, b: 2 },
};

export const deleteProperties = {
  obj: { a: 1, b: 2 },
  operations: [["b", null]],
  expected: { a: 1 },
};

export const multipleOperations = {
  obj: { a: 1, b: 2 },
  operations: [
    ["a", 3],
    ["c", 4],
    ["b", null],
  ],
  expected: { a: 3, c: 4 },
};

export const emptyOperationsArray = {
  obj: { a: 1, b: 2 },
  operations: [],
  expected: { a: 1, b: 2 },
};
