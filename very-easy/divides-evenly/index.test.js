import dividesEvenly from './index';

describe('Javascript - Very Easy - 69', () => {
  test('Divides Evenly', () => {
    expect(dividesEvenly(98, 7)).toEqual(true);
    expect(dividesEvenly(87, 49)).toEqual(false);
    expect(dividesEvenly(34, 14)).toEqual(false);
    expect(dividesEvenly(78, 6)).toEqual(true);
    expect(dividesEvenly(30, 4)).toEqual(false);
    expect(dividesEvenly(87, 73)).toEqual(false);
    expect(dividesEvenly(74, 7)).toEqual(false);
    expect(dividesEvenly(87, 29)).toEqual(true);
    expect(dividesEvenly(48, 24)).toEqual(true);
    expect(dividesEvenly(99, 20)).toEqual(false);
    expect(dividesEvenly(98, 49)).toEqual(true);
    expect(dividesEvenly(100, 6)).toEqual(false);
    expect(dividesEvenly(64, 4)).toEqual(true);
    expect(dividesEvenly(70, 35)).toEqual(true);
    expect(dividesEvenly(38, 38)).toEqual(true);
    expect(dividesEvenly(29, 3)).toEqual(false);
    expect(dividesEvenly(20, 8)).toEqual(false);
    expect(dividesEvenly(66, 50)).toEqual(false);
    expect(dividesEvenly(95, 1)).toEqual(true);
    expect(dividesEvenly(58, 2)).toEqual(true);
  });
});
