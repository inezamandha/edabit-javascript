function highLow(str) {
  const numberArray = str.split(' ').map((number) => Number(number));
  return `${Math.max(...numberArray)}` + ' ' + `${Math.min(...numberArray)}`;
}

export default highLow;
