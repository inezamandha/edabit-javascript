import largestSwap from './index';

describe('Javascript - Easy - 13', () => {
  test('Largest Swap', () => {
    expect(largestSwap(27)).toEqual(false);
    expect(largestSwap(43)).toEqual(true);
    expect(largestSwap(14)).toEqual(false);
    expect(largestSwap(53)).toEqual(true);
    expect(largestSwap(99)).toEqual(true);
  });
});
