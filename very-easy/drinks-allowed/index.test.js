import shouldServeDrinks from './index';

describe('Javascript - Very Easy - 78', () => {
  test('Drinks Allowed?', () => {
    expect(shouldServeDrinks(17, true)).toEqual(false);
    expect(shouldServeDrinks(30, true)).toEqual(false);
    expect(shouldServeDrinks(24, false)).toEqual(true);
    expect(shouldServeDrinks(18, false)).toEqual(true);
    expect(shouldServeDrinks(3, false)).toEqual(false);
  });
});
