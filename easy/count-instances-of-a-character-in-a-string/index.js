function charCount(myChar, str) {
  let count = 0;
  for (let char of str) {
    if (char.toLowerCase() === myChar) {
      count += 1;
    }
  }
  return count;
}

export default charCount;
