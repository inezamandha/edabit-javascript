function longestZero(s) {
  let i = 0;
  let counter = 0;
  let max = 0;

  while (i < s.length) {
    if (s[i] === '1') {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
      i++;
    } else {
      counter++;
      i++;
    }
  }

  if (counter > max) {
    max = counter;
  }

  return '0'.repeat(max);
}

export default longestZero;
