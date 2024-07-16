import match from './index';

describe('Javascript - Very Easy - 27', () => {
  test('Case Insensitive Comparison', () => {
    expect(match('hello', 'hELLo')).toEqual(true);
    expect(match('hey', 'hey')).toEqual(true);
    expect(match('venom', 'VENOM')).toEqual(true);
    expect(match('maGIciAN', 'magician')).toEqual(true);
    expect(match('stupIFy', 'stupifY')).toEqual(true);

    expect(match('bald', 'blad')).toEqual(false);
    expect(match('motive', 'emotive')).toEqual(false);
    expect(match('mask', 'mAskinG')).toEqual(false);
    expect(match('skim', 'skimp')).toEqual(false);
    expect(match('EXCEl', 'exceLs')).toEqual(false);
  });
});
