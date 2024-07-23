export const noNull = {
  one: 1,
  two: true,
  three: "hello world",
};

export const oneNull = {
  one: 1,
  two: null,
  three: "goodbye",
};

export const multipleNull = {
  one: null,
  two: null,
  three: "goodbye",
};

export const allNull = {
  one: null,
  two: null,
  three: null,
};

/**
 * BONUS
 */
export const noNullsNested = {
  ...noNull,
  nested: noNull,
};

export const oneNullTopLevel = {
  ...oneNull,
  nested: noNull,
};

export const oneNullNested = {
  ...noNull,
  nested: oneNull,
};

export const allNullsNested = {
  ...allNull,
  nested: allNull,
};
