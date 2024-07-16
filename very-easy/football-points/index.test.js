import footballPoints from './index';

describe('Javascript - Very Easy - 28', () => {
  test('Football Points', () => {
    expect(footballPoints(1, 2, 3)).toEqual(5);
    expect(footballPoints(5, 5, 5)).toEqual(20);
    expect(footballPoints(1, 0, 0)).toEqual(3);
    expect(footballPoints(0, 7, 0)).toEqual(7);
    expect(footballPoints(0, 0, 15)).toEqual(0);
  });
});
