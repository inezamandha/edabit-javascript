function isValid(zip) {
  return zip.split('').every((char) => char.match(/\d/g)) && zip.length === 5;
}

export default isValid;
