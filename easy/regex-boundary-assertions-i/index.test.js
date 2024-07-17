import isJS from './index';

describe('Javascript - Easy - 10', () => {
  test('RegEx: Boundary Assertions I', () => {
    expect(isJS('/users/user.jsx')).toEqual(true);
    expect(isJS('/users/user.js')).toEqual(true);
    expect(isJS('/users/user.ts')).toEqual(false);
    expect(isJS('/users/user.jpg')).toEqual(false);
    expect(isJS('/users/user.ext')).toEqual(false);
    expect(isJS('/users/user.php')).toEqual(false);
  });
});
