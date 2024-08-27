import calculator from './index';

describe('Javascript - Very Easy - 54', () => {
  test('Miserable Parody of a Calculator', () => {
    expect(calculator('23+4')).toEqual(27);
    expect(calculator('45-15')).toEqual(30);
    expect(calculator('13+2-5*2')).toEqual(5);
    expect(calculator('49/7*2-3')).toEqual(11);
    expect(calculator('2+2*2')).toEqual(6);
    expect(calculator('5/2')).toEqual(2.5);
    expect(calculator('-34/4')).toEqual(-8.5);
    expect(calculator('0+43-0+56*0')).toEqual(43);
    expect(calculator('-14*2-37-0')).toEqual(-65);
    expect(calculator('0*0')).toEqual(0);
    expect(calculator('4+2+3-5*2-8/4-12-0+3-14')).toEqual(-26);
    expect(calculator('9/2+9/4')).toEqual(6.75);
    expect(calculator('56*27*18*12/2*0')).toEqual(0);
    expect(calculator('34/4*0*45*7')).toEqual(0);
  });
});
