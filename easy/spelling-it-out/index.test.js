import spelling from './index';

describe('Javascript - Easy - 26', () => {
  test('Spelling it Out', () => {
    expect(spelling('bee')).toEqual(['b', 'be', 'bee']);
    expect(spelling('cake')).toEqual(['c', 'ca', 'cak', 'cake']);
    expect(spelling('happy')).toEqual(['h', 'ha', 'hap', 'happ', 'happy']);
    expect(spelling('eagerly')).toEqual([
      'e',
      'ea',
      'eag',
      'eage',
      'eager',
      'eagerl',
      'eagerly',
    ]);
    expect(spelling('believe')).toEqual([
      'b',
      'be',
      'bel',
      'beli',
      'belie',
      'believ',
      'believe',
    ]);
  });
});
