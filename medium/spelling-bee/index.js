function validateSpelling(txt) {
  const [firstPart, ...word] = txt.split('. ');

  const regexPattern = new RegExp(
    `${firstPart.toUpperCase()}${txt
      .split('. ')
      .slice(1, -1)
      .join('')
      .toLowerCase()}`
  );

  return regexPattern.test(word[word.length - 1]);
}

export default validateSpelling;
