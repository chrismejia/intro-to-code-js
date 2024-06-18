/**
 * @category 08 - Recursion
 * @function repeatStr
 * @param {String} strInput
 * @param {Number} times
 *
 */

export const wrapper = {
  repeatStr: function (strInput, times) {
    if (times === 0) {
      return strInput;
    } else {
      return strInput + wrapper.repeatStr(strInput, times - 1);
    }
  },
};
