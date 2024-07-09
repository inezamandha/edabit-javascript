import getWord from './index';

describe('Javascript - Very Easy - 26', () => {
  test('Re-form the Word', () => {
    expect(getWord('maga', 'zine')).toEqual('Magazine');
    expect(getWord('reli', 'able')).toEqual('Reliable');
    expect(getWord('impl', 'icit')).toEqual('Implicit');
    expect(getWord('docu', 'ment')).toEqual('Document');
    expect(getWord('oppo', 'site')).toEqual('Opposite');
    expect(getWord('offi', 'cial')).toEqual('Official');
    expect(getWord('disa', 'gree')).toEqual('Disagree');
    expect(getWord('acci', 'dent')).toEqual('Accident');
    expect(getWord('omis', 'sion')).toEqual('Omission');
    expect(getWord('vigo', 'rous')).toEqual('Vigorous');
    expect(getWord('pred', 'ator')).toEqual('Predator');
    expect(getWord('prog', 'ress')).toEqual('Progress');
    expect(getWord('inva', 'sion')).toEqual('Invasion');
    expect(getWord('fare', 'well')).toEqual('Farewell');
    expect(getWord('majo', 'rity')).toEqual('Majority');
    expect(getWord('pers', 'onal')).toEqual('Personal');
    expect(getWord('sequ', 'ence')).toEqual('Sequence');
    expect(getWord('gove', 'rnor')).toEqual('Governor');
    expect(getWord('igno', 'rant')).toEqual('Ignorant');
    expect(getWord('fini', 'shed')).toEqual('Finished');
  });
});
