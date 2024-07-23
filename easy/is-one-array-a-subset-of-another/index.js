function isSubset(arr1, arr2) {
  return arr1.every((i) => arr2.includes(i));
}

export default isSubset;
