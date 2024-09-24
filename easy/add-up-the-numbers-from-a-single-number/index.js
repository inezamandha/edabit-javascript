function addUp(num) {
  if (num < 0) return -1;
  else if (num == 0) return 0;
  return num + addUp(num - 1);
}

export default addUp;
