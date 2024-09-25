function highestDigit(number) {
  return Math.max(...number.toString().split(''));
}

export default highestDigit;
