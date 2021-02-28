# intro-to-code-js

Below is a collection of Javascript problems aimed at beginners to test their understanding as they learn.

- [intro-to-code-js](#intro-to-code-js)
  - [Repo Setup](#repo-setup)
    - [Forking and cloning the repo to your systema](#forking-and-cloning-the-repo-to-your-systema)
    - [Adding the original repo as a remote](#adding-the-original-repo-as-a-remote)
    - [Installing repo dependencies (one-time)](#installing-repo-dependencies-one-time)
  - [Working on problems, running tests and saving your work](#working-on-problems-running-tests-and-saving-your-work)
    - [Checking the test environment](#checking-the-test-environment)
    - [Reading Errors](#reading-errors)
    - [Working on problems](#working-on-problems)
    - [Activating the tests for a new problem in a unit](#activating-the-tests-for-a-new-problem-in-a-unit)
    - [Test commands for each unit](#test-commands-for-each-unit)
    - [How to switch branches](#how-to-switch-branches)
    - [Saving your progress by committing and pushing your work](#saving-your-progress-by-committing-and-pushing-your-work)
      - [Adding, committing and pushing](#adding-committing-and-pushing)

## Repo Setup

This repo assumes you have git, node and a code editor of your choosing ready to go.

If not, there are plenty of guides to setting these up on your OS (Windows, Mac, Linux) available on Youtube.

### Forking and cloning the repo to your systema

1. Fork repo using the 'Fork' button. It'll fork this repo to your account.
2. Click the green `↓ Code` button
3. The address that appears will be used to clone your fork to your system. Copy that address.
4. Open a terminal at your Programming folder in one of two ways.
   1. Open File Browser and navigate to your `Programming` folder. Right click inside the folder and select `Git Bash Here`.
   2. Open a terminal window. Navigate to your Programming folder.
5. Terminal, clone the repo into your Programming folder: `git clone paste-the-clone-address-here`

### Adding the original repo as a remote

1. Terminal: Jump into the folder your just cloned: `cd intro-to-code-js`.
2. Check the available git repo remote: `git remote -v`

   1. You should see your `origin` fetch and push location specified like so.

```shell
origin	https://github.com/{your-github-username}/intro-to-code-js.git (fetch)
origin	https://github.com/{your-github-username}/intro-to-code-js.git (push)
```

3. Terminal: add a remote named 'Chris' using my repo link: `git remote add chris https://github.com/chrismejia/intro-to-code-js.git`
4. Check that the new git remote is added: `git remote -v`

```shell
git remote -v

origin	https://github.com/{your-github-username}/intro-to-code-js.git (fetch)
origin	https://github.com/{your-github-username}/intro-to-code-js.git (push)
chris	https://github.com/chrismejia/intro-to-code-js.git (fetch)
chris	https://github.com/chrismejia/intro-to-code-js.git (push)
```

### Installing repo dependencies (one-time)

1. Open the repo in your code editor (example instructions are for VSCode):
   1. Open File Browser and navigate to your `Programming` folder. Right click inside the folder and select `Open in VSCode`.
   2. Open a terminal window. Navigate to your `intro-to-code-js` folder, then `code .`. VSCode should open the `intro-to-code-js` folder.
2. Open VSCode Terminal: Ctrl + `
3. Switch to branch of first unit: `git checkout 01-Values-Types`
   1. You should then see folders and files populate in.
4. Install repo dependencies: `npm install`
5. After the install, in your code editor, open the file `package.json`

NB: You only need to re-install if you delete your local repo from your system and re-clone from your github.

## Working on problems, running tests and saving your work

**NB: This section will use the first unit, `01-Values-Types`, as the example.**

### Checking the test environment

Before you first start working on problems in a new unit, [run the test command for that unit](#test-commands-for-each-unit) in a terminal.

```shell
npm run test-01

> intro-to-code-js@1.4.1 test-01
> mocha './01-Values-and-Data-Types/**.js'

  01 - Values and Types
    #1: What's your name?
      The variable myFirstName
        1) should be a string
        2) should not be an empty string
    #2: What's your age?
      The variable myAge
        - should be a number
    #3: In fact, it's super fun
      The variable codingIsFun
        - should be a boolean value
        - should confirm that it's in fact fun to code ;p
    #4: Null and undefined
      - isNull -> should have a `null` value
      - isUndefined -> should have an `undefined` value
    #5: Quickest Math Class Ever
      Variable declarations and value assignements
        - numA -> assigned a number value of 15
        - numB -> assigned a number value of 3
      Math operations
        - addedTo -> expression assignment evaluates to 18
        - subtractedBy -> expression assignment evaluates to 12
        - multipliedBy -> expression assignment evaluates to 45
        - dividedBy -> expression assignment evaluates to 5
        - moduloOf -> expression assignment evaluates to 0
    #6: Numbers and words, all together
      - myDetails -> is a string
      - myDetails features the value of myFirstName
      - myDetails features the value of myAge


  0 passing (9ms)
  15 pending
  2 failing

  1) 01 - Values and Types
       #1: What's your name?
         The variable myFirstName
           should be a string:
     ReferenceError: myFirstName is not defined
      at Context.<anonymous> (01-Values-and-Data-Types/index.js:96:16)
      at processImmediate (internal/timers.js:458:21)

  2) 01 - Values and Types
       #1: What's your name?
         The variable myFirstName
           should not be an empty string:
     ReferenceError: myFirstName is not defined
      at Context.<anonymous> (01-Values-and-Data-Types/index.js:100:16)
      at processImmediate (internal/timers.js:458:21)
```

If your output looks similar to this, you're in shape to [start working on problems](#working-on-problems).

### Reading Errors

As seen in the section above, [when you run a test, you'll see a bunch of test criteria appear](#checking-the-test-environment) followed by a report detailing how the tests went:

```shell
  0 passing (9ms)
  15 pending
  2 failing
```

In this case, we're failing two tests and those two test have produced errors:

```shell
  01 - Values and Types
    #1: What's your name?
      The variable myFirstName
        1) should be a string
        2) should not be an empty string

  ... other tests omitted for brevity ...

  1) 01 - Values and Types
       #1: What's your name?
         The variable myFirstName
           should be a string:
     ReferenceError: myFirstName is not defined
      at Context.<anonymous> (01-Values-and-Data-Types/index.js:96:16)
      at processImmediate (internal/timers.js:458:21)

  2) 01 - Values and Types
       #1: What's your name?
         The variable myFirstName
           should not be an empty string:
     ReferenceError: myFirstName is not defined
      at Context.<anonymous> (01-Values-and-Data-Types/index.js:100:16)
      at processImmediate (internal/timers.js:458:21)
```

Each failing test has a number that corresponds to its error. Check the details of the errors you get in order figure out what you need to fix in your answer.

### Working on problems

Open the folder for the unit you're working on. Inside you should see an `index.js` file.

Read through the problem prompts and add your code in the space noted.

When you have an answer you'd like to to test, you can [run the test command for the unit](#test-commands-for-each-unit) you're working on in a terminal.

Once you have the correct answer, your tests will report as passing.

```shell
  01 - Values and Types
    #1: What's your name?
      The variable myFirstName
        ✓ should be a string
        ✓ should not be an empty string

  ... other tests omitted for brevity ...

  2 passing (4ms)
  15 pending

```

### Activating the tests for a new problem in a unit

Once you're done with a problem, you can move onto the next problem by activating it.

You activate a set of tests by removing the `x` in `xdescribe` for the problem you want to work on in the test section under all the problems.

Let's activate problem `#2: What's your age?`.

```js
describe("01 - Values and Types", () => {

  // describe block for first test omitted...

  REMOVE this 'x' so it reads describe
  ↓
  xdescribe("#2: What's your age?", () => {
    describe("The variable myAge", () => {
      it("should be a number", () => {
        expect(myAge).to.be.a("number");
      });
    });
  });

  // describe blocks for further tests omitted..
});
```

When you run the test command again, that test will be active and failing. Like the first problem's tests, it will report test errors after the unit's test status. You can begin working on that problem now.

```shell
npm run test-01

> intro-to-code-js@1.4.1 test-01
> mocha './01-Values-and-Data-Types/**.js'

  01 - Values and Types
    #1: What's your name?
      The variable myFirstName
        ✓ should be a string
        ✓ should not be an empty string
    #2: What's your age?
      The variable myAge
        1) should be a number

  ... other tests omitted for brevity ...

  2 passing (10ms)
  14 pending
  1 failing

  1) 01 - Values and Types
       #2: What's your age?
         The variable myAge
           should be a number:
     ReferenceError: myAge is not defined
      at Context.<anonymous> (01-Values-and-Data-Types/index.js:108:16)
      at processImmediate (internal/timers.js:458:21)
```

### Test commands for each unit

**NB: If you have uncommited work, you will not be able to switch branches until [your work is committed.](#saving-your-progress-by-committing-and-pushing-your-work)**

You need to be on the corresponding branch for that unit's test command to work.

| Branch                   | Test Command      |
| ------------------------ | ----------------- |
| 01-Values-Types          | `npm run test-01` |
| 02-Conditionals          | `npm run test-02` |
| 03-Methods-and-Functions | `npm run test-03` |
| 04-Arrays-and-Loops      | `npm run test-04` |

etc...

### How to switch branches

**NB: If you have uncommited work, you will not be able to switch branches until [your work is committed.](#saving-your-progress-by-committing-and-pushing-your-work)**

To switch to another branch: `git checkout branch-name-goes-here`.

### Saving your progress by committing and pushing your work

The steps to the commit process are:

- Your files are saved in your code editor
- Your files are staged and ready to commit
- Your files have been committed locally with a short message detailing changes made
- Your commit has been pushed up to your remote ()

#### Adding, committing and pushing

1. Make sure all your files are saved in your code editor.
2. Terminal, see the file(s) that haven't been staged/tracked for a commit: `git status`

```shell
git status

On branch 01-Values-Types

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   01-Values-and-Data-Types/index.js

no changes added to commit (use "git add" and/or "git commit -a")
```

3. Terminal, stage all saved files in your work folder: `git add .`

   1. You can `git status` here to check that your file(s) have been staged correctly.

```shell
git status

Changes to be committed:
(use "git restore --staged <file>..." to unstage)
  modified:   01-Values-and-Data-Types/index.js
```

4. Commit your files to your fork with a message, one that is short and details changes made since the last commit (e.g. if message was "added answers to #3 and #4 of Unit 2"):
   1. `git commit -m "added answers to #3 and #4 of Unit 2"`
5. Check your working tree using `git status`. It should resemble this:

```shell
git status

On branch 01-Values-Types
Your branch is ahead of 'origin/01-Values-Types' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

6. Push this local commit to your repo (e.g. if you were on the branch `01-Values-Types`):
   1. If this is your first commit to THIS branch: `git push -u origin 01-Values-Types`
   2. Otherwise, `git push`.
7. Open your web browser to your repo and select the branch you just pushed to from the dropdown (should say 'main') in the top-left, below the 'Code' tab.
8. You should see your latest commit and message up top above the repo.
9. You are now free to [switch branches](#switching-branches) or continue working.
