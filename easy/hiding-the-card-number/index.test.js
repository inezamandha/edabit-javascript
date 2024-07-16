import cardHide from './index';

describe('Javascript - Easy - 7', () => {
  test('Hiding the Card Number', () => {
    expect(cardHide('1234123456785678')).toEqual('************5678');
    expect(cardHide('8754456321113213')).toEqual('************3213');
    expect(cardHide('35123413355523')).toEqual('**********5523');
  });
});
