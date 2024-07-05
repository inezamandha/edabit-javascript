import squared from './index';

describe('Javascript - Very Easy - 15', () => {
  test('Correct the Mistakes', () => {
    expect(squared(10)).toEqual(100);
    expect(squared(69)).toEqual(4761);
    expect(squared(666)).toEqual(443556);
    expect(squared(-21)).toEqual(441);
    expect(squared(21)).toEqual(441);
  });
});
