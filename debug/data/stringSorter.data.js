export const moreThanFiveChars = (string) => string.length > 5;

export const allLessThanFive = ["cat", "dog", "bear"];
export const allLTFResult = {
  true: null,
  false: ["cat", "dog", "bear"],
};

export const halfLessThanFive = ["cat", "banana", "dog", "metropolis"];
export const halfLTFResult = {
  true: ["cat", "dog"],
  false: ["banana", "metropolis"],
};

export const allMoreThanFive = ["triumph", "cartwheel", "tablet"];
export const allMTFResult = {
  true: ["triumph", "cartwheel", "tablet"],
  false: null,
};

export const startsWithCapital = (string) =>
  string[0].toLowerCase() !== string[0];

export const allCapStart = ["Ant", "Bear", "Cave"];
export const acsResult = {
  true: ["Ant", "Bear", "Cave"],
  false: null,
};

export const someCapStart = ["America", "mouse", "Phone", "vitamin"];
export const scsResult = {
  true: ["America", "Phone"],
  false: ["mouse", "vitamin"],
};

export const noCapStart = ["bread", "charge", "load"];
export const ncsResult = {
  true: null,
  false: ["bread", "charge", "load"],
};
