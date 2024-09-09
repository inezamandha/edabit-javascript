import acceptIntoMovie from './index';

describe('Javascript - Very Easy - 77', () => {
  test('Movie Theatre Admittance', () => {
    expect(acceptIntoMovie(14, true)).toEqual(true);
    expect(acceptIntoMovie(15, true)).toEqual(true);
    expect(acceptIntoMovie(16, true)).toEqual(true);
    expect(acceptIntoMovie(14, false)).toEqual(false);
    expect(acceptIntoMovie(15, false)).toEqual(true);
    expect(acceptIntoMovie(16, false)).toEqual(true);
    expect(acceptIntoMovie(14.99999, true)).toEqual(true);
    expect(acceptIntoMovie(14.99999, false)).toEqual(false);
  });
});
