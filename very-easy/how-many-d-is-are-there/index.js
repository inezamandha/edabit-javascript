function countDs(sentence) {
  return sentence.match(/d/gi)?.length || 0;
}

export default countDs;
