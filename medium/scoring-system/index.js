function calculateScores(str) {
  const scores = [0, 0, 0];
  const scoreMap = { A: 0, B: 1, C: 2 };

  for (let char of str) {
    scores[scoreMap[char]] += 1;
  }

  return scores;
}

export default calculateScores;
