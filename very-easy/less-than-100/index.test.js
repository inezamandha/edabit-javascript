import lessThan100 from './index';

describe('Javascript - Very Easy - 20', () => {
  test('Less Than 100?', () => {
    expect(lessThan100(5, 57)).toEqual(true);
    expect(lessThan100(77, 30)).toEqual(false);
    expect(lessThan100(0, 59)).toEqual(true);
    expect(lessThan100(78, 35)).toEqual(false);
    expect(lessThan100(63, 11)).toEqual(true);
    expect(lessThan100(37, 99)).toEqual(false);
    expect(lessThan100(52, 11)).toEqual(true);
    expect(lessThan100(82, 95)).toEqual(false);
    expect(lessThan100(17, 44)).toEqual(true);
    expect(lessThan100(74, 53)).toEqual(false);
    expect(lessThan100(3, 77)).toEqual(true);
    expect(lessThan100(25, 80)).toEqual(false);
    expect(lessThan100(59, 28)).toEqual(true);
    expect(lessThan100(69, 87)).toEqual(false);
    expect(lessThan100(10, 45)).toEqual(true);
    expect(lessThan100(43, 58)).toEqual(false);
    expect(lessThan100(50, 44)).toEqual(true);
    expect(lessThan100(74, 89)).toEqual(false);
    expect(lessThan100(3, 27)).toEqual(true);
    expect(lessThan100(21, 79)).toEqual(false);
  });
});
