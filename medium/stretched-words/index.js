function unstretch(word) {
  let finalWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i - 1]) {
      finalWord += word[i];
    }
  }
  return finalWord;
}

export default unstretch;
