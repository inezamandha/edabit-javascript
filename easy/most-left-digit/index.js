function leftDigit(num) {
  return Number(num.match(/\d/g)[0]);
}

export default leftDigit;
