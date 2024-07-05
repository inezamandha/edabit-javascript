import addition from './index';

describe('Javascript - Very Easy - 4', () => {
  test('Return the Next Number from the Integer Passed', () => {
    expect(addition(2)).toEqual(3);
    expect(addition(-9)).toEqual(-8);
    expect(addition(0)).toEqual(1);
    expect(addition(999)).toEqual(1000);
    expect(addition(73)).toEqual(74);
  });
});
