import hello from './index';

describe('Javascript - Very Easy - 1', () => {
  test('How Edabit Works', () => {
    expect(hello()).toEqual('hello edabit.com');
  });
});
