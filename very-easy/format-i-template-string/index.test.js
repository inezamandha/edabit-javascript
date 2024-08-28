import format from './index';

describe('Javascript - Very Easy - 56', () => {
  test('Format I: Template String', () => {
    expect(format('John', 'Joe', 'Jack')).toEqual(
      'Their names were: John, Joe and Jack.'
    );
    expect(format('Peter', 'Pin', 'Pan')).toEqual(
      'Their names were: Peter, Pin and Pan.'
    );
    expect(format('E', 'Da', 'Bit')).toEqual(
      'Their names were: E, Da and Bit.'
    );
    expect(format('Bulbasaur', 'Charmander', 'Squirtle')).toEqual(
      'Their names were: Bulbasaur, Charmander and Squirtle.'
    );
  });
});
