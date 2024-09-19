function convertToDecimal(perc) {
  return perc.map((item) => Number(item.split('%')[0]) / 100);
}

export default convertToDecimal;
