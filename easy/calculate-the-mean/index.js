function mean(arr) {
  return Number(
    arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length
  ).toFixed(2);
}

export default mean;
