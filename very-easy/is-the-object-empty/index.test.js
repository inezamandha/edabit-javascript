import isEmpty from './index';

describe('Javascript - Very Easy - 73', () => {
  test('Is the Object Empty?', () => {
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty({ a: 1 })).toEqual(false);
    expect(isEmpty({ z: 2, w: 4, y: 5 })).toEqual(false);
  });
});
