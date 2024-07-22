function isTrue(relation) {
  return relation.includes('=')
    ? eval(relation.replace('=', '=='))
    : eval(relation);
}

export default isTrue;
