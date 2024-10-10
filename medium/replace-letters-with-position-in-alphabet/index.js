function alphabetIndex(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return str
    .toLowerCase()
    .split('')
    .filter((char) => alphabet.includes(char))
    .map((char) => alphabet.indexOf(char) + 1)
    .join(' ');
}

export default alphabetIndex;
