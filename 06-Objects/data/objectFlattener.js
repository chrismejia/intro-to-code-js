export const noSubObject = {
  one: 1,
  two: true,
  three: "hello",
};

export const oneSubKey = {
  one: 1,
  two: false,
  three: { four: 1 },
};

export const oneSubObjMultKeys = {
  one: 1,
  two: false,
  three: { four: 3, five: "hello" },
};

export const multSubObjOneKey = {
  one: { four: 55 },
  two: false,
  three: { five: "lunch" },
};

export const multSubObjMultKeys = {
  one: { four: 42, five: null },
  two: false,
  three: { six: 10, seven: "bread", eight: true },
};

export const allSubObjMixedKeys = {
  one: { four: 999, five: "javascript" },
  two: { six: false },
  three: { seven: 7, eight: [1, 2, 3], nine: true },
};
