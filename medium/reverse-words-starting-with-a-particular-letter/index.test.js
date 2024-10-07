import specialReverse from './index';

describe('Javascript - Medium - 15', () => {
  test('Reverse Words Starting With a Particular Letter', () => {
    expect(specialReverse('word searches are super fun', 's')).toBe(
      'word sehcraes are repus fun'
    );
    expect(specialReverse('first man to walk on the moon', 'm')).toBe(
      'first nam to walk on the noom'
    );
    expect(specialReverse('peter piper picked pickled peppers', 'p')).toBe(
      'retep repip dekcip delkcip sreppep'
    );
    expect(specialReverse('he went to climb mount everest', 'p')).toBe(
      'he went to climb mount everest'
    );
  });
});
