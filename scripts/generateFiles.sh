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
FUNCTION_NAME=$(echo "$BASE_NAME" | sed -r 's/(^|-|_)([a-z])/\U\2/g')

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

export { $FUNCTION_NAME };
EOL

# Create the test directory if it doesn't exist
mkdir -p "./tests"

# Create the test file
cat <<EOL > "./wip-problems/tests/$BASE_NAME.test.js"
import { expect } from 'chai';
import { $FUNCTION_NAME } from '../$BASE_NAME';
import { baseData, baseExpected, caseOne, caseOneExpected } from '../data/$BASE_NAME.data'

describe("#XX: $FUNCTION_NAME", () => {
  it('base condition met', () => {
    const result = $FUNCTION_NAME(baseData);
    expect(result).to.deep.equal(baseExpected);
  });

  describe("nested set of conditions", () => {
    it("nested test condition", () => {
      const result = $FUNCTION_NAME(baseData);
      expect(result).to.deep.equal(baseExpected);
    });

    it("other nested test condition", () => {
      const result = $FUNCTION_NAME(caseOne);
      expect(result).to.deep.equal(caseOneExpected);
    });
  });
})
EOL

# Create the data directory if it doesn't exist
mkdir -p "./data"

# Create the data file
cat <<EOL > "./wip-problems/data/$BASE_NAME.data.js"
export const baseData = {};
export const baseExpected = {};

export const caseOne = [];
export const caseOneExpected = [];
EOL

echo "Files created:"
echo "./$BASE_NAME.js"
echo "./tests/$BASE_NAME.test.js"
echo "./data/$BASE_NAME.data.js"
