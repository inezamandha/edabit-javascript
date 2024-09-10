import isBoiling from './index';

describe('Javascript - Very Easy - 81', () => {
  test('Is the Water Boiling?', () => {
    expect(isBoiling('212F')).toEqual(true);
    expect(isBoiling('100C')).toEqual(true);
    expect(isBoiling('0F')).toEqual(false);
    expect(isBoiling('-1F')).toEqual(false);
    expect(isBoiling('213F')).toEqual(true);
    expect(isBoiling('104C')).toEqual(true);
    expect(isBoiling('-10F')).toEqual(false);
    expect(isBoiling('120F')).toEqual(false);
  });
});
