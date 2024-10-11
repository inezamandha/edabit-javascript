function absolute(str) {
  const wordInArray = str
    .split(' ')
    .map((word) => (word.match(/^a$/i) ? 'an absolute' : word));

  return wordInArray
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(' ');
}

export default absolute;
