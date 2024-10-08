function camelToSnake(str) {
  return str
    .split(' ')
    .map((word) => word.replace(/([\w])([A-Z])/g, '$1_$2').toLowerCase())
    .join(' ');
}

export default camelToSnake;
