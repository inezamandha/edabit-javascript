import toArray from './index';

describe('Javascript - Very Easy - 65', () => {
  test('Array from Comma-Delimited String', () => {
    expect(toArray('watermelon, raspberry, orange')).toEqual([
      'watermelon',
      'raspberry',
      'orange',
    ]);
    expect(toArray('x1, x2, x3, x4, x5')).toEqual([
      'x1',
      'x2',
      'x3',
      'x4',
      'x5',
    ]);
    expect(toArray('a, b, c, d')).toEqual(['a', 'b', 'c', 'd']);
    expect(toArray('')).toEqual([]);
  });
});
