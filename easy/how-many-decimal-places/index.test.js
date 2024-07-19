import getDecimalPlaces from './index';

describe('Javascript - Easy - 16', () => {
  test('How Many Decimal Places?', () => {
    expect(getDecimalPlaces('3.22')).toEqual(2);
    expect(getDecimalPlaces('400')).toEqual(0);
    expect(getDecimalPlaces('43.50')).toEqual(2);
    expect(getDecimalPlaces('100,000,000')).toEqual(0);
    expect(getDecimalPlaces('3.1415')).toEqual(4);
    expect(getDecimalPlaces('0')).toEqual(0);
    expect(getDecimalPlaces('01')).toEqual(0);
    expect(getDecimalPlaces('00010.00010')).toEqual(5);
    expect(getDecimalPlaces('3,141.592')).toEqual(3);
  });
});
