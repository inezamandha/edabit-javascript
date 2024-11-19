/**
 *
 * @param {number} n
 * @returns {boolean}
 */

function isPalindrome(n) {
  const palindromeCheck = n.toString().split('').reverse().join('');
  return n.toString() === palindromeCheck;
}

export default isPalindrome;
