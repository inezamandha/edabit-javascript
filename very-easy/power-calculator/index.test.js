import circuitPower from './index';

describe('Javascript - Very Easy - 9', () => {
  test('Circuit Power', () => {
    expect(circuitPower(110, 3)).toEqual(330);
    expect(circuitPower(230, 10)).toEqual(2300);
    expect(circuitPower(480, 20)).toEqual(9600);
  });
});
