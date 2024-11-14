function flip(str, spec) {
  const word = str.split(' ');
  if (spec === 'sentence') {
    return word.reverse().join(' ');
  } else if (spec === 'word') {
    let finalWord = [];
    for (let char of word) {
      finalWord.push(char.split('').reverse().join(''));
    }
    return finalWord.join(' ');
  }
}

export default flip;
