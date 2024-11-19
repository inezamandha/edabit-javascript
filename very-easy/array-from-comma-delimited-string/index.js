/**
 *
 * @param {string} str
 * @returns {string[]}
 */

function toArray(str) {
  return str.length > 0 ? str.split(', ') : [];
}

export default toArray;
