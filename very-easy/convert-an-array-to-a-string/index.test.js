import arrayToString from './index';

describe('Javascript - Very Easy - 43', () => {
  test('Convert an Array to a String', () => {
    expect(arrayToString([1, 2, 3, 4, 5, 6])).toEqual('123456');
    expect(arrayToString(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual('abcdef');
    expect(arrayToString([1, 2, 3, 'a', 's', 'd'])).toEqual('123asd');
    expect(
      arrayToString(['a', 's', 'd', 'f', 'e', 'r', 1, 2, 3, 4, 5, 0])
    ).toEqual('asdfer123450');
    expect(
      arrayToString(['A', 'D', 'F', 'G', 'H', 'Y', 'TR', 'NNHJK'])
    ).toEqual('ADFGHYTRNNHJK');
  });
});
