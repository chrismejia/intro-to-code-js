# Lesson Plan: Conditionals

## Overview

This lesson teaches students how JavaScript evaluates questions and chooses
which code to run. Students build from Boolean expressions to conditional
statements, then apply branch order, boundaries, guards, truthiness, and
fallback values.

Use examples that are separate from the problem set. The examples should
prepare students to recognize the same concepts in new contexts without
showing them how to solve each exercise.

### Learning Objectives

By the end of this lesson, students should be able to:

- Write comparison expressions that produce Boolean values.
- Explain the difference between strict and loose equality.
- Combine conditions with `&&`, `||`, and `!`.
- Select behavior with `if`, `else if`, and `else`.
- Order branches and include the correct boundary values.
- Use guard clauses to stop invalid input early.
- Recognize truthy and falsy values.
- Use a ternary for a short two-result choice.
- Use `||` to select the first available fallback value.
- Read basic Jest loading and assertion failures.

## Lesson Structure

### 1. Boolean Expressions and Comparisons

#### Objective

Show that a comparison is an expression that produces `true` or `false`.

#### Example

```js
const temperature = 72;

// Each comparison asks a question and stores its Boolean answer.
const isWarm = temperature > 70;
const isFreezing = temperature <= 32;

console.log(isWarm); // true
console.log(isFreezing); // false
```

Change the value to one immediately below, at, and above a boundary. Ask
students to predict each result before running the code.

#### Discussion

- A comparison reads values but does not change them.
- `<` and `>` exclude the boundary value.
- `<=` and `>=` include the boundary value.
- The result can be stored, logged, returned, or used by a conditional.

#### References

