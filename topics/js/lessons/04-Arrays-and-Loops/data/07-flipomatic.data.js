export const flipStart = ["flip", 1, 2, 3, 4, 5];
export const flipEnd = [1, 2, 3, 4, 5, "flip"];
export const hasFlip1 = [1, "flip", 2, 3, 4, 5];
export const hasFlip2 = [1, 2, "flip", 3, 4, 5];
export const hasFlip3 = [1, 2, 3, "flip", 4, 5];
export const hasFlip4 = [1, 2, 3, 4, "flip", 5];

export const flipArrs = [
  flipStart,
  flipEnd,
  hasFlip1,
  hasFlip2,
  hasFlip3,
  hasFlip4,
];

export const noFlip1 = ["a", 1, "b", 2];
export const noFlip2 = [true, false, 1, 2, { a: 1, b: 2 }];

export const noFlipArrs = [noFlip1, noFlip2];

// BONUS: multiple 'flip' vals
export const twoFlip = [
  {
    val: ["flip", 1, 2, 3, 4, 5, 6, "flip"],
    ans: [6, 5, 4, 3, 2, 1],
  },
  {
    val: ["flip", 1, 2, 3, 4, "flip", 5, 6],
    ans: [4, 3, 2, 1, 5, 6],
  },
  {
    val: [1, 2, "flip", 3, 4, 5, 6, "flip"],
    ans: [6, 5, 4, 3, 1, 2],
  },
  {
    val: [1, 2, "flip", 3, 4, "flip", 5, 6],
    ans: [4, 3, 1, 2, 5, 6],
  },
];

export const multiFlip = [
  {
    val: ["flip", 1, 2, "flip", 3, 4, "flip", 5, 6],
    ans: [6, 5, 2, 1, 3, 4],
  },
  {
    val: [1, "flip", 2, 3, "flip", "flip", 4, 5, "flip", 6],
    ans: [5, 4, 3, 2, 1, 6],
  },
  {
    val: [1, 2, "flip", 3, "flip", "flip", "flip", 4, "flip", 5, 6],
    ans: [6, 5, 3, 1, 2, 4],
  },
  {
    val: [1, "flip", 2, 3, "flip", "flip", 4, "flip", "flip", "flip", 5, 6],
    ans: [4, 3, 2, 1, 5, 6],
  },
];
