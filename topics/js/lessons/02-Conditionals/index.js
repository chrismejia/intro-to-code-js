/**
 * HOW TO WORK THROUGH THIS LESSON
 *
 * 1. Complete the first active exercise, then run `npm run test:02` from the
 *    repo root.
 * 2. If Jest says the test suite failed to run or an export was not found,
 *    check the variable or function name and its `export` keyword.
 * 3. If Jest shows `Expected` and `Received`, the test loaded successfully.
 *    Compare those values and revise your answer.
 * 4. After the exercise passes, open the next numbered test file, remove the
 *    `x` from `xdescribe`, and repeat.
 *
 * Read Jest's error message carefully; it will help you identify what to fix.
 */

/**
 * #1: Logically speaking
 *
 * Using the four given variables below, define four new variables and assign their values as follows:
 *
 * AND (&&)
 * a) Define and export the variable andTrue. Use two of the givens and the && operator so that the evaluated value is true.
 * b) Define and export the variable andFalse. Use two of the givens and the && operator so that the evaluated value is false.
 *
 * OR (||)
 * c) Define and export the variable orTrue. Use two of the givens and the || operator so that the evaluated value is true.
 * d) Define and export the variable orFalse. Use two of the givens and the || operator so that the evaluated value is false.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */

const givenOne = 64 < 2;
const givenTwo = "cheese" === "cheese";
const givenThree = 15 / 3 === 5;
const givenFour = 12 > 13;

// Do not delete the given variables above.
// Replace this comment with your code.

/**
 * #2: fiveCharacters
 *
 * Define and export the variable notFiveChars.
 * Assign it a string that's not 5 characters long.
 *
 * Define and export the variable isItFiveChars.
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
 */

// Replace this comment with your code.

/**
 * #3: compareValues
 *
 * compareValues accepts two values and describes how JavaScript compares them.
 * Return "strictly equal" when both values and types match.
 * Return "loosely equal" when JavaScript considers the values equal only after
 * converting one or both types.
 * Return "not equal" when neither comparison matches.
 *
 * CHALLENGE:
 * Can you rewrite this function in another way?
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
 */

export function compareValues(valueA, valueB) {
  // Write your code within this function declaration.
}

/**
 * #4: numberOrString
 *
 * numberOrString is a function that accepts one input, a value of any type.
 * numberOrString returns the following based on these conditions:
 *
 * - "This is a string" if the value is a string
 * - "This is a number" if the value is a number
 * - "This is not a string nor a number" if it's neither
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */

export function numberOrString(value) {
  // Write your code within this function declaration.
}

/**
 * #5: truthyFalsy
 *
 * truthyFalsy is a function that accepts one input, a value of any type.
 * Complete the function truthyFalsy given below by writing conditional statements in the function block that fulfill the following.
 *
 * - value is any of the following: 0, "", null, undefined, false
 *    -> return false
 * - value is anything else:
 *    -> return true
 *
 * Challenge:
 * Can you simplify this function?
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

export function truthyFalsy(value) {
  // Write your code within this function declaration.
}

/**
 * #6: waterState
 *
 * waterState accepts a temperature in degrees Celsius and returns the state of
 * water at that temperature.
 *
 * - Return "solid" when the temperature is 0 or below.
 * - Return "gas" when the temperature is 100 or above.
 * - Return "liquid" for temperatures between those boundaries.
 *
 * Pay close attention to which comparisons include the boundary value.
 *
 * CHALLENGE:
 * Can you improve how this function handles invalid input?
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */

export function waterState(temperature) {
  // Write your code within this function declaration.
}

/**
 * #7: letsGoParty
 *
 * letsGoParty is a function that accepts three inputs: legalAge, outfitType, hasCoverCharge.
 * letsGoParty reads these three inputs and tests them to see if a person should be allowed in to party.
 * letsGoParty should return "Go home, no partying for you tonight." if any of these conditions are not met:
 *
 * - if a person's legalAge doesn't meet the party minimum of 25
 * - if a person's outfitType isn't "pool party"
 * - if a person's doesn't have the money to pay the coverCharge (false)
 *
 * If a person meets all three conditions, welcome them in: "Let's go party!"
 *
 * @category 02 - Conditionals
 * @function letsGoParty
 * @param {number} legalAge
 * @param {string} outfitType
 * @param {boolean} hasCoverCharge
 * @returns {string}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 */

export function letsGoParty(legalAge, outfitType, hasCoverCharge) {
  // Write your code within this function declaration.
}

/**
 * #8: testGrader
 *
 * testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade based of the range the input grade falls into.
 *
 * Complete the function testGrader given below by writing condtional statements that fulfill the following.
 *
 * - grade is 90 to 100
 *    -> return 'A'
 * - grade is 80 to 89
 *    -> return 'B'
 * - grade is 70 to 79
 *    -> return 'C'
 * - grade is 60 to 69
 *    -> return 'D'
 * - grade is below 60
 *    -> return 'F'
 *
 * Make sure to handle invalid inputs by returning "Not a valid grade."
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
 */
export function testGrader(grade) {
  // Write your code within this function declaration.
}

/**
 * #9: daysInTheMonth
 *
 * daysInTheMonth is a function that accepts one input: a monthNum that is between 1 and 12, inclusive.
 *
 * Complete the function daysInTheMonth given below by writing conditional statements that fulfill the following.
 *
 * - if the month is 1, 3, 5, 7, 8, 10, or 12
 *    -> return 31
 * - if the month is 4, 6, 9, 11
 *    -> return 30
 * - if the month is 2
 *    -> return 28
 *
 * Make sure to also handle invalid inputs by returning "Not a valid month."
 *
 * CHALLENGE:
 * Can you find another way to solve this problem?
 */
export function daysInTheMonth(month) {
  // Write your code within this function declaration.
}

/**
 * #10: getUserGreeting
 *
 * getUserGreeting accepts a login status, a preferred name, and a username.
 *
 * - Return "Please log in." when the user is not logged in.
 * - When logged in, use the preferred name when it has a value.
 * - Otherwise, use the username when it has a value.
 * - Use "Guest" when neither name has a value.
 * - Return the selected name in the message "Welcome, NAME!".
 *
 * CHALLENGE:
 * Can you simplify this function?
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */

export function getUserGreeting(isLoggedIn, preferredName, username) {
  // Write your code within this function declaration.
}
