# 02 - Conditionals Teaching Guide

## Purpose

Teach students how JavaScript makes decisions. The lesson should build a
mental model for Boolean expressions, comparison, branching, and fallback
values before students apply those ideas to the problem set.

Do not teach this lesson by solving each numbered problem in order. Use small,
unrelated examples during instruction. Ask students to predict results, trace
which branch runs, and explain why. The lesson problems then become independent
practice and evidence of transfer.

## Learning Objectives

By the end of the lesson, students should be able to:

- Identify expressions that evaluate to `true` or `false`.
- Combine Boolean expressions with `&&`, `||`, and `!`.
- Explain the difference between `===` and `==`.
- Use `if`, `else if`, and `else` to select one path through a program.
- Use early returns to handle invalid or disqualifying input.
- Recognize truthy and falsy values in a Boolean context.
- Use a ternary for a small two-outcome choice.
- Use short-circuit evaluation to select a fallback value.
- Read a Jest failure and distinguish a loading failure from an assertion
  failure.

## Scope

Keep this lesson focused on first-order decision making.

Teach here:

- comparison operators
- strict and loose equality
- logical operators
- `if`, `else if`, and `else`
- guard clauses and early returns
- truthy and falsy values
- ternary expressions
- short-circuit fallback values
- a brief introduction to `switch`

Save these topics for later lessons:

- reusable function design beyond the simple input and return model
- array iteration and loops
- callbacks and iterator methods
- object lookup tables and object traversal
- classes and object-oriented design

An array or object may be shown as existing data, but do not make creating or
iterating those structures part of the expected solution.

## Suggested Lesson Flow

1. Decisions begin with questions that produce Booleans.
2. Logical operators combine or reverse those questions.
3. Conditional statements choose which code runs.
4. Branch order and boundaries determine the result.
5. Guard clauses remove invalid or disqualifying cases early.
6. Truthiness and short-circuiting support compact choices and fallbacks.
7. Ternaries and `switch` offer alternate syntax for specific situations.
8. Jest verifies behavior across more inputs than one manual example.

## 1. Start With Boolean Questions

Begin with expressions, not `if` statements. A conditional statement is easier
to understand after students see that its condition is simply an expression
whose result JavaScript treats as true or false.

```js
const temperature = 72;

// Read each expression as a question.
const isWarm = temperature > 70;
const isFreezing = temperature <= 32;

console.log(isWarm); // true
console.log(isFreezing); // false
```

Ask students to predict each result before running the code. Change only the
boundary value, such as `70`, `71`, or `32`, and ask which operator matches the
plain-language requirement.

### Teaching prompts

- What value does the entire expression produce?
- Does the boundary belong in the accepted group?
- How would `>` change if it became `>=`?
- Is the variable storing the original value or the result of a comparison?

### Common misconception

Students may read `temperature > 70` as an instruction that changes
`temperature`. Reinforce that comparison evaluates values and produces a new
Boolean. It does not modify either operand.

## 2. Strict and Loose Equality

Teach strict equality as the normal default. Introduce loose equality so
students can recognize type coercion in existing code, not as the preferred
way to avoid thinking about types.

Start with a variable declaration so students can see the comparison result
directly:

```js
const storedCode = "7";
const enteredCode = 7;

// Strict equality asks whether value and type match.
const exactMatch = storedCode === enteredCode;

// Loose equality may convert a value before comparing.
const convertedMatch = storedCode == enteredCode;

console.log(exactMatch); // false
console.log(convertedMatch); // true
```

Then place the same idea inside a function to show why comparison order
matters. This is a simpler teaching version of the value-comparison exercise.

```js
function describeMatch(left, right) {
  // Check the narrowest, most exact condition first.
  if (left === right) {
    return "exact match";
  }

  // This branch is reached only when strict equality was false.
  if (left == right) {
    return "match after conversion";
  }

  return "different";
}
```

### Teaching prompts

- Why must the strict comparison come first?
- What information would be lost if loose equality came first?
- What are the value and type of each operand?
- Can you predict the result for `false` and `0` before running it?

Avoid presenting a large list of coercion rules to memorize. Use a few examples
to establish that implicit conversion can be surprising, then return to strict
equality as the readable default.

## 3. Combine Conditions With Logical Operators

Use one scenario and change one input at a time.

```js
const hasTicket = true;
const isDoorOpen = true;
const isEventCanceled = false;

// Both requirements must be true.
const mayEnter = hasTicket && isDoorOpen;

// Either condition is enough to stop entry.
const mustWait = !isDoorOpen || isEventCanceled;
```

Translate between code and plain language:

- `&&` means every required condition must pass.
- `||` means at least one condition is enough.
- `!` reverses the Boolean meaning of a value.

Do not begin with full truth tables. First have students reason from familiar
requirements, then use a small truth table to confirm the pattern.

| A     | B     | `A && B` | `A || B` |
| ----- | ----- | -------- | -------- |
| true  | true  | true     | true     |
| true  | false | false    | true     |
| false | true  | false    | true     |
| false | false | false    | false    |

### Useful activity

