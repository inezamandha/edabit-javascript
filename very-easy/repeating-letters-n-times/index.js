function repeat(str, n) {
  let word = '';
  for (let char of str) {
    word += char.repeat(n);
  }
  return word;
}

export default repeat;
