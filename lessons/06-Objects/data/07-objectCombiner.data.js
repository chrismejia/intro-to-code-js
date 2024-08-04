export const noOverlappingKeys = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];

export const hasOverlappingKeys = [
  { a: 1, b: 2 },
  { b: 3, d: 4 },
];

export const multipleNoOverlap = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 5 },
  { f: 6 },
];

export const multipleHasOverlap = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { a: 4 },
  { b: 5 },
  { c: 6 },
];
