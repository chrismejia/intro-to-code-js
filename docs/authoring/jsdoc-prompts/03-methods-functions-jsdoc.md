```
/**
 * #1: helloWorld
 *
 * Define the function helloWorld. Make sure to export it for testing use.
 * helloWorld takes no inputs and returns the phrase "Hello World!"
 *
 * @category 03 - Methods and Functions
 * @function helloWorld
 * @returns {String}
 *
 * @example
 * helloWorld() => "Hello World!"
 */

/**
 * #2: helloWorldRedux
 *
 * Define the function helloWorldRedux. Make sure to export it for testing use.
 * helloWorldRedux takes in an optional input, name.
 * When a name value is passed, return a personalized greeting using the name.
 * Otherwise, return the phrase "Hello World!"
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function helloWorldRedux
 * @param {String?} name - optional name input
 * @returns {String}
 *
 * @example
 * helloWorldRedux() => "Hello World!"
 * helloWorldRedux("Bob") => "Hello Bob!"
 */

 /**
 * #3: uppercaseThis
 *
 * Define the function uppercaseThis. Make sure to export it for testing use.
 * uppercaseThis takes in one input, phrase, a String of any length.
 * uppercaseThis returns phrase fully capitalized.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function uppercaseThis
 * @param {String} phrase - string to be all-capped
 * @returns {String} fully capitalized string
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase .toUpperCase()}
 *
 * @example
 * uppercaseThis("aaaa") => "AAAA"
 * uppercaseThis("BBBB") => "BBBB"
 * uppercaseThis("cCcC") => "CCCC"
 * uppercaseThis("d1D2d3") => "D1D2D3"
 */

 /**
 * #4: doesItAddUp
 *
 * Define the function doesItAddUp. Make sure to export it for testing use.
 * doesItAddUp accepts three number inputs.
 * doesItAddUp returns true when the first two inputs add up to the third.
 * Otherwise, doesItAddUp returns false.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function doesItAddUp
 * @param {Number} numA
 * @param {Number} numB
 * @param {Number} numC
 * @returns {Boolean}
 *
 * @example
 * doesItAddUp(10, 5, 15) => true
 * doesItAddUp(10, 5, 20) => false
 */

 /**
 * #5: arrayToString
 *
 * Define the function arrayToString. Make sure to export it for testing use.
 * arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
 * arrayToString returns a combined string made up of each string in the array attached together by the connector.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function arrayToString
 * @param {String[]} array - all entries are strings
 * @param {String} connector - any number random characters
 * @returns {String}
 *
 * @example
 * arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
 * arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
 * arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"
 */

 /**
 * #6: smallTogetherNow
 *
 * Define the function smallTogetherNow. Make sure to export it for testing use.
 * smallTogetherNow accepts two strings of any length.
 * smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 *
 * @category 03 - Methods and Functions
 * @function smallTogetherNow
 * @param {String} str1
 * @param {String} str2
 * @returns {String}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase .toLowerCase()}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat .concat()}
 *
 * @example
 * smallTogetherNow("HELLO", "WORLD") => "helloworld"
 * smallTogetherNow("apple", "pie") => "applepie"
 * smallTogetherNow("mIxEd", "CaPiTaLs") => "mixedcapitals"
 */

 /**
 * #7: Dog owners and their dogs
 *
 * Define the function dogAndOwnerInfo. Make sure to export it for testing use.
 * dogAndOwnerInfo takes in four inputs:
 * - the dog's name
 * - the dog's age
 * - the dog owner's name
 * - the dog owner's age
 *
 * dogAndOwnerInfo converts the dog's age to human years by multiplying it by 7.
 *
 * @category 03 - Methods and Functions
 * @function dogAndOwnerInfo
 * @param {String} dogName
 * @param {Number} dogAge
 * @param {String} ownerName
 * @param {Number} ownerAge
 * @returns {String}
 *
 * @example
 * dogAndOwnerInfo("Turbo", 10, "Richard", 55) =>
 *    "Turbo is older than their owner, Richard, by 15 years."
 * dogAndOwnerInfo("Fido", 1, "Sara", 15) =>
 *    "Sara is older than their dog, Fido, by 8 years."
 * dogAndOwnerInfo("Star", 2, "John", 14) =>
 *    "John and Star are the both 14 years old."
 */

/**
 * #8: doesTheMathWork
 *
 * Define the function doesTheMathWork. Make sure to export it for testing use.
 * doesTheMathWork accept three inputs, each a number.
 * doesTheMathWork returns a phrase based on the following:
 * - first input + second input = third input -> "addition"
 * - first input - second input = third input -> "subtraction"
 * - first input * second input = third input -> "multiplication"
 * - first input / second input = third input -> "division"
 * - none of the above -> "no operation"
 *
 * NOTE:
 * Each set of three inputs resolves to only ONE of the given possible outputs.
 *
 * @category 03 - Methods and Functions
 * @function doesTheMathWork
 * @param {Number} numA
 * @param {Number} numB
 * @param {Number} numC
 * @returns {String}
 *
 * @example
 * doesTheMathWork(1, 2, 3) => "addition"
 * doesTheMathWork(7, 2, 5) => "subtraction"
 * doesTheMathWork(3, 3, 9) => "multiplication"
 * doesTheMathWork(81, 9, 9) => "division"
 * doesTheMathWork(11, 222, 3) = "no operation"
 */

 /**
 * #9: allWordsLength
 *
 * Define the function allWordsLength. Make sure to export it for testing use.
 * allWordsLength accepts an array containing any number of strings, each of any length.
 * allWordsLength returns the total length of all the strings in the array.
 *
 * HINT: If you're familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it's not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 *
 * @category 03 - Methods and Functions
 * @function allWordsLength
 * @param {String[]} wordsArr
 * @returns {Number}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array Methods}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String String Methods}
 *
 * @example
 * allWordsLength(["apple"]) => 5
 * allWordsLength(["old", "textbook"]) => 11  (3 + 8)
 * allWordsLength(["cat", "dog", "moo"]) => 9 (3 + 3 + 3)
 * allWordsLength(["robin", "hood", "men", "in", "tights"]) => 19 (5 + 4 + 3 + 2 + 5)
 */
```
