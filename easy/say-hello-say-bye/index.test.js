import sayHelloBye from './index';

describe('Javascript - Easy - 28', () => {
  test('Say "Hello" Say "Bye"', () => {
    expect(sayHelloBye('jose', 1)).toEqual('Hello Jose');
    expect(sayHelloBye('barry', 1)).toEqual('Hello Barry');
    expect(sayHelloBye('jon', 0)).toEqual('Bye Jon');
    expect(sayHelloBye('khloy', 1)).toEqual('Hello Khloy');
    expect(sayHelloBye('sara', 0)).toEqual('Bye Sara');
    expect(sayHelloBye('Jon', 0)).toEqual('Bye Jon');
    expect(sayHelloBye('Matt', 1)).toEqual('Hello Matt');
  });
});
