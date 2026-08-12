# Issue 152 Organization Proposal

## Recommendation

Use `topics/` as the long-term curriculum root, and make each topic a small npm
workspace when it needs its own scripts, dependencies, or tooling.

For issue #152, I would make the first implementation intentionally boring:

```text
topics/
  js/
    package.json
    README.md
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
        01-maxCharCount.js
        tests/
          01-maxCharCount.test.js
```

This directly satisfies issue #152 while also absorbing the direction from PRs
#149, #150, #151, and #153:

- The renamed post-async lessons remain in their new order.
- `projects` becomes part of the JavaScript topic instead of living beside it.
- The repo gets a clean place to add `ts`, `react`, `crud`, or other future
  topics without renaming the whole project again.

## Why I Prefer This Shape

The current repo is really becoming a curriculum collection, not only a single
JavaScript exercise set. A `topics/<topic>` structure expresses that clearly
without overcommitting to a heavy framework.

I would avoid putting topic folders at the root, such as `js/`, `ts/`, and
`react/`, because root-level folders will keep competing with repo-level
folders like `docs`, `scripts`, `base`, `teaching-notes`, and
`wip-problems`.

I would also avoid a generic `packages/` directory for curriculum content. It is
normal for application monorepos, but `topics/` is more readable for students
and instructors.

## npm Workspaces

I think npm workspaces are a good fit, but I would use them lightly.

At the root:

```json
{
  "private": true,
  "workspaces": [
    "topics/*"
  ],
  "scripts": {
    "test:js": "npm --workspace @intro-to-code/js test",
    "test:01": "npm --workspace @intro-to-code/js run test:01",
    "test:02": "npm --workspace @intro-to-code/js run test:02",
    "test:03": "npm --workspace @intro-to-code/js run test:03",
    "test:04": "npm --workspace @intro-to-code/js run test:04",
    "test:05": "npm --workspace @intro-to-code/js run test:05",
    "test:06": "npm --workspace @intro-to-code/js run test:06",
    "test:07": "npm --workspace @intro-to-code/js run test:07",
    "test:08": "npm --workspace @intro-to-code/js run test:08",
    "test:09": "npm --workspace @intro-to-code/js run test:09",
    "test:10": "npm --workspace @intro-to-code/js run test:10",
    "test:11": "npm --workspace @intro-to-code/js run test:11",
    "test:projects": "npm --workspace @intro-to-code/js run test:projects"
  }
}
```

Inside `topics/js/package.json`:

```json
{
  "name": "@intro-to-code/js",
  "private": true,
  "scripts": {
    "test": "npm run test:01 && npm run test:02 && npm run test:03 && npm run test:04 && npm run test:05 && npm run test:06 && npm run test:07 && npm run test:08 && npm run test:09 && npm run test:10 && npm run test:11 && npm run test:projects",
    "test:01": "mocha './lessons/01-Values-and-Data-Types/**.js'",
    "test:02": "mocha './lessons/02-Conditionals/tests/**.js'",
    "test:03": "mocha './lessons/03-Methods-and-Functions/tests/**.js'",
    "test:04": "mocha './lessons/04-Arrays-and-Loops/tests/**.js'",
    "test:05": "mocha './lessons/05-Callbacks-Iterators/tests/**.js'",
    "test:06": "mocha './lessons/06-Objects/tests/**.js'",
    "test:07": "mocha './lessons/07-Adv-Objects/tests/**.js'",
    "test:08": "mocha './lessons/08-Async-Await-APIs/tests/**.js'",
    "server:08": "mocha './lessons/08-Async-Await-APIs/server/tests/**.js'",
    "test:09": "mocha './lessons/09-Recursion/tests/**.js'",
    "test:10": "mocha './lessons/10-Classes/tests/**.js'",
    "test:11": "mocha './lessons/11-Data-Structures/tests/**.js'",
    "test:projects": "mocha './projects/**/tests/**.js'"
  }
}
```

