function reverseAndNot(i) {
  return Number(i.toString().split('').reverse().join('') + i.toString());
}

export default reverseAndNot;
