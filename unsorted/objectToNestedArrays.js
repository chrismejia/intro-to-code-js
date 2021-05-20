/**
 * Object to Nested Arrays
 *
 * Define a function objectToArray that takes in a variable, objectToConvert.
 *
 * objectToArray returns an array where each element is itself an array where the first entry is one of objectToConvert's keys and the last, its corresponding value.
 *
 * HINT: How would you ensure that you're going through each key-value pair in the object?
 *
 * HINT: Think about what the value you're ultimately returning is. How would you modify this value as you go through the object?
 *
 * const obj1 = { "a": 1, "b": 2 }
 * objectToArray(obj1) //==> [ ['a', 1], ['b', 2] ]
 */

/**
 * APPROACH
 *
 * define the function, accepts an objectToConvert
 * initialize outer array
 *
 * for in loop - objectToConvert
 *    setup innerArray
 *    innerArray push (key and value)
 *    outerArray push (innerArray)
 * END LOOP
 *
 * return outer array
 */

function objectToArray(objToConvert) {
  let outerArray = [];

  for (let key in objToConvert) {
    let innerArray = [];
    const keysValue = objToConvert[key];

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
