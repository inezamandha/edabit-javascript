import findLetters from './index';

describe('Javascript - Medium - 23', () => {
  test('Find the Unique Letters', () => {
    expect(findLetters('monopoly')).toEqual(['m', 'n', 'p', 'l', 'y']);
    expect(findLetters('balloon')).toEqual(['b', 'a', 'n']);
    expect(findLetters('analysis')).toEqual(['n', 'l', 'y', 'i']);
    expect(findLetters('summer')).toEqual(['s', 'u', 'e', 'r']);
    expect(findLetters('apple')).toEqual(['a', 'l', 'e']);
    expect(findLetters('commission')).toEqual(['c', 'n']);
    expect(findLetters('fox')).toEqual(['f', 'o', 'x']);
  });
});
