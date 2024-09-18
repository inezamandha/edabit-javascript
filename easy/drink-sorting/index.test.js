import sortDrinkByPrice from './index';

const drinks1 = [
  { name: 'lemonade', price: 90 },
  { name: 'lime', price: 432 },
  { name: 'peach', price: 23 },
];

const sorted1 = [
  { name: 'peach', price: 23 },
  { name: 'lemonade', price: 90 },
  { name: 'lime', price: 432 },
];

const drinks2 = [
  { name: 'water', price: 120 },
  { name: 'lime', price: 80 },
  { name: 'peach', price: 90 },
];

const sorted2 = [
  { name: 'lime', price: 80 },
  { name: 'peach', price: 90 },
  { name: 'water', price: 120 },
];

describe('Javascript - Easy - 32', () => {
  test('Drink Sorting', () => {
    expect(sortDrinkByPrice(drinks1)).toEqual(sorted1);
    expect(sortDrinkByPrice(drinks2)).toEqual(sorted2);
  });
});
