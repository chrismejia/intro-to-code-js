export const schema = {
  name: "string",
  age: "number",
};

export const validObj = {
  name: "Alice",
  age: 30,
};

export const invalidObj = {
  name: "Alice",
  age: "30",
};

export const incompleteObj = { name: "Alice" };

export const wrongTypeObj = { name: "Alice", age: "thirty" };

export const extraKeysObj = { name: "Alice", age: 30, city: "New York" };
