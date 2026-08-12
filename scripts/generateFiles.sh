#!/usr/bin/env bash

set -euo pipefail

# Check if an argument is provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <file_name_base>"
  exit 1
fi

# Set the base name from the first argument
BASE_NAME="$1"

if [[ ! "$BASE_NAME" =~ ^[A-Za-z0-9][A-Za-z0-9_-]*$ ]]; then
  echo "File name must contain only letters, numbers, underscores, and hyphens."
  exit 1
fi

# Convert the base name to a valid JavaScript function name (camelCase)
# This line converts "file-name" or "file_name" to "fileName"
FUNCTION_NAME=$(printf "%s" "$BASE_NAME" | perl -pe 's/[-_]+([a-zA-Z0-9])/\U$1/g; s/^([A-Z])/\l$1/; s/[^A-Za-z0-9_\$]//g; s/^[^A-Za-z_\$]+//')

if [ -z "$FUNCTION_NAME" ]; then
  FUNCTION_NAME="generatedProblem"
fi

PROBLEM_PATH="./wip-problems/candidates/$BASE_NAME.js"
TEST_PATH="./wip-problems/candidates/tests/$BASE_NAME.test.js"
DATA_PATH="./wip-problems/candidates/data/$BASE_NAME.data.js"

mkdir -p "./wip-problems/candidates/tests"
mkdir -p "./wip-problems/candidates/data"

# Create the main JavaScript file with a JSDoc boilerplate and function
cat <<EOL > "$PROBLEM_PATH"
/**
 * $FUNCTION_NAME
 *
 * A brief description of what the function does.
 *
 * @param {*} param1 - Description of the parameter.
 * @returns {*} Description of the return value.
 */
export function $FUNCTION_NAME(param1) {
  // TODO: Implement function logic
}
EOL

# Create the test file
cat <<EOL > "$TEST_PATH"
import { $FUNCTION_NAME } from '../$BASE_NAME.js';
import { baseData, baseExpected, caseOne, caseOneExpected } from '../data/$BASE_NAME.data.js';

describe("#XX: $FUNCTION_NAME", () => {
  it('base condition met', () => {
    const result = $FUNCTION_NAME(baseData);
    expect(result).toEqual(baseExpected);
  });

  describe("nested set of conditions", () => {
    it("nested test condition", () => {
      const result = $FUNCTION_NAME(baseData);
      expect(result).toEqual(baseExpected);
    });

    it("other nested test condition", () => {
      const result = $FUNCTION_NAME(caseOne);
      expect(result).toEqual(caseOneExpected);
    });
  });
});
EOL

# Create the data file
cat <<EOL > "$DATA_PATH"
export const baseData = {};
export const baseExpected = {};

export const caseOne = [];
export const caseOneExpected = [];
EOL

npm run check:jsdoc -- "$PROBLEM_PATH" >/dev/null

echo "Files created and JSDoc validated:"

echo "$PROBLEM_PATH"
echo "$TEST_PATH"
echo "$DATA_PATH"
