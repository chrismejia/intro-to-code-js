export const strictlyEqualPairs = [
  [5, 5],
  ["condition", "condition"],
  [true, true],
  [null, null],
];

export const looselyEqualPairs = [
  [5, "5"],
  [false, 0],
  ["", false],
  [null, undefined],
];

export const unequalPairs = [
  [5, 6],
  ["5", "6"],
  [true, false],
  [null, false],
];
