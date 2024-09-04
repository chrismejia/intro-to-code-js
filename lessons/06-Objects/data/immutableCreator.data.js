export const modifyExistingProperties = {
  originalObj: { a: 1, b: 2 },
  updates: { b: 3, c: 4 },
  expected: { a: 1, b: 3, c: 4 },
};

export const addNewProperties = {
  originalObj: { a: 1 },
  updates: { b: 2 },
  expected: { a: 1, b: 2 },
};

export const noUpdates = {
  originalObj: { a: 1, b: 2 },
  updates: {},
  expected: { a: 1, b: 2 },
};

export const overwriteProperties = {
  originalObj: { a: 1, b: 2 },
  updates: { a: 3, b: 4 },
  expected: { a: 3, b: 4 },
};

export const emptyOriginalObject = {
  originalObj: {},
  updates: { a: 1 },
  expected: { a: 1 },
};
