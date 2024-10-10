function blahBlah(str, n) {
  let splittedWords = str.split(' ');
  let totalWords = splittedWords.length;
  return n > totalWords
    ? 'blah '.repeat(totalWords).trim() + '...'
    : `${splittedWords.slice(0, totalWords - n).join(' ')}${` blah`.repeat(n)}...`;
}

export default blahBlah;
