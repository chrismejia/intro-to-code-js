# Lesson Plan: JavaScript Basics - Values and Data Types

## Overview

In this lesson, students learn foundational JavaScript values, data types,
variables, expressions, and exports. They also begin reading Jest output and
activating one supplied test suite at a time.

### Learning Objectives

By the end of this lesson, students should be able to:

- Declare and export variables with `const` or `let`.
- Assign string, number, boolean, `null`, and `undefined` values.
- Write a JavaScript comment.
- Log one or more values to the console.
- Understand and use `null` and `undefined`.
- Build arithmetic expressions with variables and arithmetic operators.
- Determine the runtime type of a value with `typeof`.
- Use template literals for string interpolation.
- Run the lesson test command, distinguish setup failures from assertion
  failures, and activate one test suite at a time.

## Lesson Structure

### 1. Introduction to Variables

#### Problem #1: What's your name?

- **Objective**: Introduce students to variable declaration and assignment.
- **Task**: Define and export `myFirstName`, then assign it the string of their
  name.
- **Example**:

  ```javascript
  export const myFirstName = "Alex";
  ```

- **Discussion**:
  - Explain what a variable is in JavaScript.
  - Discuss the `let`, `const`, and `export` keywords briefly.
  - Show how to assign a string value to a variable.

#### Problem #2: What's your age?

- **Objective**: Reinforce the concept of variable assignment.
- **Task**: Define and export `myAge`, then assign it the number value of their
  age.
- **Example**:

  ```js
  export const myAge = 25;
  ```

- **Discussion**:
  - Explain the difference between strings and numbers.
  - Highlight the importance of data types in programming.

### 2. Boolean Values

#### Problem #3: In fact, it's super fun.

- **Objective**: Introduce boolean values.
- **Task**: Define and export `codingIsFun`, then assign it a boolean value.
- **Discussion**:
  - Explain what boolean values are (`true` and `false`).
  - Discuss scenarios where boolean values are used (e.g., conditions).

  ```js
  if (codingIsFun) {
    console.log("Let's keep coding!");
  } else {
    console.log("Let's take a break.");
  }
  ```

### 3. Null and Undefined

#### Problem #4: Null and undefined

- **Objective**: Understand `null` and `undefined` values.
- **Task**: Define and export `isNull` and `isUndefined`. Assign `null` to
  `isNull` and `undefined` to `isUndefined`.
- **Discussion**:
  - Explain `null` as an intentional absence of value.
  - Explain `undefined` as a lack of a defined value.

  ```js
  let uninitializedVariable;
  console.log(uninitializedVariable); // undefined
  ```

  - Additional Note: Mention that `undefined` is also the default value for uninitialized variables and function arguments that aren’t provided.

### 4. Basic Arithmetic Expressions

#### Problem #5: Quickest math class ever

- **Objective**: Work with basic arithmetic expressions without solving them.
- **Task**: Define and export variables that hold expressions for addition,
  subtraction, multiplication, division, remainder, and exponentiation of two
  numbers.
- **Discussion**:
  - Explain the concept of expressions and how they differ from statements.
  - Introduce operator precedence and the importance of parentheses in complex expressions.
  - Reinforce the idea of keeping expressions dynamic by using variables rather than direct values.

  ```js
  let complexExpression = ((numA + numB) * numA) / numB;
  console.log(complexExpression); // (15 + 3) * 15 / 3
  ```

### 5. Determining Variable Types

#### Problem #6: Values are more than values

- **Objective**: Determine the type of a variable using `typeof`.
- **Task**: Define and export variables that use `typeof` to determine the types
  of `myFirstName`, `myAge`, and `codingIsFun`.
- **Discussion**:
  - Explain the `typeof` operator and its importance in a dynamically typed language like JavaScript.
  - Discuss common types (`string`, `number`, `boolean`, `object`, `undefined`).

  ```js
  let notSure = "Maybe?";
  console.log(typeof notSure); // "string"

  notSure = 42;
  console.log(typeof notSure); // "number"
  ```

### 6. String Interpolation with Template Literals

#### Problem #7: Numbers and Words, all together

- **Objective**: Combine variables into a string using template literals.
- **Task**: Define and export `myDetails`, then assign it a template literal that
  incorporates `myFirstName` and `myAge`.
- **Discussion**:
  - Introduce template literals and how they differ from traditional string concatenation.
  - Show examples of template literals and discuss their advantages, such as readability and ease of use.

  ```js
  let greeting = `Hello, ${myFirstName}! Welcome to JavaScript.`;
  console.log(greeting); // "Hello, Alex! Welcome to JavaScript."
  ```

### 7. Reading and Activating Tests

- Start with problem 1 active and leave problems 2-7 marked with `xdescribe`.
- Run `npm run test:01` from the repository root.
- If Jest reports that the suite failed to run or an export was not found,
  check the declaration name and `export` keyword.
- If Jest displays `Expected` and `Received`, the test loaded successfully;
  compare the values and revise the active answer.
- After the active problem passes, remove the `x` from the next `xdescribe` and
  run the command again.
- Let students read Jest's original output before interpreting it for them.
  The goal is to make ordinary test feedback familiar.

### 8. Summary and Recap

- Review the key concepts covered:
  - Variable declaration and assignment.
  - Data types: strings, numbers, booleans, null, and undefined.
  - Working with expressions without solving them.
  - Using `typeof` to determine variable types.
  - Creating strings with template literals.
  - Reading Jest output and activating tests sequentially.
- Encourage students to ask questions and clarify any doubts.

### Additional Resources

- [MDN Web Docs: JavaScript Data Types and Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN Web Docs: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN Web Docs: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Homework

- Finish activating and passing all seven problem suites.
- Practice by writing small scripts that use different data types, arithmetic
  expressions, and template literals.
