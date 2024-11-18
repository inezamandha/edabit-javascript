function capLast(txt) {
  return txt
    .split(' ')
    .map(
      (word) => word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase()
    )
    .join(' ');
}

export default capLast;
