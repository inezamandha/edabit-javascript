/**
 *
 * @param {string} str
 * @returns {boolean}
 */

function sameCase(str) {
  return str === str.toLowerCase() || str === str.toUpperCase();
}

export default sameCase;
