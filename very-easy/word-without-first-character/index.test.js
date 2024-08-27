import newWord from './index';

describe('Javascript - Very Easy - 55', () => {
  test('Word without First Character', () => {
    expect(newWord('pokhara')).toEqual('okhara');
    expect(newWord('biratnagar')).toEqual('iratnagar');
    expect(newWord('nepal')).toEqual('epal');
    expect(newWord('damak')).toEqual('amak');
    expect(newWord('itahari')).toEqual('tahari');
    expect(newWord('rasuwa')).toEqual('asuwa');
    expect(newWord('rolpa')).toEqual('olpa');
  });
});
