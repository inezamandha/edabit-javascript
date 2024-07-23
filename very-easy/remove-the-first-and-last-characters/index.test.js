import removeFirstLast from './index';

describe('Javascript - Very Easy - 44', () => {
  test('Remove the First and Last Characters', () => {
    expect(removeFirstLast('hello')).toEqual('ell');
    expect(removeFirstLast('benefit')).toEqual('enefi');
    expect(removeFirstLast('wordy')).toEqual('ord');
    expect(removeFirstLast('maybe')).toEqual('ayb');
    expect(removeFirstLast('to')).toEqual('to');
    expect(removeFirstLast('a')).toEqual('a');
    expect(removeFirstLast('')).toEqual('');
  });
});
