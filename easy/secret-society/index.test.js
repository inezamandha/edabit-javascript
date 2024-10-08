import societyName from './index';

describe('Javascript - Easy - 18', () => {
  test('Secret Society', () => {
    expect(societyName(['Adam', 'Sarah', 'Malcolm'])).toEqual('AMS');
    expect(
      societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey'])
    ).toEqual('CJMPRR');
    expect(societyName(['Harry', 'Newt', 'Luna', 'Cho'])).toEqual('CHLN');
    expect(societyName(['Sherlock', 'Irene', 'John'])).toEqual('IJS');
    expect(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj'])).toEqual(
      'AHPRS'
    );
  });
});
