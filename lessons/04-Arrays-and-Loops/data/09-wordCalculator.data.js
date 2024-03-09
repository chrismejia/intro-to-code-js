export const zeroStarts = [
  {
    nums: [60],
    ops: [],
  },
  {
    nums: [12, 77],
    ops: [],
  },
  {
    nums: [9, 125, 848],
    ops: [],
  },
];

export const oneCalcs = [
  { nums: [1], ops: ["add"], result: 1 },
  { nums: [2], ops: ["sub"], result: -2 },
  { nums: [3], ops: ["mult"], result: 0 },
  { nums: [4], ops: ["div"], result: 0 },
  { nums: [5], ops: ["mod"], result: 0 },
  { nums: [6], ops: ["pow"], result: 0 },
];

export const twoCalcs = [
  { nums: [5, 6], ops: ["add", "mult"], result: 30 },
  { nums: [4, 2], ops: ["sub", "div"], result: -2 },
  { nums: [7, -19], ops: ["add", "rem"], result: 7 },
  { nums: [11, 2], ops: ["sub", "pow"], result: 121 },
];

export const multiCalcs = [
  {
    nums: [7, 11, 12],
    ops: ["sub", "mult", "add"],
    result: -65,
  },
  {
    nums: [6, 10, 3, 8],
    ops: ["add", "mult", "div", "sub"],
    result: 12,
  },
  {
    nums: [-250, 5, 2, 11, 6],
    ops: ["sub", "div", "pow", "add", "rem"],
    result: 3,
  },
  {
    nums: [-999, 9, 30, 11, 11, 5],
    ops: ["add", "rem", "mult", "sub", "div", "pow"],
    result: -1,
  },
];

export const invalidCalcs = [
  { nums: [99], ops: ["goof"] },
  { nums: [11, 432], ops: ["ouch", "candy"] },
  { nums: [7, 55, 404], ops: ["pop", "nope", "happy"] },
];

export const allCalcs = [
  ...zeroStarts,
  ...oneCalcs,
  ...twoCalcs,
  ...multiCalcs,
  ...invalidCalcs,
];
