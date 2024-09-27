function findNemo(sentence) {
  const splittedSentence = sentence.split(' ');
  const nemoWord = splittedSentence.findIndex((word) => word === 'Nemo');
  return nemoWord >= 0
    ? `I found Nemo at ${nemoWord + 1}!`
    : "I can't find Nemo :(";
}

export default findNemo;
