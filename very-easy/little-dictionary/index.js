function dictionary(initial, words) {
  return words.filter((word) => word.startsWith(initial));
}

export default dictionary;
