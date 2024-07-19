import helloName from './index';

describe('Javascript - Very Easy - 38', () => {
  test('Name Greeting!', () => {
    expect(helloName('Gerald')).toEqual('Hello Gerald!');
    expect(helloName('Fatima')).toEqual('Hello Fatima!');
    expect(helloName('Ed')).toEqual('Hello Ed!');
    expect(helloName('Tiffany')).toEqual('Hello Tiffany!');
  });
});
