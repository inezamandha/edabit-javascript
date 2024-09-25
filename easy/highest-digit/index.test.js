import highestDigit from './index';

describe('Javascript - Easy - 63', () => {
  test('Highest Digit', () => {
    expect(highestDigit(51)).toEqual(5);
    expect(highestDigit(0)).toEqual(0);
    expect(highestDigit(7495037)).toEqual(9);
    expect(highestDigit(222222)).toEqual(2);
  });
});
