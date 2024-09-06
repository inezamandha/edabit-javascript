import isLeap from './index';

describe('Javascript - Very Easy - 74', () => {
  test('Leap Years', () => {
    expect(isLeap(2020)).toEqual(true); // Example #1
    expect(isLeap(1800)).toEqual(false); // Example #2
    expect(isLeap(2000)).toEqual(true); // Example #3
    expect(isLeap(2019)).toEqual(false); // Example #4
    expect(isLeap(1452)).toEqual(true);
    expect(isLeap(1998)).toEqual(false);
    expect(isLeap(1904)).toEqual(true);
    expect(isLeap(1985)).toEqual(false);
    expect(isLeap(2048)).toEqual(true);
    expect(isLeap(1600)).toEqual(true);
  });
});
