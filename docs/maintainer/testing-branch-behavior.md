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

## Lesson Documentation Flow

Use this policy for learner-facing lesson notes and the instructor material
that supports them. The branch determines which audience owns the current
version of a note.

### `0X-Guide`

`0X-Guide` is the source of truth for lesson content. Instructors may update
learner-facing notes alongside answer-bearing lesson files and may keep
instructor-only explanations in `docs/`, `teaching-notes/`, or `wip-problems/`.

Keep the learner-facing note complete enough to use without the instructor
material. Link to related lesson files, exercises, or public setup guidance
when that helps a student follow the lesson.

### `dev`

`dev` stages the next student release. Bring the intended note changes from
`0X-Guide` into `dev`, then review the resulting tree as a student would see
it. During this review:

1. Keep learner-facing notes that explain the released starter code.
2. Remove instructor-only notes and references to files that will be removed.
3. Rewrite links, examples, and commands that depend on answer-bearing or
   instructor-only material.
4. Confirm the note describes the student version, including any skipped or
   starter-safe tests.

Resolve documentation drift in the staging branch before the release pull
request. Do not use release cleanup to hide missing guide content; restore the
source note on `0X-Guide` when the guide is incomplete.

### Upstream `main`

`main` contains the student-facing release. It must not contain instructor-only
paths such as `docs/`, `teaching-notes/`, `wip-problems/`, `AGENTS.md`, or
`CLAUDE.md`. Therefore, a note stored in one of those paths is guide material,
not a student-facing note, even if it discusses a lesson.

Before merging `dev` into upstream `main`, check that learner-facing notes:

- link only to files and commands present in the student release;
- do not reveal answers or rely on instructor-only explanations;
- use the same lesson names, paths, and test commands as the release; and
- remain readable without repository-maintainer context.

The existing `check:student-clean` guard verifies the top-level instructor-only
paths. It does not decide whether prose is instructional or whether a link is
correct, so the release review must perform those content checks as well.

### Documentation validation

Lesson notes are Markdown content, not executable lesson answers. Validate them
at the boundary where they change:

- Use `git diff --check` for whitespace errors.
- Review every relative link and command against the target branch's current
  tree.
- Run the affected lesson test command when a note changes its instructions or
  examples. On `0X-Guide`, active guide tests should pass; on `dev`, tests must
  be starter-safe before release.
- Run `npm run check:student-clean` for the upstream release tree. This is a
  path guard and does not replace the note review above.

Do not add a documentation-only lint requirement that would reject valid
student-authored notes in fork-owned branches. If a future automated Markdown
check is introduced, scope it to the upstream release workflow and keep content
that is intentionally local to student forks out of that check.
