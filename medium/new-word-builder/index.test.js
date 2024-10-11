import wordBuilder from './index';

describe('Javascript - Medium - 27', () => {
  test('New Word Builder', () => {
    expect(wordBuilder(['g', 'e', 'o'], [1, 0, 2])).toBe('ego');
    expect(wordBuilder(['e', 't', 's', 't'], [3, 0, 2, 1])).toBe('test');
    expect(
      wordBuilder(['b', 'e', 't', 'i', 'd', 'a'], [1, 4, 5, 0, 3, 2])
    ).toBe('edabit');
    expect(
      wordBuilder(
        ['l', 'e', 'h', 'n', 'l', 'c', 'a', 'e', 'g'],
        [5, 2, 6, 4, 0, 1, 3, 8, 7]
      )
    ).toBe('challenge');
    expect(
      wordBuilder(['s', 'o', 'r', 't', 'e', 'd'], [0, 1, 2, 3, 4, 5])
    ).toBe('sorted');
  });
});
