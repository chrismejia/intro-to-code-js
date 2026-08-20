export const noItems = [];

export const singleItem = [{ name: "orange", quantity: 5 }];

export const itemsWithZeroQuantity = [
  { name: "grape", quantity: 0 },
  { name: "apple", quantity: 3 },
];

export const itemsWithDifferentNames = [
  { name: "pear", quantity: 7 },
  { name: "kiwi", quantity: 4 },
];

export const itemsWithMultipleEntries = [
  { name: "apple", quantity: 3 },
  { name: "banana", quantity: 2 },
  { name: "apple", quantity: 1 },
  { name: "banana", quantity: 2 },
  { name: "watermelon", quantity: 5 },
];

// Expected results for each test case
export const expectedEmptyResult = {};
export const expectedSingleItemResult = { orange: 5 };
export const expectedZeroQuantityResult = { grape: 0, apple: 3 };
export const expectedDifferentNamesResult = { pear: 7, kiwi: 4 };
export const expectedAggregatedQuantities = {
  apple: 4,
  banana: 4,
  watermelon: 5,
};
