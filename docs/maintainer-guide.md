# Maintainer Guide

This folder holds maintainer-facing notes for repository organization and curriculum support material.

## Start Here

- [Git basics](git-basics.md): beginner-friendly Git commands and expected status messages.
- [Branching and PR workflow](pr-workflow.md): issue branches, pull requests, and target branch expectations.
- [Repository layout](repository-layout.md): topic workspace structure, script ownership, branch-audience notes, and future `AGENTS.md` guidance.
- `chatgpt/`: prompt/support material for generating or revising lesson JSDoc.

Student-facing setup and test instructions belong in the root [README.md](../README.md). Keep this folder focused on how the repository is organized and maintained.

## Future AGENTS.md Note

When `AGENTS.md` is added to the repo, it should point maintainers and coding agents here before they edit layout, scripts, CI, branch flow, or curriculum structure. The root README should remain learner-friendly; branch rules and repo-shape details can live in `AGENTS.md`, `docs/pr-workflow.md`, and `docs/repository-layout.md`.
