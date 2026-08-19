# Issue 203 Agent Handoff

Last updated: July 27, 2026

## Current Focus

- Branch: `CODE-203-audit-loose-ends-jest-migration`
- Current issue: [#203 Jest migration: Audit loose ends and final cleanup](https://github.com/chrismejia/intro-to-code-js/issues/203)
- Parent epic: [#173 EPIC: Migrate JS curriculum tests from Mocha/Chai to Jest](https://github.com/chrismejia/intro-to-code-js/issues/173)
- PR target: `feat/173-migrate-repo-testing-to-jest`

Issue #203 is the final audit pass for the Jest migration. It has no native
sub-issues. The intent is to close out small cleanup, verification, and docs
alignment work so #173 can move to final review.

## Related Tickets

Direct build-on tickets listed in #203:

- [#181 Jest migration: Clean dependencies and legacy Mocha scripts](https://github.com/chrismejia/intro-to-code-js/issues/181) - closed
- [#187 Jest migration: Add deterministic Jest test sequencer](https://github.com/chrismejia/intro-to-code-js/issues/187) - closed
- [#189 Jest migration: Document JS testing structure and branch expectations](https://github.com/chrismejia/intro-to-code-js/issues/189) - closed

Deferred follow-up work:

- [#3 Configure eslint, prettier to project](https://github.com/chrismejia/intro-to-code-js/issues/3) - open. Use for broader linting,
  formatting, and focused-test guard refinements that are larger than #203.
- [#205 EPIC: Refactor JS lesson tests for beginner-friendly activation and starter-code failures](https://github.com/chrismejia/intro-to-code-js/issues/205) - open.
  This was split out after reviewing early-lesson testing pedagogy.

Issue #205 currently contains these sub-issues:

- [#206 Lesson test refactor: Establish beginner-friendly gateway pattern](https://github.com/chrismejia/intro-to-code-js/issues/206)
- [#207 Lesson test refactor: 01 Values and Data Types](https://github.com/chrismejia/intro-to-code-js/issues/207)
- [#208 Lesson test refactor: 02 Conditionals](https://github.com/chrismejia/intro-to-code-js/issues/208)
- [#209 Lesson test refactor: 03 Methods and Functions](https://github.com/chrismejia/intro-to-code-js/issues/209)
- [#210 Lesson test refactor: 04 Arrays and Loops](https://github.com/chrismejia/intro-to-code-js/issues/210)
- [#211 Lesson test refactor: 05 Callbacks and Iterators](https://github.com/chrismejia/intro-to-code-js/issues/211)
- [#212 Lesson test refactor: 06 Objects](https://github.com/chrismejia/intro-to-code-js/issues/212)
- [#213 Lesson test refactor: 07 Advanced Objects](https://github.com/chrismejia/intro-to-code-js/issues/213)
- [#214 Lesson test refactor: 08 Async Await APIs](https://github.com/chrismejia/intro-to-code-js/issues/214)
- [#215 Lesson test refactor: 09 Recursion](https://github.com/chrismejia/intro-to-code-js/issues/215)
- [#216 Lesson test refactor: 10 Classes](https://github.com/chrismejia/intro-to-code-js/issues/216)
- [#217 Lesson test refactor: 11 Data Structures](https://github.com/chrismejia/intro-to-code-js/issues/217)

## Overall Issue Approach

The approach for #203 has been to handle one loose end per commit, then pause
for review before moving to the next concern. Keep the issue focused on final
Jest migration cleanup. If a finding turns into curriculum redesign, lesson
pedagogy, or broader linting work, capture it in a follow-up issue instead of
expanding #203.

Important decisions so far:

- Keep the beginner-friendly `xdescribe`/`xit` workflow where it intentionally
  teaches students to activate one exercise at a time by removing the `x`.
- Do not replace that workflow with CLI filtering such as
  `--testNamePattern`, because the extra npm passthrough layers are too much
  for the first lessons.
- Treat committed focused tests such as `.only`, `fdescribe`, and `fit` as
  forbidden, and keep guarding against them.
- Keep `test:08-server` as the direct lesson 08 server-suite alias.
- Remove the old `server:08` alias because `test:js` already includes
  `test:08-server`.
- Treat `@sinonjs/fake-timers` in `package-lock.json` as expected because it is
  a Jest transitive dependency, not a direct Sinon test dependency.
- Move starter-code failure and top-level declaration gateway work to #205.

## Completed Commit Chunks

The #203 branch currently contains these focused commits on top of
`feat/173-migrate-repo-testing-to-jest`:

| Commit | Concern | Summary |
| ------ | ------- | ------- |
| `7c7784f` | Lesson 08 aliases | Removed the obsolete `server:08` root/workspace alias while keeping `test:08-server` and `test:js` coverage. |
| `65e795c` | Early lesson activation guidance | Reworded lesson 01 and 02 comments to describe the Jest-era "remove the x" activation flow in beginner-friendly language. |
| `50a7559` | Agent and branch guidance | Added `CLAUDE.md`, tightened `AGENTS.md`, updated maintainer docs, and added `CLAUDE.md` to the student-clean guard. |
| `f756b8b` | Final migration audit docs | Documented that direct Mocha, Chai, Sinon, and Mochawesome dependencies/scripts are gone, while intentional `xdescribe`/`xit` remains allowed for pedagogy. |
| `90f9145` | Sequencer verification | Documented the `--listTests` command for confirming the custom Jest path sequencer sorts lesson files in numeric order. |

## Current Worktree Notes

Run `git status -sb` before continuing. At the time this handoff was written,
this file was the only intentional uncommitted #203 change.

The following files were already dirty or untracked and should be treated as
user-owned unless the user explicitly says otherwise:

- `teaching-notes/lesson-plans/01-lesson-plan.md`
- `docs/curriculum/day-1-vocabulary.md`
- `docs/planning/issue-152-organization-proposal.md`
- `docs/planning/release-versioning-strategy.md`

Do not stage those files for #203 by accident.

## Remaining Work

Recommended final pass for #203:

1. Re-run a quick static search for stale legacy test-runner references in
   scripts, package files, docs, and test comments.
2. Confirm no `server:08` alias remains and that docs consistently point to
   `test:08-server`.
3. Confirm docs agree on branch expectations for `0X-Guide`, `dev`, and
   `main`, especially instructor-only docs and student-clean rules.
4. Run the closing verification set and capture output for the PR comment.
5. Draft or update the PR description with per-command testing context.
6. After the PR is created, add a testing-results comment that explains why
   each command was run, what result was expected, and how the received output
   matched.

## Suggested Closing Verification

Use the smallest command set that proves the areas touched by #203:

- `npm --workspace @intro-to-code/js run test:jest -- --listTests lessons/04-Arrays-and-Loops/tests`
  verifies the custom Jest sequencer is active and orders double-digit lesson
  test files correctly.
- `node --check topics/js/jest.config.js` verifies the ESM Jest config still
  parses.
- `node --check topics/js/test-support/jest-test-sequencer.js` verifies the custom sequencer
  still parses.
- `node --check scripts/checkStudentClean.mjs` verifies the student-clean guard
  still parses after adding `CLAUDE.md`.
- `npm run check:focused-tests` verifies no forbidden focused Jest tests are
  committed.
- `git diff --check` verifies the branch diff has no whitespace errors.
- `npm run test:01` and `npm run test:02` verify the early-lesson activation
  guidance still points at working lesson aliases.
- `npm run test:js` verifies the full JS Jest suite, including
  `test:08-server`, still passes.

If local sandboxing blocks server-backed Jest tests with a socket permission
error, re-run the affected npm command with approval or rely on GitHub Actions
and call that out explicitly in the PR testing note.

## PR Notes

The PR should target `feat/173-migrate-repo-testing-to-jest`, not `0X-Guide`
directly.

The PR description and PR testing comment should use the testing-note format
established during the Jest migration:

- why each command was run
- what result was expected
- how the received result matched the expectation

The final #203 commit or PR should close #203 and reference #173. After #203 is
merged, #173 should be ready for final review unless a new loose end is found.
