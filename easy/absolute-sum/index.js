function getAbsSum(arr) {
  return arr
    .map((number) => Math.abs(number))
    .reduce((partialSum, a) => partialSum + a, 0);
}

console.log(getAbsSum([2, -1, 4, 8, 10]));

export default getAbsSum;
