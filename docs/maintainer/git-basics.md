# Git Basics

Use this guide when you are learning how to save work with Git. Run these commands from the repo root, which is the main `intro-to-code-js` folder.

## Useful Words

- Repo: this project folder.
- Branch: a named version of the repo. Your instructor may ask you to work on a specific branch.
- Commit: a saved checkpoint in Git.
- Remote: a copy of the repo on GitHub. Your fork is usually named `origin`.
- Working tree: the files currently open on your computer.

## Check Where You Are

Before making changes, check your branch and file status:

```shell
git status
```

You should see something like:

```shell
On branch branch-name
nothing to commit, working tree clean
```

That means Git does not see any unsaved-to-Git file changes right now. It does not mean your code editor has saved every open file, so save files in your editor before you rely on Git output.

To print only the current branch name:

```shell
git branch --show-current
```

## Save Work With Git

1. Save your file in your code editor.
2. Check what Git sees:

   ```shell
   git status
   ```

3. If a file changed, Git may show:

   ```shell
   Changes not staged for commit:
     modified:   topics/js/lessons/04-Arrays-and-Loops/01-measurer.js
   ```

4. Stage the saved changes:

   ```shell
   git add .
   ```

5. Check status again:

   ```shell
   git status
   ```

6. Git should now show:

   ```shell
   Changes to be committed:
     modified:   topics/js/lessons/04-Arrays-and-Loops/01-measurer.js
   ```

7. Create a commit:

   ```shell
   git commit -m "complete measurer exercise"
   ```

8. Push the commit to GitHub:

   ```shell
   git push
   ```

If this is the first push for a new branch, Git may ask you to set an upstream branch. Use:

```shell
git push -u origin branch-name
```

After that first push, `git push` is usually enough.

## Common Git Status Messages

`nothing to commit, working tree clean` means Git does not see any file changes to save.

`Changes not staged for commit` means Git sees saved file changes, but they are not staged yet. Run `git add .` when you are ready to include them.

`Changes to be committed` means files are staged and ready for `git commit`.

`Untracked files` means Git sees new files it has not saved before. If those files belong in your work, `git add .` will stage them.

`Your branch is ahead of 'origin/branch-name'` means you committed locally and still need to run `git push`.

## Switching Branches

To switch branches:

```shell
git checkout branch-name
```

If Git refuses to switch because you have local changes, save and commit those changes first, or ask your instructor what to do. Do not delete changes just to make the message go away.

## A Good Small Workflow

Use this loop while working:

```shell
git status
npm run test:04
git add .
git commit -m "complete unit 04 exercise"
git push
```

Run the test command that matches your lesson. The commit message should briefly describe what you finished.
