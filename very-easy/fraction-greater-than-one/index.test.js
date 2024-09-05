import greaterThanOne from './index';

describe('Javascript - Very Easy - 67', () => {
  test('Fraction Greater Than One', () => {
    expect(greaterThanOne('1/2')).toEqual(false);
    expect(greaterThanOne('7/4')).toEqual(true);
    expect(greaterThanOne('10/10')).toEqual(false);
    expect(greaterThanOne('12/30')).toEqual(false);
    expect(greaterThanOne('28/3')).toEqual(true);
    expect(greaterThanOne('35/31')).toEqual(true);
    expect(greaterThanOne('11/27')).toEqual(false);
    expect(greaterThanOne('42/32')).toEqual(true);
    expect(greaterThanOne('34/15')).toEqual(true);
    expect(greaterThanOne('16/16')).toEqual(false);
    expect(greaterThanOne('38/41')).toEqual(false);
    expect(greaterThanOne('45/43')).toEqual(true);
    expect(greaterThanOne('13/38')).toEqual(false);
    expect(greaterThanOne('43/2')).toEqual(true);
    expect(greaterThanOne('16/31')).toEqual(false);
    expect(greaterThanOne('41/15')).toEqual(true);
    expect(greaterThanOne('2/38')).toEqual(false);
    expect(greaterThanOne('37/21')).toEqual(true);
  });
});
