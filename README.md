# intro-to-code-js

Beginner-friendly JavaScript lessons and projects for guided practice.

This repo is organized by topic so it can grow beyond JavaScript over time. The current topic is `js`, which lives in `topics/js`.

- [intro-to-code-js](#intro-to-code-js)
  - [Repo Setup](#repo-setup)
  - [Project Layout](#project-layout)
  - [Working On Lessons](#working-on-lessons)
  - [Running Tests](#running-tests)
  - [Git Workflow](#git-workflow)
  - [More Help](#more-help)

## Repo Setup

This repo assumes you have Git, Node.js, npm, and a code editor installed. If you are using VS Code, its built-in terminal is a good place to run these commands.

1. Fork this repo using the GitHub **Fork** button.
2. On your fork, click the green **Code** button and copy the HTTPS URL.
3. Open a terminal in the folder where you keep coding projects.
4. Clone your fork. Replace `YOUR-GITHUB-USERNAME` with your GitHub username:

   ```shell
   git clone https://github.com/YOUR-GITHUB-USERNAME/intro-to-code-js.git
   ```

5. Move into the repo folder:

   ```shell
   cd intro-to-code-js
   ```

6. Add the original repo as a remote named `chris`:

   ```shell
   git remote add chris https://github.com/chrismejia/intro-to-code-js.git
   git remote -v
   ```

7. Open the repo in your code editor. In VS Code, you can run:

   ```shell
   code .
   ```

8. Install dependencies:

   ```shell
   npm install
   ```

You are in the right folder when you can see `package.json` and `topics/` in your editor. You only need to reinstall dependencies if you delete `node_modules`, update dependencies, or clone the repo again.

## Project Layout

JavaScript lessons and projects are inside the JS topic workspace:

```text
topics/
  js/
    lessons/
      01-Values-and-Data-Types/
      02-Conditionals/
      03-Methods-and-Functions/
      04-Arrays-and-Loops/
      05-Callbacks-Iterators/
      06-Objects/
      07-Adv-Objects/
      08-Async-Await-APIs/
      09-Recursion/
      10-Classes/
      11-Data-Structures/
    projects/
      Twitter/
    package.json
```

Run commands from the repo root unless your instructor tells you otherwise. The repo root is the main `intro-to-code-js` folder, the same place that contains the root `package.json`.

The root `package.json` keeps friendly command names like `npm run test:04`, and the JS workspace owns the real lesson and project paths.

## Working On Lessons

1. Make sure you are on the branch your instructor asked you to use.
2. In your editor, open `topics/js/lessons`.
3. Open the lesson folder you are working on.
4. Read the prompt and, when helpful, the matching test file.
5. Add your answer in the lesson file.
6. Save the file.
7. Run the test command for that lesson from the repo root.
8. Read the failing test output, update your answer, save, and test again.

Some lessons use one `index.js` file. Others use one file per problem, with tests in a `tests` folder and test data in a `data` folder.

Some test files may use `xdescribe` or `xit` to keep later tests inactive. When you are ready to work on that problem, remove the leading `x` so it becomes `describe` or `it`, then run the test command again.

When tests fail, look for the first failing test name and the error message below it. The output often includes a file path and line number to help you find where the test noticed the problem.

## Running Tests

From the repo root, type the command exactly as shown. These commands use a colon, like `test:01`, not a dash.

| Area                                    | Command                 |
| --------------------------------------- | ----------------------- |
| All JavaScript lesson and project tests | `npm run test:js`       |
| 01 - Values and Data Types              | `npm run test:01`       |
| 02 - Conditionals                       | `npm run test:02`       |
| 03 - Methods and Functions              | `npm run test:03`       |
| 04 - Arrays and Loops                   | `npm run test:04`       |
| 05 - Callbacks and Iterators            | `npm run test:05`       |
| 06 - Objects                            | `npm run test:06`       |
| 07 - Advanced Objects                   | `npm run test:07`       |
| 08 - Async Await APIs                   | `npm run test:08`       |
| 08 - Async Await APIs server            | `npm run server:08`     |
| 09 - Recursion                          | `npm run test:09`       |
| 10 - Classes                            | `npm run test:10`       |
| 11 - Data Structures                    | `npm run test:11`       |
| All JavaScript projects                 | `npm run test:projects` |
| Twitter project                         | `npm run test:twitter`  |

You can also run the JS workspace directly:

```shell
npm --workspace @intro-to-code/js run test:09
```

The root commands are preferred for day-to-day use because they stay stable even if lesson folders move inside the workspace.

## Git Workflow

Before starting work, make sure you are on the branch your instructor or issue asks you to use:

```shell
git status
git checkout branch-name
```

Before committing, save your files in your editor. Then use `git status` to see which files changed.

When you are ready to save your work in Git:

```shell
git status
git add .
git commit -m "describe the lesson work you completed"
git push
```

If this is the first push for a new branch, use:

```shell
git push -u origin branch-name
```

After that first push, `git push` is usually enough.

## More Help

- [Git basics](docs/git-basics.md): saving work, checking status, switching branches, and pushing commits.
- [Branching and PR workflow](docs/pr-workflow.md): issue branches, pull requests, and target branches for contributor work.
- [Maintainer guide](docs/maintainer-guide.md): repo organization notes for adding topics, moving lessons or projects, updating scripts, or writing future contributor/agent instructions.
