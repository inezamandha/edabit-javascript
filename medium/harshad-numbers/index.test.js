import isHarshad from './index';

describe('Javascript - Medium - 34', () => {
  test('Harshad Numbers', () => {
    expect(isHarshad(0)).toBe(false);
    expect(isHarshad(15)).toBe(false);
    expect(isHarshad(990)).toBe(true);
    expect(isHarshad(461)).toBe(false);
    expect(isHarshad(297)).toBe(false);
    expect(isHarshad(345)).toBe(false);
    expect(isHarshad(529)).toBe(false);
    expect(isHarshad(839)).toBe(false);
    expect(isHarshad(281)).toBe(false);
    expect(isHarshad(252)).toBe(true);
    expect(isHarshad(123)).toBe(false);
    expect(isHarshad(840)).toBe(true);
    expect(isHarshad(789)).toBe(false);
    expect(isHarshad(43)).toBe(false);
    expect(isHarshad(907)).toBe(false);
    expect(isHarshad(441)).toBe(true);
    expect(isHarshad(729)).toBe(false);
    expect(isHarshad(801)).toBe(true);
    expect(isHarshad(923)).toBe(false);
    expect(isHarshad(569)).toBe(false);
    expect(isHarshad(828)).toBe(true);
    expect(isHarshad(658)).toBe(false);
    expect(isHarshad(838)).toBe(false);
    expect(isHarshad(711)).toBe(true);
    expect(isHarshad(216)).toBe(true);
    expect(isHarshad(525)).toBe(false);
    expect(isHarshad(768)).toBe(false);
    expect(isHarshad(234)).toBe(true);
    expect(isHarshad(353)).toBe(false);
    expect(isHarshad(713)).toBe(false);
  });
});
