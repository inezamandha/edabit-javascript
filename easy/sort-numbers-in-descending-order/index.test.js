import sortDescending from './index';

describe('Javascript - Easy - 23', () => {
  test('Sort Numbers in Descending Order', () => {
    expect(sortDescending(123)).toEqual(321);
    expect(sortDescending(670276097)).toEqual(977766200);
    expect(sortDescending(2619805)).toEqual(9865210);
    expect(sortDescending(81294)).toEqual(98421);
    expect(sortDescending(0)).toEqual(0);
    expect(sortDescending(321)).toEqual(321);
    expect(sortDescending(628904)).toEqual(986420);
    expect(sortDescending(289327560)).toEqual(987653220);
    expect(sortDescending(6456)).toEqual(6654);
    expect(sortDescending(444111888555333)).toEqual(888555444333111);
  });
});
