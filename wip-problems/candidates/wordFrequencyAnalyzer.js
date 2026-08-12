/**
 * wordFrequencyAnalyzer analyzes the frequency of each word in a given text.
 *
 * It processes the input text, counts the occurrences of each word, and returns
 * a Map where the keys are the words and the values are the counts.
 *
 * @category 07 - Adv Objects
 * @function wordFrequencyAnalyzer
 * @param {string} text - The input text to analyze.
 * @returns {Map<string, number>} - A map containing words and their frequencies.
 *
 * @example
 * const text = "Hello, hello! How are you? Are you there?";
 * const frequencyMap = wordFrequencyAnalyzer(text);
 * // frequencyMap => Map { 'hello' => 2, 'how' => 1, 'are' => 2, 'you' => 2, 'there' => 1 }
 */

/**
 * WITHOUT REGEX
 */
export function wordFrequencyAnalyzer(text) {
  const wordMap = new Map();
  const sanitizedText = text
    .toLowerCase()
    .split("")
    .map((char) => ("abcdefghijklmnopqrstuvwxyz ".includes(char) ? char : ""))
    .join("");
  const words = sanitizedText.split(" ").filter(Boolean);

  for (const word of words) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }

  return wordMap;
}

/**
 * - **`toLowerCase()`**: Converts the entire string to lowercase to ensure case insensitivity.
 * - **`split('')`**: Splits the string into an array of individual characters.
 * - **`map(char => ('abcdefghijklmnopqrstuvwxyz '.includes(char) ? char : ''))`**: Checks if each character is a letter or a space. If not, it replaces the character with an empty string.
 * - **`join('')`**: Joins the array of characters back into a single string.
 * - **`split(' ')`**: Splits the string into an array of words based on spaces.
 * - **`filter(Boolean)`**: Filters out any empty strings that might result from consecutive spaces or leading/trailing spaces.
 * - **`reduce(...)`**: Iterates over the array of words to create a `Map` with the word counts.
 */

// one-liner
// const wordFrequencyAnalyzer = (text) =>
//   text
//     .toLowerCase()
//     .split("")
//     .map((char) => ("abcdefghijklmnopqrstuvwxyz ".includes(char) ? char : ""))
//     .join("")
//     .split(" ")
//     .filter(Boolean)
//     .reduce((map, word) => map.set(word, (map.get(word) || 0) + 1), new Map());

/**
 * WITH REGEX
 */
// export function wordFrequencyAnalyzer(text) {
//   const wordMap = new Map();
//   const sanitizedText = text.replace(/[^\w\s]/g, "").toLowerCase();
//   const words = sanitizedText.split(/\s+/);

//   for (const word of words) {
//     if (wordMap.has(word)) {
//       wordMap.set(word, wordMap.get(word) + 1);
//     } else {
//       wordMap.set(word, 1);
//     }
//   }

//   return wordMap;
// }

/**
 * As a one-liner:
 *
 * 1. **`replace(/[^\w\s]/g, '')`**: Removes all punctuation from the input text, leaving only word characters and spaces.
 * 2. **`.toLowerCase()`**: Converts the entire string to lowercase to ensure case insensitivity.
 * 3. **`.split(/\s+/)`**: Splits the sanitized and lowercased text into an array of words based on one or more whitespace characters.
 * 4. **`.reduce(...)`**: Iterates over the array of words to create a `Map`. For each word, the `reduce` function updates the count of that word in the `Map` by setting the word as the key and its count as the value.
 * 5. **`new Map()`**: The `reduce` method initializes the accumulator as a new `Map`, which is then populated with word counts.
 */
// const wordFrequencyAnalyzer = (text) =>
//   text
//     .replace(/[^\w\s]/g, "")
//     .toLowerCase()
//     .split(/\s+/)
//     .reduce((map, word) => map.set(word, (map.get(word) || 0) + 1), new Map());
