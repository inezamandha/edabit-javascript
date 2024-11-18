function isHarshad(num) {
  const sumOfNumber = num
    .toString()
    .split('')
    .reduce((total, num) => total + Number(num), 0);

  return num % sumOfNumber === 0;
}

export default isHarshad;
