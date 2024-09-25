import inkLevels from './index';

describe('Javascript - Easy - 60', () => {
  test('Printer Levels', () => {
    expect(
      inkLevels({
        cyan: 23,
        magenta: 12,
        yellow: 10,
      })
    ).toEqual(10);

    expect(
      inkLevels({
        cyan: 432,
        magenta: 543,
        yellow: 777,
      })
    ).toEqual(432);

    expect(
      inkLevels({
        cyan: 700,
        magenta: 700,
        yellow: 0,
      })
    ).toEqual(0);

    expect(
      inkLevels({
        cyan: 70,
        magenta: 700,
        yellow: 1,
      })
    ).toEqual(1);

    expect(
      inkLevels({
        cyan: 6543,
        magenta: 74543,
        yellow: 2345678,
      })
    ).toEqual(6543);

    expect(
      inkLevels({
        cyan: 1,
        magenta: 1,
        yellow: 1,
      })
    ).toEqual(1);

    expect(
      inkLevels({
        cyan: 700,
        magenta: 700,
        yellow: 700,
      })
    ).toEqual(700);
  });
});
