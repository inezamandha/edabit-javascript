import removeABC from './index';

describe('Javascript - Medium - 10', () => {
  test('Remove the Letters ABC', () => {
    expect(removeABC('This might be a bit hard')).toEqual(
      'This might e  it hrd'
    );
    expect(removeABC('This is awesome')).toEqual('This is wesome');
    expect(removeABC('hello world!')).toEqual(null);
    expect(removeABC('coding is fun!')).toEqual('oding is fun!');
    expect(removeABC('')).toEqual(null);
  });
});
