import mean from './index';

describe('Javascript - Easy - 62', () => {
  test('Calculate the Mean', () => {
    expect(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toBeCloseTo(2.55, 2);
    expect(mean([324, 543, 654, 9876])).toBeCloseTo(2849.25, 2);
    expect(mean([0, 0, 0, 0])).toBeCloseTo(0.0, 2);
    expect(mean([30, 40, 20, 100, 30])).toBeCloseTo(44.0, 2);
    expect(mean([1, 1, 1, 0])).toBeCloseTo(0.75, 2);
    expect(mean([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])).toBeCloseTo(0.8, 2);
    expect(mean([10000])).toBeCloseTo(10000.0, 2);
  });
});
