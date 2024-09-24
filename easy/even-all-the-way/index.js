function getOnlyEvens(nums) {
  return nums.filter((num, index) => index % 2 === 0 && num % 2 === 0);
}

export default getOnlyEvens;
