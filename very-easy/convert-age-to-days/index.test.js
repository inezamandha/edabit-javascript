import calcAge from './index';

describe('Javascript - Very Easy - 6', () => {
  test('Convert Age to Days', () => {
    expect(calcAge(10)).toEqual(3650);
    expect(calcAge(0)).toEqual(0);
    expect(calcAge(73)).toEqual(26645);
  });
});
