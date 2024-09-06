function checkPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

export default checkPalindrome;
