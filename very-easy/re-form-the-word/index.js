function getWord(left, right) {
  const formattedLeft = left.charAt(0).toUpperCase() + left.slice(1);
  return formattedLeft + right;
}

export default getWord;
