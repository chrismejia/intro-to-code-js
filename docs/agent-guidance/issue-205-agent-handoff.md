# Issue 205 Agent Handoff

Last updated: August 5, 2026

## Current Focus

- Epic: [#205 Refactor JS lesson tests for beginner-friendly activation and
  starter-code failures](https://github.com/chrismejia/intro-to-code-js/issues/205)
- Integration branch: `feat/205-refactor-js-lesson-tests-beginner-friendly`
- Branch audience: instructor-facing, eventually bound for `0X-Guide`.

This epic is follow-up work after the Jest migration (#173). The goal is not
"tests run under Jest"; that is already done. The goal is that lesson tests
support a beginner's first encounters with testing: activate one exercise at a
time, and fail with a readable message when a declaration is missing instead of
crashing at import time.

## Branch State

- `feat/205` currently points at `388ec02`, the merge of PR #219
  (feat/173 into `0X-Guide`). That means the whole Jest migration is already in
  this branch's history.
- `feat/205` and local `0X-Guide` are at the same commit. There are no
  #205-specific commits yet, so this branch is a clean starting point cut from
  the post-migration `0X-Guide` tip.
- No child issue branches exist yet (`CODE-206-*` and friends are unstarted).

## Related Tickets

Epic #205 children, all open and unstarted:

- [#206 Establish beginner-friendly gateway pattern](https://github.com/chrismejia/intro-to-code-js/issues/206) - do this first; it sets the shared pattern the others reuse.
- [#207 01 Values and Data Types](https://github.com/chrismejia/intro-to-code-js/issues/207)
- [#208 02 Conditionals](https://github.com/chrismejia/intro-to-code-js/issues/208)
- [#209 03 Methods and Functions](https://github.com/chrismejia/intro-to-code-js/issues/209)
- [#210 04 Arrays and Loops](https://github.com/chrismejia/intro-to-code-js/issues/210)
- [#211 05 Callbacks and Iterators](https://github.com/chrismejia/intro-to-code-js/issues/211)
- [#212 06 Objects](https://github.com/chrismejia/intro-to-code-js/issues/212)
- [#213 07 Advanced Objects](https://github.com/chrismejia/intro-to-code-js/issues/213)
- [#214 08 Async Await APIs](https://github.com/chrismejia/intro-to-code-js/issues/214)
- [#215 09 Recursion](https://github.com/chrismejia/intro-to-code-js/issues/215)
- [#216 10 Classes](https://github.com/chrismejia/intro-to-code-js/issues/216)
- [#217 11 Data Structures](https://github.com/chrismejia/intro-to-code-js/issues/217)

Related context, do not duplicate:

- [#132 PR status checks](https://github.com/chrismejia/intro-to-code-js/issues/132)
  and its handoff `docs/agent-guidance/issue-132-agent-handoff.md` cover CI. Relevant point:
  #205 lesson work is exercised by the tier 2 run-all matrix, so expect the full
  suite to run in CI regardless of which lesson changed.
- [#3 lint/format and focused-test guard](https://github.com/chrismejia/intro-to-code-js/issues/3) - focused-test policy lives here.
- [#173 Jest migration epic](https://github.com/chrismejia/intro-to-code-js/issues/173) - the completed foundation.

## What The Refactor Should Do

From the #205 body:

- Keep the beginner activation workflow where a student enables one exercise at
  a time by removing an `x` from `xdescribe` or `xit`. Lessons 01 and 02 already
  use this wording after #203.
- Do not steer students toward `.only`, `fdescribe`, or `fit`. Those are blocked
  by `scripts/checkFocusedTests.mjs` and tracked in #3.
- Add beginner-readable top-level declaration checks before dependent
  assertions, so a missing binding fails with a message like "The variable
  myFirstName is not defined. Please declare it in your code." instead of an
  import-time `ReferenceError`.
- Audit each lesson's starter behavior on `main` and guide behavior on
  `0X-Guide`.
- Explore a reusable helper or local pattern for declaration, function, and
  class gateway checks, while keeping each test file readable.
- Update each lesson's activation comments to match the chosen Jest-era pattern.

## Important Decisions And Constraints

- `xdescribe`/`xit` are intentional pedagogy in early lessons. Keep them.
- The gateway pattern should avoid import-time crashes. Options named in #205:
  direct Jest assertions, helper functions, dynamic imports, or module namespace
  inspection. #206 should pick and document one.
- `0X-Guide` keeps active, answer-backed tests that pass. `main` must stay
  student-safe: no answers, tests safe against blank starter code.
- Reuse existing aliases (`test:NN`, `test:js`, `check:focused-tests`). Do not
  add Mocha/Chai patterns or committed focused tests.
- The custom sequencer orders lesson files numerically; keep new test files
  named `NN-...test.js` so ordering holds.

## Suggested Approach

1. Start with #206. Prototype the gateway pattern on lesson 01, since that is
   where the import/declaration failure motivated this epic.
2. Document the chosen pattern in #206 so #207 through #217 can copy it.
3. Then take lessons one issue at a time, auditing starter (`main`) versus guide
   (`0X-Guide`) behavior per lesson.
4. Keep each lesson in its own commit and its own PR.

## Branching

Follow the feat/173 precedent. Child issue branches branch from `feat/205` and
PR back into `feat/205`; `feat/205` PRs into `0X-Guide` once the epic is ready.

- For the first child (#206), create from the current `feat/205` tip:
  `CODE-206-establish-beginner-friendly-gateway-pattern`
- PR that branch into `feat/205`, not directly into `0X-Guide`.

Note: during the #132 scoping session the working assumption was that #205
sub-issues PR directly into `0X-Guide`. That routing choice only mattered for
the now-dropped path-aware CI idea. With tier 2 kept as run-all, routing #205
work through `feat/205` matches the established epic-branch pattern. Confirm this
target with the maintainer before opening the first PR if there is any doubt.

## Worktree Notes

Run `git status -sb` before continuing. The current checkout is `feat/205`.
These files are user-owned and unrelated to #205 work. Do not stage them:

- `docs/maintainer/git-basics.md`
- `docs/maintainer/repository-layout.md`
- `teaching-notes/lesson-plans/01-lesson-plan.md`
- `docs/curriculum/day-1-vocabulary.md`
- `docs/planning/issue-152-organization-proposal.md`
- `docs/planning/release-versioning-strategy.md`
- `docs/agent-guidance/issue-132-agent-handoff.md` and `docs/agent-guidance/issue-203-agent-handoff.md`
- `.DS_Store` (should be gitignored, never committed)

This handoff file is not intended to be committed. Delete it once #205 is
complete.

## Process Reminder

Verify before acting. Before creating or reversing a ticket, list the epic's
existing children, search related issues, and check whether the work is already
implemented and by which PR. In this session, creating a duplicate CI issue
without first listing #132's children is what the #132 handoff records as the
mistake to avoid.
