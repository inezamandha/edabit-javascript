import isSeven from './index';

describe('Javascript - Very Easy - 35', () => {
  test('Fix the Expression', () => {
    expect(isSeven(4)).toEqual(false);
    expect(isSeven(9)).toEqual(false);
    expect(isSeven(7)).toEqual(true);
    expect(isSeven(10)).toEqual(false);
    expect(isSeven(20)).toEqual(false);
    expect(isSeven(7)).toEqual(true);
  });
});
