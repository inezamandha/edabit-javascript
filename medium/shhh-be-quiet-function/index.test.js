import shhh from './index';

describe('Javascript - Medium - 39', () => {
  test('Shhh Be Quiet Function', () => {
    expect(shhh('HI THERE!')).toBe('"Hi there!", whispered Edabit.');
    expect(shhh('cool cool cool')).toBe('"Cool cool cool", whispered Edabit.');
    expect(shhh('YEAH yeah YEAH yeah')).toBe(
      '"Yeah yeah yeah yeah", whispered Edabit.'
    );
    expect(shhh('')).toBe('"", whispered Edabit.');
  });
});
