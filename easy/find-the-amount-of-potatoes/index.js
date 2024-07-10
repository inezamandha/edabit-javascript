function potatoes(str) {
  const potatoWords = str.match(/potato/g);
  return potatoWords ? potatoWords.length : 0;
}

export default potatoes;
