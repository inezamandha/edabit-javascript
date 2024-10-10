import addNums from './index';

describe('Javascript - Easy - 61', () => {
  test('Adding Numbers in a String', () => {
    expect(addNums('2, 5, 1, 8, 4')).toEqual(20);
    expect(addNums('1, 2, 3, 4, 5, 6, 7')).toEqual(28);
    expect(addNums('10')).toEqual(10);
    expect(addNums('-12, -8, 2, 11, -16, 16')).toEqual(-7);
    expect(addNums('25, -4, -15, -7, 27, 12, 29, -6, 20, 9')).toEqual(90);
    expect(
      addNums(
        '24, 7, -15, -28, -21, 6, 5, -6, 23, 24, -22, 30, -21, -10, -10, -12, 24, -18, -13, -27, 22, -30, -11, -13, 6, 7, 27, 1'
      )
    ).toEqual(-51);
    expect(
      addNums(
        '-17, -18, -18, -14, -8, 0, 12, 2, 10, 5, -8, 12, -17, 8, -5, -23, 2, 29, -30, 13, -22, 19, 13, -18, -8'
      )
    ).toEqual(-81);
    expect(addNums('16, 8, 19, 25, 18, 26, 2, 14')).toEqual(128);
    expect(
      addNums(
        '-18, -10, 9, 12, -16, 22, 2, 17, 10, -25, 1, -25, -15, -29, 12, 11, 4'
      )
    ).toEqual(-38);
    expect(
      addNums(
        '12, -30, 26, -18, -4, 25, 19, -22, 7, -17, 3, -30, -27, 10, -12, -12, -24'
      )
    ).toEqual(-94);
    expect(addNums('0, 21, 20, 0, 26, -9, 12, -9, 20')).toEqual(81);
    expect(
      addNums(
        '-27, 28, -9, -9, 4, -22, -13, 0, -2, 19, 9, 5, 20, 21, -3, 22, 6, -10, -1, -12, 2'
      )
    ).toEqual(28);
    expect(addNums('13, -29, 13, 22, 23, 14, 2')).toEqual(58);
    expect(
      addNums(
        '-18, 3, 30, 13, 20, -23, -18, -27, -30, 1, -19, -3, -19, -22, -1'
      )
    ).toEqual(-113);
    expect(
      addNums(
        '18, 20, 11, -7, -1, -7, -17, -3, 25, 23, 25, 6, 7, -1, -11, -24, -19, -18, 8, 24, 29, 19, 13, 0, -19, -25, -2, 8'
      )
    ).toEqual(82);
    expect(
      addNums(
        '-13, -30, -1, -9, -25, -9, 11, -28, 0, 10, -23, -20, -5, 21, -29, 6, 20, -23, -23, -24, 30, -14, 24'
      )
    ).toEqual(-154);
    expect(addNums('5, -16')).toEqual(-11);
    expect(addNums('-28, -1, 12, 15, 16, -11, 23')).toEqual(26);
    expect(addNums('16, -3, 15, -20')).toEqual(8);
    expect(
      addNums(
        '10, -2, -3, 6, -17, -8, -4, -9, -19, -13, 9, 19, 26, 26, -23, 5, 4, 2, -22, -10, 3, 11, -1, 10, 2, 23'
      )
    ).toEqual(25);
    expect(addNums('-19, -25, -27, 27, -16, -29, 19, -30, -18')).toEqual(-118);
    expect(
      addNums(
        '-28, 14, -19, -24, -17, 30, -1, 8, -13, -21, -4, 29, 4, 6, 29, -23, -9, -26, 8, -20, -14, -22'
      )
    ).toEqual(-113);
    expect(addNums('-28, -11, -29')).toEqual(-68);
    expect(
      addNums(
        '18, -10, 22, -17, -6, -20, -25, -23, -1, 22, -16, 0, -24, 26, 20, 21, 3, -27, -24, -5, -28, -4, -3, 16, -18, 19, 26, -29'
      )
    ).toEqual(-87);
    expect(
      addNums(
        '-14, -25, -29, 3, 7, 11, 27, 12, -23, -12, 1, -17, -17, 4, 21, -29'
      )
    ).toEqual(-80);
    expect(addNums('-4, 4, 11, 18, 3, -15, 19, 25, 29')).toEqual(90);
    expect(
      addNums(
        '14, 7, -24, -25, 6, 5, 13, -7, -9, -3, 15, -20, 28, -19, 29, -5, -10, 12, -22, 15, -30, 3, 11, 27, 4, 21'
      )
    ).toEqual(36);
    expect(
      addNums(
        '-28, -10, 19, 25, -27, -26, 25, -18, 10, 13, 0, 30, -4, 8, 21, -27, -25, -6, -25, -9, -14, -7, -19, 3, 8'
      )
    ).toEqual(-83);
    expect(
      addNums(
        '23, -25, 27, -15, -5, -9, -17, -9, 1, -11, -12, -17, 18, 4, -30, -15, -13, 16, -21, -7, 10, 20, 19, 27, 24, -17, 10'
      )
    ).toEqual(-24);
    expect(
      addNums(
        '14, -6, -22, 12, 4, 20, -1, -22, 9, 26, 12, -17, 29, -28, 17, -10, 26'
      )
    ).toEqual(63);
    expect(
      addNums(
        '-3, -25, 3, -2, -30, -16, -12, 3, -10, 15, -2, 15, -4, -3, 16, -8, -5, -14, -10, -14'
      )
    ).toEqual(-106);
    expect(addNums('27, 28, -18, -19, -25, 2, 24, -2, -10, 5, -12, 9')).toEqual(
      9
    );
    expect(addNums('18')).toEqual(18);
    expect(addNums('-16, -13, 11, 4, 26, -26')).toEqual(-14);
    expect(addNums('25, -5, 11, -23, -1, 14')).toEqual(21);
    expect(
      addNums(
        '-6, 29, 15, 9, -28, 11, -16, 10, 7, -9, -3, -1, 11, -29, 9, 6, -7, -30, -6, 26, 6'
      )
    ).toEqual(4);
    expect(addNums('30, 6, 22, 12, 21, -2, -1, -14, 5')).toEqual(79);
    expect(
      addNums(
        '-28, -12, -8, 17, -23, -7, -26, -30, 11, -18, -16, 23, 26, 4, 24, 10, 24, -19, -22, -29, 6, -26, 16, -10, -25, -27, -28, 26'
      )
    ).toEqual(-167);
    expect(
      addNums(
        '12, -18, 18, -21, -8, 21, 24, -27, 29, -22, -16, -30, -13, 3, 14, 3, 20, 29, 30, -20, 6, -15, 0, -4, -17'
      )
    ).toEqual(-2);
    expect(addNums('-9, -18, -26, -2, -12, 0, 3, -3')).toEqual(-67);
    expect(addNums('-28, 23, 30, -26, -2, 14, 4, 20')).toEqual(35);
    expect(
      addNums('-8, -21, -9, 25, -20, 10, -20, -9, -3, -9, 2, 20, 29, -21')
    ).toEqual(-34);
    expect(
      addNums(
        '20, 7, -26, -12, -10, 27, 0, -12, 11, -5, 30, 7, -9, -6, -1, 27, 21'
      )
    ).toEqual(69);
    expect(addNums('17, -12, -15, -9, -19, 29, 13')).toEqual(4);
    expect(addNums('-7, -23, -3, -26, 10, -10, -2, -19, 6, 22, 8')).toEqual(
      -44
    );
    expect(
      addNums(
        '11, 21, -27, 28, -30, 23, -10, 19, -13, 30, -6, -9, 28, -24, 25, 30, -23, -3, -10, 15, -29, -17, 16, -19, -16'
      )
    ).toEqual(10);
    expect(addNums('8, -10, 29, -29, -6, -7, 4, 16, 5, -23')).toEqual(-13);
    expect(
      addNums(
        '-5, -13, -17, -21, -14, -14, 30, -5, -3, -9, -18, -29, 14, -29, 20, 21, 10, 30, 13, -5, -24, -11, 11, 7'
      )
    ).toEqual(-61);
    expect(
      addNums('-11, -22, 19, -6, 14, 27, -22, 26, -29, -4, 14, 10')
    ).toEqual(16);
    expect(
      addNums(
        '18, 19, 9, -25, 8, -21, 5, -3, -5, 23, -28, -27, 6, 28, 24, 2, -17, -14, -12, 26, -15, -26'
      )
    ).toEqual(-25);
    expect(
      addNums('19, 23, -17, 13, -28, 28, -26, -8, -5, 10, -7, -11, 28, -8')
    ).toEqual(11);
    expect(addNums('-4, -4, -28')).toEqual(-36);
  });
});