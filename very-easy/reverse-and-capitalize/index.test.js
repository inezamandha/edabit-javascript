import reverseCapitalize from './index';

describe('Javascript - Very Easy - 64', () => {
  test('Reverse and Capitalize', () => {
    expect(reverseCapitalize('edabit')).toEqual('TIBADE');
    expect(reverseCapitalize('abc')).toEqual('CBA');
    expect(reverseCapitalize('hellothere')).toEqual('EREHTOLLEH');
    expect(reverseCapitalize('input')).toEqual('TUPNI');
    expect(reverseCapitalize('indubitably')).toEqual('YLBATIBUDNI');
  });
});
