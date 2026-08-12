# JS Testing Guide

Use this guide when changing the JavaScript curriculum test runner, adding or
converting lesson tests, or deciding which checks belong in a pull request.

## Test Ownership

The root package exposes stable aliases, but the JS workspace owns the actual
Jest configuration and test paths.

| Location                          | Role                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------- |
| `package.json`                    | Root aliases such as `test:04`, `test:08-server`, `test:js`, and guard scripts. |
| `topics/js/package.json`          | Workspace lesson, project, and shared Jest runner scripts.                      |
| `topics/js/jest.config.js`        | Jest config for the JS workspace.                                               |
| `topics/js/test-support/jest-test-sequencer.js` | Deterministic path-based test ordering for JS workspace suites.                 |
| `scripts/checkFocusedTests.mjs`   | Guard against committed focused tests.                                          |
| `scripts/checkStudentClean.mjs`   | Guard for upstream student-facing `main` tree expectations.                     |

## Command Map

Run commands from the repository root unless noted otherwise.

| Command                                            | Purpose                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------- |
| `npm run test:js`                                  | Run every JS lesson, lesson 08 server suite, and project suite.     |
| `npm run test:01` through `npm run test:11`        | Run one lesson's test suite through the JS workspace.               |
| `npm run test:08-server`                           | Run lesson 08 server-backed route tests.                            |
| `npm run test:projects`                            | Run all project tests.                                              |
| `npm run test:twitter`                             | Run only the Twitter project tests.                                 |
| `npm run check:focused-tests`                      | Fail if active curriculum or WIP paths contain focused Jest tests.  |
| `npm run check:student-clean -- --ref origin/main` | Check the upstream `main` tree for top-level instructor-only paths. |

Inside `topics/js`, `npm run test:jest -- <path>` is the shared lower-level
runner. Prefer the root aliases in pull request notes unless the change is
specifically about workspace internals.

`test:js` includes `test:08-server`, so running both is normally redundant
unless a pull request needs to call out the server-backed suite separately.

## Jest Setup

`topics/js` is an ESM workspace. Lesson files, tests, the Jest config, and the
custom sequencer should use `import` and `export` syntax.

The shared workspace runner is:

```shell
node --experimental-vm-modules ../../node_modules/jest/bin/jest.js --config ./jest.config.js --runInBand --ci
```

The flags have distinct responsibilities:

- `--experimental-vm-modules` lets Jest execute native ESM tests and lesson
  files without adding a transform step.
- `--config ./jest.config.js` points Jest at the JS workspace config.
- `--runInBand` runs test files one at a time in a single worker process. It
  does not choose file order.
- `--ci` keeps local script behavior close to GitHub Actions behavior.

`topics/js/test-support/jest-test-sequencer.js` chooses file order. It sorts by normalized
path with numeric-aware comparison, so grouped lesson runs list files in lesson
and exercise order, such as `01-...`, `02-...`, and `10-...`.

Keep `--runInBand` and the sequencer in place together. `--runInBand` controls
concurrency; the sequencer controls ordering.

### Sequencer Verification

When changing Jest config, the test sequencer, or grouped lesson test scripts,
verify ordering with a lesson that has double-digit test files:

```shell
npm --workspace @intro-to-code/js run test:jest -- --listTests lessons/04-Arrays-and-Loops/tests
```

The expected result is a successful command that lists lesson 04 test files in
numeric path order from `01-measurer.test.js` through
`12-maxDifference.test.js`. This confirms `topics/js/test-support/jest-test-sequencer.js` is
being applied without running the full lesson suite.

## Test Boilerplate

Use Jest globals and matchers in converted tests:

```js
import { jest } from "@jest/globals";
```

Import `jest` only in files that need Jest-specific helpers such as spies,
mock functions, fake timers, or module mocking. Basic `describe`, `it`, `test`,
and `expect` globals are available in Jest test files.

For intentionally inactive tests, use Jest-compatible skip APIs:

```js
describe.skip("exercise name", () => {});
it.skip("documents pending behavior", () => {});
test.skip("documents pending behavior", () => {});
xdescribe("exercise name", () => {});
xit("documents pending behavior", () => {});
```

Early beginner lessons may intentionally use `xdescribe` or `xit` so students
can activate one exercise at a time by removing a single `x`. Do not replace
that teaching workflow with committed focused tests such as `.only`,
`fdescribe`, or `fit`, and do not use complex Jest CLI filtering in
student-facing instructions unless an issue explicitly calls for it.

