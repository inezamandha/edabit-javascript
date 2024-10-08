import camelToSnake from './index';

describe('Javascript - Medium - 20', () => {
  test('Convert camelCase to snake_case', () => {
    expect(camelToSnake('magicCarrots')).toBe('magic_carrots');
    expect(camelToSnake('greatApples for aSmellyRhino')).toBe(
      'great_apples for a_smelly_rhino'
    );
    expect(camelToSnake('th1sSh0uldB3FineT00')).toBe('th1s_sh0uld_b3_fine_t00');
  });
});
