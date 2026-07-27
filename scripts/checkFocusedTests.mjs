import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = ["topics/js", "wip-problems"];
const testFilePattern = /\.(?:c|m)?jsx?$/;
const focusedTestPattern =
  /\b(?:(?:describe|it|test)\s*\.\s*only|fdescribe|fit)\s*\(/g;

const fileExists = async (filePath) => {
  try {
    await readdir(filePath);
    return true;
  } catch {
    return false;
  }
};

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)));
    } else if (testFilePattern.test(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
};

const lineAndColumn = (text, index) => {
  const beforeMatch = text.slice(0, index);
  const lines = beforeMatch.split("\n");

  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1,
  };
};

const scanFile = async (filePath) => {
  const text = await readFile(filePath, "utf8");
  const findings = [];

  for (const match of text.matchAll(focusedTestPattern)) {
    const location = lineAndColumn(text, match.index);
    findings.push({ filePath, ...location, match: match[0] });
  }

  return findings;
};

const existingRoots = [];

for (const root of roots) {
  if (await fileExists(root)) {
    existingRoots.push(root);
  }
}

const files = (await Promise.all(existingRoots.map(walk))).flat();
const findings = (await Promise.all(files.map(scanFile))).flat();

if (findings.length > 0) {
  console.error("Focused tests are not allowed:");

  for (const { filePath, line, column, match } of findings) {
    console.error(`- ${filePath}:${line}:${column} ${match}`);
  }

  process.exit(1);
}

console.log("No focused tests found.");
