import equalSlices from './index';

describe('Javascript - Very Easy - 33', () => {
  test('Slice of Pie', () => {
    expect(equalSlices(8, 3, 2)).toEqual(true);
    expect(equalSlices(8, 3, 3)).toEqual(false);
    expect(equalSlices(24, 12, 2)).toEqual(true);
    expect(equalSlices(5, 6, 1)).toEqual(false);
    expect(equalSlices(5, 0, 100)).toEqual(true);
    expect(equalSlices(15, 2, 7)).toEqual(true);
    expect(equalSlices(15, 2, 8)).toEqual(false);
  });
});
