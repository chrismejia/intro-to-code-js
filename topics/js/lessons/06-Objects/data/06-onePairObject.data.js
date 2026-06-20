export const singlePair = { one: 1 };

export const multipleTopLevelPairs = { one: 1, two: true, three: "no" };

export const multipleTopLevelPairsAns = [
  { one: 1 },
  { two: true },
  { three: "no" },
];

export const hasNestedObj = { one: 1, two: { nested: "yes" }, three: "no" };

export const hasNestedObjAns = [
  { one: 1 },
  { two: { nested: "yes" } },
  { three: "no" },
];

export const mixedTypesObj = {
  num: 123,
  bool: true,
  str: "string",
  arr: [1, 2, 3],
  obj: { key: "value" },
};

export const mixedTypesAns = [
  { num: 123 },
  { bool: true },
  { str: "string" },
  { arr: [1, 2, 3] },
  { obj: { key: "value" } },
];
