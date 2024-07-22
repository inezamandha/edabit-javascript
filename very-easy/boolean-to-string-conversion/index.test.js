import boolToString from './index';

describe('Javascript - Very Easy - 41', () => {
  test('Boolean to String Conversion', () => {
    expect(boolToString(true)).toEqual('true');
    expect(boolToString(false)).toEqual('false');
  });
});
