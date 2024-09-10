function isBoiling(temp) {
  const temperature = temp.slice(0, -1);

  return (
    (temp.includes('C') && temperature >= 100) ||
    (temp.includes('F') && temperature >= 212)
  );
}

export default isBoiling;
