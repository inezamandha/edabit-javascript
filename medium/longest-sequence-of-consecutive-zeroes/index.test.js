import longestZero from './index';

describe('Javascript - Medium - 40', () => {
  test('Longest Sequence of Consecutive Zeroes', () => {
    expect(longestZero('01100001011000')).toBe('0000');
    expect(longestZero('100100100')).toBe('00');
    expect(longestZero('111101')).toBe('0');
    expect(longestZero('1000000000011101')).toBe('0000000000');
    expect(longestZero('100001110000100000')).toBe('00000');
    expect(longestZero('101001101')).toBe('00');
    expect(longestZero('101010101')).toBe('0');
    expect(longestZero('1001001')).toBe('00');
    expect(longestZero('111111')).toBe('');
  });
});
