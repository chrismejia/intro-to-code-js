export const simpleObj = { name: "Alice", age: 25 };
export const nestedObj = { person: { name: "Bob", age: 30 }, active: true };
export const arrayWithObjects = { items: [{ id: 1 }, { id: 2 }, { id: 3 }] };
export const specialCharsObj = {
  name: "Alice!@#$",
  age: 25,
  desc: "This is a special char: \u00A9",
};

export const simpleObjAsString = '{"name":"Alice","age":25}';
export const nestedObjAsString =
  '{"person":{"name":"Bob","age":30},"active":true}';
export const arrayWithObjectsAsString =
  '{"items":[{"id":1},{"id":2},{"id":3}]}';
export const specialCharsObjAsString =
  '{"name":"Alice!@#$","age":25,"desc":"This is a special char: \u00A9"}';
