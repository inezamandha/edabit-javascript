function reverseCase(str) {
  let result = '';
  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}

export default reverseCase;
