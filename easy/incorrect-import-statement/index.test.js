import fixImport from './index';

describe('Javascript - Easy - 4', () => {
  test('Incorrect Import Statement', () => {
    expect(fixImport('import object from module_name')).toEqual(
      'from module_name import object'
    );
    expect(fixImport('import randint from random')).toEqual(
      'from random import randint'
    );
    expect(fixImport('import pi from math')).toEqual('from math import pi');
  });
});
