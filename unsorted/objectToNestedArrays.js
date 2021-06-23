/**
 * Object to Nested Arrays
 *
 * Define a function objectToArray that takes in a variable, startObj.
 *
 * objectToArray returns an array where each element is itself an array where the first entry is one of startObj's keys and the last, its corresponding value.
 *
 * HINT: How would you ensure that you're going through each key-value pair in the object?
 *
 * HINT: Think about what the value you're ultimately returning is. How would you modify this value as you go through the object?
 *
 * const obj1 = { "a": 1, "b": 2 }
 * objectToArray(obj1) //==> [ ['a', 1], ['b', 2] ]
 */

function objectToArray(startObj) {
  let outerArray = [];

  for (let key in startObj) {
    let innerArray = [];
    const keysValue = startObj[key];

    // Push to inner
    innerArray.push(key, keysValue);

    // console.log("inner done", innerArray);

    // Push to outer
    outerArray.push(innerArray);
    // console.log("inner added to outer", outerArray);
  }

  // console.log("out of object loop, return outer");

  return outerArray;
}

const obj1 = { a: 1, b: 2 };
objectToArray(obj1); //==> [ ['a', 1], ['b', 2] ]
