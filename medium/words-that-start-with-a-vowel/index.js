function retrieve(str) {
  return str
    .split(/[ .]+/)
    .filter((word) => word.match(/^[aiueo]/i))
    .map((word) => word.toLowerCase());
}

export default retrieve;
