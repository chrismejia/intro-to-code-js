```
/**
 * #1: measurer
 *
 * Define the function measurer. Make sure to export it.
 * measurer accepts one input, an array.
 *
 * Do NOT just return arr.length.
 *
 * @category 04 - Arrays and Loops
 * @function measurer
 * @param {Number[]} arr
 * @returns {Number} total count of things in the array
 *
 * @example
 * measurer([1]) => 1
 * measurer([1,3,5,7,9]) => 5
 * measurer(["abc", true, { "a": 1, "b": 2 } ]) => 3
 */

 /**
 * #2: indexer
 *
 * Define the function indexer. Make sure to export it.
 * indexer can accept two inputs
 * - arr, an array made up of an unknown number of elements of unknown type
 * - idx, an optional number that represents an array idx
 *    - When idx is a valid array index for arr, indexer returns the value stored
 *    - when idx is an invalid array index for arr, return "Invalid index."
 *    - when idx is undefined, indexer returns the first value in the array.
 *
 * @category 04 - Arrays and Loops
 * @function indexer
 * @param {unknown[]} arr - array of length >= 1, containing entries of unknown type
 * @param {Number?} idx
 * @returns {unknown}
 *
 * @example
 * indexer([1], 0) => 1
 * indexer([1, 3, "value", 7, 9 ], 2) => "value"
 *
 * indexer([1]) => 1
 * indexer([1, 3, "value", 7, 9 ]) => 1
 *
 * indexer([1], -10) => "Invalid index."
 * indexer([1, 3, "value", 7, 9 ], 53) => "Invalid index."
 */

 /**
 * #3: frontOrBack
 *
 * Define the function frontOrBack. Make sure to export it.
 * frontOrBack accepts an array, a place, an action, and a value.
 *
 * place describes where in the array you should perform the prescribe action;
 * - at the front of the array
 * - at the end of the array
 * action describes how the array should modified
 * value is the data to use with the action at the place in the array, if needed
 *
 * @category 04 - Arrays and Loops
 * @function frontOrBack
 * @param {Number[]} array
 * @param {"front" | "back"} place - one of `"front"` or `"back"`
 * @param {"add" | "remove"} action - one of `"add"` or `"remove"`
 * @param {Number} value - value to use when processing the input commands
 * @returns {Number[]}
 *
 * @example
 * frontOrBack([1, 2, 3, 4], "front", "add", 5) => [5, 1, 2, 3, 4];
 * frontOrBack([101, 212, 323], "back", "add", 5) => [101, 212, 323, 5];
 * frontOrBack([false, true, false], "front", "remove", 5) => [true, false];
 * frontOrBack(["be", "dog", "ride"], "back", "remove", 5) => ["be", "dog"];
 */

 /**
 * #4: repeater
 *
 * Define the function repeater. Make sure to export it.
 * repeater accepts a string and a number.
 * repeater returns a string that is the input string repeated `times` number of times.
 *
 * If `times` is a negative value, return an empty string.
 *
 * @category 04 - Arrays and Loops
 * @function repeater
 * @param {String} str - the input string
 * @param {Number} times - amount to repeat input string
 * @returns {String} the input string repeated `times` number
 *
 * @example
 * repeater("empty string", 0) => ""
 * repeater("one time only", 1) => "one time only"
 * repeater("Hello", 2) => "HelloHello"
 * repeater("abc123", 3) => "abc123abc123abc123"
 */

 /**
 * #5: disemvoweler
 *
 * Define the function disemvoweler. Make sure to export it.
 * disemvoweler takes in a string and returns it stripped of its vowels.
 *
 * BONUS: disemvoweler also removes any capitalized vowels.
 *
 * @category 04 - Arrays and Loops
 * @function disemvoweler
 * @param {String} string - never empty string
 * @returns {String} the input string with all its vowels removed
 * @example
 * disemvoweler("b") => "b"
 * disemvoweler("xyz") => "xyz"
 * disemvoweler("a") => ""
 * disemvoweler("cr") => "cr"
 * disemvoweler("dictionary") => "dctnry"
 * disemvoweler("aaeeiioouu") => ""
 *
 * // BONUS
 * disemvoweler("BeaR") => "BR"
 * disemvoweler("diCTIONAry") => "dCTNry"
 */

 /**
 * #6: valueLocator
 *
 * Define valueLocator. Make sure to export it.
 * valueLocator accepts two parameters, searchVal & arr.
 *
 * valueLocator uses the searchVal to determine whether that val is present within arr.
 * When searchVal is present, valueLocator returns a string featuring searchVal, its index in the arr, and arr itself.
 * Otherwise, valueLocator returns a string featuring searchVal and arr itself.
 *
 * See examples for exact formatting.
 *
 * @category 04 - Arrays and Loops
 * @function valueLocator
 * @param {String} searchVal - the string to search for
 * @param {String[]} arr - the array to search within
 * @returns {String} A sentence detailing whether or not the search value was found, and at what index.
 *
 * @example
 * valueLocator("xyx", ["zyz", "xyx", "abc", "bd"]) =>
 *  "xyx is at index 1 of the array [zyz,xyx,abc,bd]."
 * valueLocator("not", ["zyz", "xyx", "abc", "bd"]) =>
 *  "not cannot be found in the array [zyz,xyx,abc,bd]."
 */

 /**
 * #7: flipomatic
 *
 * Define the function flipomatic. Make sure to export it.
 * flipomatic accepts an array of at least one number, and possibly a "flip" value.
 * flipomatic adds the array's elements to the end of a new array, one at a time.
 * When flipomatic encounters the string "flip", flipomatic switches so that from the next non-"flip" element in the array, it adds them to front instead of the back.
 *
 * NB: Not every input array may contain a "flip" string.
 *
 * BONUS: flipomatic can handle multiple 'flip' values in the array.
 *
 * @category 04 - Arrays and Loops
 * @function flipomatic
 * @param {Number | String[]} array - an array of at least size 1, made of entries of any type.
 * @returns {Number[]} array of number in the correct order
 *
 * @example
 * flipomatic([1, 2, 3, 4, 5]) => [1, 2, 3, 4, 5]
 * flipomatic(["flip", 1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
 * flipomatic([1, 2, "flip", 3, 4, 5]) => [5, 4, 3, 1, 2]
 * flipomatic([1, 2, 3, 4, 5, "flip"]) => [1, 2, 3, 4, 5]
 */

 /**
 * #8: uniqueCharsOnly
 *
 * Define the function uniqueCharsOnly. Make sure to export it.
 * uniqueCharsOnly accepts a string and returns an array of strings.
 * This returned array of strings contains one of each unique character that appears within the input.
 *
 * CHALLENGE: uniqueCharsOnly can be written as a one-liner.
 *
 * @category 04 - Arrays and Loops
 * @function uniqueCharsOnly
 * @param {String} input - string made up of random characters with possible repeats
 * @returns {String[]}
 *
 * @example
 * uniqueCharsOnly("a") => ['a']
 * uniqueCharsOnly("aaa") => ['a']
 * uniqueCharsOnly("abc") => ['a', 'b', 'c']
 * uniqueCharsOnly("abcbabcbabcbabcba") => ['a', 'b', 'c']
 */

 /**
 * #9: wordCalculator
 *
 * Define the function wordCalculator. Make sure to export it.
 * wordCalculator accepts an array of numbers and an array of strings, each three-letter string representing a math operation.
 * wordCalculator should only perform these math operations:
 * - "add": addition
 * - "sub": subtraction
 * - "mul": multiplication
 * - "div": division
 * - "rem": remainder
 * - "exp": exponentiation
 *
 * wordCalculator ignores the rules of PEMDAS/BEDMAS and handles operations as passed into the operations array from left to right, one at a time.
 * wordCalculator returns the total of all the values and operations passed into it.
 *
 * @category 04 - Arrays and Loops
 * @function wordCalculator
 * @param {Number[]} nums - array of numbers; nums.length always >= 1
 * @param {String[] | []} operations - array of strings
 * @return {Number} resulting value after all operations have been computed
 *
 * @example
 * wordCalculator([1], ["lol"]) => 0   // bad operation, return 0
 * wordCalculator([1], ["add"]) => 1    // 0 + 1 = 1
 * wordCalculator([2], ["sub"]) => 2    // 0 - 2 = -2
 * wordCalculator([3], ["mul"]) => 0    // 0 * 3 = 0
 *
 * wordCalculator([5, 6], ["add", "pow"]) => 30
 *  // 0 + 5 = 5 ** 6 = 15625
 * wordCalculator([7, 11, 12], ["sub", "mul", "rem"]) => -5
 *  // 0 - 7 = 7 * 11 = -77 % 12 = -5
 */

 /**
 * #10: pairMultiplier
 *
 * Define the function pairMultiplier. Make sure to export it.
 * pairMultiplier accepts two arrays of numbers.
 * pairMultiplier returns an array of numbers made up of all the numbers from arr1 multiplied by all the numbers in arr2.
 *
 * NB: arr1 and arr2 will not always be the same length.
 *
 * @category 04 - Arrays and Loops
 * @function pairMultiplier
 * @param {Number[]} arr1 - array of numbers; arr1.length always > 1
 * @param {Number[]} arr2 - array of numbers; arr2.length always > 1
 * @returns {Number[]} array of all the multiples of each entry from arr1 and arr2, in the correct order.
 *
 * @example
 * pairMultiplier([6],[4]) => [24]
 * pairMultiplier([7], [2, 3]) => [14, 21]
 * pairMultiplier([3, 8], [5, 2]) => [15, 6, 40, 16]
 * pairMultiplier([3, 5, 8], [2, 4]) => [6, 12, 10, 20, 16, 32]
 */

 /**
 * #11: fizzBuzz
 *
 * Define the function fizzBuzz. Make sure to export it.
 * fizzBuzz accepts a number parameter, stop.
 * fizzBuzz returns an array where every number from 1 to stop is added as a string.
 * If the current number is divisible by 3, add "Fizz" to the array instead of the number.
 * If the current number is divisible by 4, add "Buzz" to the array instead of the number.
 * If the current number is divisible by both 3 and 4, add "FizzBuzz" to the array.
 *
 * @category 04 - Arrays and Loops
 * @function fizzBuzz
 * @param {Number} stopNum - the number to stop the loop at (inclusive)
 * @returns {String[]} an array of strings
 * @example
 * fizzBuzz(12) => ["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]
 */

 /**
 * #12: maxDifference
 *
 * Define the function maxDifference. Make sure to export it.
 * maxDifference accepts a single input, an array of numbers.
 * maxDifference returns the difference between the greatest and smallest numbers in the array.
 *
 * CHALLENGE: maxDifference can be written as a one-liner!
 *
 * @category 04 - Arrays and Loops
 * @function maxDifference
 * @param {Number[]} nums
 * @returns {Number}
 *
 * @example
 * maxDifference([1]) // => 1 - 1 = 0
 * maxDifference([5, 7, 8, 10]) // => 10 - 5 = 5
 * maxDifference([100, -100]) => 200
 */
```
