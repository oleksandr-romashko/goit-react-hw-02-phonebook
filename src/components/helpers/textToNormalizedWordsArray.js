/**
 * Converts a string to array of lowercased words.
 * @param {string} text Input string.
 * @returns {string[]} Array of words.
 */
function textToNormalizedWordsArray(text) {
  return text.trim().toLowerCase().split(/\W+/);
}

export default textToNormalizedWordsArray;
