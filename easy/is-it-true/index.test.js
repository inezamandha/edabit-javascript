import isTrue from './index';

describe('Javascript - Easy - 19', () => {
  test('Is it True?', () => {
    expect(isTrue('8<7')).toEqual(false);
    expect(isTrue('15>4')).toEqual(true);
    expect(isTrue('6>6')).toEqual(false);
    expect(isTrue('10<10')).toEqual(false);
    expect(isTrue('10<9')).toEqual(false);
    expect(isTrue('5>6')).toEqual(false);
    expect(isTrue('2=2')).toEqual(true);
    expect(isTrue('5=13')).toEqual(false);
    expect(isTrue('15=137')).toEqual(false);
    expect(isTrue('101=101')).toEqual(true);
  });
});
