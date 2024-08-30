import howManyTimes from './index';

describe('Javascript - Very Easy - 62', () => {
  test('Edaaaaabit', () => {
    expect(howManyTimes(5)).toEqual('Edaaaaabit');
    expect(howManyTimes(15)).toEqual('Edaaaaaaaaaaaaaaabit');
    expect(howManyTimes(10)).toEqual('Edaaaaaaaaaabit');
    expect(howManyTimes(23)).toEqual('Edaaaaaaaaaaaaaaaaaaaaaaabit');
    expect(howManyTimes(1)).toEqual('Edabit');
  });
});
