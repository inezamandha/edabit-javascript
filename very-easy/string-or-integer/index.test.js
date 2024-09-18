import intOrString from './index';

describe('Javascript - Very Easy - 87', () => {
  test('String or Integer?', () => {
    expect(intOrString(1)).toEqual('int');
    expect(intOrString('HELLO')).toEqual('str');
    expect(intOrString('edabit')).toEqual('str');
    expect(intOrString(873432874)).toEqual('int');
    expect(intOrString(5)).toEqual('int');
  });
});
