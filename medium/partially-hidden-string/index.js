function partiallyHide(phrase) {
  return phrase
    .split(' ')
    .map(
      (word) =>
        word.charAt(0) +
        word.slice(1, word.length - 1).replace(/[a-z]/gi, '-') +
        word.charAt(word.length - 1)
    )
    .join(' ');
}

export default partiallyHide;
