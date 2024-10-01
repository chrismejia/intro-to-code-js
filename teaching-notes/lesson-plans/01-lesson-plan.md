# Lesson Plan: JavaScript Basics - Values and Data Types

## Overview

In this lesson, students will learn the fundamental concepts of JavaScript, focusing on values, data types, and basic variable manipulation. They will gain an understanding of different data types, how to declare and assign variables, and the importance of expressions and types in JavaScript.

### Learning Objectives

By the end of this lesson, students should be able to:

- Define and assign values to variables.
- Differentiate between various data types in JavaScript.
- Understand and use `null` and `undefined`.
- Work with basic arithmetic expressions without solving them.
- Determine the type of a given variable.
- Use template literals for string interpolation.

## Lesson Structure

### 1. Introduction to Variables

#### Problem #1: What's your name?

- **Objective**: Introduce students to variable declaration and assignment.
- **Task**: Define the variable `myFirstName` and assign it the string of their name.
- **Example**:

  ```javascript
  let myFirstName = "Alex";
  ```

- **Discussion**:
  - Explain what a variable is in JavaScript.
  - Discuss the let and const keywords briefly.
  - Show how to assign a string value to a variable.

#### Problem #2: What's your age?

- **Objective**: Reinforce the concept of variable assignment.
- **Task**: Define the variable `myAge` and assign it the value of their age.
- **Example**:

  ```js
  let myAge = 25;
  ```

- **Discussion**:
  - Explain the difference between strings and numbers.
  - Highlight the importance of data types in programming.

### 2. Boolean Values

#### Problem #3: In fact, it's super fun.

- **Objective**: Introduce boolean values.
- **Task**: Define the variable `codingIsFun` and assign it a boolean value.
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
- **Task**: Define two variables: `isNull` and `isUndefined`. Assign the value `null` to `isNull` and the value `undefined` to `isUndefined`.
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
- **Task**: Define variables to hold the expressions for addition, subtraction, multiplication, division, modulus, and exponentiation of two numbers.
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
- **Task**: Define variables that hold the expressions to determine the types of `myFirstName`, `myAge`, and `codingIsFun`.
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
- **Task**: Define the variable `myDetails` and assign it a template literal that incorporates `myFirstName` and `myAge`.
- **Discussion**:

  - Introduce template literals and how they differ from traditional string concatenation.
  - Show examples of template literals and discuss their advantages, such as readability and ease of use.

  ```js
  let greeting = `Hello, ${myFirstName}! Welcome to JavaScript.`;
  console.log(greeting); // "Hello, Alex! Welcome to JavaScript."
  ```

### 7. Optional Challenge

#### Extension: Combining Concepts

- **Objective**: Apply all learned concepts in a single task.
- **Task**: Create a function that takes `myFirstName`, `myAge`, and `codingIsFun` as inputs and returns a formatted string that includes all three values. This will require using variables, boolean logic, type determination, and template literals.
- **Discussion**:

  - This challenge reinforces the material by requiring students to synthesize their knowledge in a practical scenario.
  - Provide hints or partial code if students struggle with this task.

  ```js
  function createProfile(name, age, fun) {
    let funText = fun ? "I love coding!" : "Coding is tough!";
    return `Hi, my name is ${name}, I'm ${age} years old. ${funText}`;
  }

  console.log(createProfile(myFirstName, myAge, codingIsFun));
  // Output: "Hi, my name is Alex, I'm 25 years old. I love coding!"
  ```

### 8. Summary and Recap

- Review the key concepts covered:
  - Variable declaration and assignment.
  - Data types: strings, numbers, booleans, null, and undefined.
  - Working with expressions without solving them.
  - Using `typeof` to determine variable types.
  - Creating strings with template literals.
- Encourage students to ask questions and clarify any doubts.

### Additional Resources

- [MDN Web Docs: JavaScript Data Types and Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN Web Docs: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN Web Docs: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Homework

- Complete the optional challenge problem.
- Practice by writing small scripts that use different data types and template literals.
