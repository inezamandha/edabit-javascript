import getCase from './index';

describe('Javascript - Very Easy - 82', () => {
  test('Lowercase, Uppercase or Mixed?', () => {
    expect(getCase('whisper...')).toEqual('lower');
    expect(getCase('SHOUT!')).toEqual('upper');
    expect(getCase('Indoor Voice')).toEqual('mixed');
    expect(getCase('324324Indoor66453546Voice434')).toEqual('mixed');
    expect(getCase('!!!!SHOUT!!!!')).toEqual('upper');
    expect(getCase('......313whisper2131232...')).toEqual('lower');
  });
});
