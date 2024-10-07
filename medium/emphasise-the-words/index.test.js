import emphasise from './index';

describe('Javascript - Medium - 14', () => {
  test('Emphasise the Words', () => {
    expect(emphasise('hello world')).toBe('Hello World');
    expect(emphasise('GOOD MORNING')).toBe('Good Morning');
    expect(emphasise('99 red balloons!')).toBe('99 Red Balloons!');
    expect(emphasise('1 2 3 4 5 6 7 8 9')).toBe('1 2 3 4 5 6 7 8 9');
    expect(emphasise('')).toBe('');
    expect(emphasise('joshua senoron')).toBe('Joshua Senoron');
  });
});
