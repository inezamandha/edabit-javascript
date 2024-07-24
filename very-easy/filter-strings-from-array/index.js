function filterArray(arr) {
  return arr.filter(
    (item) => typeof item === 'number' && Number.isInteger(item)
  );
}

export default filterArray;
