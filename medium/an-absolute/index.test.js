import absolute from './index';

describe('Javascript - Medium - 28', () => {
  test('An Absolute', () => {
    expect(absolute('I am a champion!!!')).toBe('I am an absolute champion!!!');
    expect(absolute('Such an amazing bowler.')).toBe('Such an amazing bowler.');
    expect(absolute('A hero of the leaf')).toBe('An absolute hero of the leaf');
    expect(absolute('That place is such a beauty')).toBe(
      'That place is such an absolute beauty'
    );
    expect(absolute('A man with no haters.')).toBe(
      'An absolute man with no haters.'
    );
  });
});
