export const objectA = { name: "Alice", age: 30 };
export const objectB = { name: "Alice", age: 31, city: "Wonderland" };
export const expectedDifferencesAB = {
  age: [30, 31],
  city: [undefined, "Wonderland"],
};

export const objectX = { color: "red", size: "M" };
export const objectY = { color: "blue", size: "M", material: "cotton" };
export const expectedDifferencesXY = {
  color: ["red", "blue"],
  material: [undefined, "cotton"],
};

export const objectEmpty1 = {};
export const objectEmpty2 = {};
export const expectedDifferencesEmpty = {};
