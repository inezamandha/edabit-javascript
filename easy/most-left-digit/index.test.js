import leftDigit from './index';

describe('Javascript - Easy - 20', () => {
  test('Most Left Digit', () => {
    expect(leftDigit('TrAdE2W1n95!')).toEqual(2);
    expect(leftDigit('V3r1ta$')).toEqual(3);
    expect(leftDigit('U//DertHe1nflu3nC3')).toEqual(1);
    expect(leftDigit('J@v@5cR1PT')).toEqual(5);
    expect(leftDigit('0nSlaUgh7*d3atH')).toEqual(0);
    expect(leftDigit('F8andD3st1nY')).toEqual(8);
  });
});
