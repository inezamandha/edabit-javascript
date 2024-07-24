function hashPlusCount(str) {
  return [str.match(/#/g)?.length || 0, str.match(/\+/g)?.length || 0];
}

export default hashPlusCount;
