import seriesResistance from './index';

describe('Javascript - Easy - 65', () => {
  test('Sum of Resistance in Series Circuits', () => {
    expect(seriesResistance([1, 5, 6, 3])).toEqual('15 ohms');
    expect(seriesResistance([0.2, 0.3, 0.4])).toEqual('0.9 ohm');
    expect(seriesResistance([10, 12, 1, 10])).toEqual('33 ohms');
    expect(seriesResistance([10, 13, 3.8, 20, 10])).toEqual('56.8 ohms');
    expect(seriesResistance([0.5, 0.5])).toEqual('1 ohm');
    expect(seriesResistance([16, 30, 22.8, 4])).toEqual('72.8 ohms');
    expect(seriesResistance([20, 15, 32.5, 2])).toEqual('69.5 ohms');
    expect(seriesResistance([52, 22, 20, 30])).toEqual('124 ohms');
    expect(seriesResistance([10, 12, 32, 4.9, 5, 6, 71])).toEqual('140.9 ohms');
  });
});
