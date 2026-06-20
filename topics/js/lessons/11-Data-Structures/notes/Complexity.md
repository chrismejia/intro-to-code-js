# Complexity (time and space)

## Time Complexity

### What is time complexity?

Time complexity is the amount of time that an algorithm needs to run as it corresponds to the length of the input.

### What are some of the common time complexities?

#### Constant Time: O(1)

Constant time is best described as an algorithm that takes the same amount time of compute no matter what the input is.

##### Using students

Let's say there's a class of 100 students.
An 0(1) operation would be going to one student and asking their name.

```js
function oddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
// Executes return line only once, for num = 2 or num = 2 000 000
```

```js
function return5thElement(arr) {
  return arr[4];
}
// There's no need to loop to get to the fifth element, we can directly access it using index 4.
```

#### Linear Time: O(n)

Linear time algorithms imply that your algorithms visit every element of the input. This means that the larger the input, the larger the time taken.

##### Using Students

Linear time algorithm example = student role call

##### Sample function and Time Breakdown

```js
function findLargestNum(numsArr) {
  let maxNum;

  // Could also use standard for loop
  for (const currNum of numsArr) {
    if (maxNum === undefined || currNum > maxNum) {
      maxNum = currNum;
    }
  }
  return maxNum;
}
// Given: [2,4,6,8,10]
// In given example, 5 elements in input, therefore five loops and computations.
// If input had 5000 elements, it'd be 5000 loops.
```

- `let maxNum` is constant time
- `for-of loop` is linear time, as it goes through all element in an array
- `if statement maxNum assignment` is constant time

Time Complexity: 5n + 2 -> 5n -> n -> O(n) complexity

#### Quadratic Time: O(n^2)

Quadratic time is the number of inputs squared.

##### Using students

Quadratic time example: Give students a piece of paper and a stamp with their names on it. You tell the students that they need to return the piece of paper with every student's stamp on it, including their own.

##### Sample function and time analysis

```js
/**
 * allArrayMultiples([1,2,4])
 * // [1, 2, 4, 2, 4, 8, 4, 8, 16]
 */
function allArrayMultiples(numsArr) {
  let counter = 0;
  let multiples = [];

  for (let i = 0; i < numsArr.length; i++) {
    for (let j = 0; j < numsArr.length; j++) {
      const firstNum = numsArr[i];
      const secondNum = numsArr[j];

      const multiplied = firstNum * secondNum;
      multiples.push(multiplied);
      counter++;
      console.log(`multiple added! loop ${counter}, ${firstNum}, ${secondNum}`);
    }
  }

  return multiples;
}
```

- `let counter`: constant O(1) > constant value assignments are independent of input size
- `let multiples`: constant O(1) > constant value assignments are independent of input size
- outer for loop: linear O(n), where n is the number of elements in the numsArr
- inner for loop: linear O(n), where n is the number of elements in the numsArr
- `const firstNum`: constant O(1)
- `const secondNum`: constant O(1)
- `const multiplied`: constant O(1)
- push to multiples: constant O(1)
- increment counter: constant O(1)
- log loop number: constant O(1)

Since this is a nested loop:

- First loop, n times
- Within first loop, we do another loop, n times

`n times n` -> `n^2` - quadratic time

Time Complexity: n^2 + 8 -> n^2 (greatest complexity)

#### Loops, sequential vs nested

```js
/**
 * Sequential loops
 * Time analysis
 * - resultStr is constant
 * - first for loop is linear, O(n) where n = length of word
 * - second for loop is linear, O(n) where n = length of word
 * - currChar assignment is constant
 * - resultsStr addition assignment to currChar is constant
 * - return resultsStr is constant
 * -  n + n + 4 -> 2n + 4 -> 2n -> O(n)
 */

function wordReverseAdder(word) {
  // given "cat" -> "cattac"
  let resultStr = "";

  for (let i = 0; i < word.length; i++) {
    const currChar = word[i];
    resultStr += currChar;
  }

  for (let j = word.length - 1; j > 0; j--) {
    const currChar = word[j];
    resultStr += currChar;
  }

  return resultStr;
}
```
