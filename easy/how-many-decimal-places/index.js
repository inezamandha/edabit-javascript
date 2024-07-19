function getDecimalPlaces(num) {
  const indexOfDecimal = num.indexOf('.');
  return indexOfDecimal !== -1 ? num.length - indexOfDecimal - 1 : 0;
}

export default getDecimalPlaces;
