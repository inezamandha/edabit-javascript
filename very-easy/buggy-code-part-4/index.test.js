import greeting from './index';

describe('Javascript - Very Easy - 36', () => {
  test('Buggy Code (Part 4)', () => {
    expect(greeting('Matt')).toEqual('Hello, Matt!');
    expect(greeting('Helen')).toEqual('Hello, Helen!');
    expect(greeting('Mubashir')).toEqual('Hello, my Love!');
  });
});
