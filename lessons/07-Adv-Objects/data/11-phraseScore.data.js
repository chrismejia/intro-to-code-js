export const letterValues = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

// #region NO COMBO
export const noComboEmpty = {
  phrase: "",
  comboActive: false,
  expectedScore: 0,
};

export const noComboChar = {
  phrase: "a",
  comboActive: false,
  expectedScore: 1,
};

export const noComboPhraseNoRepeats = {
  phrase: "chair",
  comboActive: false,
  expectedScore: 3 + 8 + 1 + 9 + 18,
};

export const noComboPhraseHasRepeats = {
  phrase: "mississippi",
  comboActive: false,
  expectedScore: 13 + 9 + 19 + 19 + 9 + 19 + 19 + 9 + 16 + 16 + 9,
};
// #endregion NO COMBO

// #region COMBO

export const comboEmpty = { phrase: "", comboActive: true, expectedScore: 0 };

export const comboChar = { phrase: "a", comboActive: true, expectedScore: 1 }; // a=1

export const comboPhraseNoRepeats = {
  phrase: "chair",
  comboActive: true,
  expectedScore: (3 + 8 + 1 + 9 + 18) * 5,
};
// calculated with combo and multiplied by length

export const comboPhraseHasRepeats = {
  phrase: "mississippi",
  comboActive: true,
  expectedScore:
    (13 + 9 + 19 + 19 * 2 + 9 + 19 + 19 * 2 + 9 + 16 + 16 * 2 + 9) * 11,
}; // calculated with combo and multiplied by length
// #endregion COMBO
