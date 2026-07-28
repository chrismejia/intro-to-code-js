import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import path from "node:path";

const upstreamRepository = "chrismejia/intro-to-code-js";
const forbiddenTopLevelPaths = [
  "AGENTS.md",
  "CLAUDE.md",
  "base",
  "docs",
  "teaching-notes",
  "wip-problems",
];

function getArgValue(args, name) {
  const index = args.indexOf(name);

  if (index === -1) {
    return null;
  }

  const value = args[index + 1];

  if (!value || value.startsWith("--")) {
    console.error(`${name} requires a value.`);
    process.exit(1);
  }

  return value;
}

function shouldSkipForFork() {
  return (
    process.env.STUDENT_CLEAN_UPSTREAM_ONLY === "true" &&
    process.env.GITHUB_REPOSITORY &&
    process.env.GITHUB_REPOSITORY !== upstreamRepository
  );
}

function getWorkingTreePaths() {
  return new Set(readdirSync(process.cwd()));
}

function getGitTreePaths(treeRef) {
  try {
    const output = execFileSync(
      "git",
      ["ls-tree", "-r", "--name-only", treeRef],
      {
        encoding: "utf8",
      },
    );

    return new Set(output.split("\n").filter(Boolean));
  } catch (error) {
    console.error(`Unable to inspect git tree ${treeRef}.`);
    console.error(error.message);
    process.exit(1);
  }
}

function hasPath(paths, forbiddenPath) {
  if (paths.has(forbiddenPath)) {
    return true;
  }

  const prefix = `${forbiddenPath}${path.posix.sep}`;
  return [...paths].some((repoPath) => repoPath.startsWith(prefix));
}

function printHelp() {
  console.log(`Usage: node scripts/checkStudentClean.mjs [--ref <git-ref>]

Checks for top-level instructor-only paths that should not ship on upstream
main. Set STUDENT_CLEAN_UPSTREAM_ONLY=true in CI to skip fork-owned repos.`);
}

function main() {
  console.log("Running student-clean check...");

  const args = process.argv.slice(2);

  if (args.includes("--help")) {
    printHelp();
    process.exit(0);
  }

  const ref = getArgValue(args, "--ref");

  if (shouldSkipForFork()) {
    console.log(
      `Skipping student-clean check for fork repository ${process.env.GITHUB_REPOSITORY}.`,
    );
    process.exit(0);
  }

  const paths = ref ? getGitTreePaths(ref) : getWorkingTreePaths();
  const failures = forbiddenTopLevelPaths.filter((forbiddenPath) =>
    hasPath(paths, forbiddenPath),
  );

  if (failures.length > 0) {
    console.error("Student-clean check failed.");
    console.error(
      "The upstream main tree must not include instructor-only paths:",
    );
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log("Student-clean check passed.");
}

main();
