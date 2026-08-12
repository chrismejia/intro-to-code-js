# Release Versioning And Tagging Strategy

This document proposes how to handle SemVer, releases, and tags for this repo's
split audience model.

The short version:

- Treat `main` as the only canonical student-facing release stream.
- Use plain SemVer tags on `main`, matching the repo's existing numeric tag
  style: `2.3.0`, `2.3.1`, `3.0.0`.
- Use `dev` for student-release cleanup work, not stable tags.
- Use `0X-Guide` as the instructor source of truth. If guide snapshots need
  tags, put them in a separate namespace such as `guide/2.3.0`.
- Keep root `package.json`, topic workspace versions, `package-lock.json`, and
  release tags in sync.
- Keep the default automation small: extend the existing `main` check, add one
  version-sync script, and add one manual release workflow.

## Current Findings

The current repo already has the pieces needed for a clean release model:

- Branch audience is documented:
  - `0X-Guide` is instructor source of truth.
  - `dev` is student-release staging.
  - `main` is student-facing.
- Root `package.json` is private and currently uses version `2.2.0`.
- `topics/js/package.json` is also private and currently uses version `2.2.0`.
- Existing tags are annotated numeric SemVer tags, not `v`-prefixed tags:
  - `1.0.0`
  - `1.1.0`
  - `2.2.0`
- The repository does not maintain a `CHANGELOG.md`; Git history, GitHub
  releases, and release tags are the version-history sources.
- CI already separates the two highest-risk checks:
  - PRs into `0X-Guide` run guide unit tests.
  - PRs and pushes to upstream `main` run the student-clean check.
- `scripts/checkStudentClean.mjs` currently blocks top-level instructor-only
  paths on upstream `main`. It does not yet prove that every starter file is
  blank or that every active test is starter-safe.

Those findings point toward a release model where `main` gets stable SemVer
tags only after `dev` has been cleaned and checked, while `0X-Guide` keeps its
own optional guide snapshots.

## Streamlining Review

The first version of this plan separated every concern into its own release
piece. That is clear, but it creates more process than this repo needs today.

Streamline the plan this way:

1. Do not create release-candidate tags by default. A `dev` commit SHA and the
   `dev` to `main` PR are enough for normal classroom releases.
2. Do not add a separate release-candidate workflow yet. Expand the existing
   `main-student-clean.yml` workflow so PRs to `main` run all required release
   checks in one place.
3. Do not add changelog automation. If version automation is introduced, keep
   its policy and checks in this planning document until a dedicated guide is
   warranted.
4. Do not require guide snapshot tags for every release. Keep `guide/<version>`
   as an optional recovery tag when a guide commit is worth preserving.
5. Do not overfit answer-leak detection immediately. Start with reliable
   forbidden-path checks, version sync, and starter-safe test checks, then add
   answer-pattern checks only after the repo has known patterns worth enforcing.

The streamlined target is:

```text
0X-Guide -> dev cleanup -> PR to main -> main checks -> merge -> release tag
```

Optional extras stay available, but they should not be part of the everyday
release path unless the release is unusually large or risky.

## What SemVer Means Here

This repo is not published as a package, so SemVer should describe the
student-facing curriculum contract rather than a library API.

Use this interpretation:

