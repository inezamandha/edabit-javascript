import potatoes from './index';

describe('Javascript - Easy - 1', () => {
  test('Find the Amount of Potatoes', () => {
    expect(potatoes('potato')).toEqual(1);
    expect(potatoes('potatopotatocherry')).toEqual(2);
    expect(potatoes('potatopotatopotatoorange')).toEqual(3);
    expect(potatoes('potatopotatobananapotatopotato')).toEqual(4);
    expect(potatoes('potatopotatomangopotatopotatopotato')).toEqual(5);
    expect(potatoes('potatocucumberpotatopotatopotatopotatopotato')).toEqual(6);
  });
});
