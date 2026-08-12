/**
 * #1: What's your name?
 *
 * Define and export the variable myFirstName.
 * Assign it the string of your name.
 */

export const myFirstName = "name";

/**
 * #2: What's your age?
 *
 * Define and export the variable myAge.
 * Assign it the value of your age.
 */

export const myAge = 40;

/**
 * #3: In fact, it's super fun.
 *
 * Define and export the variable codingIsFun and assign it a boolean value.
 * There's only one right answer here.
 */

export const codingIsFun = true;

/**
 * #4: Null and undefined
 *
 * Null represents the intentional absence of value; you can assign a variable NO value.
 * Undefined represents a lack of defined value. Variables that are declared but don't have an initial value set will be assigned the value `undefined`.
 *
 * Define and export two variables: isNull and isUndefined.
 * Assign the value null to isNull and the value undefined to isUndefined.
 */

export const isNull = null;
export const isUndefined = undefined;

/**
 * #5: Quickest math class ever
 *
 * Define and export the variable numA. Assign it the value 15.
 * Define and export the variable numB. Assign it the value 3.
 *
 * Define and export the variable addedTo. Assign it the expression (don't solve) of numA being added to numB.
 * Define and export the variable subtractedBy. Assign it the expression (don't solve) of numA subtracted by numB.
 * Define and export the variable multipliedBy. Assign it the expression (don't solve) of numA being multiplied by numB.
 * Define and export the variable dividedBy. Assign it the expression (don't solve) of numA being divided by numB.
 * Define and export the variable remainderOf. Assign it the expression (don't solve) of the remainder after dividing numA by numB.
 * Define and export the variable exponentiatedTo. Assign it the expression (don't solve) of numA being raised to numB.
 *
 * Do not reassign or directly use the values of numA and numB in the math variable value defintions.
 * Do not enter the solved math expression's result for any of the math variable values.
 *
 * Pass numA and numB in as variables, not as their values.
 */

export let numA = 15;
export let numB = 3;

export let addedTo = numA + numB;
export let subtractedBy = numA - numB;
export let multipliedBy = numA * numB;
export let dividedBy = numA / numB;
export let remainderOf = numA % numB;
export let exponentiatedTo = numA ** numB;

/**
 * #6: Values are more than values
 *
 * Define and export the variable nameType. Assign it the expression (don't solve) that determines what type myFirstName is.
 * Define and export the variable ageType. Assign it the expression (don't solve) that determines what type ageType is.
 * Define and export the variable funType. Assign it the expression (don't solve) that determines what type funType is.
 */

export let nameType = typeof myFirstName;
export let ageType = typeof myAge;
export let funType = typeof codingIsFun;

/**
 * #7: Numbers and Words, all together
 *
 * Define and export the variable myDetails.
 * Assign it the value of a template literal that has the myFirstName and myAge variables embedded within. DO NOT direct embed the values into myDetails.
 *
 * e.g. if myFirstName = "Christian" and myAge = 32:
 * My name is Christian and I'm 32 years old.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#expression_interpolation
 */

export const myDetails = `My name is ${myFirstName} and I'm ${myAge} years old.`;
