function accum(str) {
  let finalString = '';
  for (let i = 0; i < str.length; i++) {
    finalString +=
      str[i].charAt(0).toUpperCase() + str[i].repeat(i).toLowerCase() + '-';
  }

  return finalString.slice(0, finalString.length - 1);
}

export default accum;
