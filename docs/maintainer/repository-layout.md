# Repository Layout

This repo uses npm workspaces lightly so each curriculum topic can own its lessons, projects, and package scripts while the repo root keeps friendly commands.

## Current Layout

```text
.
|-- AGENTS.md
|-- CLAUDE.md
|-- package.json
|-- topics/
|   `-- js/
|       |-- lessons/
|       |-- projects/
|       `-- package.json
|-- docs/
|   |-- agent-guidance/
|   |-- authoring/jsdoc-prompts/
|   |-- curriculum/
|   |-- maintainer/
|   `-- planning/
|-- scripts/
|-- teaching-notes/
`-- wip-problems/
    |-- candidates/
    |   |-- data/
    |   `-- tests/
    |-- debug/
    |   |-- data/
    |   `-- tests/
    `-- ideas/
```

`topics/js` is the JavaScript topic workspace. Lessons live under `topics/js/lessons`, and JavaScript projects live under `topics/js/projects`.

Root-level support folders such as `docs`, `scripts`, `teaching-notes`, and
`wip-problems` are shared repository material rather than
student topic content. `AGENTS.md` and `CLAUDE.md` are maintainer/agent guidance
files, not student-facing curriculum.

## Script Ownership

The root `package.json` should keep stable aliases that are easy to remember:

```shell
npm run test:01
npm run test:09
npm run test:projects
```

Those root aliases should delegate into a topic workspace:

```shell
npm --workspace @intro-to-code/js run test:09
```

The topic workspace package should own the real filesystem paths, such as:

```json
{
  "scripts": {
    "test:jest": "node --experimental-vm-modules ../../node_modules/jest/bin/jest.js --config ./jest.config.js --runInBand --ci",
    "test:09": "npm run test:jest -- lessons/09-Recursion/tests",
    "test:projects": "npm run test:jest -- projects"
  }
}
```

This keeps docs, CI, and muscle memory stable if topic internals move later.

For the JS workspace, Jest configuration lives in `topics/js/jest.config.js`. The shared `test:jest` script owns the Jest invocation, native ESM flag, serial execution, and CI mode. Per-lesson scripts should pass only the lesson or project path into that shared runner.

## Adding Topics

Future topics should follow the same shape:

```text
topics/
  ts/
    lessons/
    projects/
    package.json
  react/
    lessons/
    projects/
    package.json
```

Use package names like `@intro-to-code/ts` or `@intro-to-code/react`, then add root aliases only for commands that learners, maintainers, or CI will run regularly.

## Adding Or Moving Lessons And Projects

When adding or moving curriculum content:

1. Put lesson material under `topics/<topic>/lessons`.
2. Put larger build exercises under `topics/<topic>/projects`.
3. Keep tests close to the lesson or project they validate.
4. Update the topic workspace scripts first.
5. Add or update root script aliases when the command should be public.
6. Update CI if the command should run on pull requests.
7. Update README and issue templates when learner-facing paths or command names change.

## Branch Audiences

The repo has different audiences across branches:

- `0X-Guide`: instructor source of truth. Guide tests should run real unit tests and pass.
- `dev`: student-release staging branch. Use it to prepare a clean student version before release.
- `main`: student-facing release branch. Current files should not contain answers, instructor-only material, or maintainer-only agent guidance.

Do not merge answer-rich instructor work directly into `main`.

Testing should follow the same audience split. Pull requests targeting `0X-Guide` should run active guide tests and expect them to pass against answer-bearing files. Student-facing `main` should keep tests pending, skipped, or otherwise safe for starter-code files.

More detailed branch-specific testing and release cleanup expectations live in
[Testing branch behavior](testing-branch-behavior.md).

## WIP Problem Areas

Keep unfinished problem work under `wip-problems/` and classify it by purpose:

- `candidates/`: new problem source files, test files, and reusable fixture data. `scripts/generateFiles.sh` creates its three-file starter set here.
- `debug/`: temporary debugging exercises and their local data/tests.
- `ideas/`: problem ideas and organization notes that are not executable work.

WIP files are instructor-only and are intentionally removed before a student
release. Do not create a generic shared `common/` folder for helpers; keep
helpers scoped to the topic or test-support area that owns them.

## Agent Guidance Files

`AGENTS.md` and `CLAUDE.md` are for maintainers and coding agents working on
guide/source branches. Keep them short, actionable, and linked to detailed docs
instead of duplicating every rule inline.

Before editing layout, scripts, CI, lessons, tests, or branch/release behavior,
agents should read:

- docs/maintainer/maintainer-guide.md
- docs/maintainer/pr-workflow.md
- docs/maintainer/repository-layout.md
- docs/maintainer/js-testing.md
- docs/maintainer/testing-branch-behavior.md

Strip `AGENTS.md` and `CLAUDE.md` before releasing to upstream `main`; they are
not student-facing files.

## Deliberate file scaffolding ramp

There's one important note about the first 3 folders of the `topics/js/lessons`: `01-Values-and-Data-Types`, `02-Conditionals`, `03-Methods-and-Functions`. The agent should keep the scaffolding consistent when adding/updating lessons in this sequence.

### `01-Values-and-Data-Types`

The first lesson folder is deliberately made up of:

- the single `index.js` file, which contains all of the lesson's problems and starter code
- the single `01-valuesTypes.test.js` file, which contains the tests for the lesson content

```
topics/js/lessons/01-Values-and-Data-Types/
├── index.js                  # single file for all lesson problems and starter code
└── 01-valuesTypes.test.js    # single test file for all lesson problems
```

This structure is intentionally simple and flat, so that the student can focus on the lesson content and not be distracted by a complex file structure.

### `02-Conditionals`

The second lesson folder expands the scaffolding slightly to include:

- the single `index.js` file, which contains all of the lesson's problems and starter code
- a tests folder, which contains individual test files for each problem in the lesson, like `01-logicallySpeaking.test.js`, `02-fiveCharacters.test.js`, `03-numberOrString.test.js`, etc.

```
topics/js/lessons/02-Conditionals/
├── index.js                          # single file for all lesson problems and starter code
└── tests/                            # folder with individual test files for each problem in index
    ├── 01-logicallySpeaking.test.js
    ├── 02-fiveCharacters.test.js
    ├── 03-numberOrString.test.js
    └── ...
```

This structure is still relatively simple, but it introduces the idea of organizing tests into separate files for each problem, which is a common practice in larger projects.

### `03-Methods-and-Functions` and further lessons

From this third lesson folder onward, the scaffolding is more complex and includes:

```
topics/js/lessons/03-Methods-and-Functions/
├── 01-helloWorld.js                  # each problem has its own file for starter code
├── 02-helloWorldRedux.js
├── ...
└── tests/                            # folder with individual test files for each problem in the lesson
    ├── 01-helloWorld.test.js
    ├── 02-helloWorldRedux.test.js
    └── ...
```

This structure is more representative of real-world projects, where each function or module has its own file, and tests are organized in a parallel structure.
