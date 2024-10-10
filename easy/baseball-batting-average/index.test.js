import battingAvg from './index';

describe('Javascript - Easy - 67', () => {
  test('Baseball Batting Average', () => {
    expect(
      battingAvg([
        [0, 0],
        [1, 3],
        [2, 2],
        [0, 4],
        [1, 5],
      ])
    ).toEqual('.286');

    expect(
      battingAvg([
        [2, 5],
        [2, 3],
        [0, 3],
        [1, 5],
        [2, 4],
      ])
    ).toEqual('.350');

    expect(
      battingAvg([
        [2, 3],
        [1, 5],
        [2, 4],
        [1, 5],
        [0, 5],
      ])
    ).toEqual('.273');

    expect(
      battingAvg([
        [1, 4],
        [0, 5],
        [4, 4],
        [1, 5],
        [0, 5],
      ])
    ).toEqual('.261');

    expect(
      battingAvg([
        [3, 3],
        [0, 5],
        [0, 4],
        [3, 5],
        [1, 5],
      ])
    ).toEqual('.318');

    expect(
      battingAvg([
        [0, 5],
        [1, 2],
        [1, 1],
        [4, 5],
        [1, 6],
        [2, 5],
        [0, 4],
        [3, 3],
        [0, 4],
        [0, 3],
      ])
    ).toEqual('.316');

    expect(
      battingAvg([
        [1, 6],
        [1, 4],
        [0, 4],
        [3, 6],
        [2, 5],
        [1, 4],
        [1, 6],
        [0, 1],
        [2, 5],
        [2, 6],
      ])
    ).toEqual('.277');

    expect(
      battingAvg([
        [2, 4],
        [1, 6],
        [2, 6],
        [1, 4],
        [4, 4],
        [3, 6],
        [2, 5],
        [0, 4],
        [0, 5],
        [0, 5],
      ])
    ).toEqual('.306');

    expect(
      battingAvg([
        [2, 6],
        [0, 3],
        [2, 5],
        [1, 3],
        [4, 6],
        [1, 4],
        [0, 5],
        [0, 5],
        [0, 6],
        [3, 3],
      ])
    ).toEqual('.283');

    expect(
      battingAvg([
        [1, 6],
        [0, 5],
        [0, 6],
        [0, 3],
        [2, 4],
        [3, 3],
        [1, 6],
        [3, 4],
        [0, 5],
        [1, 5],
      ])
    ).toEqual('.234');

    expect(
      battingAvg([
        [1, 1],
        [1, 5],
        [0, 3],
        [1, 3],
        [2, 6],
        [0, 4],
        [0, 5],
        [1, 5],
        [1, 6],
        [2, 2],
      ])
    ).toEqual('.225');

    expect(
      battingAvg([
        [2, 6],
        [0, 5],
        [1, 4],
        [2, 4],
        [4, 5],
        [1, 6],
        [2, 2],
        [0, 4],
        [1, 5],
        [0, 5],
      ])
    ).toEqual('.283');

    expect(
      battingAvg([
        [0, 3],
        [1, 5],
        [3, 4],
        [0, 6],
        [1, 2],
        [3, 4],
        [4, 5],
        [0, 5],
        [0, 5],
        [1, 5],
      ])
    ).toEqual('.295');

    expect(
      battingAvg([
        [3, 3],
        [0, 1],
        [0, 3],
        [3, 5],
        [1, 5],
        [1, 1],
        [2, 6],
        [0, 4],
        [1, 5],
        [2, 6],
      ])
    ).toEqual('.333');

    expect(
      battingAvg([
        [1, 6],
        [1, 5],
        [1, 6],
        [3, 5],
        [3, 5],
        [1, 5],
        [1, 4],
        [2, 6],
        [1, 5],
        [3, 6],
      ])
    ).toEqual('.321');
  });
});