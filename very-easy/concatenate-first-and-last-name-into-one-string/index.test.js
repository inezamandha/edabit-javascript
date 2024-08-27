import concatName from './index';

describe('Javascript - Very Easy - 53', () => {
  test('Concatenate First and Last Name into One String', () => {
    expect(concatName('John', 'Doe')).toEqual('Doe, John');
    expect(concatName('First', 'Last')).toEqual('Last, First');
    expect(concatName('A', 'B')).toEqual('B, A');

    // In case someone is making odd assumptions about comma characters.
    expect(concatName(',', ',')).toEqual(',, ,');
  });
});
