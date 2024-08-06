export const noComboEmpty = {
  phrase: "",
  comboActive: false,
  expectedScore: 0,
};

export const comboEmpty = { phrase: "", comboActive: true, expectedScore: 0 };

export const noComboChar = {
  phrase: "a",
  comboActive: false,
  expectedScore: 1,
}; // a=1

export const comboChar = { phrase: "a", comboActive: true, expectedScore: 1 }; // a=1

export const noComboPhraseNoRepeats = {
  phrase: "chair",
  comboActive: false,
  expectedScore: 3 + 8 + 1 + 9 + 18,
};

export const comboPhraseNoRepeats = {
  phrase: "chair",
  comboActive: true,
  expectedScore: (3 + 8 + 1 + 9 + 18) * 5,
}; // calculated with combo and multiplied by length

export const noComboPhraseHasRepeats = {
  phrase: "mississippi",
  comboActive: false,
  expectedScore: 13 + 9 + 19 + 19 + 9 + 19 + 19 + 9 + 16 + 16 + 9,
};

export const comboPhraseHasRepeats = {
  phrase: "mississippi",
  comboActive: true,
  expectedScore:
    (13 + 9 + 19 + 19 * 2 + 9 + 19 + 19 * 2 + 9 + 16 + 16 * 2 + 9) * 11,
}; // calculated with combo and multiplied by length
