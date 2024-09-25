function seriesResistance(arr) {
  const totalOhm = arr.reduce((partialSum, a) => partialSum + a, 0);
  return `${totalOhm} ${totalOhm <= 1 ? 'ohm' : 'ohms'}`;
}

export default seriesResistance;
