import printArray from './index';

describe('Javascript - Very Easy - 21', () => {
  test('Buggy Code (Part 5)', () => {
    expect(printArray(1)).toEqual([1]);
    expect(printArray(2)).toEqual([1, 2]);
    expect(printArray(3)).toEqual([1, 2, 3]);
    expect(printArray(4)).toEqual([1, 2, 3, 4]);
    expect(printArray(5)).toEqual([1, 2, 3, 4, 5]);
    expect(printArray(6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(printArray(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(printArray(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(printArray(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(printArray(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
