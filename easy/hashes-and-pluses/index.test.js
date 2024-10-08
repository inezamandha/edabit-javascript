import hashPlusCount from './index';

describe('Javascript - Easy - 24', () => {
  test('Hashes and Pluses', () => {
    expect(hashPlusCount('####')).toEqual([4, 0]);
    expect(hashPlusCount('#')).toEqual([1, 0]);
    expect(hashPlusCount('+++++++')).toEqual([0, 7]);
    expect(hashPlusCount('++')).toEqual([0, 2]);
    expect(hashPlusCount('#+#+')).toEqual([2, 2]);
    expect(hashPlusCount('###+')).toEqual([3, 1]);
    expect(hashPlusCount('##+++#')).toEqual([3, 3]);
    expect(hashPlusCount('#+++#+#++#')).toEqual([4, 6]);
    expect(hashPlusCount('')).toEqual([0, 0]);
  });
});
