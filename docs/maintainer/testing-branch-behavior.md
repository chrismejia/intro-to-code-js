# Testing Branch Behavior

Use this guide when changing tests, release flow, or branch-specific CI. For
test commands, runner flags, package roles, and PR testing-note format, see the
[JS testing guide](js-testing.md).

## `0X-Guide` And Feature Branches

`0X-Guide` is the instructor source of truth. It should keep answer-bearing
lesson files and run real Jest-backed tests against those answers.

For guide work, run the focused-test guard plus the affected suite:

```shell
npm run check:focused-tests
npm run test:09
```

For migration or shared test-runner changes, run the full JS suite:

```shell
npm run test:js
```

Pull requests targeting `0X-Guide` should expect active tests to pass. Do not
make guide tests pending just to hide missing or broken answers.

## `dev` Release Staging

Use `dev` to prepare the student-facing tree before it reaches `main`.

Before opening a `dev` to `main` pull request:

1. Remove filled answers from lesson and project starter files.
2. Remove instructor-only material from the current tree, including
   `docs/`, `teaching-notes/`, `wip-problems/`, `AGENTS.md`, and
   `CLAUDE.md`.
3. Convert guide-only tests so starter code is safe. Prefer Jest-compatible
   APIs such as `describe.skip`, `it.skip`, `test.skip`, `xdescribe`, or `xit`,
   or use a starter-safe harness.
4. Keep `npm run check:focused-tests` passing.
5. Run the student-safe test commands that should remain available on `main`.

Skipped or pending student tests should use Jest-compatible APIs. Do not
reintroduce Mocha/Chai-era assertion imports, custom pending behavior, or
committed focused tests during release cleanup.

## Upstream `main`

`chrismejia/intro-to-code-js` `main` is the student-facing release branch.
The current tree should stay student-clean:

- no filled answers in lesson or project starter files
- no instructor-only folders such as `docs/`, `teaching-notes/`, or
  `wip-problems/`
- no maintainer-only agent instructions such as `AGENTS.md` or `CLAUDE.md`
- no guide-only tests that fail against blank starter files

When checking the upstream release branch from a local checkout, refresh refs
first, then inspect the remote tree:

```shell
git fetch origin main
npm run check:student-clean -- --ref origin/main
```

`Student-clean check passed.` means those top-level instructor-only paths are
not present on upstream `main`.

## Student Forks

Students may fork this repository and use their own `main` branch for notes,
scratch work, and copies of teaching notes shared during class.

Any automated student-clean check should only enforce the upstream repository,
for example:

```yaml
if: github.repository == 'chrismejia/intro-to-code-js'
```

The `Student Main Clean Check` workflow uses that condition for pull requests
and pushes to `main`, so fork-owned repos can keep local class material without
fighting upstream release rules.

Do not block fork-owned `main` pushes just because a student's fork contains a
`notes/` folder or class material they were given for their own work.
