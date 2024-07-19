import owofied from './index';

describe('Javascript - Very Easy - 37', () => {
  test('Owofied a Sentence', () => {
    expect(owofied("I'm gonna ride 'til I can't no more")).toEqual(
      "I'm gonna rwidwe 'twil I can't no morwe owo"
    );
    expect(owofied('Do you ever feel like a plastic bag')).toEqual(
      'Do you wevwer fwewel lwikwe a plastwic bag owo'
    );
    expect(owofied("Cause baby you're a firework")).toEqual(
      "Causwe baby you'rwe a fwirwework owo"
    );
    expect(owofied('Never gonna give you up')).toEqual(
      'Nwevwer gonna gwivwe you up owo'
    );
    expect(owofied("We've known each other for so long")).toEqual(
      "Wwe'vwe known weach othwer for so long owo"
    );
    expect(owofied('Never gonna let you down')).toEqual(
      'Nwevwer gonna lwet you down owo'
    );
    expect(owofied('Shine bright like a diamond')).toEqual(
      'Shwinwe brwight lwikwe a dwiamond owo'
    );
  });
});
