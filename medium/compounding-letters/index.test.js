import accum from './index';

describe('Javascript - Medium - 30', () => {
  test('Compounding Letters', () => {
    expect(accum('abcd')).toBe('A-Bb-Ccc-Dddd');
    expect(accum('RqaEzty')).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    expect(accum('cwAt')).toBe('C-Ww-Aaa-Tttt');
    expect(accum('VgyCdnQa')).toBe(
      'V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa'
    );
    expect(accum('nRBSdNOsMl')).toBe(
      'N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll'
    );
    expect(accum('nuE')).toBe('N-Uu-Eee');
    expect(accum('RlDrhZuQaqsoHEfziByObtMxkFCJVe')).toBe(
      'R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
    );
    expect(accum('EXpzPFx')).toBe('E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx');
    expect(accum('NU')).toBe('N-Uu');
    expect(accum('g')).toBe('G');
  });
});
