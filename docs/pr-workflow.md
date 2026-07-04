# Branching And PR Workflow

Use this guide when working on issue branches and pull requests for this repo. This is mostly for maintainers, instructors, and contributors working from GitHub issues.

## Branch Roles

- `0X-Guide`: instructor source of truth.
- Feature branch, such as `feat/142`: groups related issue work before it returns to `0X-Guide`.
- Issue branch, such as `CODE-164-update-readme-and-docs-for-topics-layout`: handles one focused issue.
- `dev`: staging branch for preparing student-facing releases.
- `main`: student-facing release branch.

For the current #142/#152 organization work, the normal flow is:

```text
0X-Guide -> feat/142 -> CODE-### issue branch -> PR back to feat/142 -> final PR to 0X-Guide
```

## Start An Issue Branch

Begin from an updated feature branch:

```shell
git checkout feat/142
git pull
```

Create the issue branch:

```shell
git checkout -b CODE-164-update-readme-and-docs-for-topics-layout
```

Use a branch name that includes the issue number and a short description. Keep the work scoped to that issue.

## Before Editing

Check the branch and worktree:

```shell
git status -sb
```

If there are unrelated local changes, do not overwrite them. Either leave them alone or ask before changing files that already have someone else's edits.

## Make And Verify Changes

Edit the smallest set of files that solves the issue.

Run the commands that prove the change is wired correctly. Examples:

```shell
npm pkg get workspaces scripts.test:js
npm run check:focused-tests
npm run test:09
git diff --check
```

If a test reaches the correct path but fails because of a known follow-up issue, include that in the PR description.

## Commit And Push

Review the diff:

```shell
git diff
git status -sb
```

Stage and commit:

```shell
git add .
git commit -m "update README and docs for topic layout"
```

Push the issue branch:

```shell
git push -u origin CODE-164-update-readme-and-docs-for-topics-layout
```

## Open The PR

For issue branches under the feature branch, open the PR into the feature branch, not directly into `0X-Guide`:

```text
base: feat/142
compare: CODE-164-update-readme-and-docs-for-topics-layout
```

Use this PR description shape:

```markdown
## Description:

- 

### Instructions for testing:

- 

---

### Issues:

Closes #164
Parent #152
Epic #142
```

## After Merge

After the PR merges, update the feature branch locally:

```shell
git checkout feat/142
git pull
```

Then branch from the updated feature branch for the next issue.

## Target Branch Check

Use the target branch that matches the audience:

- Instructor/content work targets `0X-Guide` or a feature branch that will return to `0X-Guide`.
- Student-release cleanup targets `dev`.
- Student-facing final release targets `main`.

Do not open answer-rich instructor work directly into `main`.

Before opening a `dev` to `main` release PR, read
[Testing branch behavior](testing-branch-behavior.md). The upstream
`chrismejia/intro-to-code-js` `main` tree should be student-clean, while
student forks are allowed to keep personal notes or class material on their own
branches.
