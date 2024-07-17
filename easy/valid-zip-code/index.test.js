import isValid from './index';

describe('Javascript - Easy - 9', () => {
  test('Valid Zip Code', () => {
    expect(isValid('59001')).toEqual(true);
    expect(isValid('853a7')).toEqual(false); // No non-digits allowed.
    expect(isValid('732 32')).toEqual(false); // No spaces allowed.
    expect(isValid('788876')).toEqual(false); // No sequences of length greater than 5.
    expect(isValid('a923b')).toEqual(false); // No letters allowed.
    expect(isValid('5923!')).toEqual(false); // No non-digits allowed.
    expect(isValid('59238aa')).toEqual(false); // No letters and no sequences of length greater than 5.
    expect(isValid('88231')).toEqual(true);
  });
});
