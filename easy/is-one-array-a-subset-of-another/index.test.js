import isSubset from './index';

describe('Javascript - Easy - 22', () => {
  test('Is One Array a Subset of Another?', () => {
    expect(isSubset([3, 2, 5], [5, 3, 7, 9, 2])).toEqual(true);
    expect(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])).toEqual(true);
    expect(isSubset([1, 2], [1, 2, 3])).toEqual(true);
    expect(isSubset([1, 2], [3, 5, 9, 1])).toEqual(false);
    expect(isSubset([1, 2, 3, 4], [4, 3, 2, 1])).toEqual(true);
    expect(isSubset([7, 9, 8, 4, 2], [7, 9, 5, 8, 4])).toEqual(false);
  });
});
