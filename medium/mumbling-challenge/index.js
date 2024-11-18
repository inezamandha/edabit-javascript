function mumbling(str) {
  return str
    .split('')
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join('-');
}

export default mumbling;
