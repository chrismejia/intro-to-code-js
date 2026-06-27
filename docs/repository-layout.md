# Repository Layout

This repo uses npm workspaces lightly so each curriculum topic can own its lessons, projects, and package scripts while the repo root keeps friendly commands.

## Current Layout

```text
.
|-- package.json
|-- topics/
|   `-- js/
|       |-- lessons/
|       |-- projects/
|       `-- package.json
|-- docs/
|-- scripts/
|-- base/
|-- teaching-notes/
`-- wip-problems/
```

`topics/js` is the JavaScript topic workspace. Lessons live under `topics/js/lessons`, and JavaScript projects live under `topics/js/projects`.

Root-level support folders such as `docs`, `scripts`, `base`, `teaching-notes`, and `wip-problems` are shared repository material rather than student topic content.

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
    "test:jest": "node --experimental-vm-modules ../../node_modules/jest/bin/jest.js --config ./jest.config.cjs --runInBand --ci",
    "test:09": "npm run test:jest -- lessons/09-Recursion/tests",
    "test:projects": "npm run test:jest -- projects"
  }
}
```

This keeps docs, CI, and muscle memory stable if topic internals move later.

For the JS workspace, Jest configuration lives in `topics/js/jest.config.cjs`. The shared `test:jest` script owns the Jest invocation, native ESM flag, serial execution, and CI mode. Per-lesson scripts should pass only the lesson or project path into that shared runner.

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
- `main`: student-facing release branch. Current files should not contain answers or instructor-only material.

Do not merge answer-rich instructor work directly into `main`.

Testing should follow the same audience split. Pull requests targeting `0X-Guide` should run active guide tests and expect them to pass against answer-bearing files. Student-facing `main` should keep tests pending, skipped, or otherwise safe for starter-code files.

## Future AGENTS.md Guidance

When `AGENTS.md` is committed later, keep it short and point to this file for details. A useful starter note would be:

```markdown
Before editing layout, scripts, CI, lessons, or projects, read:

- docs/maintainer-guide.md
- docs/pr-workflow.md
- docs/repository-layout.md

Keep root package scripts as stable aliases. Topic workspaces own real lesson and project paths.
```

That gives coding agents a durable map without making `AGENTS.md` repeat every repo detail.
