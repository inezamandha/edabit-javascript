import addition from './index';

describe('Javascript - Very Easy - 2', () => {
  test('Return the Sum of Two Numbers', () => {
    expect(addition(2, 3)).toEqual(5);
    expect(addition(-3, -6)).toEqual(-9);
    expect(addition(7, 3)).toEqual(10);
    expect(addition(88, 2)).toEqual(90);
  });
});
