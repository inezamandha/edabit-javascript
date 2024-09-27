import findNemo from './index';

describe('Javascript - Medium - 1', () => {
  test('Finding Nemo', () => {
    expect(findNemo('I am Ne mo Nemo !')).toEqual('I found Nemo at 5!');
    expect(findNemo('N e m o is NEMO NeMo Nemo !')).toEqual(
      'I found Nemo at 8!'
    );
    expect(findNemo("I am Nemo's dad Nemo senior .")).toEqual(
      'I found Nemo at 5!'
    );
    expect(findNemo('Oh, hello !')).toEqual("I can't find Nemo :(");
    expect(findNemo('Is it Nemos, Nemona, Nemoor or Garfield?')).toEqual(
      "I can't find Nemo :("
    );
    expect(
      findNemo(
        'Nemo is a clown fish, he has white and orange stripes. Nemo , come back!'
      )
    ).toEqual('I found Nemo at 1!');
  });
});
