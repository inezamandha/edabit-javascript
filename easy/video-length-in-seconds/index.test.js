import minutesToSeconds from './index';

describe('Javascript - Easy - 36', () => {
  test('Video Length in Seconds', () => {
    expect(minutesToSeconds('01:00')).toEqual(60);
    expect(minutesToSeconds('13:56')).toEqual(836);
    expect(minutesToSeconds('10:60')).toEqual(false); // "60 is invalid"
    expect(minutesToSeconds('132:21')).toEqual(7941);
    expect(minutesToSeconds('132:271')).toEqual(false);
    expect(minutesToSeconds('01:30')).toEqual(90);
    expect(minutesToSeconds('10:00')).toEqual(600);
  });
});
