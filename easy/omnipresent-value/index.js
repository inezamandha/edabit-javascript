function isOmnipresent(arr, val) {
  return arr.every((number) => number.includes(val));
}

export default isOmnipresent;
