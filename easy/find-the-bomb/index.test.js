import bomb from './index';

describe('Javascript - Easy - 15', () => {
  test('Find the Bomb', () => {
    expect(bomb('There is a bomb.')).toEqual('Duck!!!');
    expect(bomb('Hey, did you find it?')).toEqual('There is no bomb, relax.');
    expect(bomb('Hey, did you think ther is a bomb?')).toEqual('Duck!!!');
    expect(bomb('This goes boom!!!')).toEqual('There is no bomb, relax.');
    expect(bomb('Hey, did you find the BoMb?')).toEqual('Duck!!!');
  });
});
