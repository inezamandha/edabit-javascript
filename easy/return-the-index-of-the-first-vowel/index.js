function firstVowel(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aiueo]/gi)) {
      return i;
    }
  }
}

export default firstVowel;
