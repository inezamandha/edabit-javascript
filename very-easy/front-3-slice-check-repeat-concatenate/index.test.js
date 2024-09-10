import frontThree from './index';

describe('Javascript - Very Easy - 85', () => {
  test('Front 3 - Slice Check Repeat Concatenate', () => {
    expect(frontThree('Python')).toEqual('PytPytPyt');
    expect(frontThree('Chocolate')).toEqual('ChoChoCho');
    expect(frontThree('duh')).toEqual('duhduhduh');
    expect(frontThree('Sportsmanship')).toEqual('SpoSpoSpo');
    expect(frontThree('ab')).toEqual('ababab');
    expect(frontThree('a')).toEqual('aaa');
    expect(frontThree('')).toEqual('');
  });
});
