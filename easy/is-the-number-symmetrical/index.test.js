import isSymmetrical from './index';

describe('Javascript - Easy - 39', () => {
  test('Is the Number Symmetrical?', () => {
    expect(isSymmetrical(23)).toEqual(false);
    expect(isSymmetrical(9562)).toEqual(false);
    expect(isSymmetrical(10019)).toEqual(false);
    expect(isSymmetrical(1)).toEqual(true);
    expect(isSymmetrical(3223)).toEqual(true);
    expect(isSymmetrical(95559)).toEqual(true);
    expect(isSymmetrical(66566)).toEqual(true);
  });
});
