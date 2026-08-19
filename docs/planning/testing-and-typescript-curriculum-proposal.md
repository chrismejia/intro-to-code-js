# Testing and Incremental TypeScript Curriculum Proposal

Status: exploration document for future epic and issue planning

Last reviewed: August 10, 2026

## Executive recommendation

1. Keep the current Node, npm workspace, and Jest setup for the JavaScript
   lessons. Vite does not solve a current lesson problem and should not be added
   solely to introduce TypeScript.
2. Add a small authored-testing checkpoint at the end of lesson 05, after
   callbacks and iterator methods are understood. Test an already-familiar
   primitive-returning function so Jest is the only new subject.
3. Add a dedicated Testing Fundamentals lesson after Classes and before Data
   Structures. Use it to revisit values, objects, callbacks, async functions,
   recursion, and classes from a testing perspective before students apply
   those skills to stateful data structures.
4. Introduce TypeScript concepts incrementally without immediately renaming
   lesson files to `.ts`. Use the existing JSDoc contracts plus TypeScript's
   JavaScript checking as the bridge.
5. Keep a future `topics/ts` workspace, but make it a shorter application and
   migration path rather than a repeat of the entire JavaScript curriculum.
6. Reconsider Vite when the curriculum reaches a browser application or a UI
   framework. If that project uses Vite, evaluate Vitest for that workspace
   instead of assuming Jest must also consume Vite's configuration.

The guiding distinction is:

- JavaScript lessons teach what code does at runtime.
- Type checking teaches what inputs and outputs are allowed before runtime.
- Jest teaches how to provide runtime evidence that behavior is correct.
- Vite serves and builds browser applications; it is not a type checker or a
  replacement for the test curriculum.

## Current repository context

The existing structure already provides a deliberate complexity ramp:

| Lesson    | Source layout               | Test layout               | Student-facing idea                     |
| --------- | --------------------------- | ------------------------- | --------------------------------------- |
| 01        | One `index.js`              | One test file             | Run tests and connect output to values  |
| 02        | One `index.js`              | One test file per problem | Navigate tests and activate one problem |
| 03 onward | One source file per problem | Parallel `tests/` folder  | Connect a module to its test file       |

The repository also already has several foundations this proposal should reuse:

- native ESM source and tests;
- Jest 30 and stable root commands such as `npm run test:03`;
- numeric test sequencing;
- JSDoc prompts containing parameter and return types;
- beginner-oriented `xdescribe`/`xit` activation guidance;
- separate instructor, release-staging, and student branch expectations; and
- an npm workspace boundary that can later support `topics/ts`.

This means the next useful change is curriculum design, not a new application
toolchain.

## 1. Should the repository adopt Vite now?

### Recommendation: no, not for the lesson track

Vite would be a good option for a future browser project, but it is not a better
foundation for the current Node-based problems.

The current lessons need to:

- load small ESM modules;
- run assertions in Node;
- report focused failures; and
- eventually check JavaScript or TypeScript types.

Node, Jest, and the TypeScript compiler cover those jobs directly. Vite's main
jobs are serving source modules during browser development and producing an
optimized application build. Adding it to the current lesson runner would give
students another configuration layer without improving the value/function/class
problems they are solving.

