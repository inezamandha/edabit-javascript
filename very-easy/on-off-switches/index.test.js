import posCom from './index';

describe('Javascript - Very Easy - 34', () => {
  test('On/Off Switches', () => {
    expect(posCom(5)).toEqual(32);
    expect(posCom(4)).toEqual(16);
    expect(posCom(3)).toEqual(8);
    expect(posCom(2)).toEqual(4);
    expect(posCom(1)).toEqual(2);
    expect(posCom(6)).toEqual(64);
    expect(posCom(7)).toEqual(128);
    expect(posCom(8)).toEqual(256);
    expect(posCom(9)).toEqual(512);
    expect(posCom(10)).toEqual(1024);
    expect(posCom(25)).toEqual(33554432);
  });
});
