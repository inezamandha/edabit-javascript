import unstretch from './index';

describe('Javascript - Medium - 29', () => {
  test('Stretched Words', () => {
    expect(unstretch('llossttttt')).toBe('lost');
    expect(unstretch('cccccaaaaannnnne')).toBe('cane');
    expect(unstretch('hhoooneestttt')).toBe('honest');
    expect(unstretch('ppppooowwddddeeerrrr')).toBe('powder');
    expect(unstretch('eexxpppppeeccctt')).toBe('expect');
    expect(unstretch('rrrrepooooorrttt')).toBe('report');
    expect(unstretch('pppaaaaattteeeennnntt')).toBe('patent');
    expect(unstretch('mmmeeemoooryy')).toBe('memory');
    expect(unstretch('vvvvviiiiisssuuaaalll')).toBe('visual');
    expect(unstretch('eeeennnnsuuurrre')).toBe('ensure');
    expect(unstretch('iiinncclludddddeee')).toBe('include');
    expect(unstretch('ttteestiffffyyy')).toBe('testify');
    expect(unstretch('ggrrrrraaaaavvvvviiitttyyyy')).toBe('gravity');
    expect(unstretch('cccuuuultttttuuuuurreee')).toBe('culture');
    expect(unstretch('qquaalliiifffyy')).toBe('qualify');
    expect(unstretch('iiinnccoooonnnnnggggrrrrruuuuooouuuuusss')).toBe(
      'incongruous'
    );
    expect(unstretch('eeeennnnttiiiitlllleeeeemmeennnttttt')).toBe(
      'entitlement'
    );
    expect(unstretch('aaaaassstttttooniiiiissshhiiinnnnnggg')).toBe(
      'astonishing'
    );
    expect(unstretch('cccccoiinnnncccciidddenncee')).toBe('coincidence');
    expect(unstretch('prrrrreeeppppaaaarrrrraaattiionn')).toBe('preparation');
  });
});
