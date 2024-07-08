import swap from './index';

describe('Javascript - Very Easy - 22', () => {
  test('Buggy Code (Part 7)', () => {
    expect(swap(100, 200)).toEqual([200, 100]);
    expect(swap(44, 33)).toEqual([33, 44]);
    expect(swap(21, 12)).toEqual([12, 21]);
    expect(swap(10, 20)).toEqual([20, 10]);
  });
});