- [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators)
- [MDN: Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### 2. Strict and Loose Equality

#### Objective

Teach strict equality as the normal default and loose equality as behavior
students should recognize in existing JavaScript.

#### Example

```js
const storedCode = "7";
const enteredCode = 7;

// Strict equality compares value and type without converting either value.
const exactMatch = storedCode === enteredCode;

// Loose equality may convert a value before comparing.
const convertedMatch = storedCode == enteredCode;

console.log(exactMatch); // false
console.log(convertedMatch); // true
```

Next, show how ordered checks preserve useful information:

```js
function describeMatch(left, right) {
  // Check the most exact condition first.
  if (left === right) {
    return "exact match";
  }

  // This runs only when strict equality was false.
  if (left == right) {
    return "match after conversion";
  }

  return "different";
}
```

#### Discussion

- `===` does not convert operand types.
- `==` may convert one or both operands.
- Checking loose equality first would hide strict matches.
- Students should prefer strict equality unless conversion is intentional.

#### References

- [MDN: Strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [MDN: Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)

### 3. Logical Operators

#### Objective

Combine or reverse Boolean expressions.

#### Example

```js
const hasTicket = true;
const isDoorOpen = true;
const isCanceled = false;

// Both requirements must pass.
const mayEnter = hasTicket && isDoorOpen;

// Either condition is enough to require waiting.
const mustWait = !isDoorOpen || isCanceled;
```

#### Discussion

- `&&` requires every condition to be truthy.
- `||` requires at least one condition to be truthy.
- `!` converts a value to a Boolean and reverses it.
- Translate the requirement into plain language before choosing an operator.

Ask students to change one variable at a time and predict both results.

#### References

- [MDN: Logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN: Logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN: Logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

### 4. Conditional Statements

#### Objective

Connect a Boolean expression to the code selected by JavaScript.

#### Example

```js
function describeTemperature(temperature) {
  if (temperature <= 0) {
    return "freezing or colder";
  } else if (temperature >= 30) {
    return "hot";
  } else {
    return "between the boundaries";
  }
}
```

Trace the function in three steps:

1. Evaluate the condition.
2. Run the first matching branch.
3. Skip the remaining branches.

Use inputs `-1`, `0`, `1`, `29`, `30`, and `31`. These values expose boundary
errors more clearly than unrelated inputs.

#### Discussion

- Only one branch in a connected chain runs.
- Branches are checked from top to bottom.
- `else` handles values not matched by earlier conditions.
- A returned value ends the function immediately.

#### References

- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

### 5. Branch Order and Ranges

#### Objective

Show that overlapping conditions require deliberate ordering.

#### Example

```js
function ticketPrice(age) {
  // A four-year-old also satisfies age < 18, so check age < 5 first.
  if (age < 5) {
    return 0;
  }

  if (age < 18) {
    return 10;
  }

  return 20;
}
```

Reverse the first two checks and ask students why the result changes for age
`4`. Explain that each failed branch narrows the possible range for the next
branch.

#### Discussion

- Check narrow or high-priority cases before broader cases.
- Test the exact point where one range becomes another.
- Avoid repeating conditions already ruled out by earlier branches.

#### References

- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Less than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
- [MDN: Greater than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)

### 6. Guard Clauses and Input Types

#### Objective

Handle invalid or disqualifying input before normal conditions.

#### Example

```js
function shippingMessage(distance) {
  // Stop before applying delivery rules to invalid input.
  if (typeof distance !== "number" || distance < 0) {
    return "Invalid distance";
  }

  if (distance <= 10) {
    return "Local delivery";
  }

  return "Standard delivery";
}
```

#### Discussion

- A guard clause exits before the main decision logic.
- After the guard, the function can assume the input passed that check.
- An `else` is optional after a branch that always returns.
- `typeof NaN` is `"number"`, so `Number.isNaN()` is needed when `NaN` must be
  rejected.

#### References

- [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN: Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [MDN: return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

### 7. Truthy and Falsy Values

#### Objective

Explain how JavaScript evaluates non-Boolean values in a Boolean context.

#### Example

```js
Boolean(false); // false
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false

Boolean("false"); // true because it is a non-empty string
Boolean("0"); // true because it is a non-empty string
```

Start with an explicit check:

```js
function hasSearchText(searchText) {
  if (searchText === "") {
    return false;
  }

  return true;
}
```

Then compare it with a broader Boolean-context check:

```js
function hasSearchText(searchText) {
  if (!searchText) {
    return false;
  }

  return true;
}
```

#### Discussion

- Truthy does not mean strictly equal to `true`.
- Falsy does not mean strictly equal to `false`.
- Concise and explicit checks may accept different inputs.
- Ask which behavior the requirement actually needs before shortening code.

#### References

- [MDN: Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN: Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### 8. Short-Circuit Evaluation and Fallbacks

#### Objective

Use logical operators to select the first available value.

#### Example

```js
const nickname = "";
const username = "river27";

// || checks from left to right and returns the first truthy operand.
const displayName = nickname || username || "Guest";

console.log(displayName); // "river27"
```

Apply the same idea in a small function:

```js
function greetVisitor(name) {
  const displayName = name || "Visitor";
  return `Hello, ${displayName}!`;
}
```

#### Discussion

- Logical operators return operands, not only Boolean values.
- `||` stops after finding a truthy operand.
- Fallback order communicates priority.
- Keep login permission and display-name selection as separate decisions when
  combining both concerns would reduce clarity.

#### References

- [MDN: Short-circuit evaluation with OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR#short-circuit_evaluation)
- [MDN: Logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

### 9. Ternary Expressions

#### Objective

Use an expression for one short question with two short results.

#### Example

```js
const cartCount = 1;

// condition ? valueWhenTrue : valueWhenFalse
const itemLabel = cartCount === 1 ? "item" : "items";
```

Read it aloud: if `cartCount === 1` is true, use `"item"`; otherwise, use
`"items"`.

#### Discussion

- A ternary produces a value.
- Use it for a small two-result choice.
- Prefer `if` statements for ordered checks or multi-step branches.
- Nested ternaries are a readability challenge, not an automatic improvement.

#### References

- [MDN: Conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [MDN: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

### 10. Switch Statements

#### Objective

Introduce `switch` as an alternate form for several exact matches against one
value.

#### Example

```js
function trafficInstruction(color) {
  switch (color) {
    case "green":
      return "go";
    case "yellow":
      return "slow down";
    case "red":
      return "stop";
    default:
      return "unknown signal";
  }
}
```

Show how multiple cases can share one result:

```js
function isWeekend(day) {
  switch (day) {
    // These cases share the same return value.
    case "Saturday":
    case "Sunday":
      return true;
    default:
      return false;
  }
}
```

#### Discussion

- Use `switch` for several exact matches against one expression.
- Group cases when several values share one result.
- Use `default` for values not covered by a case.
- Keep `if` statements when conditions use ranges or unrelated expressions.

#### References

- [MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN: Strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

### 11. Reading Jest Results

#### Objective

Help students use test output to identify setup and behavior problems.

#### Loading Failure

A missing export, misspelled name, or syntax error can stop the test file before
any assertion runs. Ask students to compare:

- the named import in the test
- the declaration in `index.js`
- the `export` keyword
- nearby brackets, parentheses, and quotes

#### Assertion Failure

When Jest displays `Expected` and `Received`, the file loaded and the assertion
ran. Students should:

1. Identify the input used by the failed test.
2. Compare the expected and received values.
3. Trace the conditions for that input.
4. Change one behavior and rerun the suite.

On the student branch, the first suite begins active. Students remove the `x`
from the next numbered `xdescribe` after the current exercise passes. On
`0X-Guide`, all suites remain active to verify completed instructor answers.

#### References

- [Jest: Using matchers](https://jestjs.io/docs/using-matchers)
- [Jest: ECMAScript modules](https://jestjs.io/docs/ecmascript-modules)
- [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

## Guided Practice

Use these short prompts before independent problem work.

### Predict a Boolean

```js
const quantity = 3;
const inStock = true;
const canOrder = quantity > 0 && inStock;
```

Ask students to predict `canOrder`, then change one input at a time.

### Find a Boundary Bug

```js
function canRide(height) {
  if (height > 48) {
    return true;
  }

  return false;
}
```

Requirement: a rider who is exactly 48 inches tall may ride. Ask for the
smallest correction.

### Add a Guard

```js
function mealPrice(age) {
  if (age <= 12) {
    return 8;
  }

  return 15;
}
```

Ask students to handle negative ages before applying pricing rules.

### Select a Fallback

```js
const customTitle = "";
const defaultTitle = "New document";
```

Ask students to create a value that uses `customTitle` when available and
otherwise uses `defaultTitle`.

#### References

- [MDN: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN: Control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Summary and Recap

Review these ideas before students begin the problem set:

- Conditions begin with expressions that JavaScript evaluates.
- Logical operators combine, reverse, or select values.
- Branches run from top to bottom, and order affects results.
- Boundary values should be tested directly.
- Guard clauses remove invalid cases before normal logic.
- Truthiness supports concise checks but can broaden accepted inputs.
- Ternaries and `switch` are alternate forms for specific decision shapes.
- Jest output separates file-loading problems from behavior failures.

### Instructor Preparation

- Confirm all Lesson 02 tests are active and passing on `0X-Guide`.
- Prepare boundary values for live prediction exercises.
- Keep one missing-export failure and one assertion failure for demonstration.
- During the `dev` release step, remove instructor answers and restore
  `xdescribe` to each problem after the first before merging into `main`.

### References

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
