import indexShuffle from './index';

describe('Javascript - Easy - 25', () => {
  test('Index Shuffle', () => {
    expect(indexShuffle('abcdef')).toEqual('acebdf');
    expect(indexShuffle('abababab')).toEqual('aaaabbbb');
    expect(indexShuffle('it was a beautiful day')).toEqual(
      'i a  euiu atwsabatfldy'
    );
    expect(indexShuffle('maybe')).toEqual('myeab');
    expect(indexShuffle('holiday')).toEqual('hldyoia');
  });
});
