import comp from './index';

describe('Javascript - Very Easy - 42', () => {
  test('Compare Strings by Count of Characters', () => {
    expect(comp('AB', 'CD')).toEqual(true);
    expect(comp('ABC', 'DE')).toEqual(false);
    expect(comp('hello', 'edabit')).toEqual(false);
    expect(comp('meow', 'woof')).toEqual(true);
    expect(comp('jrnvjrnnt', 'cvjknfjvmfvnfjn')).toEqual(false);
    expect(comp('jkvnjrt', 'krnf')).toEqual(false);
    expect(comp('Facebook', 'Snapchat')).toEqual(true);
  });
});
