import hasSpaces from './index';

describe('Javascript - Very Easy - 76', () => {
  test('Check String for Spaces', () => {
    expect(hasSpaces('Foo')).toEqual(false);
    expect(hasSpaces('Foo bar')).toEqual(true);
    expect(hasSpaces('Foo ')).toEqual(true);
    expect(hasSpaces(' Foo')).toEqual(true);
    expect(hasSpaces(' ')).toEqual(true);
    expect(hasSpaces('')).toEqual(false);
    expect(hasSpaces(",./;'[]-=")).toEqual(false);
  });
});
