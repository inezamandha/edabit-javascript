import add from './index';

describe('Javascript - Very Easy - 59', () => {
  test('WordCharWord', () => {
    expect(add('#', 'hello world')).toEqual('hello#world');
    expect(add('R', 'javascript is fun')).toEqual('javascriptRisRfun');
    expect(add('*', 'use .join() for this challenge')).toEqual(
      'use*.join()*for*this*challenge'
    );
    expect(add('#', ' ')).toEqual('#');
  });
});
