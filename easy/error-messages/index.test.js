import error from './index';

describe('Javascript - Easy - 5', () => {
  test('Error Messages', () => {
    expect(error(1)).toEqual('Check the fan: e1');
    expect(error(2)).toEqual('Emergency stop: e2');
    expect(error(3)).toEqual('Pump Error: e3');
    expect(error(4)).toEqual('c: e4');
    expect(error(5)).toEqual('Temperature Sensor Error: e5');
    expect(error(-1000)).toEqual(101);
  });
});
