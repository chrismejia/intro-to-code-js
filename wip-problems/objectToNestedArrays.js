/**
 * Object to Nested Arrays
 *
 *
 *
 * function returns an array where each element is itself an array where the first entry is one of startObj's keys and the last, its corresponding value.
 *
 * const obj1 = { "a": 1, "b": 2 }
 * function(obj1) //==> [ ['a', 1], ['b', 2] ]
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
