import modifyLast from './index';

describe('Javascript - Very Easy - 80', () => {
  test('Modifying the Last Character', () => {
    expect(modifyLast('Hello', 3)).toEqual('Hellooo');
    expect(modifyLast('hey', 6)).toEqual('heyyyyyy');
    expect(modifyLast('plsssss!1!', 5)).toEqual('plsssss!1!!!!!');
    expect(modifyLast('gr', 2)).toEqual('grr');
    expect(modifyLast('excuse me what?', 5)).toEqual('excuse me what?????');
    expect(modifyLast('123', 5)).toEqual('1233333');
    expect(modifyLast('a', 3)).toEqual('aaa');
    expect(modifyLast('STOP', 3)).toEqual('STOPPP');
  });
});
