function countdown(n, str) {
  let text = '';
  for (let i = n; i >= 1; i--) {
    text += `${i}. `;
  }

  return `${text}${str.toUpperCase()}!`;
}

export default countdown;
