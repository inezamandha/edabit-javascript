import capLast from './index';

describe('Javascript - Medium - 37', () => {
  test('Capitalize the Last Letter', () => {
    expect(capLast('hello')).toBe('hellO');
    expect(capLast('My Name Is Edabit')).toBe('MY NamE IS EdabiT');
    expect(capLast('HELp THe LASt LETTERs CAPITALISe')).toBe(
      'HELP THE LAST LETTERS CAPITALISE'
    );
    expect(capLast('hellooooo')).toBe('hellooooO');
    expect(capLast('hahA I aM alreadY capitaliseD')).toBe(
      'hahA I aM alreadY capitaliseD'
    );
  });
});
