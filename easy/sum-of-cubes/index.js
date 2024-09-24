function sumOfCubes(nums) {
  const initialValue = 0;

  return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 3,
    initialValue
  );
}

export default sumOfCubes;
