/**
 * maxCharCount takes in some text, meant for either a tweet (quoted or original), or for the Twitter user's bio and truncating it if it is more than 280 characters for a tweet, or 160 characters for a
 * @function maxCharCount
 * @param {String} text
 * @param {String} useCase
 * @returns {String}
 */
export default function maxCharCount(text, useCase) {
  let charLimit;
  switch (useCase) {
    case "bio":
      charLimit = 160;
    case "tweet":
      charLimit = 280;
  }

  if (text.length <= charLimit) {
    return text;
  } else {
    const truncated = text.slice(0, charLimit);
    return truncated;
  }
}
