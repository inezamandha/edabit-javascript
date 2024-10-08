import checkPalindrome from './index';

describe('Javascript - Very Easy - 72', () => {
  test('Is the String a Palindrome?', () => {
    expect(checkPalindrome('mom')).toEqual(true);
    expect(checkPalindrome('scary')).toEqual(false);
    expect(checkPalindrome('reviver')).toEqual(true);
    expect(checkPalindrome('stressed')).toEqual(false);
    expect(checkPalindrome('good')).toEqual(false);
    expect(checkPalindrome('refer')).toEqual(true);
    expect(checkPalindrome('something')).toEqual(false);
    expect(checkPalindrome('redder')).toEqual(true);
    expect(checkPalindrome('civic')).toEqual(true);
  });
});
