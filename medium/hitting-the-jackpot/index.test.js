import testJackpot from './index';

describe('Javascript - Medium - 4', () => {
  test('Hitting the Jackpot', () => {
    expect(testJackpot(['@', '@', '@', '@'])).toEqual(true);
    expect(testJackpot(['!', '!', '!', '!'])).toEqual(true);
    expect(testJackpot(['abc', 'abc', 'abc', 'abc'])).toEqual(true);
    expect(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke'])).toEqual(
      true
    );
    expect(testJackpot(['SS', 'SS', 'SS', 'SS'])).toEqual(true);
    expect(testJackpot([':(', ':)', ':|', ':|'])).toEqual(false);
    expect(testJackpot(['&&', '&', '&&&', '&&&&'])).toEqual(false);
    expect(testJackpot(['hee', 'heh', 'heh', 'heh'])).toEqual(false);
    expect(testJackpot(['SS', 'SS', 'SS', 'Ss'])).toEqual(false);
    expect(testJackpot(['SS', 'SS', 'Ss', 'Ss'])).toEqual(false);
  });
});
