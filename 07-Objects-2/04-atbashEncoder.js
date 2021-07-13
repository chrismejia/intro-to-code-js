import { characters } from "./data/atbashEncoder.data";

/**
 * Define the function atbashEncoder.
 * atbashEncoder accepts no parameters and returns and object with 26 key-value pairs.
 * A `characters` array has been imported for your use; apply it as you see fit.
 *
 * @category 07 - Objects 2
 * @function atbashEncoder
 * @returns {Object}
 *
 * @see {@link https://en.wikipedia.org/wiki/Atbash#Encryption Atbash Encryption scheme on Wikipedia}
 *
 * @example
 * const resultObject = atbashEncoder()
 * console.log(resultObject)
 * {
 *   A: 'Z',
 *   B: 'Y',
 *   C: 'X',
 *   ⋮   ⋮
 *   X: 'C',
 *   Y: 'B',
 *   Z: 'A'
 * }
 */
function atbashEncoder() {
  const encoder = {};
  let reversePointer = characters.length - 1;
  for (let i = 0; i < characters.length; i++) {
    const oldChar = characters[i];
    const newChar = characters[reversePointer];
    encoder[oldChar] = newChar;
    reversePointer--;
  }
  return encoder;
}

export default atbashEncoder;
