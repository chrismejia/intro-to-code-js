import path from "node:path";
import TestSequencer from "@jest/test-sequencer";

const pathCollator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});

export default class PathSequencer extends TestSequencer {
  sort(tests) {
    return [...tests].sort((testA, testB) =>
      pathCollator.compare(normalizeTestPath(testA), normalizeTestPath(testB)),
    );
  }
}

function normalizeTestPath(test) {
  return path.relative(import.meta.dirname, test.path).split(path.sep).join("/");
}
