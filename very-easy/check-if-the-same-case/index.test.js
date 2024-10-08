import sameCase from './index';

describe('Javascript - Very Easy - 63', () => {
  test('Check if the Same Case', () => {
    expect(sameCase('HELLO')).toEqual(true);
    expect(sameCase('HEllo')).toEqual(false);
    expect(sameCase('mArmALadE')).toEqual(false);
    expect(sameCase('marmalade')).toEqual(true);
    expect(sameCase('MARMALADE')).toEqual(true);
    expect(sameCase('ketchUP')).toEqual(false);
    expect(sameCase('pickle')).toEqual(true);
    expect(sameCase('MUSTARD')).toEqual(true);
  });
});
