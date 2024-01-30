import { baseCaesar } from "./data/caesarCrafter.data";

/**
 * Define the function caesarCrafter.
 * caesarCrafter accepts a single input, the number shiftAmount.
 *
 * caesarCrafter returns an object with 26 key-value pairs where the key represents the PLAINTEXT letter, and the value represents that shifted CIPHER'S letter.
 *
 * See the examples section below for the value of shiftAmount affects the expected cipher output.
 *
 * @see {@link https://en.wikipedia.org/wiki/Caesar_cipher Caesar cipher}
 *
 * @category 07 - Objects 2
 * @function caesarCipher
 * @returns {Object}
 *
 * @example
 * // When shiftAmount is positive, the ciphertext shifts down the alphabet.
 * const shiftedByPos2 = caesarCipher(2)
 *
 * // Cipher text shifted to the right by 2
 *            ↓   ↓
 * // PLAIN   A B C ... X Y Z
 * // CIPHER  Y Z A ... V W X
 * console.log(shiftedByPos2)
 * {
 *   A: 'Y',
 *   B: 'Z',
 *   C: 'A',
 *   ⋮   ⋮
 *   X: 'V',
 *   Y: 'W',
 *   Z: 'X'
 * }
 *
 * // When shiftAmount is negative, the ciphertext shifts down the alphabet.
 * const shiftedByNeg2 = caesarCipher(-2)
 *
 * // Cipher text shifted to the left by 2
 *            ↓           ↓
 * // PLAIN   A B C ... X Y Z
 * // CIPHER  C D E ... Z A B
 * console.log(shiftedByNeg2)
 * {
 *   A: 'C',
 *   B: 'D',
 *   C: 'E',
 *   ⋮   ⋮
 *   X: 'Z',
 *   Y: 'A',
 *   Z: 'B'
 * }
 */

function caesarCipher(shiftAmount) {
  let actualShift = shiftAmount % 26;

  if (actualShift === 0) {
    return baseCaesar;
  }

  const alphabeticalArr = Object.values(baseCaesar);

  const newStart = alphabeticalArr.slice(actualShift);
  const newEnd = alphabeticalArr.slice(0, actualShift);
  const cipherText = [...newStart, ...newEnd];

  const shiftedCipherGuide = {};

  for (let i = 0; i < alphabeticalArr.length; i++) {
    const currLetter = alphabeticalArr[i];
    const currCipher = cipherText[i];

    shiftedCipherGuide[currLetter] = currCipher;
  }

  return shiftedCipherGuide;
}

export default caesarCipher;
