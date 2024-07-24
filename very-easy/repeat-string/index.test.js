import repeatString from './index';

describe('Javascript - Very Easy - 49', () => {
  test('Repeat String', () => {
    expect(repeatString('Mubashir', 2)).toEqual('MubashirMubashir');
    expect(repeatString('Matt', 3)).toEqual('MattMattMatt');
    expect(repeatString(1990, 7)).toEqual('Not A String !!');
    expect(repeatString('*', 3)).toEqual('***');
    expect(repeatString('Hello', 11)).toEqual(
      'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
    );
    expect(repeatString('243624', 22)).toEqual(
      '243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624'
    );
    expect(repeatString([], 3)).toEqual('Not A String !!');
    expect(repeatString({}, 3)).toEqual('Not A String !!');
    expect(repeatString(24, 3)).toEqual('Not A String !!');
    expect(repeatString(true, 3)).toEqual('Not A String !!');
    expect(repeatString('Hello', 0)).toEqual('');
  });
});
