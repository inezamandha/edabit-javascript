import flip from './index';

const str1 = "There's never enough time to do all the nothing you want";
const str2 = "I have all these great genes but they're recessive";
const str3 = "I like maxims that don't encourage behavior modification";

describe('Javascript - Medium - 31', () => {
  test('String Flips', () => {
    expect(flip('Hello', 'word')).toBe('olleH');
    expect(flip('Hello', 'sentence')).toBe('Hello');
    expect(flip(str1, 'word')).toBe(
      "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
    );
    expect(flip(str1, 'sentence')).toBe(
      "want you nothing the all do to time enough never There's"
    );
    expect(flip(str2, 'word')).toBe(
      "I evah lla eseht taerg seneg tub er'yeht evissecer"
    );
    expect(flip(str2, 'sentence')).toBe(
      "recessive they're but genes great these all have I"
    );
    expect(flip(str3, 'word')).toBe(
      "I ekil smixam taht t'nod egaruocne roivaheb noitacifidom"
    );
    expect(flip(str3, 'sentence')).toBe(
      "modification behavior encourage don't that maxims like I"
    );
  });
});
