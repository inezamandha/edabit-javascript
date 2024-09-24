function numberSplit(n) {
  const number = Math.floor(n / 2);
  return [number, n - number].sort((a, b) => a - b);
}

export default numberSplit;
