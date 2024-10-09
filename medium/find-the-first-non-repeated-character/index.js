function firstNonRepeatedCharacter(str) {
  let stringWithoutSpace = str.replaceAll(' ', '');
  return (
    stringWithoutSpace
      .split('')
      .find(
        (char) =>
          stringWithoutSpace.indexOf(char) ===
          stringWithoutSpace.lastIndexOf(char)
      ) || false
  );
}

export default firstNonRepeatedCharacter;