Generated WIP problem tests come from `scripts/generateFiles.sh`. When that
template changes, generate a sample problem in a temporary directory and inspect
the emitted test file before committing.

## JSDoc Validation

JSDoc is kept as offline developer tooling for JavaScript source comments. It
parses the selected file and emits doclet JSON; it does not generate HTML or
write documentation files:

```shell
npm run check:jsdoc -- topics/js/lessons/03-Methods-and-Functions/01-helloWorld.js
```

The WIP generator runs the same check for each new problem source file.

## Supporting Packages

The current testing-related packages are:

| Package                | Why it exists                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `jest`                 | Test runner, assertions, spies, mocks, fake timers, and the package tree that provides the sequencer base class. |
| `@jest/test-sequencer` | Base class imported by `topics/js/test-support/jest-test-sequencer.js`.                                                        |
| `jsdoc`                | Offline parsing/validation of JSDoc comments in generated or selected JavaScript files; it does not write HTML. |
| `supertest`            | HTTP assertions for lesson 08 server route tests.                                                                |
| `express`              | Lesson 08 sample API server under `topics/js/lessons/08-Async-Await-APIs/server`.                                |

The repository no longer carries the retired Babel, Faker, Nodemon,
`jsdocs`, or `jsdoc-to-markdown` tooling. JSDoc remains only as an offline
parser/validation tool for source comments; no generated HTML is committed.

## Migration Audit Notes

The final Jest migration audit found no direct Mocha, Chai, Sinon, or
Mochawesome dependencies in `package.json`, and no direct legacy
Mocha/Chai/Sinon/Mochawesome packages in `package-lock.json`.

`@sinonjs/fake-timers` may still appear in `package-lock.json` through Jest's
own dependency tree. That is expected and is not a reintroduced Sinon test
dependency.

`xdescribe` and `xit` references can be intentional in early beginner lessons
when they support the simple "remove the x" activation workflow. Treat those
separately from committed focused-test patterns such as `.only`, `fdescribe`,
or `fit`, which should remain blocked.

## Branch Expectations

### `0X-Guide`

`0X-Guide` is the instructor source of truth. It should contain answer-bearing
lesson files and active tests that pass against those answers.

For normal guide changes, run:

```shell
npm run check:focused-tests
npm run test:<lesson>
```

For shared test-runner, config, or migration changes, run:

```shell
npm run check:focused-tests
npm run test:js
```

Do not make guide tests pending just to hide missing answers. If an answer was
lost during branch cleanup, restore the answer or split the restoration into a
separate issue.

### `dev`

`dev` is student-release staging. Use it to prepare the tree that will become
`main`.

Before opening a `dev` to `main` pull request, strip answer-bearing files and
remove instructor-only material from the current tree, including `docs/`,
`teaching-notes/`, `wip-problems/`, `AGENTS.md`, and `CLAUDE.md`.
Convert tests so they are safe for starter-code files by using `describe.skip`,
`it.skip`, `test.skip`, or a starter-safe harness.

### `main`

Upstream `main` is student-facing. The current tree should not include filled
answers, instructor-only folders, maintainer-only agent guidance files, or
guide-only tests that fail against blank starter code.

Check the upstream tree with:

```shell
git fetch origin main
npm run check:student-clean -- --ref origin/main
```

Student forks may keep their own notes or class material. Upstream
student-clean enforcement should stay scoped to
`chrismejia/intro-to-code-js`.

## Pull Request Testing Notes

Pull request descriptions and testing comments should say why each command was
run and how the observed result matched the expectation. Use this shape:

````markdown
<details>
<summary>npm run check:focused-tests</summary>

Why this was run: confirms no focused tests were introduced.

Expected result: the guard exits successfully and reports no focused tests.

Result match: received `No focused tests found.`

```shell
npm run check:focused-tests
...
```

</details>
````

For docs-only changes, a whitespace check such as `git diff --check` may be
enough. A blank `git diff --check` result means Git found no whitespace errors.

## Open Follow-Ups

These needs are known but should not be folded into ordinary lesson-test
conversion commits without an explicit issue:

- Branch-conditional CI that differentiates guide, release-staging, upstream
  `main`, and fork behavior.
- A broader student-safe test strategy for `main` beyond skipped guide tests.
- Beginner-friendly lesson test refactors for declaration/function/class
  gateway checks; see #205.
- Long-term lint/format coverage for focused tests and style checks; see #3.
