import stringInt from './index';

describe('Javascript - Very Easy - 52', () => {
  test('Return a String as an Integer', () => {
    expect(stringInt('6')).toEqual(6);
    expect(stringInt('2')).toEqual(2);
    expect(stringInt('10')).toEqual(10);
    expect(stringInt('666')).toEqual(666);
  });
});
