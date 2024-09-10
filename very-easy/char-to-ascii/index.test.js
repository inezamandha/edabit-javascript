import ctoa from './index';

describe('Javascript - Very Easy - 83', () => {
  test('Char-to-ASCII', () => {
    expect(ctoa(' ')).toEqual(32);
    expect(ctoa('A')).toEqual(65);
    expect(ctoa(']')).toEqual(93);
    expect(ctoa('^')).toEqual(94);
    expect(ctoa('c')).toEqual(99);
  });
});
