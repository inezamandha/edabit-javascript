function sliceSum(arr, n) {
  return arr.slice(0, n).reduce((partialSum, a) => partialSum + a, 0);
}

export default sliceSum;
