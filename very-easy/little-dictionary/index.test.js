import dictionary from './index';

describe('Javascript - Very Easy - 61', () => {
  test('Little Dictionary', () => {
    expect(dictionary('bu', ['button', 'breakfast', 'border'])).toEqual([
      'button',
    ]);
    expect(
      dictionary('beau', ['pastry', 'delicious', 'name', 'boring'])
    ).toEqual([]);
    expect(dictionary('there', ['there', 'here', 'everywhere'])).toEqual([
      'there',
    ]);
    expect(dictionary('sno', ['snow', 'paper', 'ghost'])).toEqual(['snow']);
    expect(
      dictionary('ma', ['marriage', 'married', 'many', 'delight'])
    ).toEqual(['marriage', 'married', 'many']);
    expect(
      dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy'])
    ).toEqual(['notion', 'nominate', 'note']);
    expect(
      dictionary('cre', ['creating', 'creature', 'creed', 'increasing'])
    ).toEqual(['creating', 'creature', 'creed']);
  });
});
