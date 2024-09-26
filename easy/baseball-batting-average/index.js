function battingAvg(arr) {
  const [totalHits, totalAtBats] = arr.reduce(
    ([hitsSum, atBatsSum], [hits, atBats]) => [
      hitsSum + hits,
      atBatsSum + atBats,
    ],
    [0, 0]
  );

  const average = (totalHits / totalAtBats).toFixed(3);
  return `.${average.split('.')[1]}`;
}

export default battingAvg;
