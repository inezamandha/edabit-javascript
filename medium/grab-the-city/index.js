function grabCity(str) {
  let regex = str.match(/\[+[a-z\s]+]/gi);
  let city = regex[regex.length - 1];
  return city.slice(1, city.length - 1);
}

export default grabCity;
