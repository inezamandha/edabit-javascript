import asciiCapitalize from './index';

describe('Javascript - Easy - 34', () => {
  test('Capitalize by ASCII', () => {
    expect(asciiCapitalize('Oh what a beautiful morning.')).toEqual(
      'oH wHaT a BeauTiFuL moRNiNg.'
    );
    expect(asciiCapitalize('THE LITTLE MERMAID')).toEqual('THe LiTTLe meRmaiD');
    expect(asciiCapitalize('to be or not to be!')).toEqual(
      'To Be oR NoT To Be!'
    );
  });
});
