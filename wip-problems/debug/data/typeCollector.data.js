export const oneOfOneType = [
  {
    1: "word",
  },
  {
    2: true,
  },
  {
    3: 456,
  },
  {
    4: [1, 2, 3],
  },
  {
    5: { a: "yes" },
  },
];

export const oneTypeAnswers = [
  {
    string: ["word"],
  },
  {
    boolean: [true],
  },
  {
    number: [456],
  },
  {
    array: [[]],
  },
  {
    object: [{ a: "yes" }],
  },
];

export const manyOfOneType = [
  {
    1: "cat",
    2: "dog",
  },
  {
    3: true,
    4: false,
  },
  {
    5: 67,
    8: 90,
  },
  {
    9: [1, 2, 3],
    10: [4, 5, 6],
  },
  {
    11: { a: "yes" },
    12: { b: "no" },
  },
];

export const manyOneTypeAnswers = [
  {
    string: ["cat", "dog"],
  },
  {
    boolean: [true, false],
  },
  {
    number: [67, 90],
  },
  {
    array: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
  {
    object: [{ a: "yes" }, { b: "no" }],
  },
];

export const manyOfManyTypes = [
  {
    1: "car",
    2: true,
    3: "train",
    4: false,
  },
  {
    1: [7, 8, 9],
    2: "hello",
    3: 22,
    4: [4, 5, 6],
    5: "goodbye",
    6: 66,
  },
  {
    1: "contact",
    2: [4, 5, 6],
    3: false,
    4: 10,
    5: "mayday",
    6: [8, 9, 0],
    7: true,
    8: 99,
  },
  {
    1: 45,
    2: "banana",
    3: { b: "no" },
    4: [5, 6, 7],
    5: false,
    6: 99,
    7: "mango",
    8: { c: "yes" },
    9: [1, 4, 9],
    10: true,
  },
];

export const manyofManyAnswers = [{}];
