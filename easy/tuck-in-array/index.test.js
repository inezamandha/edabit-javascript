import tuckIn from './index';

describe('Javascript - Easy - 48', () => {
  test('Tuck in Array', () => {
    expect(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(tuckIn([15, 150], [45, 75, 35])).toEqual([15, 45, 75, 35, 150]);
    expect(
      tuckIn(['bottom', 'topping'], ['tomatosauce', 'vegetables', 'cheese'])
    ).toEqual(['bottom', 'tomatosauce', 'vegetables', 'cheese', 'topping']);
    expect(
      tuckIn(
        [
          [1, 2],
          [5, 6],
        ],
        [[3, 4]]
      )
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(tuckIn([true, false], [false, true, null, undefined])).toEqual([
      true,
      false,
      true,
      null,
      undefined,
      false,
    ]);
  });
});
