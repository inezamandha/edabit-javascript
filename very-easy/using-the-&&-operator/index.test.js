import and from './index';

describe('Javascript - Very Easy - 24', () => {
  test('Using the "&&" Operator', () => {
    expect(and(true, true)).toEqual(true);
    expect(and(true, false)).toEqual(false);
    expect(and(false, true)).toEqual(false);
    expect(and(false, false)).toEqual(false);
  });
});
