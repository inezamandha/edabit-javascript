import filterArray from './index';

describe('Javascript - Very Easy - 47', () => {
  test('Filter Strings from Array', () => {
    expect(filterArray([1, 2, 3, 'a', 'b', 4])).toEqual([1, 2, 3, 4]);
    expect(filterArray(['A', 1, '&amp', 0, -9, 'Edabit'])).toEqual([1, 0, -9]);
    expect(filterArray(['Nothing', 'here'])).toEqual([]);
    expect(filterArray([1, 2, 3, 3.5, 'a', 'b', 4, 5.8, 6])).toEqual([
      1, 2, 3, 4, 6,
    ]);
  });
});
