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
 * a) Define andTrue. Use two of the givens and the && operator so that the evaluated value is true. Make sure to export it.
 * b) Define andFalse. Use two of the givens and the && operator so that the evaluated value is false. Make sure to export it.
 *
 * OR (||)
 * c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true. Make sure to export it.
 * d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is false. Make sure to export it.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */

const givenOne = 64 < 2; // false
const givenTwo = "cheese" === "cheese"; // true
const givenThree = 15 / 3 === 5; // true
const givenFour = 12 > 13; // false

export const andTrue = givenTwo && givenThree; // true && true
export const andFalse = givenOne && givenFour; // false && false

export const orTrue = givenTwo || givenThree; // true || true
export const orFalse = givenOne || givenFour; // false || false

/**
 * #2: fiveCharacters
 *
 * Define the variable notFiveChars. Make sure to export it.
 * Assign it a string that's not 5 characters long.
 *
 * Define the variable isItFiveChars. Make sure to export it.
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
 */

// Ternary helper: (true/false expression to test) ? true value : false value

export const notFiveChars = "a1b2b3";
export const isItFiveChars =
  notFiveChars.length === 5 ? "it's 5 characters" : "not 5 characters";

/**
 * #3: compareValues
 *
 * compareValues accepts two values and describes how JavaScript compares them.
 * Return "strictly equal" when both values and types match.
 * Return "loosely equal" when JavaScript considers the values equal only after
 * converting one or both types.
 * Return "not equal" when neither comparison matches.
 *
 * Use strict equality first. Strict equality is the preferred default in
 * application code. This exercise includes loose equality so you can recognize
 * and understand type conversion in code you encounter.
 *
 * CHALLENGE:
 * Rewrite this function with nested ternary expressions. Compare both versions
 * and decide which one communicates the ordered comparisons more clearly.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
 */

export function compareValues(valueA, valueB) {
  if (valueA === valueB) {
    return "strictly equal";
  }

  if (valueA == valueB) {
    return "loosely equal";
  }

  return "not equal";
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
  if (typeof value === "string") {
    return "This is a string";
  } else if (typeof value === "number") {
    return "This is a number";
  }
  return "This is not a string nor a number";
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
 * You do not need to call the function with these values; the function will be automatically tested with them.
 *
 * Challenge:
 * There's a way to write this function using just one short if-statement expression.
 * Can you use the logical NOT (!) operator to make this function work?
 * See the link below for more on the logical NOT (!).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

// There are a number of ways to complete this function, one of which combines different expressions to test using the Logical OR (||) to create a single case that'll return false on ANY of the matching expressions.
// You don't need an `else` to go with the if-statement because you simply `return true` if you don't enter the if code block. If there were more instructions to be run after that if-statement, then an `else` might be needed.

export function truthyFalsy(value) {
  if (
    value === 0 ||
    value === "" ||
    value === null ||
    value === false ||
    value === undefined
  ) {
    return false;
  }
  return true;
}

// Another way to do this problem is by using a switch statement.
// The fact that you are asked to return false given a number of different conditions makes this a good situation for the switch statement.
// You catch all the matching cases under one return and the default statement catches all other value possibilities.

// function truthyFalsy(value) {
//   switch (value) {
//     case 0:
//     case "":
//     case null:
//     case undefined:
//     case false:
//       return false;
//     default:
//       return true;
//   }
// }

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
 * Use `||` to select the first available display name.
 *
 * CHALLENGE:
 * Rewrite the function as one return expression that uses both `&&` and `||`
 * for control flow. Compare it with the original and decide which version makes
 * the login requirement and fallback order easier to understand.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */

export function getUserGreeting(isLoggedIn, preferredName, username) {
  if (!isLoggedIn) {
    return "Please log in.";
  }

  const displayName = preferredName || username || "Guest";
  return `Welcome, ${displayName}!`;
}

/**
 * CHALLENGE ANSWER:
 * Using ! to negate the incoming value forces the value into a Boolean and negates it.
 * This is done to force a value to work in a Boolean context.
 * Comment out the function above and uncomment the one below to try it out
 */

// function truthyFalsy(value) {
//   console.log("value before forcing into Boolean with !:", value);
//   if (!value) {
//     console.log("same value after:", !value);
//     return false;
//   }
//   console.log("same value after:", !value);
//   return true;
// }

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
 * Add a guard clause that returns "Not a valid temperature." when the input is
 * not a number or is JavaScript's special `NaN` value. Research why `typeof`
 * alone cannot identify `NaN`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */

export function waterState(temperature) {
  if (temperature <= 0) {
    return "solid";
  }

  if (temperature >= 100) {
    return "gas";
  }

  return "liquid";
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
  if (legalAge < 25 || outfitType !== "pool party" || !hasCoverCharge) {
    return "Go home, no partying for you tonight.";
  }
  return "Let's go party!";
}

/**
 * #8: testGrader
 *
 * testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade based of the range the input grade falls into.
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

// First we need a guard clause to filter out invalid values and return the appropriate error.
// Then, we connect various if and else-if statements with a final else because we have multiple different conditions to test, each with their own return statement.
export function testGrader(grade) {
  if (grade < 0 || grade > 100 || typeof grade !== "number") {
    return "Not a valid grade.";
  }

  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else if (grade >= 0) {
    return "F";
  }
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
 * Is there a better way to do this than a long chain of if-else statements?
 */

// Naive chained conditional approach
export function daysInTheMonth(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else if (month === 2) {
    return 28;
  } else {
    return "Not a valid month.";
  }
}

/**
 * CHALLENGE ANSWER:
 * A switch statement is a better way to do this than a long chain of if-else statements.
 * The switch statement is a control flow statement that allows you to test a value against multiple cases and execute different code based on which case matches.
 * In this case, we can use a switch statement to test the monthNum against the different cases for each month and return the appropriate number of days.
 */
// export function daysInTheMonth(month) {
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       return 31;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//     case 2:
//       return 28;
//     default:
//       return "Not a valid month.";
//   }
// }
