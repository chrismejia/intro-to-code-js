#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <file_name_base>"
  exit 1
fi

# Set the base name from the first argument
BASE_NAME="$1"

# Convert the base name to a valid JavaScript function name (camelCase)
# This line converts "file-name" or "file_name" to "fileName"
FUNCTION_NAME=$(printf "%s" "$BASE_NAME" | perl -pe 's/[-_]+([a-zA-Z0-9])/\U$1/g; s/^([A-Z])/\l$1/; s/[^A-Za-z0-9_\$]//g; s/^[^A-Za-z_\$]+//')

if [ -z "$FUNCTION_NAME" ]; then
  FUNCTION_NAME="generatedProblem"
fi

# Create the wip-problems directories if they don't exist
mkdir -p "./wip-problems/tests"
mkdir -p "./wip-problems/data"

# Create the main JavaScript file with a JSDoc boilerplate and function
cat <<EOL > "./wip-problems/$BASE_NAME.js"
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
cat <<EOL > "./wip-problems/tests/$BASE_NAME.test.js"
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
cat <<EOL > "./wip-problems/data/$BASE_NAME.data.js"
export const baseData = {};
export const baseExpected = {};

export const caseOne = [];
export const caseOneExpected = [];
EOL

echo "Files created:"
echo "./wip-problems/$BASE_NAME.js"
echo "./wip-problems/tests/$BASE_NAME.test.js"
echo "./wip-problems/data/$BASE_NAME.data.js"
