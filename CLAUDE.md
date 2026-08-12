# Claude Guidance

Use this file as a Claude-specific quick start. `AGENTS.md` and the docs under
`docs/` remain the source of truth when instructions need more detail.

## Read First

Before changing layout, scripts, CI, lessons, tests, or branch/release behavior, read:

- [AGENTS.md](AGENTS.md)
- [Maintainer Guide](docs/maintainer/maintainer-guide.md)
- [Branching And PR Workflow](docs/maintainer/pr-workflow.md)
- [JS Testing Guide](docs/maintainer/js-testing.md)
- [Testing Branch Behavior](docs/maintainer/testing-branch-behavior.md)
- [Repository Layout](docs/maintainer/repository-layout.md)

## Branch Audience

- `0X-Guide` is instructor-facing. It may contain answer-bearing files,
  maintainer docs, `AGENTS.md`, `CLAUDE.md`, `teaching-notes/`, and
  `wip-problems/`.
- Feature and issue branches for instructor work should branch from
  `0X-Guide` or the active feature branch and PR back there.
- `dev` is student-release staging. Use it to strip answers and
  instructor-only material before release.
- Upstream `main` is student-facing. Its current tree should not contain
  answers, maintainer docs, `AGENTS.md`, `CLAUDE.md`,
  `teaching-notes/`, or `wip-problems/`.

## Working Loop

1. Run `git status -sb` before editing.
2. Preserve unrelated user changes and untracked files.
3. Keep each task or concern in its own commit.
4. Prefer existing repo patterns over new abstractions.
5. Use `rg` for searches.
6. Use `apply_patch` for manual file edits.
7. Run the smallest useful verification set and record why each command was
   run, the expected result, and how the received output matched.

## Testing Notes

- Root aliases such as `npm run test:01` delegate into the JS workspace.
- `npm run test:js` includes the lesson 08 server-backed tests.
- Use `npm run test:08-server` for the lesson 08 server suite.
- Use `npm run check:focused-tests` before PRs that touch tests.
- `topics/js/jest.config.js` is ESM and points at
  `topics/js/test-support/jest-test-sequencer.js`.
- `--runInBand` controls concurrency; the custom sequencer controls file order.
- Do not introduce Mocha/Chai patterns or committed focused tests.

## PR And Commit Notes

- Target the branch that matches the work's audience and release path.
- Include the issue identifier in commit subjects when the issue defines the
  work.
- PR descriptions and testing comments should explain each verification command
  with: why it ran, expected result, and result match.

## Do Not

- Do not add answers, maintainer docs, or agent guidance files to upstream
  `main`.
- Do not remove `teaching-notes/`, `wip-problems/`, or filled answers while working on `0X-Guide` unless explicitly asked.
- Do not make guide tests pending just to hide missing or broken answers.
- Do not use `.only`, `fdescribe`, or `fit` as a committed testing workflow.
