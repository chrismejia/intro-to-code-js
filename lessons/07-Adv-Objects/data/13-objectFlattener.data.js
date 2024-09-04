export const noObjVal = { one: 1, two: "string" };

export const oneObjVal = { one: 1, two: { three: false } };

export const oneObjExpected = { one: 1, three: false };

export const multiObjVal = {
  one: 1,
  two: { three: false, four: 4 },
  five: { six: "six" },
};

export const multiObjExpected = {
  one: 1,
  three: false,
  four: 4,
  six: "six",
};

export const arrayObjVal = { one: 1, two: { three: [1, 2, 3] } };
export const arrayObjExpected = { one: 1, three: [1, 2, 3] };