Give students cards labeled with conditions. Ask one student to act as `&&`
and another as `||`. Read a requirement aloud and have the group decide whether
the combined expression passes.

## 4. Choose a Path With `if` and `else`

Connect the Boolean question to observable behavior.

```js
const accountBalance = 25;
const itemPrice = 20;

if (accountBalance >= itemPrice) {
  console.log("Purchase approved");
} else {
  console.log("Not enough funds");
}
```

Trace this in three steps:

1. Evaluate the expression inside the parentheses.
2. Select the matching branch.
3. Skip the other branch.

Stress that only one branch in a connected `if` and `else if` chain runs.

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

This is a simpler variation of the water-state problem. It teaches inclusive
boundaries without duplicating the exercise wording or expected outputs.

### Boundary activity

Before running the function, ask students to predict results for:

- `-1`
- `0`
- `1`
- `29`
- `30`
- `31`

The values immediately below, at, and above a boundary expose mistakes better
than arbitrary examples.

## 5. Branch Order Matters

Use grading as a demonstration of ordered ranges without showing the lesson
problem solution.

```js
function ticketPrice(age) {
  // The most restrictive upper range is checked first.
  if (age < 5) {
    return 0;
  }

  if (age < 18) {
    return 10;
  }

  return 20;
}
```

Ask what would happen if `age < 18` came first. Students should discover that
a four-year-old satisfies both conditions, so ordering determines which result
is reachable.

Teach range chains as a process of elimination. After one branch fails, the
next branch already knows something about the value.

## 6. Use Guard Clauses for Exceptional Cases

A guard clause handles a case that should stop normal processing.

```js
function shippingMessage(distance) {
  // Reject invalid input before applying normal business rules.
  if (typeof distance !== "number" || distance < 0) {
    return "Invalid distance";
  }

  if (distance <= 10) {
    return "Local delivery";
  }

  return "Standard delivery";
}
```

Point out that `return` ends the function. An `else` is not required after a
branch that always returns.

### Teaching prompts

- Which inputs should never reach the main decision?
- What does the function know after the guard clause is passed?
- Would adding `else` improve clarity here?
- Which boundary values should be tested?

Use the water-state challenge to discuss `NaN` only after students understand
the basic guard pattern. Show that `typeof NaN` is `"number"`, then direct them
to `Number.isNaN` rather than expanding into JavaScript number internals.

## 7. Truthy and Falsy Values

Explain that `if` accepts any value. JavaScript converts that value to a Boolean
for the decision.

```js
const displayName = "Mina";

if (displayName) {
  console.log("A display name is available");
}
```

Use the core falsy values taught by the lesson:

```js
Boolean(false); // false
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false

Boolean("false"); // true, because this is a non-empty string
Boolean("0"); // true, because this is a non-empty string
```

Do not describe truthy as meaning "equal to true." It means the value becomes
`true` when used in a Boolean context.

### Explicit comparison before shorthand

Show a verbose version first so the decision remains visible:

```js
function hasSearchText(searchText) {
  if (searchText === "") {
    return false;
  }

  return true;
}
```

Then show the Boolean-context version:

```js
function hasSearchText(searchText) {
  if (!searchText) {
    return false;
  }

  return true;
}
```

Ask which inputs changed behavior between the two versions. This prevents
students from treating concise syntax as automatically equivalent syntax.

## 8. Short-Circuit Evaluation and Fallback Values

Logical operators return one of their operands, not necessarily a Boolean.
Introduce this only after students understand truthiness.

```js
const nickname = "";
const username = "river27";

// JavaScript checks from left to right and keeps the first truthy value.
const label = nickname || username || "Guest";

console.log(label); // "river27"
```

Trace each operand in order. Do not initially describe `||` as a default-value
operator. It is a logical operator whose short-circuit behavior can be used to
select a fallback.

Use a simplified greeting example before assigning the full login problem:

```js
function greetVisitor(name) {
  // Select a usable name before building the message.
  const displayName = name || "Visitor";
  return `Hello, ${displayName}!`;
}
```

The full `getUserGreeting` exercise adds a login requirement and multiple
fallbacks. Ask students to separate those two decisions:

1. Is the user allowed to receive a personalized greeting?
2. Which available name should be displayed?

This decomposition is more important than producing the shortest expression.

## 9. Use Ternaries for Small Two-Way Choices

Present the ternary as an expression that produces a value.

```js
const cartCount = 1;
const itemLabel = cartCount === 1 ? "item" : "items";
```

Read it aloud:

> If `cartCount === 1` is true, use `"item"`; otherwise, use `"items"`.

Compare it with an `if` statement. Prefer a ternary when there is one short
question and two short values. Prefer `if` statements when branches require
multiple steps, ordered checks, or substantial explanation.

Nested ternaries may be offered as a challenge in `compareValues`, but should
not be presented as inherently better. Have students compare readability and
defend their preference.

## 10. Introduce `switch` as an Alternative Shape

Use `switch` when one value is compared against several exact cases. Do not
present it as a replacement for all `if` statements.

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

Explain grouped cases with a small example:

