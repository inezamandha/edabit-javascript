import canNest from './index';

describe('Javascript - Easy - 41', () => {
  test('Check if One Array can be Nested in Another', () => {
    expect(canNest([1, 2, 3, 4], [0, 6])).toEqual(true);
    expect(canNest([3, 1], [4, 0])).toEqual(true);
    expect(canNest([9, 9, 8], [8, 9, 10])).toEqual(false);
    expect(canNest([9, 9, 8], [8, 9])).toEqual(false);
    expect(canNest([1, 2, 3, 4], [2, 3])).toEqual(false);
  });
});
