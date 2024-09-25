function addNums(nums) {
  return nums
    .split(', ')
    .map((number) => Number(number))
    .reduce((partialSum, a) => partialSum + a, 0);
}

export default addNums;
