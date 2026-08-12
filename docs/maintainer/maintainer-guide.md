# Maintainer Guide

This folder holds maintainer-facing notes for repository organization and curriculum support material.

## Start Here

- [Git basics](git-basics.md): beginner-friendly Git commands and expected status messages.
- [Branching and PR workflow](pr-workflow.md): issue branches, pull requests, and target branch expectations.
- [JS testing guide](js-testing.md): Jest setup, test commands, branch expectations, supporting packages, and PR testing-note format.
- [Repository layout](repository-layout.md): topic workspace structure, script ownership, branch-audience notes, and agent guidance files.
- [Testing branch behavior](testing-branch-behavior.md): Jest expectations for guide, release staging, upstream `main`, and student forks.
- [Authoring prompts](../authoring/jsdoc-prompts/): prompt/support material for generating or revising lesson JSDoc.
- [Release/versioning plan](../planning/release-versioning-strategy.md): versioning automation remains a future decision.

Student-facing setup and test instructions belong in the root [README.md](../../README.md). Keep this folder focused on how the repository is organized and maintained.

## JS Testing Notes

The [JS testing guide](js-testing.md) is the source of truth for test commands,
Jest runner setup, branch-specific testing expectations, supporting packages,
and PR testing-note format.

Keep this page concise. If a testing detail is large enough to explain flags,
boilerplate, branch behavior, or package purpose, put it in the JS testing guide
and link to it from here.

## Agent Guidance Notes

`AGENTS.md` and `CLAUDE.md` should stay high-level and point maintainers and
coding agents to the detailed docs before they edit layout, scripts, CI, branch
flow, or curriculum structure. The root README should remain learner-friendly;
branch rules, test expectations, and repo-shape details can live in
`AGENTS.md`, `CLAUDE.md`, `docs/maintainer/pr-workflow.md`,
`docs/maintainer/repository-layout.md`, and `docs/maintainer/js-testing.md`.
