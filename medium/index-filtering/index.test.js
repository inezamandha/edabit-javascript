import indexFilter from './index';

describe('Javascript - Medium - 42', () => {
  const testCases = [
    { input: [[7, -1, 5, 1], 'She is the love of my love'], expected: 'tesh' },
    {
      input: [
        [4, -7, -13, -11, -2, 0],
        'Relax and stay calm to avoid failures',
      ],
      expected: 'xavier',
    },
    { input: [[2, 3, 8, 11], 'Autumn in New York'], expected: 'tune' },
    { input: [[0, 1, 5, 7, 4, 2], 'Cry me a river'], expected: 'creamy' },
    {
      input: [
        [9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2],
        "That's life, I've got you under my skin",
      ],
      expected: 'frank sinatra',
    },
    { input: [[-1, 8, 8, 3], 'Dream a Little Dream of Me'], expected: 'ella' },
  ];

  testCases.forEach(({ input, expected }, index) => {
    test(`Index Filtering - ${index + 1}`, () => {
      expect(indexFilter(input[0], input[1])).toBe(expected);
    });
  });
});
