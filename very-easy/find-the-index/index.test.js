import findIndex from './index';

describe('Javascript - Very Easy - 32', () => {
  test('Find the Index', () => {
    expect(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape')).toEqual(3);
    expect(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f')).toEqual(5);
    expect(
      findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com')
    ).toEqual(1);
  });
});
