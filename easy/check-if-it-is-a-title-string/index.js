function checkTitle(title) {
  const splittedTitle = title.split(' ');
  const result = splittedTitle.every(
    (word) => word.charAt(0) === word.charAt(0).toUpperCase()
  );
  return result;
}

export default checkTitle;
