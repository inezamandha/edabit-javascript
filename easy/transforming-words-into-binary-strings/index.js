function convertBinary(str) {
  return str.replace(/[a-m]/gi, '0').replace(/[n-z]/gi, '1');
}

export default convertBinary;
