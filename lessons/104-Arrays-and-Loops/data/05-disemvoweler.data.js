export const noVowels = [
  { str: "b" },
  { str: "sss" },
  { str: "xyz" },
  { str: "qwrtyp" },
];

export const oneVowel = [
  { str: "a", result: "" },
  { str: "car", result: "cr" },
  { str: "aeiou", result: "" },
  { str: "marginal", result: "mrgnl" },
];

export const multiVowels = [
  { str: "beer", result: "br" },
  { str: "aaabcdeee", result: "bcd" },
  { str: "dictionary", result: "dctnry" },
  { str: "aaeeiioouu", result: "" },
];

export const hasUppercase = [
  { str: "Q", result: "Q" },
  { str: "EA", result: "" },
  { str: "JoB", result: "JB" },
  { str: "BeaR", result: "BR" },
  { str: "jkLXyz", result: "jkLXyz" },
  { str: "aAeEiIoOuU", result: "" },
  { str: "aAAabcdefgGGg", result: "bcdfgGGg" },
  { str: "diCTIONAry", result: "dCTNry" },
];
