function sortDescending(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
    10
  );
}

export default sortDescending;
