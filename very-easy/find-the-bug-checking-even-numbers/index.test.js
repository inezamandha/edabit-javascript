import checkAllEven from './index';

describe('Javascript - Very Easy - 88', () => {
  test('Find the Bug: Checking Even Numbers', () => {
    expect(checkAllEven([1, 2, 3, 4])).toEqual(false);
    expect(checkAllEven([2, 4, 6])).toEqual(true);
    expect(checkAllEven([5, 6, 8, 10])).toEqual(false);
    expect(checkAllEven([-2, 2, -2, 2])).toEqual(true);
  });
});
