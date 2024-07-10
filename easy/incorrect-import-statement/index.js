function fixImport(s) {
  let index = s.search(/from/g);
  return `${s.slice(index)} ${s.slice(0, index - 1)}`;
}

export default fixImport;
