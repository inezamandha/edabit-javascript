function formatPhoneNumber(numbers) {
  const first = numbers.slice(0, 3).join('');
  const middle = numbers.slice(3, 6).join('');
  const last = numbers.slice(6).join('');

  return `(${first}) ${middle}-${last}`;
}

export default formatPhoneNumber;
