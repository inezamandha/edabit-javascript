function indexFilter(idx, str) {
  let finalString = '';

  for (let i = 0; i < idx.length; i++) {
    finalString += str.charAt(idx[i] < 0 ? str.length + idx[i] : idx[i]);
  }

  return finalString.toLowerCase();
}

export default indexFilter;
