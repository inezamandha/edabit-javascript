function specialReverse(s, c) {
  return s
    .split(' ')
    .map((word) => (word.startsWith(c) ? [...word].reverse().join('') : word))
    .join(' ');
}

export default specialReverse;
