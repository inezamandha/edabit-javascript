import numberSplit from './index';

describe('Javascript - Easy - 50', () => {
  test('Number Split', () => {
    expect(numberSplit(4)).toEqual([2, 2]);
    expect(numberSplit(10)).toEqual([5, 5]);
    expect(numberSplit(11)).toEqual([5, 6]);
    expect(numberSplit(0)).toEqual([0, 0]);
    expect(numberSplit(1)).toEqual([0, 1]);
    expect(numberSplit(-4)).toEqual([-2, -2]);
    expect(numberSplit(-5)).toEqual([-3, -2]);
    expect(numberSplit(-9)).toEqual([-5, -4]);
  });
});
