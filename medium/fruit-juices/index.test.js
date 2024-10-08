import getDrinkID from './index';

describe('Javascript - Medium - 18', () => {
  test('Fruit Juices', () => {
    expect(getDrinkID('apple', '500ml')).toBe('APP500');
    expect(getDrinkID('pineapple', '45ml')).toBe('PIN45');
    expect(getDrinkID('orange', '750ml')).toBe('ORA750');
    expect(getDrinkID('passion fruit', '1ml')).toBe('PASFRU1');
    expect(getDrinkID('mango', '1000ml')).toBe('MAN1000');
    expect(getDrinkID('very berry', '253ml')).toBe('VERBER253');
    expect(getDrinkID('raspberry and lime', '350ml')).toBe('RASANDLIM350');
  });
});
