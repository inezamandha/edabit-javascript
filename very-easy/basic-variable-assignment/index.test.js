import nameString from './index';

describe('Javascript - Very Easy - 19', () => {
  test('Basic Variable Assignment', () => {
    expect(nameString('Mubashir')).toEqual('MubashirEdabit');
    expect(nameString('Matt')).toEqual('MattEdabit');
    expect(nameString('javaScript')).toEqual('javaScriptEdabit');
    expect(nameString('Airforce')).toEqual('AirforceEdabit');
  });
});
