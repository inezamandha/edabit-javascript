import retrieve from './index';

describe('Javascript - Medium - 11', () => {
  test('Words that Start with a Vowel', () => {
    expect(retrieve('A simple life is a happy life for me.')).toEqual([
      'a',
      'is',
      'a',
    ]);
    expect(retrieve('Exercising is a healthy way to burn off energy.')).toEqual(
      ['exercising', 'is', 'a', 'off', 'energy']
    );
    expect(retrieve('The poor ostrich was ostracized.')).toEqual([
      'ostrich',
      'ostracized',
    ]);
    expect(retrieve('')).toEqual([]);
  });
});
