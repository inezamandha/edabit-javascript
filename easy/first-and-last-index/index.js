function charIndex(word, char) {
  return word.includes(char)
    ? [word.indexOf(char), word.lastIndexOf(char)]
    : undefined;
}

export default charIndex;