Keeping root aliases matters because existing docs, CI, and muscle memory already
expect commands like `npm run test:09`. The workspace package should own the real
paths, while the root package stays friendly.

## Future Topic Examples

The structure can grow like this:

```text
topics/
  js/
    lessons/
    projects/
  ts/
    package.json
    lessons/
      01-TypeScript-Basics/
      02-Types-and-Interfaces/
      03-Functions-and-Generics/
    projects/
  react/
    package.json
    lessons/
      01-Components-and-Props/
      02-State-and-Events/
      03-Effects-and-Data-Fetching/
    projects/
  crud/
    package.json
    lessons/
    projects/
      notes-api/
      inventory-app/
```

The ordering can build naturally:

1. `topics/js` teaches programming fundamentals.
2. `topics/ts` builds on the same concepts with static types.
3. `topics/react` uses JS or TS skills in a UI framework.
4. `topics/crud` combines client, server, persistence, and deployment concepts.

## Instructor Material

For the first #152 implementation, I would leave `teaching-notes/`,
`wip-problems/` at the repo root. The obsolete `base/` folder is not retained.

That keeps the change focused on student-facing curriculum paths and avoids
mixing the branch-cleanup problem into the folder migration. Later, if the repo
has multiple mature topics, I would consider:

```text
instructor/
  topics/
    js/
      teaching-notes/
      wip-problems/
    ts/
      teaching-notes/
```

That would make future student-clean checks easier because one top-level
`instructor/` folder can be excluded from `main`.

## Migration Plan

I would implement #152 in small, reviewable steps:

1. Add npm workspaces at the root.
2. Add `topics/js/package.json`.
3. Move `lessons/` to `topics/js/lessons/`.
4. Move `js/projects/` to `topics/js/projects/`.
5. Update root scripts to delegate to `@intro-to-code/js`.
6. Update test globs in the JS workspace package.
7. Update README paths and commands.
8. Update scripts such as `scripts/generateFiles.sh` so new JS problems are
   created under `topics/js`.
9. Run the relevant guide tests against `0X-Guide`.

I would not combine this with answer restoration, student cleanup, or a large
README rewrite. Those are related, but they would make review much harder.

## CI Direction

For PRs into `0X-Guide`, CI should run topic workspaces explicitly:

```shell
npm run test:js
```

or, if keeping the existing matrix:

```shell
npm run test:01
npm run test:02
npm run test:03
npm run test:04
npm run test:05
npm run test:06
npm run test:07
npm run test:08
npm run test:09
npm run test:10
npm run test:11
npm run test:projects
```

For PRs into `main`, the future student-clean check should understand topic
paths:

- no filled answers under `topics/*/lessons`
- no instructor-only folders
- no active guide-only tests in starter-code releases

## Naming Opinion

I would keep lesson folder names numbered and human-readable:

```text
09-Recursion
10-Classes
11-Data-Structures
```

For projects, I would avoid treating `Projects` as just another lesson folder.
Projects are different enough to deserve their own namespace:

```text
topics/js/projects/Twitter/
```

If the project list grows, I would eventually normalize names to lowercase
kebab-case:

```text
topics/js/projects/twitter/
topics/js/projects/todo-cli/
topics/react/projects/weather-dashboard/
topics/crud/projects/notes-api/
```

That can wait. The first implementation can preserve `Twitter/` to keep #152
mostly mechanical.

## Final Shape For #152

My preferred implementation for #152 is:

- Create `topics/js`.
- Move current `lessons` into `topics/js/lessons`.
- Move current `js/projects` into `topics/js/projects`.
- Add `topics/js/package.json` as the workspace package.
- Keep root scripts as stable aliases.
- Keep instructor-only material at the root for now.

This gives the repo a real expansion path without asking beginner students or
curriculum contributors to understand a complex monorepo on day one.
