function amplify(num) {
  const finalNumbers = [];

  for (let i = 1; i <= num; i++) {
    finalNumbers.push(i % 4 === 0 ? i * 10 : i);
  }

  return finalNumbers;
}

console.log(amplify(4));

export default amplify;
