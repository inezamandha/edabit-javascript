import isAlpha from './index';

describe('Javascript - Medium - 26', () => {
  test('Is the Sum of Letters Even or Odd?', () => {
    expect(isAlpha("i'am king")).toBe(true);
    expect(isAlpha('True')).toBe(true);
    expect(isAlpha('alexa')).toBe(false);
  });
});