| Bump    | Use When                                                                                                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PATCH` | Fix typos, starter-code bugs, broken student-safe tests, setup instructions, or small clarifications that do not change the expected learner workflow.                                                                     |
| `MINOR` | Add a lesson, problem, project, command, or optional learner capability without breaking existing assignments or paths.                                                                                                    |
| `MAJOR` | Rename or remove lessons, renumber units, change required Node/npm major versions, change core test commands, restructure learner paths, or otherwise break existing student forks, assignments, or instructor references. |

Instructor-only changes on `0X-Guide` do not require a student release bump
until they are prepared for `main`. A large guide-only answer restoration can
still be important, but it should not create a stable student release tag by
itself.

## Tag Rules

### Stable Student Tags

Stable tags should point only at commits reachable from upstream `main`.

Recommended format:

```text
2.3.0
2.3.1
3.0.0
```

Reasoning:

- The repo already uses numeric tags.
- The root and JS workspace packages already use numeric versions.
- Avoiding a convention switch prevents future confusion such as `2.2.0` and
  `v2.3.0` living side by side.

If the repo ever decides to switch to `v`-prefixed tags, do it intentionally in
one release note and keep that convention forever after. Do not mix styles
casually.

### Release Candidate Tags

Release candidates are optional and should not be the default. Use them only
when a student release needs a named checkpoint before the final `dev` to
`main` merge.

Recommended format:

```text
2.3.0-rc.1
2.3.0-rc.2
```

Rules:

- RC tags may point at `dev`.
- RC tags must be GitHub prereleases, not stable releases.
- RC tags must not be treated as classroom distribution points unless the
  instructor explicitly tells students to use that tag.

### Guide Snapshot Tags

Guide snapshots should never reuse the stable student tag name. If a guide
commit needs to be recoverable, tag it under a namespace:

```text
guide/2.3.0
guide/2.3.1
```

Meaning:

- `2.3.0` points to the student-clean `main` release.
- `guide/2.3.0` points to the answer-bearing guide commit that supplied the
  content for that student release.

This keeps the two audiences separate even when the lesson structure matches.

## Version Sources

Use the root `package.json` version as the release version for the repo.

Keep these files synchronized for every stable release:

```text
package.json
package-lock.json
topics/js/package.json
```

For now, the root package and topic package should share the same version. If
future topics ship on independent schedules, revisit this and introduce topic
release tracks such as `js/3.0.0`. Until then, one repo version is simpler for
students and instructors.

## Release Flow

The normal release flow should stay compact:

```text
0X-Guide
    |
    | merge desired curriculum changes
    v
dev
    |
    | strip answers, remove guide-only files,
    | make tests starter-safe, bump version
    v
PR to main
    |
    | student-clean + version-sync checks
    v
main
    |
    | manual release workflow
    v
2.3.0
```

Only use named RC tags and guide snapshots when they solve a concrete release
problem:

```text
0X-Guide o-------------------------o
         |                         |
         |                         `-- guide/2.3.0
         |
         v
dev      o---- cleanup ---- rc ----o
                              \
                               `-- 2.3.0-rc.1
                                    |
                                    v
main                             release
                                    |
                                    `-- 2.3.0
```

## Human Checklist

Before opening the release PR from `dev` to `main`:

1. Merge or cherry-pick the intended guide changes into `dev`.
2. Remove answers from lesson and project starter files.
3. Remove instructor-only material from the current tree:
   - `AGENTS.md`
   - `docs/`
   - `teaching-notes/`
   - `wip-problems/`
4. Convert guide-only tests to `describe.skip`, `it.skip`, `test.skip`, or a
   starter-safe harness.
5. Choose the SemVer bump from the student-facing impact.
6. Update root and workspace versions.
7. Run release checks locally when possible.
8. Open `dev` to `main`.
9. Merge only after CI proves the tree is student-clean.
10. Create the stable tag from the merged `main` commit.

## Local Commands

These commands are the minimum local release checks once `dev` is ready:

```shell
git status -sb
npm ci
npm run check:focused-tests
npm run check:student-clean
npm run check:version-sync
```

Run any student-safe test commands that are expected to remain active on
`main`. Do not run guide-only answer tests as a blocker on the blank student
tree unless they have been intentionally converted to starter-safe behavior.

To bump versions without creating a tag locally:

```shell
npm version 2.3.0 --workspaces --include-workspace-root --no-git-tag-version
```

Then review:

```shell
git diff package.json topics/js/package.json package-lock.json
```

If the repo keeps numeric tags, configure automation with an empty npm tag
prefix if `npm version` is ever allowed to create tags:

```shell
npm config set tag-version-prefix ""
```

## Automation To Add

The release process should be automated in the fewest pieces that still make
failures easy to understand.

### Implementation Map

These are the repo parts needed for the streamlined automation:

```text
package.json
|-- add check:version-sync

scripts/
|-- checkVersionSync.mjs
`-- checkStudentClean.mjs        existing, expand carefully

