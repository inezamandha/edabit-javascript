import divisible from './index';

describe('Javascript - Very Easy - 29', () => {
  test('Multiple of 100', () => {
    expect(divisible(1)).toEqual(false);
    expect(divisible(100)).toEqual(true);
    expect(divisible(1000)).toEqual(true);
    expect(divisible(111000)).toEqual(true);
    expect(divisible(-1)).toEqual(false, "Don't forget negatives.");
    expect(divisible(0)).toEqual(true, 'Cover the 0 cases.');
    expect(divisible(-100)).toEqual(true, '-100 is divisible by 100.');
  });
});
