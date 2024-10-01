import multiplyNums from './index';

describe('Javascript - Medium - 9', () => {
  test('Multiplying Numbers in a String', () => {
    expect(multiplyNums('2, 3')).toEqual(6);
    expect(multiplyNums('1, 2, 3, 4')).toEqual(24);
    expect(multiplyNums('54, 75, 453, 0')).toEqual(0);
    expect(multiplyNums('10, -2')).toEqual(-20);
    expect(multiplyNums('-26, 1, -27, -12, -19')).toEqual(160056);
    expect(multiplyNums('16, 8')).toEqual(128);
    expect(multiplyNums('-27, -14, -28, 13, -17')).toEqual(2339064);
    expect(
      multiplyNums('-19, -22, -14, 20, -15, -24, -17, 19, 30, -10')
    ).toEqual(-4082823360000);
    expect(multiplyNums('1, 13, 0, -11, 26, -17, 21')).toEqual(0);
    expect(multiplyNums('-25, -19, 7, -26, -26')).toEqual(2247700);
    expect(multiplyNums('-4, -16, -22, -3, -6')).toEqual(-25344);
    expect(multiplyNums('-22, 11, 19, 5, 19, -9, -13, 20, -29')).toEqual(
      29641926600
    );
    expect(multiplyNums('-25, 22')).toEqual(-550);
    expect(multiplyNums('26, -19, 17, 26, -21')).toEqual(4585308);
    expect(multiplyNums('5, -1, 1, -28, 14, 28, 1')).toEqual(54880);
    expect(multiplyNums('-27, -9, 6, -25, 4')).toEqual(-145800);
    expect(multiplyNums('-24, -13, -14, 30, 9, -14')).toEqual(16511040);
    expect(multiplyNums('27, 25, 27, -18, -27, -7, 28, 27, 0')).toEqual(0);
    expect(multiplyNums('-23, 11, -18, -5, -4')).toEqual(91080);
    expect(multiplyNums('-16, -10, -29, -23, -30, -1')).toEqual(3201600);
    expect(multiplyNums('-14, -17, 9, -2, -17, -10, -30')).toEqual(21848400);
    expect(multiplyNums('-13, -23, 10, 0, -23')).toEqual(0);
    expect(multiplyNums('0')).toEqual(0);
    expect(multiplyNums('30')).toEqual(30);
    expect(multiplyNums('-24, -21, 6, -29, 23, 11, -21, -29')).toEqual(
      -13511936592
    );
    expect(multiplyNums('4, 23, 10')).toEqual(920);
    expect(multiplyNums('-13, -2, 28, 10, 25')).toEqual(182000);
    expect(multiplyNums('-18, -6, -9, 7, -1, -4, 5, -2, 19')).toEqual(5171040);
    expect(multiplyNums('-24, 15, -19, 20, -14, -8, 6, -22, 17')).toEqual(
      -34381670400
    );
    expect(multiplyNums('12, -12, -3, -12, 10, 16, -23, -5, 17')).toEqual(
      -1621555200
    );
    expect(multiplyNums('17')).toEqual(17);
    expect(multiplyNums('9, -27, 9, -22, 24, -1')).toEqual(-1154736);
    expect(multiplyNums('16, -26, -1, -25, 13, 6, 26, 2, 4')).toEqual(
      -168729600
    );
    expect(multiplyNums('-13, 17, 29, 19, 7')).toEqual(-852397);
    expect(multiplyNums('28, 15, -7, -25')).toEqual(73500);
    expect(multiplyNums('-8, 19, -11, -10, -3, -9, 30, 18')).toEqual(
      -243777600
    );
    expect(multiplyNums('22, -13, 29, 3, -29')).toEqual(721578);
    expect(multiplyNums('18, -18, -8, -16')).toEqual(-41472);
    expect(multiplyNums('-12, -28, -19, 14, 27, 14, -3, 10, 13, 1')).toEqual(
      13175809920
    );
    expect(multiplyNums('-26, -21, 27, 23, -22, 1')).toEqual(-7459452);
    expect(multiplyNums('5, -21, -26, -29, -8, 21, -5, -30, 1')).toEqual(
      1995084000
    );
    expect(multiplyNums('-9, -7, -13, -15, -2')).toEqual(-24570);
    expect(multiplyNums('9, 25, 1, 28, 3, -3, -16, -26, 12, -26')).toEqual(
      7359206400
    );
    expect(multiplyNums('-2, 4, -29')).toEqual(232);
    expect(multiplyNums('26, 13, 17, -16, 6')).toEqual(-551616);
    expect(multiplyNums('-17')).toEqual(-17);
    expect(multiplyNums('26, -15, -12, 2, -1, 4, 20, 14, 25, 3')).toEqual(
      -786240000
    );
    expect(multiplyNums('8, -11')).toEqual(-88);
    expect(multiplyNums('12, -2, 8, 6, -23, 9, 13, 14')).toEqual(43400448);
    expect(multiplyNums('-10, 19, -29, 3, 30, 20, -5')).toEqual(-49590000);
    expect(multiplyNums('19')).toEqual(19);
    expect(multiplyNums('15, -28, 8, 7, -20, 24, 2')).toEqual(22579200);
    expect(multiplyNums('25, -24, 4, 9, -17, 4, -24, -18, -3')).toEqual(
      -1903564800
    );
    expect(multiplyNums('8, -14, -30, 9, -14, 17, -14')).toEqual(100759680);
  });
});
