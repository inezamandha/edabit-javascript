import getFirstValue from './index';

describe('Javascript - Very Easy - 8', () => {
  test('Return the First Element in an Array', () => {
    expect(getFirstValue([1, 2, 3])).toEqual(1);
    expect(getFirstValue([80, 5, 100])).toEqual(80);
    expect(getFirstValue([-500, 0, 50])).toEqual(-500);
    expect(getFirstValue([5, 2, 3])).toEqual(5);
    expect(getFirstValue([75675, 5, 100])).toEqual(75675);
    expect(getFirstValue([-52320, 0, 50])).toEqual(-52320);
  });
});
