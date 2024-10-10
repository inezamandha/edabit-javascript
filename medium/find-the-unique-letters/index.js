function findLetters(str) {
  return str
    .split('')
    .filter((char) => str.indexOf(char) === str.lastIndexOf(char));
}

export default findLetters;
