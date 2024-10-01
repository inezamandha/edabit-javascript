function areaOfCountry(name, area) {
  const totalWorldsLandmass = 148940000;
  const areaPercentage = area / totalWorldsLandmass;
  return `${name} is ${(areaPercentage * 100).toFixed(2)}% of the total world's landmass`;
}

export default areaOfCountry;
