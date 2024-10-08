import dollaDollaBills from './index';

describe('Javascript - Medium - 17', () => {
  test('Money Formatting', () => {
    expect(dollaDollaBills(10)).toBe('$10.00');
    expect(dollaDollaBills(31.4159)).toBe('$31.42');
    expect(dollaDollaBills(-56.99)).toBe('-$56.99');
    expect(dollaDollaBills(-0.008)).toBe('-$0.01');
    expect(dollaDollaBills(0.05)).toBe('$0.05');
    expect(dollaDollaBills(1000000)).toBe('$1,000,000.00');
    expect(dollaDollaBills(-314159.2653)).toBe('-$314,159.27');
  });
});
