import eq from './index';

describe('Javascript - Very Easy - 57', () => {
  test('Evaluate an Equation', () => {
    expect(eq('1+2')).toEqual(3);
    expect(eq('6/(9-7)')).toEqual(3);
    expect(eq('3+2-4')).toEqual(1);
    expect(eq('3*4+1')).toEqual(13);
    expect(eq('5*8-4*9')).toEqual(4);
    expect(eq('3**7')).toEqual(2187);
    expect(eq('(6**3)+3')).toEqual(219);
  });
});
