import convert from './index';

describe('Javascript - Very Easy - 3', () => {
  test('Convert Minutes into Seconds', () => {
    expect(convert(6)).toEqual(360);
    expect(convert(4)).toEqual(240);
    expect(convert(8)).toEqual(480);
    expect(convert(60)).toEqual(3600);
  });
});
