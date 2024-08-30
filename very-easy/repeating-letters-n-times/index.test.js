import repeat from './index';

describe('Javascript - Very Easy - 60', () => {
  test('Repeating Letters N Times', () => {
    expect(repeat('mice', 5)).toEqual('mmmmmiiiiiccccceeeee');
    expect(repeat('hello', 3)).toEqual('hhheeellllllooo');
    expect(repeat('stop', 1)).toEqual('stop');
    expect(repeat('tomato', 2)).toEqual('ttoommaattoo');
  });
});
