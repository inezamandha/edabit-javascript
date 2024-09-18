import timeForMilkAndCookies from './index';

describe('Javascript - Easy - 31', () => {
  test('Is it Time for Milk and Cookies?', () => {
    expect(timeForMilkAndCookies(new Date(2013, 11, 24))).toEqual(true);
    expect(timeForMilkAndCookies(new Date(3000, 11, 24))).toEqual(true);
    expect(timeForMilkAndCookies(new Date(2154, 11, 11))).toEqual(false);
    expect(timeForMilkAndCookies(new Date(2010, 11, 2))).toEqual(false);
    expect(timeForMilkAndCookies(new Date(1980, 9, 24))).toEqual(false);
  });
});
