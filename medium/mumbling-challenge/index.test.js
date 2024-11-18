import mumbling from './index';

describe('Javascript - Medium - 35', () => {
  test('Mumbling Challenge', () => {
    expect(mumbling('MubAshIr')).toBe(
      'M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr'
    );
    expect(mumbling('maTT')).toBe('M-Aa-Ttt-Tttt');
    expect(mumbling('airForce')).toBe(
      'A-Ii-Rrr-Ffff-Ooooo-Rrrrrr-Ccccccc-Eeeeeeee'
    );
    expect(mumbling('EdaBit')).toBe('E-Dd-Aaa-Bbbb-Iiiii-Tttttt');
    expect(mumbling('PaKiStAn')).toBe(
      'P-Aa-Kkk-Iiii-Sssss-Tttttt-Aaaaaaa-Nnnnnnnn'
    );
  });
});
