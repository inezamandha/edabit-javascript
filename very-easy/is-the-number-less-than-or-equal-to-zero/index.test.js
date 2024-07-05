import lessThanOrEqualToZero from './index';

describe('Javascript - Very Easy - 16', () => {
  test('Is the Number Less Than or Equal to Zero?', () => {
    expect(lessThanOrEqualToZero(5)).toEqual(false);
    expect(lessThanOrEqualToZero(0)).toEqual(true);
    expect(lessThanOrEqualToZero(-5)).toEqual(true);
  });
});
