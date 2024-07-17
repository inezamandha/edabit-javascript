function largestSwap(num) {
  const swappedNumber = Number(num.toString().split('').reverse().join(''));
  return num >= swappedNumber;
}

export default largestSwap;
