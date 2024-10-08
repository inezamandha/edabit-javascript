function factorial(num) {
  if (num < 0) return -1;
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

export default factorial;
