/**
 * #1: What's your name?
 *
 * Define the variable myFirstName.
 * Assign it the string of your name.
 */

const myFirstName = "name";

/**
 * #2: What's your age?
 *
 * Define the variable myAge.
 * Assign it the value of your age.
 */

const myAge = 40;

/**
 * #3: In fact, it's super fun.
 *
 * Define the variable codingIsFun and assign it a boolean value.
 * There's only one right answer here.
 */

const codingIsFun = true;

/**
 * #4: Null and undefined
 *
 * Null represents the intentional absence of value; you can assign a variable NO value.
 * Undefined represents a lack of defined value. Variables that are declared but don't have an initial value set will be assigned the value `undefined`.
 *
 * Define two variables: isNull and isUndefined.
 * Assign the value null to isNull and the value undefined to isUndefined.
 */

const isNull = null;
const isUndefined = undefined;

/**
 * #5: Quickest math class ever
 *
 * Define the variable numA. Assign it the value 15.
 * Define the variable numB. Assign it the value 3.
 *
 * Define the variable addedTo. Assign it the expression (don't solve) of numA being added to numB.
 * Define the variable subtractedBy. Assign it the expression (don't solve) of numA subtracted by numB.
 * Define the variable multipliedBy. Assign it the expression (don't solve) of numA being multiplied by numB.
 * Define the variable dividedBy. Assign it the expression (don't solve) of numA being divided by numB.
 * Define the variable remainderOf. Assign it the expression (don't solve) of numA being added to numB.
 *
 * Do not reassign or directly use the values of numA and numB in the math variable value defintions.
 * Do not enter the solved math expression's result for any of the math variable values.
 *
 * Pass numA and numB in as variables, not as their values.
 */

let numA = 15;
let numB = 3;

let addedTo = numA + numB;
let subtractedBy = numA - numB;
let multipliedBy = numA * numB;
let dividedBy = numA / numB;
let remainderOf = numA % numB;

/**
 * #6: Values are more than values
 *
 * Define the variable nameType. Assign it the expression (don't solve) that determines what type myFirstName is.
 * Define the variable ageType. Assign it the expression (don't solve) that determines what type ageType is.
 * Define the variable funType. Assign it the expression (don't solve) that determines what type funType is.
 */

let nameType = typeof myFirstName;
let ageType = typeof myAge;
let funType = typeof codingIsFun;

/**
 * #7: Numbers and Words, all together
 *
 * Define the variable myDetails.
 * Assign it the value of a template literal that has the myFirstName and myAge variables embedded within. DO NOT direct embed the values into myDetails.
 *
 * e.g. if myFirstName = "Christian" and myAge = 32:
 * My name is Christian and I'm 32 years old.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#expression_interpolation
 */

const myDetails = `My name is ${myFirstName} and I'm ${myAge} years old.`;

/**
 * Needed for test to work; pls do not touch
 */
export {
  myFirstName,
  myAge,
  codingIsFun,
  isNull,
  isUndefined,
  numA,
  numB,
  addedTo,
  subtractedBy,
  multipliedBy,
  dividedBy,
  remainderOf,
  nameType,
  ageType,
  funType,
  myDetails,
};
