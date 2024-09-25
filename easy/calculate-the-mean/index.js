function mean(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return parseFloat((sum / arr.length).toFixed(2));
}

export default mean;
