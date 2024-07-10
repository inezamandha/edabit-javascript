function detectWord(str) {
  let result = '';
  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char;
    }
  }
  return result;
}

export default detectWord;