Vite also does not type-check TypeScript. It transforms `.ts` into runnable
JavaScript and expects type checking to happen separately with an editor,
`tsc --noEmit`, or another checker. See Vite's official
[TypeScript feature documentation](https://vite.dev/guide/features.html#typescript).

### Jest, Vite, and Vitest are separate choices

Jest remains a mature and widely recognized JavaScript testing framework, but it
is better described as **a standard choice**, not **the single standard**.

This distinction matters because Jest's own documentation says its runner is
not supported by Vite's plugin system and points Vite users toward Vitest as an
alternative. See Jest's
[Using Vite guidance](https://jestjs.io/docs/30.0/getting-started#using-vite).

Vitest deliberately reuses Vite's transform and configuration pipeline, offers
a Jest-compatible API, and transforms TypeScript out of the box. Like Vite,
however, its normal test transformation does not itself prove the program
type-checks; a separate type-check command is still important. See the official
[Vitest getting-started guide](https://vitest.dev/guide/) and
[TypeScript testing note](https://vitest.dev/guide/learn/writing-tests.html#testing-typescript).

That leads to a workspace-specific decision rather than a repo-wide contest:

| Curriculum area                | Recommended tool choice            | Reason                                                      |
| ------------------------------ | ---------------------------------- | ----------------------------------------------------------- |
| Current JS lessons             | Node + Jest                        | Already works and keeps attention on fundamentals           |
| JS files gaining type feedback | TypeScript checker + existing Jest | Adds compile-time feedback without changing runtime tooling |
| Future Node-focused TS lessons | Decide after a small Jest/TS spike | Preserving Jest vocabulary may outweigh transformer setup   |
| Future Vite browser project    | Vite + evaluate Vitest             | One transform/config pipeline is likely simpler             |

### When Vite becomes worthwhile

Adopt or seriously evaluate Vite when at least one of these is a curriculum
goal:

- students need a browser dev server;
- students import CSS, images, or other browser assets;
- hot module replacement improves a UI exercise;
- students build a deployable browser bundle; or
- the next topic is a Vite-oriented UI framework.

Do not install Vite only to execute isolated `.ts` functions in Node.

## 2. Where should students first write Jest tests?

### Recommendation: a post-lesson-05 checkpoint

The first required student-authored test should be a small testing checkpoint at
the end of `05-Callbacks-Iterators`, after the lesson's implementation problems
are complete.

Lesson 01 is too early. A Jest test is itself a function call containing a
callback, and students have not learned functions yet. Requiring test authorship
there would make them copy unexplained syntax.

Lessons 02-04 should continue building test literacy without requiring
authorship. Students can activate tests, run them, find a matching expectation,
and predict the output. In lesson 03 they can identify a function call's actual
and expected results. In lesson 04 they can read array matchers such as
`toEqual`, `toHaveLength`, and `toContain` without yet having to construct the
surrounding Jest callbacks.

Lesson 05 is the prerequisite that makes the test structure explainable rather
than magical. By its end, students have worked with:

- functions passed as arguments;
- callbacks with their own code blocks;
- nested function calls;
- array iterator methods; and
- method calls and returned values.

Use an existing lesson 05 test, such as a `callbackConveyor` case, for a
test-anatomy walkthrough:

```js
describe("#6: callbackConveyor", () => {
  it("returns the correct result from one callback", () => {
    const actual = callbackConveyor(0, [addTen]);

    expect(actual).toBe(10);
  });
});
```

Students should be able to explain that:

1. `describe` is called with a label and a callback.
2. That callback calls `it` with another label and callback.
3. Jest invokes the inner callback as the test body.
4. `expect(actual)` returns an assertion object.
5. `.toBe(10)` calls a matcher method on that object.

The authored checkpoint should then test `multiplyNums`, a function students
implemented earlier in lesson 05. Its behavior is intentionally simpler than
the callbacks lesson itself: two number inputs produce one number output. This
isolates Jest syntax from objects, asynchronous control flow, recursion, and
class instances.

### What the prompt could look like

Add a final test file such as
`tests/07-writingYourFirstTest.test.js`. Its leading instructions can say:

```js
/**
 * #7: Write your first Jest tests
 *
 * You have already implemented multiplyNums and learned how callbacks work.
 * Complete these two tests without changing multiplyNums:
 * 1. Complete the expected result in the first test.
 * 2. Write the call and expectation in the second test.
 * Remove the `x` from each `xit` when that test is ready to run.
 */
```

The student-facing test scaffold can contain all unfamiliar structure while
leaving the meaningful choices to the student:

```js
import { multiplyNums } from "../01-positivesNegatives.js";

describe("#7: Write your first Jest tests", () => {
  xit("multiplies two positive numbers", () => {
    const actual = multiplyNums(3, 4);

    expect(actual).toBe(/* add the expected number */);
  });

  xit("multiplies a positive and negative number", () => {
    // Call multiplyNums and add one expectation.
  });
});
```

The instructor version would show the minimum complete answer:

```js
import { multiplyNums } from "../01-positivesNegatives.js";

describe("#7: Write your first Jest tests", () => {
  it("multiplies two positive numbers", () => {
    const actual = multiplyNums(3, 4);

    expect(actual).toBe(12);
  });

  it("multiplies a positive and negative number", () => {
    const actual = multiplyNums(3, -4);

    expect(actual).toBe(-12);
  });
});
```

The exact missing-function behavior should follow the gateway pattern
established by issue/epic #205. The important curricular shape is read tests
repeatedly, decode their callback/method structure after lesson 05, complete one
expectation, then write one similarly shaped test without also learning a new
implementation concept.

### Teach the vocabulary, not all of Jest

The first exercise only needs six ideas:

- `describe(...)` is a function call that receives a label and callback;
- `it(...)` or `test(...)` is another function call and callback nested inside
  the first one;
- Jest invokes the inner callback as the body of the test;
- calling the student's function produces the **actual** result;
- the prompt supplies the **expected** result; and
- `expect(actual)` returns an assertion object whose `.toBe(expected)` method
  compares primitive values.

Do not introduce mocks, spies, coverage percentages, lifecycle hooks,
parameterized tests, or implementation-detail assertions in the first authored
test.

### How to decide whether the student wrote a useful test

Early test authorship should be a curriculum/rubric requirement, not a brittle
meta-test that searches the student's test source for a matcher.

A better progression is:

1. The student activates or completes the test.
2. The student runs it against incomplete code and observes a meaningful
   failure.
3. The student implements or corrects the function.
4. The same test passes.
5. The instructor tests can still check additional contract cases.

The “see it fail, then see it pass” step demonstrates that the test can detect a
problem. Static checks that merely count `expect` calls are easy to game and do
not prove test quality.

## Proposed testing ramp

The testing curriculum should grow by one main idea at a time.

| Lesson                     | Student testing responsibility                       | New testing idea                                         |
| -------------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| 01 Values and Data Types   | Run and activate supplied tests                      | Passing, failing, expected, actual                       |
| 02 Conditionals            | Read a supplied test and predict its result          | One behavior needs multiple cases/branches               |
| 03 Methods and Functions   | Trace supplied function tests                        | Test names, function calls, actual vs expected, `toBe`   |
| 04 Arrays and Loops        | Read supplied normal, empty, and boundary cases      | `toEqual`, array length, input boundaries                |
| 05 Callbacks and Iterators | Explain one complete Jest test, then write one simple test | Nested test callbacks, matcher calls, first authorship |
| 06 Objects                 | Run and read supplied object tests                   | Structural equality, reference vs value                  |
| 07 Advanced Objects        | Read edge and mutation cases from supplied tests     | Nested structures, negative cases, thrown errors         |
| 08 Async Await APIs        | Trace supplied async tests after implementing behavior | Fulfillment, rejection, and controlled dependencies    |
| 09 Recursion               | Identify base and recursive cases in supplied tests  | Termination and behavioral assertions                    |
| 10 Classes                 | Trace setup, method calls, and state assertions      | Instances and state transitions                          |
| 11 Testing Fundamentals    | Write focused suites for familiar earlier code       | Case design, matchers, mocks, async, state, regressions   |
| 12 Data Structures         | Author selected operation and invariant tests        | Empty/single/many states and operation sequences          |
| Projects                   | Write a short test plan before implementation        | Red-green-refactor, regression tests, selective coverage |

### Suggested authored-test quantity

The requirement should remain deliberately small:

- lessons 01-04: no required test authorship;
- lesson 05: one Jest-anatomy exercise followed by 1-2 simple tests for
  `multiplyNums`;
- lessons 06-10: supplied tests remain primary, with optional or tightly guided
  case additions after the programming concept is understood;
- lesson 11 Testing Fundamentals: multiple focused exercises plus one small
  test-plan capstone;
- lesson 12 Data Structures: selected student-authored operation and invariant
  tests within a supplied suite scaffold; and
- projects: tests for each public behavior, prioritizing meaningful cases over a
  target number of assertions.

Not every problem needs a student-authored test. Requiring tests for every early
exercise would turn a focused learning habit into repetitive ceremony.

### Matchers and techniques by phase

| Phase                | Add                                                                     | Delay                                 |
| -------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| First authored tests | `toBe`, clear names, actual vs expected                                 | Hooks, mocks, coverage                |
| Arrays and objects   | `toEqual`, `toHaveLength`, `toContain`                                  | Snapshots                             |
| Callbacks and state  | `jest.fn`, call count/arguments when behavior requires it               | Mocking private helpers               |
| Errors and async     | `toThrow`, `resolves`, `rejects`, small controlled mocks                | Network-dependent tests               |
| Projects             | regression tests, selective integration tests, coverage as a diagnostic | Treating 100% coverage as correctness |

## 3. Add a Testing Fundamentals lesson before Data Structures

### Recommendation: make testing a first-class lesson

Insert a dedicated testing lesson after Classes and before Data Structures.
With the current numbering, the clearest eventual sequence is:

```text
10-Classes
11-Testing-Fundamentals
12-Data-Structures
```

The post-lesson-05 checkpoint starts the habit, but it should not force each
later content lesson to teach a new testing technique alongside a difficult new
programming concept.

- Object lessons already introduce identity, reference, mutation, and nested
  values.
- Async/Await introduces promises, timing, rejection, and external
  dependencies.
- Recursion introduces base cases and self-referential execution.
- Classes introduce construction, instances, methods, and changing state.

Making students independently test each concept at the moment it first appears
creates two simultaneous lessons. A standalone testing lesson lets students
revisit already-known code and concentrate on test design, Jest syntax, and
failure messages.

This does not mean testing disappears from lessons 06-10. Students should keep
running, activating, and reading supplied tests. They can make small guided
changes after the implementation concept is understood, but new Jest techniques
should not be required for completing those lessons.

### Proposed Testing Fundamentals sequence

Use familiar implementations from earlier lessons rather than introducing a new
application domain.

| Problem | Testing focus | Familiar subject under test |
| --- | --- | --- |
| 01 Test anatomy | `describe`, `it`, callbacks, `expect`, matcher calls | A simple lesson 03 or 05 function |
| 02 Arrange, Act, Assert | Separate setup, invocation, and observation | Primitive-returning functions |
| 03 Choosing cases | Happy path, equivalence partitions, boundaries, invalid input | Conditionals and array functions |
| 04 Arrays and objects | `toEqual`, partial shapes, mutation, reference identity | Lessons 04, 06, and 07 |
| 05 Callbacks | Hand-written callbacks, `jest.fn`, calls and arguments | Lesson 05 functions |
| 06 Errors | `toThrow` and testing public failure behavior | A familiar validation function |
| 07 Async behavior | Promise fulfillment/rejection and controlled dependencies | One lesson 08 function |
| 08 Recursion | Base case, representative recursive case, behavioral assertions | One lesson 09 function |
| 09 Classes and state | Construction, methods, state transitions, fresh setup | `Rectangle` or `CarAndOwner` |
| 10 Regression exercise | Reproduce a bug with a failing test, then fix it | A seeded defect in familiar code |
| 11 Test-plan capstone | Write cases before implementation and justify omissions | A small multi-behavior module |

The lesson should emphasize that more complicated implementation does not
always require more complicated assertion syntax. For example, a class method
may still return a number checked with `toBe`; the complexity lies in arranging
the instance and checking state before and after an action.

### How to revisit the difficult concepts

Each exercise should add no more than one major testing idea:

- **Objects:** start with structural results using `toEqual`. Introduce reference
  identity and mutation only after students can distinguish “same contents”
  from “same object.”
- **Async/Await:** reuse a completed lesson 08 function. First test a fulfilled
  promise, then a rejected promise, and only afterward introduce a controlled
  mock or injected dependency. Do not rely on a live network.
- **Recursion:** test the public result for the base case and a few
  representative recursive inputs. Avoid asserting private recursive call
  counts, because that couples the test to one implementation strategy.
- **Classes:** construct a fresh known instance, test one method result, then
  test one observable state transition. Introduce `beforeEach` only when its
  purpose—preventing state leakage between tests—is visible.
- **Combined state:** reserve multi-operation sequences and structural
  invariants for the transition into Data Structures.

This sequencing preserves straightforward value/result assertions as the
foundation. Setup, asynchrony, and state are layered onto that foundation after
the underlying code is no longer novel.

### Why Data Structures should follow it

The linked-list lesson combines nearly every earlier concept:

- classes and instances;
- object references;
- mutable state;
- empty, single-node, and multi-node cases;
- operation sequences;
- callback-based search; and
- structural invariants connecting `head`, `tail`, `next`, and `previous`.

That makes Data Structures a strong **application** of testing, but a poor place
to explain testing from first principles. After Testing Fundamentals, students
can approach a linked list the way they would approach an interview-style
problem: identify state partitions, state the invariants, implement one
operation, and use tests to preserve earlier behavior as the structure grows.

Students should not be required to recreate the entire existing linked-list
suite immediately. A scaffold can provide the outer structure and constructor
checks, while students author selected operation and edge-case tests such as:

- adding to an empty list sets both `head` and `tail`;
- removing the only node restores the empty-state invariants;
- removing a tail clears the new tail's `next` reference; and
- searching with a callback returns the matching value.

### Numbering and release cost

Renaming current lesson 11 to lesson 12 affects folder paths, npm scripts,
workflow matrices, README commands, issue references, and student forks. The
repository's versioning strategy treats lesson renumbering as a breaking change.

Therefore, design and pilot the Testing Fundamentals content first. Perform the
renumbering as one explicit release change when the new lesson is ready, rather
than temporarily introducing names such as `10A` or leaving command numbers out
of sequence.

## 4. How TypeScript can enter piecemeal

### Recommendation: type-checked JavaScript first, `.ts` syntax later

The repository's JSDoc contracts are already a strong bridge. TypeScript can
understand `@type`, `@param`, `@returns`, `@typedef`, `@callback`, `@template`,
and other JSDoc forms in JavaScript. See TypeScript's official
[JSDoc reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).

TypeScript's `checkJs` option reports type errors in JavaScript and is equivalent
to applying `// @ts-check` across included JavaScript files. See the official
[`checkJs` reference](https://www.typescriptlang.org/tsconfig/checkJs.html).

This supports a gentler sequence:

1. Learn JavaScript runtime types.
2. Read type information in JSDoc.
3. Use the editor or `tsc` to detect a type mismatch in `.js`.
4. Compare a type-check failure with a Jest failure.
5. Learn richer contracts for arrays, objects, callbacks, promises, and classes.
6. Move to `.ts` syntax only after the underlying JavaScript constructs are
   familiar.

Students therefore experience TypeScript from early in the curriculum without
being asked to learn two languages at once.

### A lesson-by-lesson type ramp

| Lesson   | Type concept                               | Possible exercise                                                      |
| -------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| 01       | Runtime type vocabulary                    | Distinguish a value from its `typeof` result; no static type content   |
| 02       | Runtime conditionals and `typeof`          | Narrow values in ordinary JavaScript; no TypeScript command yet       |
| 03       | Function parameter and return contracts    | Run the first opt-in `typecheck` command on a selected function        |
| 04       | Homogeneous arrays and element types       | Use `string[]`, `number[]`, then a small union array                   |
| 05       | Function types                             | Replace vague `{Function}` with a callback signature                   |
| 06       | Object shapes                              | Introduce `@typedef`, required properties, and optional properties     |
| 07       | Nested shapes and reusable types           | Compose typedefs; introduce records and carefully chosen generics      |
| 08       | Promise inputs and results                 | Type fulfilled values with `Promise<T>`; add external shapes later     |
| 09       | Recursive contracts                        | Give recursive functions and recursive data a stable input/output type |
| 10       | Class instance shapes                      | Type constructor inputs, fields, methods, and nullable state           |
| 11       | Types versus runtime evidence              | Contrast typed fixtures with behavioral assertions in testing lessons  |
| 12       | Generic containers                         | Introduce a generic `Node<T>`/`LinkedList<T>` contract                 |
| Projects | Migration and design                       | Convert a completed JS feature or small project slice to `.ts`         |

### Lesson-by-lesson typed JavaScript guidance

#### Terminology and file-extension rule

These examples use **typed JSDoc**, not TypeScript syntax and not TSDoc as the
source of the types.

- In a `.js` file, TypeScript understands type-bearing JSDoc tags such as
  `@type`, `@param`, `@returns`, `@typedef`, `@callback`, and `@template`.
- In a `.ts` file, parameters, return types, aliases, interfaces, and generics
  should be expressed in TypeScript syntax. TSDoc-style comments document the
  API; they do not replace those type annotations.
- TSDoc deliberately resembles JSDoc, so documentation prose can remain
  familiar when a later exercise moves to `.ts`.

See TypeScript's
[JSDoc reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html),
[JavaScript project guidance](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html),
and the TSDoc project's
[description of its approach](https://tsdoc.org/pages/intro/approach/).

For the current curriculum, keep all implementation examples below as `.js`:

- Lessons 01-02 teach runtime values and conditionals only. Existing JSDoc
  comments remain documentation, but do not add TypeScript-specific annotations
  or checker commands to these lessons.
- Lesson 03 introduces `// @ts-check` and the first explicit type-check command.
- Lessons 04-12 continue using `.js`, `// @ts-check`, and increasingly precise
  JSDoc contracts.
- Jest files remain `.test.js` in the JavaScript workspace.
- The future explicit TypeScript topic is the boundary where exercises become
  `.ts` and tests may become `.test.ts`.

This avoids changing runtime syntax while students are still learning
JavaScript. It also makes file extension meaningful: `.js` means JavaScript
whose contract TypeScript can check; `.ts` means TypeScript syntax with an
explicit execution and test strategy selected for this repository.

The examples are proposed teaching slices, not complete replacements for every
prompt or solution in a lesson.

#### Lesson 01: Values and Data Types

- **Representative file:** `01-Values-and-Data-Types/index.js`
- **Extension:** `.js`
- **Checker mode:** no TypeScript checker; use the existing Jest lesson command
- **Type topic:** runtime values, `typeof`, `null`, and `undefined`
- **Expected solution usage:** assign JavaScript values and inspect their runtime
  behavior; students do not write type annotations

```js
export const myFirstName = "Ada";

export const myAge = 36;

export const codingIsFun = true;
```

Teaching guidance:

- Keep “type” in this lesson grounded in JavaScript's runtime vocabulary: string,
  number, boolean, null, and undefined.
- Contrast a value such as `"Ada"` with the result of `typeof myFirstName`, whose
  value is the string `"string"`.
- Do not introduce `{string}` or `// @ts-check` yet. The student should leave
  lesson 01 knowing what a value is before learning how a separate tool can
  describe or check it.

#### Lesson 02: Conditionals

- **Representative file:** `02-Conditionals/index.js`, `numberOrString`
- **Extension:** `.js`
- **Checker mode:** no TypeScript checker; use ordinary JavaScript conditional
  logic and the existing Jest lesson command
- **Type topic:** runtime `typeof`, truthy/falsy behavior, unions as a future
  idea rather than a TypeScript feature
- **Expected solution usage:** inspect a value with `typeof` and choose a return
  value; students do not annotate the parameter

```js
export function numberOrString(value) {
  if (typeof value === "string") {
    return "This is a string";
  }

  if (typeof value === "number") {
    return "This is a number";
  }

  return "This is not a string nor a number";
}
```

Teaching guidance:

- Explain “a value of any type” in ordinary JavaScript terms, without introducing
  the TypeScript distinction between `unknown` and `any` yet.
- Let students practice the runtime operation that TypeScript will later use as
  a narrowing signal.
- Preview the future connection in instructor notes if useful: lesson 03 will
  add a static contract to a function that uses the same kind of runtime check.

#### Lesson 03: Methods and Functions

- **Representative file:** `03-Methods-and-Functions/04-doesItAddUp.js`
- **Extension:** `.js`
- **Checker mode:** add `// @ts-check`; introduce the first required type-check
  command on a selected problem
- **Type topic:** parameter contracts, return contracts, and inference inside a
  function body
- **Expected solution usage:** accept three numbers and return a boolean on
  every code path

```js
// @ts-check

/**
 * Returns whether the first two numbers add up to the third.
 *
 * @param {number} numA
 * @param {number} numB
 * @param {number} numC
 * @returns {boolean}
 */
export function doesItAddUp(numA, numB, numC) {
  return numA + numB === numC;
}
```

Teaching guidance:

- Have students hover over each parameter in the editor and observe that the
  JSDoc contract supplies its type.
- Intentionally return a string once so students can see a return-contract
  failure, then restore the boolean result.
- Pair this with the earlier example showing that a type checker can prove the
  result is boolean but cannot prove the arithmetic implements the intended
  behavior.

#### Lesson 04: Arrays and Loops

- **Representative file:** `04-Arrays-and-Loops/10-pairMultiplier.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** array element types and preserving an element type through a
  result
- **Expected solution usage:** read numbers from both arrays and only push
  numbers into the result array

```js
// @ts-check

/**
 * Produces every pairwise product from two arrays of numbers.
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
export function pairMultiplier(arr1, arr2) {
  /** @type {number[]} */
  const products = [];

  for (const numOne of arr1) {
    for (const numTwo of arr2) {
      products.push(numOne * numTwo);
    }
  }

  return products;
}
```

Teaching guidance:

- Read `number[]` as “an array whose elements are numbers,” not merely “an
  array.”
- Demonstrate that `products.push("24")` conflicts with the result contract even
  though JavaScript could store the string at runtime.
- Use a different exercise such as `indexer` later to introduce `unknown[]` and
  optional inputs. Keep this first array example homogeneous.

#### Lesson 05: Callbacks and Iterators

- **Representative file:** `05-Callbacks-Iterators/01-positivesNegatives.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** a function as a value, named callback signatures, and matching
  callback inputs/outputs
- **Expected solution usage:** pass a function that accepts two numbers and
  returns one number; call it with both numeric inputs

```js
// @ts-check

/**
 * @callback MultiplyNumbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiplyNums(a, b) {
  return a * b;
}

/**
 * Reports whether the callback result is positive, negative, or zero.
 *
 * @param {number} a
 * @param {number} b
 * @param {MultiplyNumbers} multiplyFn
 * @returns {string}
 */
export function numType(a, b, multiplyFn) {
  const product = multiplyFn(a, b);

  if (product > 0) return `${a} times ${b} is a positive number.`;
  if (product < 0) return `${a} times ${b} is a negative number.`;
  return `${a} times ${b} is zero.`;
}
```

Teaching guidance:

- Replace the vague `{Function}` annotation with a signature that explains how
  the callback may be invoked.
- Point out that `MultiplyNumbers` describes behavior at the type boundary: two
  numeric inputs and one numeric result.
- Store the callback result once. Besides avoiding repeat work, this gives the
  editor one clearly inferred `number` value to display.

#### Lesson 06: Objects

- **Representative file:** `06-Objects/04-priceTransformer.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** named object shapes, arrays of shaped objects, and dictionary
  outputs
- **Expected solution usage:** read the required `food` and `price` properties
  and build a string-to-number record

```js
// @ts-check

/**
 * @typedef {object} FoodPrice
 * @property {string} food
 * @property {number} price
 */

/**
 * @param {FoodPrice[]} prices
 * @returns {Record<string, number>}
 */
export function priceTransformer(prices) {
  /** @type {Record<string, number>} */
  const transformed = {};

  for (const { food, price } of prices) {
    transformed[food] = price;
  }

  return transformed;
}
```

Teaching guidance:

- Introduce `@typedef` as a reusable name for an object shape.
- Contrast `FoodPrice`—a fixed set of required properties—with
  `Record<string, number>`—an object whose keys are not known ahead of time but
  whose values must be numbers.
- Add an object missing `price` to a sample call and let the checker explain the
  contract violation.

#### Lesson 07: Advanced Objects

- **Representative file:** `07-Adv-Objects/04-validateObject.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** string-keyed records, string-literal unions, and dynamic
  property access
- **Expected solution usage:** iterate schema keys, confirm each key exists, and
  compare its runtime `typeof` result with an allowed type name

```js
// @ts-check

/** @typedef {"string" | "number" | "boolean" | "undefined" | "object" | "function" | "bigint" | "symbol"} TypeName */

/**
 * @param {Record<string, unknown>} inputObj
 * @param {Record<string, TypeName>} schema
 * @returns {boolean}
 */
export function validateObject(inputObj, schema) {
  return Object.keys(schema).every((key) => {
    return key in inputObj && typeof inputObj[key] === schema[key];
  });
}
```

Teaching guidance:

- Explain that `TypeName` is a union of the exact strings the `typeof` operator
  may produce.
- Contrast `Record<string, unknown>` with `{Object}`: the record documents both
  the key type and the fact that values must be inspected before type-specific
  use.
- Do not add a generic here merely to make the annotation look advanced. The
  runtime schema cannot prove an arbitrary compile-time object type without a
  more advanced type-predicate design.

#### Lesson 08: Async/Await and APIs

- **Representative file:** `08-Async-Await-APIs/03-firstSuccessfulResult.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** arrays of promises, `Promise<T>`, and the type produced by
  `await`
- **Expected solution usage:** accept promises that fulfill with strings and
  return the first fulfilled string through an async function

```js
// @ts-check

/**
 * Returns the first fulfilled task result.
 *
 * @param {Promise<string>[]} tasks
 * @returns {Promise<string>}
 */
export async function firstSuccessfulResult(tasks) {
  try {
    const result = await Promise.any(tasks);
    return result;
  } catch {
    throw new Error("All tasks failed");
  }
}
```

Teaching guidance:

- Read `Promise<string>[]` from the inside out: an array containing promises,
  each of which can fulfill with a string.
- Have students inspect `Promise.any(tasks)` before `await` and `result` after
  `await`.
- Explain that throwing creates a rejected path; `Promise<string>` describes
  the fulfilled value, not the rejection reason.
- Introduce shaped API results and `unknown` JSON later in the lesson, after the
  basic promise generic is understood.

#### Lesson 09: Recursion

- **Representative file:** `09-Recursion/03-collatzTraveler.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** stable recursive parameter/return contracts and why recursive
  functions especially benefit from an explicit return type
- **Expected solution usage:** each recursive call receives a number and returns
  a number that can be added to the current step count

```js
// @ts-check

export const wrapper = {
  /**
   * Counts the Collatz steps required to reach 1.
   *
   * @param {number} startNum
   * @returns {number}
   */
  collatzTripCounter(startNum) {
    if (startNum === 1) return 0;

    if (startNum % 2 === 0) {
      return 1 + wrapper.collatzTripCounter(startNum / 2);
    }

    return 1 + wrapper.collatzTripCounter(3 * startNum + 1);
  },
};
```

Teaching guidance:

- Trace the type contract alongside the runtime base case: every path must
  eventually produce a number.
- Intentionally omit a return from one branch and inspect the checker error.
- Avoid introducing recursive type aliases here; the current lesson contains
  recursive algorithms over primitive values, so its annotations should match
  that content.

#### Lesson 10: Classes

- **Representative file:** `10-Classes/01-rectangle.js`
- **Extension:** `.js`
- **Checker mode:** `// @ts-check`
- **Type topic:** constructor inputs, inferred instance properties, method return
  types, and optional `@readonly` constraints
- **Expected solution usage:** initialize numeric instance state in the
  constructor and return numbers from both public methods

```js
// @ts-check

export default class Rectangle {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    /** @readonly */
    this.width = width;

    /** @readonly */
    this.height = height;
  }

  /** @returns {number} */
  area() {
    return this.width * this.height;
  }

  /** @returns {number} */
  perimeter() {
    return 2 * this.width + 2 * this.height;
  }
}
```

Teaching guidance:

- Show that TypeScript infers `width` and `height` as instance properties from
  assignments in the JavaScript constructor.
- Treat `@readonly` as an optional type-system constraint for this particular
  immutable rectangle design, not as a claim that every class field should be
  readonly.
- Compare `Rectangle` with the mutable mileage state in `CarAndOwner` so
  students see that the contract should reflect intended behavior.

#### Current Lesson 11: Data Structures (proposed Lesson 12)

- **Representative file:** `11-Data-Structures/linked-list.js`
- **Extension:** `.js` in the JavaScript topic
- **Checker mode:** `// @ts-check`
- **Type topic:** generics, self-referential class properties, nullable links,
  and preserving one value type throughout a container
- **Expected solution usage:** use one type parameter `T` consistently for node
  values, inserted values, callback inputs, and returned values

```js
// @ts-check

/** @template T */
export class Node {
  /** @param {T} value */
  constructor(value) {
    this.value = value;

    /** @type {Node<T> | null} */
    this.next = null;

    /** @type {Node<T> | null} */
    this.previous = null;
  }
}

/** @template T */
export class LinkedList {
  constructor() {
    /** @type {Node<T> | null} */
    this.head = null;

    /** @type {Node<T> | null} */
    this.tail = null;
  }

  /**
   * @param {T} value
   * @returns {Node<T>}
   */
  addToTail(value) {
    const addedNode = new Node(value);

    if (this.tail === null) {
      this.head = addedNode;
      this.tail = addedNode;
      return addedNode;
    }

    this.tail.next = addedNode;
    addedNode.previous = this.tail;
    this.tail = addedNode;
    return addedNode;
  }
}

/** @type {LinkedList<string>} */
const names = new LinkedList();
names.addToTail("Ada");
```

Teaching guidance:

- Introduce `T` as a placeholder chosen by the eventual list usage, not as a
  special runtime value.
- Use the final `names` example to show how `T` becomes `string` for one list.
- Demonstrate that `names.addToTail(42)` is rejected while a separate
  `LinkedList<number>` can accept it.
- Add the callback-or-value `search` type only after the basic generic node and
  link types are understood.

#### Proposed Lesson 11: Testing Fundamentals

This lesson does not yet have a current source file. Keep its implementation and
test fixtures as `.js`/`.test.js`. Reuse the types already attached to lessons
03-10 rather than making TypeScript syntax another new testing concept.

The type-specific teaching goal is the boundary between static and runtime
evidence:

- JSDoc can state that `area()` returns a number.
- The checker can reject an implementation that returns a string.
- A Jest test is still needed to prove that `new Rectangle(5, 6).area()` returns
  `30` rather than another number.

#### Bridge example: what changes in a `.ts` file

Do not introduce `.ts` by mechanically duplicating every lesson. In the future
TypeScript topic, migrate a familiar function and move its types out of JSDoc
and into TypeScript syntax:

```ts
/**
 * Returns whether the first two numbers add up to the third.
 *
 * @param numA - The first addend.
 * @param numB - The second addend.
 * @param numC - The expected sum.
 */
export function doesItAddUp(
  numA: number,
  numB: number,
  numC: number,
): boolean {
  return numA + numB === numC;
}
```

In this `.ts` version:

- `numA: number` and `: boolean` are TypeScript syntax and enforce the types;
- the comment documents meaning for people and documentation tools;
- `@param` no longer needs `{number}` because the compiler reads the type from
  the signature; and
- changing `.js` to `.ts` also requires the selected test transform/build path,
  so the migration belongs at an explicit curriculum boundary.

### A useful early comparison

Lesson 03 is also the right place to teach that type checks and tests answer
different questions:

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a - b;
}
```

- TypeScript can confirm that `add` accepts numbers and returns a number.
- TypeScript cannot infer from those types that subtraction violates the
  function's promised behavior.
- A Jest assertion such as `expect(add(2, 3)).toBe(5)` catches that behavioral
  error.

This prevents students from treating TypeScript as a replacement for tests.

## Proposed tooling shape

### Dependency ownership

The first TypeScript integration needs only the TypeScript compiler. It does not
need to change how the current JavaScript files execute.

| Package/tool | First needed | Where it belongs | Why |
| --- | --- | --- | --- |
| `typescript` | Lesson 03 checker spike | Root `devDependencies` initially | The compiler is shared repository tooling, just like the current root-owned Jest installation |
| `tsconfig` | Lesson 03 checker spike | `topics/js/tsconfig.typecheck.json` | Keeps JS-topic include/exclude paths out of the root config |
| `ts-jest` | Only when `.ts` tests run under Jest | Future TypeScript workspace or TS-specific workspace config | Transforms `.ts` for Jest; unnecessary for `.js` tests and `tsc --noEmit` |
| `@jest/globals` or `@types/jest` | Only when `.test.ts` needs typed Jest APIs | Same workspace as `.test.ts` files | Gives TypeScript declarations for `describe`, `expect`, `test`, and related APIs |
| `@types/node` | When checking Node APIs or Node globals | Workspace that checks those files | Types `process`, filesystem APIs, timers, and other Node-specific surfaces |
| `@babel/preset-typescript` | Only if the project deliberately chooses Babel for TS transformation | Workspace-specific | Transpiles TS but does not type-check it; it is not needed for the first JS/JSDoc phase |
| `vite`/`vitest` | First browser/Vite project, if selected | That future application workspace | Keeps browser build/test tooling out of the Node lesson runner |

For the current monorepo, root ownership of `typescript` is the smallest change:
the root already owns Jest and the stable learner-facing aliases, while
`topics/js` owns the filesystem-specific scripts. If the repository later needs
standalone-installable topic packages, each topic can declare its own compatible
`typescript` dev dependency; npm will still deduplicate compatible versions in
the lockfile where possible.

Do not add `ts-jest`, `@types/jest`, or a Babel TypeScript preset when the
curriculum is still `.js` plus `tsc --noEmit`. Each would answer a later
execution/configuration problem and would make the first TypeScript lesson look
like a tooling migration.

### Rollout timing

Separate **maintainer integration** from **student exposure**:

1. Before editing lesson 03, run a small instructor-only spike with the
   repository's supported Node version, Jest version, and a pinned TypeScript
   version. Confirm that one ESM `.js` file with `// @ts-check` can be checked
   without emitting files.
2. Land the root `typescript` dev dependency, the topic-local config, and the
   `typecheck:js` workspace/root aliases in the same curriculum change that
   introduces the lesson 03 contract. Do not expose a new TypeScript command in
   lessons 01-02.
3. Add the first student-facing type-check instruction to one lesson 03
   problem, after the student has learned function parameters, return values,
   and basic JSDoc reading.
4. Keep lessons 01-02 unchanged except for ordinary documentation cleanup. A
   fresh student can complete and test them without knowing that TypeScript is
   installed.
5. Expand the checked file set one lesson at a time. Add a dependency only when
   a later feature needs it; do not front-load a TS test transformer or browser
   bundler.
6. Introduce `.ts`, `.test.ts`, and a transformer only at the explicit
   TypeScript-topic boundary or at the first project that genuinely requires
   TypeScript source execution.

The practical release point is therefore “with lesson 03,” while the technical
spike happens immediately before it on `0X-Guide`. This gives maintainers time to
fix module-resolution or error-message issues without making lessons 01-02 part
of the TypeScript teaching contract.

### Phase 1: no runtime change

Add TypeScript only as a development-time checker for selected `.js` files.
Keep Jest's current native ESM execution unchanged.

A spike should evaluate a base configuration shaped approximately like:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "noEmit": true,
    "strict": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  },
  "include": ["lessons/**/*.js", "projects/**/*.js"],
  "exclude": ["**/*.test.js"]
}
```

The corresponding initial package scripts could be:

Root `package.json`:

```json
{
  "scripts": {
    "typecheck:js": "npm --workspace @intro-to-code/js run typecheck"
  },
  "devDependencies": {
    "typescript": "<the pinned, tested TypeScript version>"
  }
}
```

`topics/js/package.json`:

```json
{
  "scripts": {
    "typecheck": "tsc --project ./tsconfig.typecheck.json"
  }
}
```

`topics/js/tsconfig.typecheck.json` for the first lesson 03 pilot:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "noEmit": true,
    "strict": true,
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "skipLibCheck": true,
    "types": []
  },
  "files": [
    "lessons/03-Methods-and-Functions/04-doesItAddUp.js"
  ]
}
```

Using `files` for the first pilot makes the checked surface obvious. Once a
lesson is ready, replace it with a deliberate `include` list or add another
explicit file. Do not include every historical lesson until its JSDoc and
starter/guide branch behavior have been audited.

`checkJs: false` plus a per-file `// @ts-check` keeps opt-in behavior visible in
the source. A later guide-wide check can switch to `checkJs: true` after the
checked set is stable. `noEmit` is important: the first phase uses TypeScript as
a static checker and leaves Jest/Node responsible for executing the JavaScript.

The TypeScript handbook describes `tsconfig.json` as the project boundary and
documents `noEmit` as the mode for using TypeScript as an editor/type-checking
tool while another tool handles execution. See the official
[`tsconfig.json` guidance](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
and [`noEmit`/`checkJs` reference](https://www.typescriptlang.org/tsconfig/explainFiles.html).

Selected lesson files can opt in with `// @ts-check` while `checkJs` remains
false. This avoids turning every historical JSDoc inconsistency into one large
migration. Tests should be excluded initially so the first work stays focused
on student implementation contracts.

The spike should decide whether learners use one topic-wide command or
per-lesson aliases. Prefer a simple root command such as
`npm run typecheck:js` unless a full-topic result is too noisy for beginners.

### Phase 2: improve JSDoc contracts

Convert imprecise annotations only as their lesson reaches the ramp. Examples:

- `{String}` to `{string}`;
- `{Number}` to `{number}`;
- `{Function}` to a real callback signature;
- `{Array}` to a meaningful element type; and
- `*` to a generic or `unknown` when the lesson is ready to narrow it.

Do not perform a repo-wide annotation rewrite as part of the first proof of
concept. The pedagogical sequence should drive the migration.

### Phase 3: introduce explicit TypeScript syntax

After the JavaScript project path is established, add `topics/ts` as an
application track. It should focus on concepts that are genuinely new:

- `.ts` files and `tsconfig.json`;
- annotations and inference;
- unions and narrowing;
- type aliases and interfaces;
- generics;
- typed external data;
- module/build boundaries; and
- migrating a known JavaScript feature.

It should not repeat eleven lessons with only file-extension changes. Reuse or
port selected familiar problems so students can focus on the new type-system
idea.

### Phase 4: choose the TS test transform at the TS boundary

Jest runs TypeScript only after a transformer converts it to JavaScript. Jest's
official documentation describes Babel and `ts-jest` approaches, and notes that
Babel transformation does not type-check; `tsc` must still run separately when
type correctness is required. See Jest's
[Using TypeScript guidance](https://jestjs.io/docs/30.0/getting-started#using-typescript).

Do not select a transformer in the curriculum proposal alone. Build a tiny ESM
spike using the repository's actual Node, Jest, and TypeScript versions, then
compare:

- setup complexity;
- clarity of beginner error messages;
- ESM behavior;
- execution speed;
- source-map accuracy; and
- whether `tsc --noEmit` remains visibly separate from runtime tests.

If the first explicit TypeScript work is a Vite application, include Vitest in
that comparison. If it is Node-only, preserving Jest may be the clearer path.

## Branch and release implications

The proposal must preserve the repository's audience split.

### `0X-Guide`

- Contains completed authored-test examples and solutions.
- Runs active Jest contract tests.
- Runs type checks for every opted-in lesson and expects them to pass.
- Owns the pinned TypeScript version, typecheck configuration, and dependency
  integration decisions before they appear in a student release.
- Holds teaching notes explaining each new testing/type concept.

### `dev`

- Replaces authored-test answers with starter scaffolds.
- Keeps early student-authored tests skipped or otherwise starter-safe until the
  student activates them.
- Carries the TypeScript dependency and command once lesson 03 is part of the
  release candidate, but should not require a full typecheck to pass against
  intentionally incomplete starter implementations.
- Removes implementation answers and instructor-only material as usual.
- Verifies that the default starter commands do not fail merely because future
  work is blank.

### `main`

- Contains the student test scaffold and instructions, not the test answer.
- Keeps explicit exercise commands available even when a student should expect
  red output during the exercise.
- May include the TypeScript compiler as an installed development tool after the
  lesson 03 release, but should not imply that students need it for lessons 01-02.
- Does not make a full-tree type check a release requirement while blank starter
  implementations intentionally violate contracts.

This last point needs an explicit design decision during implementation. A type
check that is valuable while solving an exercise may be expected to fail on a
fresh student checkout, just as an activated Jest test may initially fail.

## Content and maintenance guardrails

1. Do not require students to write Jest syntax before they understand function
   calls and callbacks at a basic level.
2. Do not use snapshots for small value/function exercises; explicit expected
   values teach the contract more clearly.
3. Test public behavior, not private helper structure.
4. Keep student-authored test requirements small and intentional.
5. Require students to observe at least one useful test failure before the pass.
6. Do not duplicate every JS problem in TypeScript.
7. Do not allow Vite transformation or a test transform to stand in for
   `tsc --noEmit`.
8. Do not enable strict checking across all historical JS in one change.
9. Keep root learner commands stable and delegate implementation details to the
   topic workspace.
10. Keep test and type error messages readable on blank or incomplete starter
    code, building on the #205 gateway work.

## Proposed epic and issue breakdown

### Epic A: build test literacy and the first authored checkpoint

1. Define conventions for supplied tests, learner-authored sections, instructor
   contract cases, and starter-safe activation.
2. Add test-reading checkpoints to lessons 01-04 without requiring students to
   author callback-based Jest structure.
3. Add a lesson 05 Jest-anatomy checkpoint after callbacks and method chaining
   have been taught.
4. Add `07-writingYourFirstTest.test.js` as the first required authored-test
   checkpoint, using the already-familiar `multiplyNums` function.
5. Add a “red, then green” walkthrough for the checkpoint.
6. Keep lessons 06-10 focused on reading supplied tests and optional guided case
   additions rather than introducing new required Jest techniques.
7. Audit `0X-Guide`, `dev`, and `main` behavior for every changed lesson.

### Epic B: add Testing Fundamentals before Data Structures

1. Define the Testing Fundamentals outcomes and select familiar source
   exercises from lessons 03-10.
2. Create problems for case selection, arrays/objects, callbacks, errors, async
   behavior, recursion, classes/state, and regression testing.
3. Add a small test-plan capstone.
4. Pilot selected student-authored invariant tests against the existing linked
   list implementation and scaffold.
5. Rename current lesson 11 Data Structures to lesson 12 in one coordinated
   breaking change.
6. Add `test:11` for Testing Fundamentals and move Data Structures to
   `test:12`, updating root/workspace scripts, docs, and workflow matrices.
7. Define project-level test-plan and regression-test expectations.
8. Audit the guide, release-staging, student, and fork behavior of the new
   active/pending tests.

### Epic C: introduce type-checked JavaScript

1. Confirm the supported Node baseline and choose a pinned, tested TypeScript
   version.
2. Add `typescript` to root `devDependencies` and update `package-lock.json`
   through npm installation; do not hand-edit the lockfile.
3. Add `topics/js/tsconfig.typecheck.json`, the workspace `typecheck` script,
   and the root `typecheck:js` alias.
4. Spike `allowJs`, opt-in `// @ts-check`, strictness, ESM settings, and
   beginner error output on one lesson 03 file.
5. Pilot function parameter/return checking in lesson 03. This is the first
   student-facing static-type command; lessons 01-02 remain runtime-JavaScript
   only.
6. Improve array and callback JSDoc in lessons 04-05.
7. Add object-shape contracts in lessons 06-07.
8. Add promise, recursive, class, testing-fixture, and generic contracts in
   lessons 08-12.
9. Add guide CI checks without breaking the blank student release.
10. Document how test failures differ from type-check failures.

### Epic D: design the explicit TypeScript topic

1. Define prerequisites and avoid duplicating the JS sequence.
2. Select a small set of familiar JS problems for migration exercises.
3. Design TypeScript-specific lessons and a capstone migration.
4. Decide whether the TS workspace declares its own compatible `typescript`
   dev dependency or relies on the root shared compiler.
5. Spike Jest plus a TypeScript transformer against the repo's native ESM
   setup.
6. If the capstone is browser-based, spike Vite plus Vitest and compare it with
   the Jest path.
7. Add `topics/ts` workspace commands, docs, CI, and release cleanup rules.

### Epic E: add a browser application toolchain when needed

1. Select the first browser project and its learning goals.
2. Confirm the supported Node version before selecting Vite/Vitest versions.
3. Scaffold Vite within that project or topic workspace, not as the root lesson
   runner.
4. Teach development server, build, browser/runtime boundaries, and environment
   variables explicitly.
5. Add deploy/build verification separately from unit tests and type checks.

## Smallest useful proofs of concept

Before creating the full epics, run three deliberately narrow experiments on an
instructor branch. Keeping them separate will show whether a problem comes from
the testing curriculum or the TypeScript checker.

### Authored-testing experiment

1. Keep lessons 01-04 as test-running, activation, and reading practice.
2. Add an annotated walkthrough of one existing `callbackConveyor` test at the
   end of lesson 05, explicitly naming both callbacks and the matcher chain.
3. Add the two-test `multiplyNums` checkpoint to the end of lesson 05 on a
   student-form test fixture and complete it on the guide.
4. Record the blank-starter Jest failure and completed-guide Jest pass.
5. Have a beginner follow the instructions without verbal repair, if possible.

### Testing-lesson experiment

1. Select one familiar function, one async function, and the `Rectangle` class.
2. Draft three Testing Fundamentals exercises that test those subjects without
   changing their implementations.
3. Ask a beginner to explain whether each failure comes from test setup, the
   assertion, or the implementation.
4. Draft one linked-list invariant exercise that assumes those three testing
   exercises are complete.
5. Use the results to adjust the full Testing Fundamentals outline before
   renumbering Data Structures.

### Type-checking experiment

1. Choose and pin a TypeScript version against the repository's supported Node
   version.
2. Add the root `typescript` dev dependency and update the lockfile through
   npm.
3. Add the topic-local config and root/workspace typecheck scripts.
4. Add accurate primitive JSDoc to one selected lesson 03 function.
5. Opt only that source file into TypeScript checking.
6. Record one intentional type failure and the corrected type-check pass.
7. Confirm that lessons 01-02 still work with only their existing JavaScript and
   Jest commands.

Together, these experiments are enough to validate teaching sequence, error
quality, branch behavior, and command design before modifying the remaining
curriculum.

## Open decisions for breakdown

- Should the lesson 05 checkpoint ask students to complete the first expectation
  and write the second `it` block, or scaffold both blocks?
- Should learner-authored tests share the current test file with contract cases,
  or use a visibly named companion file?
- Should Testing Fundamentals become lesson 11 and renumber Data Structures to
  12, or should the release wait until both lessons can ship together?
- Which earlier async function and class are simplest enough to test without
  re-teaching their implementation concepts?
- Should lesson 03 remain the first required `// @ts-check` exercise, or should
  lessons 01-02 also run a checker after their JavaScript work is complete?
- Should the shared compiler remain root-owned, or should each future topic
  declare its own compatible `typescript` dependency for standalone installs?
- Which Node version should be the minimum before pinning the TypeScript version?
- At each stage, which JSDoc should be supplied as part of the contract and
  which annotations should students be expected to write themselves?
- Should type-check completion be a separate rubric item from behavioral Jest
  completion so students can identify which feedback system found a problem?
- Should the first type-check command cover one lesson or every opted-in file?
- How should a fresh `main` checkout distinguish intentionally failing exercise
  commands from release-health commands?
- Is the first explicit `.ts` project Node-only or browser-based?
- Is familiarity with Jest specifically a required outcome, or is portable
  familiarity with Jest-style testing APIs the broader goal?
- Should the future TypeScript topic end in migration of the JS Twitter project,
  or should it use a new project designed around typed external data?

## Primary references

- [Vite: TypeScript support and separate type checking](https://vite.dev/guide/features.html#typescript)
- [Vite: why the dev server and build pipeline exist](https://vite.dev/guide/why.html)
- [Jest: getting started, Vite, and TypeScript](https://jestjs.io/docs/30.0/getting-started)
- [Jest: ESM support](https://jestjs.io/docs/30.0/ecmascript-modules)
- [Vitest: getting started and Vite configuration](https://vitest.dev/guide/)
- [Vitest: writing TypeScript tests](https://vitest.dev/guide/learn/writing-tests.html#testing-typescript)
- [TypeScript: checking JavaScript with `checkJs`](https://www.typescriptlang.org/tsconfig/checkJs.html)
- [TypeScript: supported JSDoc types](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- [TypeScript: type checking JavaScript files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
- [TypeScript: control-flow narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript: `tsconfig.json` project configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TypeScript: `noEmit` and `checkJs` compiler options](https://www.typescriptlang.org/tsconfig/explainFiles.html)
- [TypeScript: migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
- [TSDoc: approach and relationship to JSDoc](https://tsdoc.org/pages/intro/approach/)
