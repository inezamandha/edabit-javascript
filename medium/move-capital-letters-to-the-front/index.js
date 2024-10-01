function capToFront(s) {
  let upperCaseString = '';
  let lowerCaseString = '';

  for (const char of s) {
    char === char.toUpperCase()
      ? (upperCaseString += char)
      : (lowerCaseString += char);
  }

  return upperCaseString + lowerCaseString;
}

export default capToFront;
