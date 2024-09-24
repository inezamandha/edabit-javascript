function filterArray(arr) {
  return arr.filter((item) => typeof item !== 'string');
}

export default filterArray;
