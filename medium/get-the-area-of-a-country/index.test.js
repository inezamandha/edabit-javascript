import areaOfCountry from './index';

describe('Javascript - Medium - 3', () => {
  test('Get the Area of a Country', () => {
    expect(areaOfCountry('USA', 9372610)).toEqual(
      "USA is 6.29% of the total world's landmass"
    );
    expect(areaOfCountry('Russia', 17098242)).toEqual(
      "Russia is 11.48% of the total world's landmass"
    );
    expect(areaOfCountry('Iran', 1648195)).toEqual(
      "Iran is 1.11% of the total world's landmass"
    );
    expect(areaOfCountry('India', 3287590)).toEqual(
      "India is 2.21% of the total world's landmass"
    );
    expect(areaOfCountry('China', 9706961)).toEqual(
      "China is 6.52% of the total world's landmass"
    );
    expect(areaOfCountry('Yemen', 527968)).toEqual(
      "Yemen is 0.35% of the total world's landmass"
    );
    expect(areaOfCountry('Switzerland', 41284)).toEqual(
      "Switzerland is 0.03% of the total world's landmass"
    );
  });
});
