import getOnlyEvens from './index';

describe('Javascript - Easy - 57', () => {
  test('Even All the Way', () => {
    expect(getOnlyEvens([1, 3, 2, 6, 4, 8])).toEqual([2, 4]);
    expect(getOnlyEvens([0, 1, 2, 3, 4])).toEqual([0, 2, 4]);
    expect(getOnlyEvens([1, 2, 3, 4, 5])).toEqual([]);
    expect(getOnlyEvens([37, 26, 18, 42, 2, 30])).toEqual([18, 2]);
    expect(getOnlyEvens([49, 41, 30, 44, 26, 0, 5])).toEqual([30, 26]);
    expect(getOnlyEvens([47, 47, 12, 3, 48])).toEqual([12, 48]);
    expect(getOnlyEvens([30, 26, 0, 13, 20, 38, 50, 2])).toEqual([
      30, 0, 20, 50,
    ]);
    expect(getOnlyEvens([34, 21, 38, 28, 13, 8, 26, 29, 24, 5])).toEqual([
      34, 38, 26, 24,
    ]);
    expect(getOnlyEvens([47, 31, 24, 37, 29, 41, 31, 49, 4, 24])).toEqual([
      24, 4,
    ]);
    expect(getOnlyEvens([45, 47, 20, 49])).toEqual([20]);
    expect(getOnlyEvens([20, 14, 10, 32, 28, 6, 49, 5, 46])).toEqual([
      20, 10, 28, 46,
    ]);
    expect(getOnlyEvens([39, 45, 5])).toEqual([]);
    expect(getOnlyEvens([45, 3, 50, 15, 49])).toEqual([50]);
    expect(getOnlyEvens([45, 25, 10, 47, 24, 30, 28, 48])).toEqual([
      10, 24, 28,
    ]);
    expect(getOnlyEvens([10, 16, 9, 40, 28, 21, 37, 4, 45])).toEqual([10, 28]);
    expect(getOnlyEvens([31, 25, 19, 49, 50, 22])).toEqual([50]);
    expect(getOnlyEvens([38, 36, 8, 34, 8, 45, 4, 45, 2, 9])).toEqual([
      38, 8, 8, 4, 2,
    ]);
    expect(getOnlyEvens([38, 21, 50, 14])).toEqual([38, 50]);
    expect(getOnlyEvens([24, 16, 32, 14, 32, 42, 13, 33, 13, 39])).toEqual([
      24, 32, 32,
    ]);
    expect(getOnlyEvens([38, 24, 4, 49, 5, 33, 1, 10, 3])).toEqual([38, 4]);
    expect(getOnlyEvens([46])).toEqual([46]);
    expect(getOnlyEvens([13, 6, 12, 23, 31, 14, 2])).toEqual([12, 2]);
    expect(getOnlyEvens([7, 1, 34, 14, 26, 3, 7, 7])).toEqual([34, 26]);
    expect(getOnlyEvens([31, 11, 26, 19, 45, 12])).toEqual([26]);
    expect(getOnlyEvens([22])).toEqual([22]);
    expect(getOnlyEvens([29, 11])).toEqual([]);
    expect(getOnlyEvens([6, 6, 37, 10, 4])).toEqual([6, 4]);
    expect(getOnlyEvens([6, 46, 12, 47, 49, 26, 40, 28, 38])).toEqual([
      6, 12, 40, 38,
    ]);
    expect(getOnlyEvens([31])).toEqual([]);
    expect(getOnlyEvens([28, 44, 4, 31, 30, 46, 37])).toEqual([28, 4, 30]);
    expect(getOnlyEvens([24])).toEqual([24]);
    expect(getOnlyEvens([23, 41, 49, 5, 0, 46, 15, 15])).toEqual([0]);
    expect(getOnlyEvens([44, 39, 15])).toEqual([44]);
  });
});
