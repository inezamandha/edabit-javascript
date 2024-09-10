function getCase(str) {
  if (str === str.toLowerCase()) return 'lower';
  else if (str === str.toUpperCase()) return 'upper';
  else return 'mixed';
}

export default getCase;
