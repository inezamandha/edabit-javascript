import wormLength from './index';

describe('Javascript - Medium - 33', () => {
  test('Length of Worm', () => {
    expect(wormLength('----------')).toBe('100 mm.');
    expect(wormLength('')).toBe('invalid');
    expect(wormLength('---_-___---_')).toBe('invalid');
    expect(wormLength('------')).toBe('60 mm.');
    expect(wormLength('iwheguawhpvpaiehpiuwwega')).toBe('invalid');
    expect(wormLength('QWERTYUIOPASDFGHJKL')).toBe('invalid');
    expect(wormLength('------------')).toBe('120 mm.');
  });
});
