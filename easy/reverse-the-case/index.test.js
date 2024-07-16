import reverseCase from './index';

describe('Javascript - Easy - 6', () => {
  test('Reverse the Case', () => {
    expect(reverseCase('Happy Birthday')).toEqual('hAPPY bIRTHDAY');
    expect(reverseCase('MANY THANKS')).toEqual('many thanks');
    expect(reverseCase('sPoNtAnEoUs')).toEqual('SpOnTaNeOuS');
    expect(reverseCase('eXCELLENT, yOuR mAJESTY')).toEqual(
      'Excellent, YoUr Majesty'
    );
  });
});