.github/workflows/
|-- main-student-clean.yml       existing, expand into PR-to-main release gate
`-- release.yml                  new manual stable tag and GitHub Release flow

docs/
|-- release-versioning-strategy.md
`-- maintainer-guide.md          link to this strategy
```

### 1. Version Sync Check

Add a script such as `scripts/checkVersionSync.mjs`.

Responsibilities:

- Read root `package.json`.
- Read every `topics/*/package.json`.
- Confirm all topic package versions match the root version.
- Confirm `package-lock.json` records the same versions.
- When running for a tag, confirm the tag name equals the package version.

Suggested package script:

```json
{
  "scripts": {
    "check:version-sync": "node scripts/checkVersionSync.mjs"
  }
}
```

### 2. Stronger Student-Clean Check

Extend `scripts/checkStudentClean.mjs` over time.

Current coverage:

- Blocks top-level instructor-only files and directories on upstream `main`.

Recommended additions:

- Block known answer-bearing patterns in starter files.
- Block `docs/`, `teaching-notes/`, `wip-problems/`, and `AGENTS.md`
  anywhere they could accidentally move.
- Optionally require tests under student `main` to use starter-safe skip APIs
  unless a test suite is explicitly allowed to run against blank starter code.
- Print actionable paths for every failure.

Do this carefully. False positives during a release are frustrating, so start
with narrow, known-bad patterns and expand as the repo learns.

### 3. Main Release Gate

Expand the existing `.github/workflows/main-student-clean.yml` workflow instead
of adding a second PR-to-main workflow.

Suggested behavior:

```text
on pull_request to main:
  checkout
  setup node
  npm ci
  npm run check:focused-tests
  npm run check:student-clean
  npm run check:version-sync
```

Rename the workflow later if the broader name becomes useful. The important
part is that PRs into `main` have one obvious release gate.

### 4. Stable Release Workflow

Add a workflow that creates the final tag only after `main` has the release
commit.

Suggested file:

```text
.github/workflows/release.yml
```

Suggested trigger:

```yaml
on:
  workflow_dispatch:
    inputs:
      version:
        description: "Release version, for example 2.3.0"
        required: true
      guide_ref:
        description: "Optional 0X-Guide commit to tag as guide/<version>"
        required: false
```

Suggested workflow responsibilities:

- Run only on upstream `chrismejia/intro-to-code-js`.
- Check out `main`.
- Install dependencies.
- Run:
  - `npm run check:focused-tests`
  - `npm run check:student-clean`
  - `npm run check:version-sync -- --version <input>`
- Verify the current branch is `main`.
- Verify the tag does not already exist.
- Create an annotated stable tag:

  ```shell
  git tag -a 2.3.0 -m "Release 2.3.0"
  git push origin 2.3.0
  ```

- Create a GitHub Release for the tag.
- If `guide_ref` is provided, create an annotated guide snapshot tag:

  ```shell
  git tag -a guide/2.3.0 <guide_ref> -m "Guide snapshot for release 2.3.0"
  git push origin guide/2.3.0
  ```

Use `contents: write` permissions only in this release workflow. Keep regular
PR check workflows read-only.

### 5. Changelog Heading

Use one predictable heading format so `checkVersionSync.mjs` can verify it:

```markdown
### Version 2.3.0
```

The first cleanup task should backfill missing `2.2.0` notes or explicitly mark
them as historical.

## Branch Protection Recommendations

For `0X-Guide`:

- Require the guide unit-test workflow on PRs.
- Require focused-test guard.
- Do not require student-clean checks.

For `dev`:

- Require focused-test guard when possible.
- Use it as a staging branch, not a permanent release history guarantee.
- Allow answer-stripping commits here because that is its job.

For `main`:

- Require student-clean check.
- Require version-sync check.
- Require the expanded `main` release gate workflow.
- Restrict direct pushes if possible.
- Allow stable tags only from the release workflow.

## One-Time Cleanup

Before the next release, do these cleanup tasks:

1. Decide whether to keep numeric tags. Recommendation: keep them.
2. Decide whether automated version synchronization is worth adding; document
   the chosen policy here before implementing it.
3. Add `check:version-sync` if that policy is approved.
4. Expand `main-student-clean.yml` to run `check:version-sync`.
5. Expand `check:student-clean` enough to catch the current highest-risk answer
   leaks.
6. Add manual stable release workflow for tagging `main`.
7. Document the first release after this strategy as the point where the new
   process begins.

## Recommended Policy

Use this as the repo policy:

```text
Stable SemVer tags belong to student-clean main.
Guide state may be tagged, but only under guide/<version>.
dev may get release-candidate tags for exceptional releases, never stable tags.
Package versions and release tags must match when a versioned release is made.
No tag is created until the branch's audience-specific checks pass.
```

This keeps the repo honest about what students receive while still making the
instructor source recoverable.
