function isAvgWhole(arr) {
  const initialValue = 0;

  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const avgArrIsWholeNumber = !(sumWithInitial / arr.length)
    .toString()
    .includes('.');

  return avgArrIsWholeNumber;
}

export default isAvgWhole;
