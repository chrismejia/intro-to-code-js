import { baseCaesar } from "./data/caesarCrafter.data";

/**
 * caesarCrafter accepts two inputs, an object param called data, and a string the number shiftAmount.
 *
 * caesarCrafter returns an object with 26 key-value pairs where the key represents the PLAINTEXT letter, and the value represents that shifted CIPHER'S letter.
 *
 * @see {@link https://en.wikipedia.org/wiki/Caesar_cipher Caesar cipher}
 *
 * @category 07 - Objects 2
 * @function caesarCrafter
 * @param {Object} data - The object containing the message and shift value.
 * @param {string} data.message - The message to be encoded or decoded.
 * @param {number} data.shift - The shift value for the Caesar cipher.
 * @param {string} mode - The mode of operation: 'encode' or 'decode'.
 * @returns {string} - The encoded or decoded message.
 *
 * @example
 * // When shiftAmount is positive, the ciphertext shifts down the alphabet.
 * const shiftedByPos2 = caesarCrafter({msg: "Hello World", shift: 3}, "ev")
 *
 * // Cipher text shifted to the RIGHT by 2
 *            ↓   ↓
 * // PLAIN   A B C ... X Y Z
 * // CIPHER  Y Z A ... V W X
 *
 * // When shiftAmount is negative, the ciphertext shifts down the alphabet.
 * // Cipher text shifted to the LEFT by 2
 *            ↓           ↓
 * // PLAIN   A B C ... X Y Z
 * // CIPHER  C D E ... Z A B
 */

function caesarCrafter(shiftAmount) {
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

export default caesarCrafter;
