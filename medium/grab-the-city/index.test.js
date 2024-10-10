import grabCity from './index';

describe('Javascript - Medium - 22', () => {
  test('Grab the City', () => {
    expect(grabCity('[Last Day!] Beer Festival [Munich]')).toBe('Munich');
    expect(grabCity('Cheese Factory Tour [Portland]')).toBe('Portland');
    expect(
      grabCity(
        '[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]'
      )
    ).toBe('Prince Edward Island');
    expect(grabCity('[5 Stars] Traditional Gondola Experience [Venice]')).toBe(
      'Venice'
    );
    expect(
      grabCity(
        '[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]'
      )
    ).toBe('Machu Picchu');
    expect(
      grabCity('[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]')
    ).toBe('Kyoto');
  });
});
