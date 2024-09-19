import emotify from './index';

describe('Javascript - Easy - 33', () => {
  test('Emotify the Sentence', () => {
    expect(emotify('Make me smile')).toEqual('Make me :D');
    expect(emotify('Make me grin')).toEqual('Make me :)');
    expect(emotify('Make me sad')).toEqual('Make me :(');
    expect(emotify('Make me mad')).toEqual('Make me :P');
  });
});
