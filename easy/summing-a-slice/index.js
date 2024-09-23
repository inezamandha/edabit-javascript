function sliceSum(arr, n) {
  return arr.slice(0, n).reduce((partialSum, a) => partialSum + a, 0);
}

console.log(sliceSum([9, 8, 7, 6], 3));

export default sliceSum;
