import capSpace from './index';

describe('Javascript - Medium - 32', () => {
  test('Capital Split', () => {
    expect(capSpace('helloWorld')).toBe('hello world');
    expect(capSpace('iLoveMyTeapot')).toBe('i love my teapot');
    expect(capSpace('stayIndoors')).toBe('stay indoors');
  });
});
