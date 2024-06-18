/**
 * Constant Time
 */

function oddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

/**
 * Linear Time
 */

function findLargestNum(numsArr) {
  // Given: [2,4,6,8,10]
  let maxNum;

  // Could also use standard for loop
  for (const currNum of numsArr) {
    if (maxNum === undefined || currNum > maxNum) {
      maxNum = currNum;
    }
  }
  return maxNum;
}

// console.log(findLargestNum([2, 4, 6, 8, 10]));

/**
 * Quadratic notes
 * @example
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
      console.log(`multiple added! loop ${counter}`);
    }
  }

  return multiples;
}

// console.log(allArrayMultiples([1, 2, 4]));

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

// optimal -> O(1) + O(n) -> linear
// return word + word.reverse();

/**
 * Varied size nested loops
 *
 * 1
 *  2 3 4 5
 * 2
 *  3 4 5
 * 3
 *  4 5
 * 4
 *  5
 * 5
 *
 * Time complexity: O(n x m), where n is the number of numbers in the array and m is n - 1
 */

function arrMultiplier(numsArr1, numsArr2) {
  // no guarantee that numsArr1 and numsArr2 are same length
  let result = [];

  for (let i = 0; i < numsArr1.length; i++) {
    for (let j = 0; j < numsArr2.length; j++) {
      const multiple = numsArr1[i] * numsArr2[j];
      result.push(multiple);
    }
  }

  return result;
}

console.log(arrMultiplier([2, 3], [10, 20]));
// both inputs have the same size, so n times n, which is n^2

console.log(arrMultiplier([2, 3], [10, 20, 30])); // 2 x 3 = 6
// both inputs are different sizes, n times m,
// where n is the length of the first array
// where m is the length of the second array
// Therefore this is O(n x m)
