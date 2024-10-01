import capToFront from './index';

describe('Javascript - Medium - 7', () => {
  test('Move Capital Letters to the Front', () => {
    expect(capToFront('hApPy')).toEqual('APhpy');
    expect(capToFront('moveMENT')).toEqual('MENTmove');
    expect(capToFront('aPPlE')).toEqual('PPEal');
    expect(capToFront('shOrtCAKE')).toEqual('OCAKEshrt');
  });
});
