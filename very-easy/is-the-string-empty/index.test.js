import isEmpty from './index';

describe('Javascript - Very Easy - 40', () => {
  test('Is the String Empty?', () => {
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty(' ')).toEqual(false);
    expect(isEmpty('            ')).toEqual(false);
    expect(isEmpty('38215')).toEqual(false);
    expect(isEmpty('afjabsdf')).toEqual(false);
    expect(isEmpty('!?@&')).toEqual(false);
  });
});
