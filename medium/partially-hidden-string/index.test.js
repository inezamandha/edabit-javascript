import partiallyHide from './index';

describe('Javascript - Medium - 19', () => {
  test('Partially Hidden String', () => {
    expect(partiallyHide('Harry went to fight the basilisk')).toBe(
      'H---y w--t to f---t t-e b------k'
    );
    expect(partiallyHide('She rolled her eyes')).toBe('S-e r----d h-r e--s');
    expect(partiallyHide('skies were so beautiful')).toBe(
      's---s w--e so b-------l'
    );
    expect(partiallyHide('red is not my color')).toBe('r-d is n-t my c---r');
    expect(partiallyHide('so many options')).toBe('so m--y o-----s');
    expect(partiallyHide('the orient express')).toBe('t-e o----t e-----s');
    expect(partiallyHide('went to the post office')).toBe(
      'w--t to t-e p--t o----e'
    );
  });
});
