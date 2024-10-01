function multiplyNums(nums) {
  return nums.split(', ').includes('0')
    ? 0
    : nums.split(', ').reduce((total, num) => total * num, 1);
}

export default multiplyNums;
