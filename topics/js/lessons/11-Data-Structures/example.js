let value = 6;
let total = 10;
// const a = value;
// const b = value;

let a = value;
a = total;
// console.log(a);

const obj = {
  next: "a",
};

obj.next = null;
obj.next = undefined;
obj.next = 98071279;

console.log(obj.next);
