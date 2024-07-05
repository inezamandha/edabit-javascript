import giveMeSomething from './index';

describe('Javascript - Very Easy - 14', () => {
  test('Return Something to Me!', () => {
    expect(giveMeSomething('a')).toEqual('something a');
    expect(giveMeSomething('is cooking')).toEqual('something is cooking');
    expect(giveMeSomething(' is cooking')).toEqual('something  is cooking');
  });
});
