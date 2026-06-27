# Maintainer Guide

This folder holds maintainer-facing notes for repository organization and curriculum support material.

## Start Here

- [Git basics](git-basics.md): beginner-friendly Git commands and expected status messages.
- [Branching and PR workflow](pr-workflow.md): issue branches, pull requests, and target branch expectations.
- [Repository layout](repository-layout.md): topic workspace structure, script ownership, branch-audience notes, and future `AGENTS.md` guidance.
- [Testing branch behavior](testing-branch-behavior.md): Jest expectations for guide, release staging, upstream `main`, and student forks.
- `chatgpt/`: prompt/support material for generating or revising lesson JSDoc.

Student-facing setup and test instructions belong in the root [README.md](../README.md). Keep this folder focused on how the repository is organized and maintained.

## JS Testing Notes

The JS topic workspace owns the real test runner configuration and lesson paths:

- `topics/js/jest.config.cjs`: Jest configuration for the JS workspace.
- `topics/js/package.json`: per-lesson and project test scripts.
- root `package.json`: stable aliases such as `npm run test:04`, `npm run test:08-server`, and `npm run test:projects`.

The shared JS runner is `npm run test:jest` inside `topics/js`. It runs Jest through Node's native ESM support, uses `--runInBand` to keep test files serial during the migration, and uses `--ci` so local script behavior matches GitHub Actions.

Generated WIP problem tests come from `scripts/generateFiles.sh` and should use Jest globals and matchers, not Chai imports. If that script changes, generate a sample problem in a temporary directory and inspect the resulting test file before committing.

The focused-test guard lives at `scripts/checkFocusedTests.mjs` and is exposed as `npm run check:focused-tests`. It should fail if `describe.only`, `it.only`, or `test.only` appears in active curriculum or WIP paths.

For branch expectations, `0X-Guide` should run active guide tests against answer-bearing files. Student-facing `main` should not ship filled answers, and its tests should be pending, skipped, or otherwise safe for starter-code files. Use `dev` as the staging branch for preparing that student-clean state. See [Testing branch behavior](testing-branch-behavior.md) for the release checklist and fork-specific notes.

## Future AGENTS.md Note

When `AGENTS.md` is added to the repo, it should point maintainers and coding agents here before they edit layout, scripts, CI, branch flow, or curriculum structure. The root README should remain learner-friendly; branch rules, test expectations, and repo-shape details can live in `AGENTS.md`, `docs/pr-workflow.md`, and `docs/repository-layout.md`.
