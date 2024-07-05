import cubes from './index';

describe('Javascript - Very Easy - 7', () => {
  test('Buggy Code (Part 1)', () => {
    expect(cubes(2)).toEqual(8);
    expect(cubes(3)).toEqual(27);
    expect(cubes(4)).toEqual(64);
    expect(cubes(5)).toEqual(125);
    expect(cubes(10)).toEqual(1000);
  });
});
