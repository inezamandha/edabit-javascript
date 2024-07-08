import isSameNum from './index';

describe('Javascript - Very Easy - 25', () => {
  test('Are the Numbers Equal?', () => {
    expect(isSameNum(4, 8)).toEqual(false);
    expect(isSameNum(2, 2)).toEqual(true);
    expect(isSameNum(0, 6)).toEqual(false);
    expect(isSameNum(2, '2')).toEqual(false);
  });
});
