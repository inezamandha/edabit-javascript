function isAlpha(word) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    word
      .toLowerCase()
      .split('')
      .filter((char) => alphabet.includes(char))
      .map((char) => alphabet.indexOf(char) + 1)
      .reduce((total, num) => total + num, 0) %
      2 ===
    0
  );
}

export default isAlpha;
