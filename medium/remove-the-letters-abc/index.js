function removeABC(str) {
  const finalString = str.replace(/[abc]/g, '');

  return str.match(/[abc]/g) ? finalString : null;
}

export default removeABC;
