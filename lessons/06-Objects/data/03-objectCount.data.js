export const emptyObject = {};

export const noObjects = {
  one: 1,
  two: 2,
  three: null,
};

export const oneObject = {
  one: true,
  two: {},
  three: "word",
  four: 4,
  five: null,
};

export const multipleTopLevelObjects = {
  one: {},
  two: {},
  three: false,
  four: {},
  five: {},
  six: null,
};

/**
 * BONUS test data
 */

export const noObjectsEmptyBonus = {
  one: null,
  two: 2,
  three: [],
};

export const noObjectsWithElementsBonus = {
  one: 1,
  two: 2,
  three: [0, 1, null, 3, 4],
};

export const oneObjectBonus = {
  one: true,
  two: {},
  three: "word",
  four: 4,
  five: [0, 1, {}, 3, null],
};

export const multipleKeysWithObjectsBonus = {
  one: {},
  two: {},
  three: null,
  four: {},
  five: {},
  six: [{}, 1, {}, 3, {}],
  seven: [0, {}, 2, {}, 4],
};
