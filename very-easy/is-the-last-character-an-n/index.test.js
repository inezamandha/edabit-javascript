import isLastCharacterN from './index';

describe('Javascript - Very Easy - 79', () => {
  test('Is the Last Character an "N"?', () => {
    expect(isLastCharacterN('Aiden')).toEqual(true);
    expect(isLastCharacterN('Roxy')).toEqual(false);
    expect(isLastCharacterN('Bert')).toEqual(false);
    expect(isLastCharacterN('Dean')).toEqual(true);
    expect(isLastCharacterN('Ian')).toEqual(true);
    expect(isLastCharacterN('Brian')).toEqual(true);
    expect(isLastCharacterN('Daniel')).toEqual(false);
  });
});
