function capSpace(txt) {
  return txt
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? ` ${char.toLowerCase()}` : char
    )
    .join('');
}

export default capSpace;
