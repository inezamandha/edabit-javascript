function intOrString(param) {
  return typeof param === 'number' ? 'int' : 'str';
}

export default intOrString;
