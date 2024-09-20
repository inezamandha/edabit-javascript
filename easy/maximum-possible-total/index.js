function maxTotal(nums) {
  return nums
    .sort((a, b) => b - a)
    .slice(0, 5)
    .reduce((partialSum, a) => partialSum + a, 0);
}

export default maxTotal;
