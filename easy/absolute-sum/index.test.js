import getAbsSum from './index';

describe('Javascript - Easy - 47', () => {
  test('Absolute Sum', () => {
    expect(getAbsSum([2, -1, -3, 4, 8])).toEqual(18);
    expect(getAbsSum([-1])).toEqual(1);
    expect(getAbsSum([-1, -3, -5, -4, -10, 0])).toEqual(23);
    expect(getAbsSum([8, 9, 10, 32, 101, -10])).toEqual(170);
    expect(getAbsSum([500])).toEqual(500);
  });
});
