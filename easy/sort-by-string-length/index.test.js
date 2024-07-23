import sortByLength from './index';

describe('Javascript - Easy - 21', () => {
  test('Sort by String Length', () => {
    expect(sortByLength(['a', 'ccc', 'dddd', 'bb'])).toEqual([
      'a',
      'bb',
      'ccc',
      'dddd',
    ]);
    expect(sortByLength(['apple', 'pie', 'shortcake'])).toEqual([
      'pie',
      'apple',
      'shortcake',
    ]);
    expect(sortByLength(['may', 'april', 'september', 'august'])).toEqual([
      'may',
      'april',
      'august',
      'september',
    ]);
    expect(sortByLength(['maybe'])).toEqual(['maybe']);
    expect(sortByLength([])).toEqual([]);
  });
});
