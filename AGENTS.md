# Repository Instructions

## Project Shape

For supporting detail, see [Maintainer Guide](docs/maintainer-guide.md) and
[Repository Layout](docs/repository-layout.md). Claude-specific agent guidance lives in [CLAUDE.md](CLAUDE.md).

This repository supports two audiences:

- Instructors and curriculum development work on `0X-Guide`.
- Students consume `main`.

The same lesson/problem structure exists across branches, but the current file
contents must differ by audience.

## Branch Roles

For branch workflow details, see
[Branching And PR Workflow](docs/pr-workflow.md) and
[Testing Branch Behavior](docs/testing-branch-behavior.md).

### `0X-Guide`

- Instructor source of truth.
- Lesson problem files should have answers filled in.
- Teaching/support material belongs here, including `teaching-notes/`,
  `wip-problems/`, `base/`, internal docs, `AGENTS.md`, and `CLAUDE.md`.
- CI for PRs into this branch should run the real unit tests and expect them to
  pass.
- Feature/content branches for instructor work should branch from `0X-Guide`
  and PR back into `0X-Guide`.

### `dev`

- Student-release staging branch.
- Use this branch as the place to prepare a clean student version before merging
  into `main`.
- It may receive updates from `0X-Guide`, but the final state intended for
  `main` must be stripped of answers and instructor-only material.
- Keep `dev` close to what `main` will become after a release.

### `main`

- Student-facing release branch.
- Current files must not include answers.
- Current files must not include instructor-only folders such as `docs/`, `base/`, `teaching-notes/`, or `wip-problems/`.
- Current files must not include maintainer-only agent guidance such as `AGENTS.md` or `CLAUDE.md`.
- Tests should be pending/skipped or otherwise safe for starter-code files.
- Do not merge answer-rich work directly into `main`.

Historical answer commits are acceptable because `0X-Guide` is public. The
important invariant is that the current tree of `main` is student-clean.

## Release Flow

For the release checklist and student/fork-specific testing expectations, see
[Branching And PR Workflow](docs/pr-workflow.md) and
[Testing Branch Behavior](docs/testing-branch-behavior.md).

Use this mental model when moving curriculum updates toward students:

1. Develop and verify full answers/content on `0X-Guide`.
2. Bring the desired changes into `dev`.
3. Strip answers and remove instructor-only files from `dev`.
4. Ensure tests in the student version are pending/skipped where appropriate.
5. PR `dev` into `main`.

Before opening or approving a PR into `main`, check the current tree for:

- Filled-in lesson answers.
- Active tests that fail on blank starter code.
- `docs/`, `base/`, `teaching-notes/`, `wip-problems/`, `AGENTS.md`,
  `CLAUDE.md`, or other instructor-only material.

## Current Curriculum Context

For current lesson organization context, see
[Repository Layout](docs/repository-layout.md).

At the time this file was created, answers for lessons 1, 2, 3, 5, 6, 9, and 10
had been removed from `0X-Guide` by earlier merges and need restoration there.
Lesson 4 had already been restored by issue/PR work around `CODE-139`.

When restoring `0X-Guide`, prefer restoring answer-bearing lesson files from
known good historical commits or branches, then running the relevant unit tests.
Do not solve by making tests pending on `0X-Guide`; guide tests should prove the
answer files are valid.

## Tests And Scripts

For testing structure and script ownership, see
[JS Testing Guide](docs/js-testing.md),
[Maintainer Guide](docs/maintainer-guide.md),
[Repository Layout](docs/repository-layout.md), and
[Testing Branch Behavior](docs/testing-branch-behavior.md).

- `package.json` uses per-unit npm scripts such as `test:01`, `test:02`, etc.
- Root test aliases delegate into the JS workspace. The JS workspace owns the
  real Jest paths in `topics/js/package.json`.
- `topics/js/jest.config.js` is the JS workspace Jest config and should stay
  ESM. It points at `topics/js/jest.pathSequencer.js`.
- `topics/js/jest.pathSequencer.js` sorts test files by normalized path with
  numeric-aware ordering. Keep this in place so grouped lesson commands run and
  report in lesson/file order.
- `npm run test:jest` inside `topics/js` uses `--runInBand` for one-file-at-a-
  time execution and the custom sequencer for deterministic file order. Do not
  replace one with the other; they solve different problems.
- Keep workflow matrix commands aligned with `package.json` script names.
- In particular, workflows that call `npm run test:09` and `npm run test:10`
  require `package.json` to define `test:09` and `test:10`, not `test-09` and
  `test-10`.
- Use Jest-compatible skip APIs such as `describe.skip`, `it.skip`, `test.skip`,
  `xdescribe`, or `xit` for intentionally pending student-safe tests. For early
  lessons, `xdescribe`/`xit` may be part of the beginner activation workflow.
- PR descriptions and testing comments should explain why each command was run,
  the expected result, and how the received result matched that expectation.
- If local `node` or `npm` is unavailable in the shell, state that verification
  could not be run locally and rely on static inspection or CI.

## GitHub Actions Expectations

For CI and branch-specific check expectations, see
[Testing Branch Behavior](docs/testing-branch-behavior.md) and
[Branching And PR Workflow](docs/pr-workflow.md).

- PRs into `0X-Guide` should run all relevant guide tests and fail if answers
  are missing or incorrect.
- PRs into `main` should guard student-clean state. The current
  `check:student-clean` script/workflow fails on top-level instructor-only
  paths (`AGENTS.md`, `CLAUDE.md`, `base/`, `docs/`, `teaching-notes/`, and
  `wip-problems/`) in the upstream repo while allowing student forks to keep
  personal notes or class material.
- Keep workflow changes narrowly scoped and avoid creating duplicate workflow
  files that do the same job.

## Working Guidelines

For day-to-day branch and PR commands, see
[Branching And PR Workflow](docs/pr-workflow.md). For beginner-friendly Git
command examples, see [Git Basics](docs/git-basics.md).

- Before editing, check the current branch and status with `git status -sb`.
- Preserve user changes already present in the worktree.
- Do not remove `teaching-notes/`, `wip-problems/`, or filled answers when
  working on `0X-Guide` unless explicitly asked.
- Do not add answers, teaching notes, wip material, maintainer docs, or agent
  guidance files to `main`.
- When in doubt about audience, ask which branch target the work is for:
  instructor/guide or student/release.
