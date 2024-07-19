import firstVowel from './index';

describe('Javascript - Easy - 14', () => {
  test('Return the Index of the First Vowel', () => {
    expect(firstVowel('hello')).toEqual(1);
    expect(firstVowel('apple')).toEqual(0);
    expect(firstVowel('string')).toEqual(3);
    expect(firstVowel('STRAWBERRY')).toEqual(3);
    expect(firstVowel('MELON')).toEqual(1);
    expect(firstVowel('piNNEaPLE')).toEqual(1);
  });
});
