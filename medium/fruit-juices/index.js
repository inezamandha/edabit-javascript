function getDrinkID(flavor, ml) {
  return (
    flavor
      .split(' ')
      .map((word) => word.slice(0, 3).toUpperCase())
      .join('') + ml.split('ml')[0]
  );
}

export default getDrinkID;
