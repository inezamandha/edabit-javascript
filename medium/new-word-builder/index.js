function wordBuilder(letters, positions) {
  return positions.map((position) => letters[position]).join('');
}

export default wordBuilder;
