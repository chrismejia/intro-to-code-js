# Issue 132 Agent Handoff

Last updated: August 5, 2026

## Current Focus

- Epic: [#132 Setup PR status checks based on target branch](https://github.com/chrismejia/intro-to-code-js/issues/132)
- Recommended new branch: `feat/132-pr-status-checks-by-target-branch`
- Branch from: `0X-Guide` (not the current `feat/205` checkout; see Branching below)
- PR target for the epic branch: `0X-Guide`

This epic adds context-aware PR status checks so each PR runs only the checks
that fit its target branch. The design was scoped in a working session; this
handoff captures that design and the remaining implementation work.

## Related Tickets

Children of #132:

- [#135 Issue branch into Feature (lesson) branch](https://github.com/chrismejia/intro-to-code-js/issues/135) - open. Tier 1.
- [#222 Any branch into dev or main (release checks)](https://github.com/chrismejia/intro-to-code-js/issues/222) - open. Tier 3.
- [#136 Feature branch into 0X-Guide](https://github.com/chrismejia/intro-to-code-js/issues/136) - closed, done. Tier 2, run-all matrix, shipped by PR #155.

Closed during scoping:

- [#221 path-aware 0X-Guide matrix](https://github.com/chrismejia/intro-to-code-js/issues/221) - closed, not planned. It would have reversed the deliberate run-all decision in #136. Kept run-all instead.

Other open repo/build work:

- [#220 Add a repository pull request template](https://github.com/chrismejia/intro-to-code-js/issues/220) - open. Independent of #132.

Related curriculum epic (current checkout):

- [#205 Refactor JS lesson tests for beginner-friendly activation](https://github.com/chrismejia/intro-to-code-js/issues/205) - open. Its sub-issues PR directly into `0X-Guide`, so they are exercised by the tier 2 run-all matrix.

## The Three Tiers

Context is selected by the PR base (target) branch. Not by branch name and not
by git ancestry, because `dev` and `main` also descend from `0X-Guide` and
issue branch names like `CODE-203-*` do not encode a lesson number.

| Tier | Trigger (PR base) | Context | Check | Status |
| ---- | ----------------- | ------- | ----- | ------ |
| 1 (#135) | `feat/**` | guide side | run only the changed lessons' suites; escalate to full `test:js` on shared-infra change; always run focused-test guard | to build |
| 2 (#136) | `0X-Guide` | guide side | run all unit suites (run-all matrix) plus focused-test guard | done (PR #155) |
| 3 (#222) | `dev` or `main` | release side | run `check:student-clean` and starter-safe checks, not answer tests; keep upstream-only fork guard | to build |

## Important Decisions

- Context is routed by PR base branch.
- Changed-lesson detection for tier 1 is path-based on `topics/js/lessons/NN-*`,
  and must handle multi-lesson PRs.
- Shared-infra changes escalate tier 1 to the full suite. Infra paths:
  `topics/js/jest.config.js`, `topics/js/test-support/jest-test-sequencer.js`, `scripts/**`,
  `package.json`, `package-lock.json`, `topics/js/package.json`.
- Tier 2 stays run-all on purpose for cross-lesson regression safety. It is not
  path-aware. #205 PRs into `0X-Guide` will run the full matrix.
- Tier 3 must not run answer-backed lesson tests, because the release tree has
  answers stripped and those suites would fail by design.
- A green run of the mapped suite counts as no regression against base. No
  historical baseline comparison is planned.
- Reuse existing aliases (`test:NN`, `test:js`, `check:focused-tests`,
  `check:student-clean`). Do not add new commands.

## Current CI State

- `.github/workflows/0X-guide-pr-run-unit-tests.yml`: tier 2. Triggers on PRs
  into `0X-Guide`. Runs a focused-test guard job, then a matrix of every lesson
  suite plus the projects suite. This is the shipped result of #136 / PR #155.
- `.github/workflows/main-student-clean.yml`: partial tier 3. Triggers on push
  and PRs into `main`. Runs `check:student-clean` with the upstream-only guard.
  `dev` has no checks yet.

## Remaining Work

Tier 1 (#135):

1. Add a workflow that triggers on PRs whose base matches `feat/**`.
2. Detect changed lessons from diff paths and map to `test:NN`.
3. Add the shared-infra escalation to `test:js`.
4. Always run `check:focused-tests`.
5. Keep the changed-lesson classifier reusable.

Tier 3 (#222):

1. Add release-side checks for PRs into `dev` and `main`.
2. Run `check:student-clean` plus any starter-safe checks.
3. Do not run answer-backed lesson suites.
4. Bring `dev` up to parity with `main`, or document why they differ.
5. Keep the upstream-only fork guard.

Docs to update when the workflows land: `docs/maintainer/pr-workflow.md` and
`docs/maintainer/testing-branch-behavior.md`.

## Suggested Verification

- `node --check` any new `.mjs` helper used for path detection.
- Use a scratch PR or `act`-style dry run to confirm each tier triggers only on
  its intended base branch.
- For tier 1, confirm a single-lesson change runs only that `test:NN`, and an
  infra change runs `test:js`.
- For tier 3, confirm `check:student-clean` runs and no answer-backed lesson
  tests run.
- Keep the PR testing-note format: why each command ran, expected result, and
  how the received result matched.

## Worktree Notes

Run `git status -sb` before continuing. The current checkout is `feat/205`, and
these files are user-owned. Do not stage them for #132 work:

- `docs/maintainer/git-basics.md`
- `docs/maintainer/repository-layout.md`
- `teaching-notes/lesson-plans/01-lesson-plan.md`
- `docs/curriculum/day-1-vocabulary.md`
- `docs/planning/issue-152-organization-proposal.md`
- `docs/agent-guidance/issue-203-agent-handoff.md`
- `docs/planning/release-versioning-strategy.md`

This handoff file is not intended to be committed. Delete it once #132 is
complete.

## Process Reminder

Verify before acting. Before creating or reversing a ticket, list the epic's
existing children, search related issues, and check whether the feature is
already implemented and by which PR. Creating #221 without checking surfaced
the already-shipped #136; that mistake is the reason tier 2 is documented here
as done rather than as new work.
