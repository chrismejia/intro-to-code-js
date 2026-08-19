export const oneObjSingleKV = [{ a: 1 }];
export const oneObjSingleKVExpected = { a: new Set([1]) };

export const oneObjMultipleKV = [{ a: 1, b: 2, c: 3 }];
export const oneObjMultiKVExpected = {
  a: new Set([1]),
  b: new Set([2]),
  c: new Set([3]),
};

export const multipleIdentical = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
];
export const multipleIdenticalExpected = {
  a: new Set([1]),
  b: new Set([2]),
};

export const hasUndef = [
  { a: undefined, b: 2 },
  { a: undefined, b: 3 },
];
export const hasUndefExpected = {
  a: new Set([undefined]),
  b: new Set([2, 3]),
};

export const hasNull = [
  { a: null, b: 2 },
  { a: null, b: 3 },
];
export const hasNullExpected = {
  a: new Set([null]),
  b: new Set([2, 3]),
};

export const hasAllUnique = [
  { a: 1, b: 2, c: "hello" },
  { a: 3, b: 2, d: true },
  { a: 1, c: "world" },
];
export const hasAllUniqueExpected = {
  a: new Set([1, 3]),
  b: new Set([2]),
  c: new Set(["hello", "world"]),
  d: new Set([true]),
};

export const hasOverlapping = [
  { x: 10, y: 20 },
  { x: 10, z: 30 },
  { y: 20, z: 30 },
];
export const hasOverlappingExpected = {
  x: new Set([10]),
  y: new Set([20]),
  z: new Set([30]),
};

export const hasDiffDataTypes = [
  { a: 1, b: "text", c: true },
  { a: 2, b: "text", c: false },
  { a: 1, b: "text", c: true },
];
export const hasDiffDataTypesExpected = {
  a: new Set([1, 2]),
  b: new Set(["text"]),
  c: new Set([true, false]),
};

export const hasNested = [
  { a: 1, b: { nested: "value" } },
  { a: 2, b: { nested: "value" } },
];
export const hasNestedExpected = {
  a: new Set([1, 2]),
  b: new Set([{ nested: "value" }, { nested: "value" }]),
};
