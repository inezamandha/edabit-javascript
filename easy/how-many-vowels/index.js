function countVowels(str) {
  return str.match(/[aiueo]/gi)?.length || 0;
}

export default countVowels;
