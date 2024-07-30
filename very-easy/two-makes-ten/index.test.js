import makesTen from './index';

describe('Javascript - Very Easy - 51', () => {
  test('Two Makes Ten', () => {
    expect(makesTen(9, 10)).toEqual(true);
    expect(makesTen(9, 9)).toEqual(false);
    expect(makesTen(1, 9)).toEqual(true);
    expect(makesTen(10, 1)).toEqual(true);
    expect(makesTen(10, 10)).toEqual(true);
    expect(makesTen(8, 2)).toEqual(true);
    expect(makesTen(8, 3)).toEqual(false);
    expect(makesTen(10, 42)).toEqual(true);
    expect(makesTen(12, -2)).toEqual(true);
  });
});
