function bomb(str) {
  return str.match(/bomb/gi) ? 'Duck!!!' : 'There is no bomb, relax.';
}

export default bomb;
