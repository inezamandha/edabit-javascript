import sliceSum from './index';

describe('Javascript - Easy - 49', () => {
  test('Summing a Slice', () => {
    expect(sliceSum([1, 3, 2], 2)).toEqual(4);
    expect(sliceSum([4, 2, 5, 7], 4)).toEqual(18);
    expect(sliceSum([3, 6, 2], 0)).toEqual(0);
    expect(sliceSum([2, 4], 9)).toEqual(6);
    expect(sliceSum([-5, 2], 2)).toEqual(-3);
    expect(sliceSum([0, 0, 0, 3, 4], 3)).toEqual(0);
  });
});
