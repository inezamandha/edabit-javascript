import oddOrEven from './index';

describe('Javascript - Very Easy - 58', () => {
  test('Is the String Odd or Even?', () => {
    expect(oddOrEven('apples')).toEqual(true);
    expect(oddOrEven('banana')).toEqual(true);
    expect(oddOrEven('cherry')).toEqual(true);
    expect(oddOrEven('mango')).toEqual(false);
    expect(oddOrEven('peach')).toEqual(false);
    expect(oddOrEven('pears')).toEqual(false);
  });
});
