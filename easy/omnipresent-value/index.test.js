import isOmnipresent from './index';

describe('Javascript - Easy - 40', () => {
  test('Omnipresent Value', () => {
    expect(
      isOmnipresent(
        [
          [1, 1],
          [1, 3],
          [5, 1],
          [6, 1],
        ],
        1
      )
    ).toEqual(true);
    expect(
      isOmnipresent(
        [
          [1, 1],
          [1, 3],
          [5, 1],
          [6, 1],
        ],
        6
      )
    ).toEqual(false);
    expect(isOmnipresent([[5], [5], [5], [6, 5]], 5)).toEqual(true);
    expect(isOmnipresent([[5], [5], [5], [6, 5]], 6)).toEqual(false);
    expect(
      isOmnipresent(
        [
          [5, 1],
          [5, 1],
          [5, 1],
          [6, 5, 1],
        ],
        1
      )
    ).toEqual(true);
  });
});
