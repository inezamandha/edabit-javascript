function modifyLast(str, n) {
  return str.slice(0, -1) + str.slice(-1).repeat(n);
}

export default modifyLast;
