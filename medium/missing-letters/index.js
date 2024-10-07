function getMissingLetters(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet
    .split('')
    .filter((char) => !s.includes(char))
    .join('');
}

export default getMissingLetters;
