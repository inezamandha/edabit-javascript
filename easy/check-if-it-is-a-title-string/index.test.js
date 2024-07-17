import checkTitle from './index';

describe('Javascript - Easy - 8', () => {
  test("Check If It's a Title String", () => {
    expect(checkTitle('A Mind Boggling Achievement')).toEqual(true, 'error');
    expect(checkTitle('A Simple Java Script Program!')).toEqual(true, 'error');
    expect(checkTitle('Water is transparent')).toEqual(false, 'error');
  });
});
