import longBurp from './index';

describe('Javascript - Very Easy - 50', () => {
  test('Burrrrrrrp', () => {
    expect(longBurp(3)).toEqual('Burrrp');
    expect(longBurp(5)).toEqual('Burrrrrp');
    expect(longBurp(9)).toEqual('Burrrrrrrrrp');
    expect(longBurp(10)).toEqual('Burrrrrrrrrrp');
    expect(longBurp(13)).toEqual('Burrrrrrrrrrrrrp');
    expect(longBurp(18)).toEqual('Burrrrrrrrrrrrrrrrrrp');
    expect(longBurp(1)).toEqual('Burp');
  });
});
