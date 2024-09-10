import isPlural from './index';

describe('Javascript - Very Easy - 84', () => {
  test('Is the Word Singular or Plural?', () => {
    expect(isPlural('dudes')).toEqual(true);
    expect(isPlural('flowers')).toEqual(true);
    expect(isPlural('checks')).toEqual(true);
    expect(isPlural('varies')).toEqual(true);
    expect(isPlural('efforts')).toEqual(true);
    expect(isPlural('mood')).toEqual(false);
    expect(isPlural('whiteboard')).toEqual(false);
    expect(isPlural('cow')).toEqual(false);
    expect(isPlural('word')).toEqual(false);
    expect(isPlural('love')).toEqual(false);
    expect(isPlural('silly')).toEqual(false);
  });
});
