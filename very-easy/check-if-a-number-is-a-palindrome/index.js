function isPalindrome(n) {
  const palindromeCheck = n.toString().split('').reverse().join('');
  return n.toString() === palindromeCheck ? true : false;
}

export default isPalindrome;
