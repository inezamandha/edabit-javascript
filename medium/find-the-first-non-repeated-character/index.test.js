import firstNonRepeatedCharacter from './index';

describe('Javascript - Medium - 21', () => {
  test('Find the First Non-Repeated Character', () => {
    expect(
      firstNonRepeatedCharacter(
        'the quick brown fox jumps then quickly blows air'
      )
    ).toBe('f');
    expect(
      firstNonRepeatedCharacter(
        'the misty examination pleases into the drab county'
      )
    ).toBe('x');
    expect(firstNonRepeatedCharacter('hheelloo')).toBe(false); // Return false when every character repeats.
    expect(
      firstNonRepeatedCharacter(
        'it was then the darling top met the whispering wing'
      )
    ).toBe('d');
    expect(firstNonRepeatedCharacter('')).toBe(false); // An empty string should return false.
    expect(
      firstNonRepeatedCharacter(
        'it was then the frothy word met the round night'
      )
    ).toBe('a');
    expect(
      firstNonRepeatedCharacter('is the remind zone better than the section')
    ).toBe('m');
    expect(firstNonRepeatedCharacter('b')).toBe('b');
    expect(
      firstNonRepeatedCharacter('what if the brainy boss ate the afternoon')
    ).toBe('w');
    expect(
      firstNonRepeatedCharacter(
        'the sympathetic mixture rejects into the leafy objective'
      )
    ).toBe('p');
  });
});