```js
function isWeekend(day) {
  switch (day) {
    // Both cases share the same outcome.
    case "Saturday":
    case "Sunday":
      return true;
    default:
      return false;
  }
}
```

The month-length challenge lets students compare a long condition chain with
grouped `switch` cases. Keep the chain as the first solution so students can
understand the behavior before evaluating alternate syntax.

## 11. Read Tests as Behavior Examples

Before students begin the problem set, open one active test and identify:

- the imported name
- the input passed to a function
- the expected result
- the boundary or behavior represented by the case

Demonstrate the two broad failure categories.

### Loading or setup failure

Examples include a missing export, misspelled function name, or syntax error.
Jest cannot run assertions until the file loads.

Ask students to inspect:

- the named import in the test
- the matching declaration in `index.js`
- the `export` keyword
- nearby brackets, parentheses, and quotes

### Assertion failure

When Jest displays `Expected` and `Received`, the file loaded and the test ran.
Students should compare the values, locate the condition responsible for that
input, and revise one behavior at a time.

On the student branch, students begin with the first active suite. After it
passes, they remove the `x` from the next numbered `xdescribe`. On `0X-Guide`,
all suites stay active so completed instructor answers are fully verified.

## Guided Practice Sequence

Use these prompts between teaching sections. They exercise the same concepts as
the lesson without duplicating its solutions.

### Practice A: Predict a Boolean

```js
const quantity = 3;
const inStock = true;

const canOrder = quantity > 0 && inStock;
```

Ask students to predict `canOrder`, then change one input at a time.

### Practice B: Find the Boundary Bug

```js
function canRide(height) {
  if (height > 48) {
    return true;
  }

  return false;
}
```

Requirement: a rider who is exactly 48 inches tall may ride. Ask students to
identify the smallest code change that satisfies the requirement.

### Practice C: Add a Guard

```js
function mealPrice(age) {
  if (age <= 12) {
    return 8;
  }

  return 15;
}
```

Ask students to handle negative ages before applying the pricing rules.

### Practice D: Select a Fallback

```js
const customTitle = "";
const defaultTitle = "New document";
```

Ask students to create one variable that uses the custom title when available
and otherwise uses the default title.

## Problem Set Transfer Map

Use this map for instructor awareness, not as a script for solving exercises.

| Problems | Primary transfer |
| -------- | ---------------- |
| 1 | Combine Boolean expressions with logical operators. |
| 2 | Use a ternary for one short two-way decision. |
| 3 | Order strict and loose equality checks. |
| 4 | Branch based on `typeof`. |
| 5 | Distinguish explicit falsy checks from Boolean-context checks. |
| 6 | Apply inclusive numeric boundaries and optional input guards. |
| 7 | Reject a result when any required condition fails. |
| 8 | Order ranges and guard invalid input. |
| 9 | Group exact values and compare `if` with `switch`. |
| 10 | Separate authorization from fallback-value selection. |

## Misconceptions to Watch For

- Writing `=` when a comparison requires `===`.
- Assuming `"5"` and `5` have the same type.
- Reversing `&&` and `||` when translating a requirement.
- Forgetting that `!` changes how a condition reads.
- Excluding an inclusive boundary by using `<` instead of `<=`.
- Checking a broad condition before a narrow condition.
- Assuming every `if` requires an `else`.
- Forgetting that `return` stops the function.
- Calling every non-Boolean value false instead of distinguishing truthy and
  falsy values.
- Assuming `||` always returns `true` or `false`.
- Compressing readable conditions into nested ternaries too early.
- Treating a skipped Jest suite as evidence that its implementation passed.

## Checks for Understanding

Ask students to explain, not only provide output:

- What does the condition evaluate to?
- Which branch runs, and which branches are skipped?
- What happens at the exact boundary?
- What does the function know after this guard clause?
- Why is strict equality checked before loose equality?
- Which value does this `||` expression return?
- Would a ternary or an `if` statement communicate this rule more clearly?
- Does the Jest output show a loading problem or a behavior problem?

## Suggested Pacing

- 10 minutes: Boolean expressions and comparison operators
- 10 minutes: logical operators and prediction practice
- 15 minutes: `if`, branch order, and boundaries
- 10 minutes: guard clauses and early returns
- 10 minutes: truthy, falsy, and short-circuit fallback values
- 10 minutes: ternary and `switch` alternatives
- 10 minutes: reading Jest output and activating the next student suite
- Remaining time: guided practice and independent problem work

Adjust the pace based on prediction accuracy. If students cannot explain which
branch runs, delay shorthand syntax and continue tracing explicit conditions.

## Instructor Preparation

- Confirm all Lesson 02 suites are active and passing on `0X-Guide`.
- Prepare a scratch file or console for prediction examples.
- Choose boundary inputs before class.
- Keep one missing-export failure and one assertion failure available for the
  Jest demonstration.
- When preparing `dev` for `main`, remove instructor answers and restore
  `xdescribe` to every problem after the first.

## References

- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
- [MDN: Logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN: Logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN: Logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
- [MDN: Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN: Conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
