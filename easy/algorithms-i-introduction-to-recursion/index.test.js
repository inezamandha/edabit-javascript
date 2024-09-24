import factorial from './index';

describe('Javascript - Easy - 56', () => {
  test('Algorithms I: Introduction to Recursion', () => {
    expect(factorial(7)).toEqual(5040);
    expect(factorial(1)).toEqual(1);
    expect(factorial(9)).toEqual(362880);
    expect(factorial(2)).toEqual(2);
  });
});
