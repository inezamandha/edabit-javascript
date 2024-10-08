import detectWord from './index';

describe('Javascript - Easy - 2', () => {
  test("What's Hiding Amongst the Crowd", () => {
    expect(detectWord('UcUNFYGaFYFYGtNUH')).toEqual('cat');
    expect(detectWord('bEEFGBuFBRrHgUHlNFYaYr')).toEqual('burglar');
    expect(detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')).toEqual(
      'embezzlement'
    );
    expect(
      detectWord(
        'cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn'
      )
    ).toEqual('certain');
    expect(detectWord('cUEOYCSUXVOaUEOYCSUXVOt')).toEqual('cat');
    expect(
      detectWord(
        'vJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXgJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXtJAQSZNYRQTFUHDHSDMBDPUNFQJXSXaJAQSZNYRQTFUHDHSDMBDPUNFQJXSXbJAQSZNYRQTFUHDHSDMBDPUNFQJXSXlJAQSZNYRQTFUHDHSDMBDPUNFQJXSXe'
      )
    ).toEqual('vegetable');
    expect(
      detectWord(
        'dATIQTJLBZFHSRXWOZQMOKZPANOUGMeATIQTJLBZFHSRXWOZQMOKZPANOUGMlATIQTJLBZFHSRXWOZQMOKZPANOUGMiATIQTJLBZFHSRXWOZQMOKZPANOUGMgATIQTJLBZFHSRXWOZQMOKZPANOUGMhATIQTJLBZFHSRXWOZQMOKZPANOUGMt'
      )
    ).toEqual('delight');
    expect(
      detectWord(
        'pUBOKJGODIJBSXPMTODCGHATrUBOKJGODIJBSXPMTODCGHATiUBOKJGODIJBSXPMTODCGHATcUBOKJGODIJBSXPMTODCGHATeUBOKJGODIJBSXPMTODCGHATy'
      )
    ).toEqual('pricey');
    expect(
      detectWord(
        'sWRRKMVJVHHZTKAQTJUQDPKHSHPOYCnWRRKMVJVHHZTKAQTJUQDPKHSHPOYCaWRRKMVJVHHZTKAQTJUQDPKHSHPOYCkWRRKMVJVHHZTKAQTJUQDPKHSHPOYCe'
      )
    ).toEqual('snake');
    expect(
      detectWord(
        'aJULRJHMOVLEFVJZnJULRJHMOVLEFVJZgJULRJHMOVLEFVJZlJULRJHMOVLEFVJZe'
      )
    ).toEqual('angle');
    expect(
      detectWord(
        'aJWCHXONGQCXGPXLZQBKEIHZWwJWCHXONGQCXGPXLZQBKEIHZWaJWCHXONGQCXGPXLZQBKEIHZWrJWCHXONGQCXGPXLZQBKEIHZWe'
      )
    ).toEqual('aware');
    expect(
      detectWord(
        'nNUZKGKNEVZBPQZQQLHZZPaNUZKGKNEVZBPQZQQLHZZPmNUZKGKNEVZBPQZQQLHZZPe'
      )
    ).toEqual('name');
    expect(
      detectWord(
        'cLBFKXYQFLLElLBFKXYQFLLEeLBFKXYQFLLEvLBFKXYQFLLEeLBFKXYQFLLEr'
      )
    ).toEqual('clever');
    expect(
      detectWord(
        'bDUNEPWILKUFNTRGMBRSVGAABBFCCXErDUNEPWILKUFNTRGMBRSVGAABBFCCXEaDUNEPWILKUFNTRGMBRSVGAABBFCCXEsDUNEPWILKUFNTRGMBRSVGAABBFCCXEh'
      )
    ).toEqual('brash');
    expect(detectWord('fXTTJVWFCHYZMaXTTJVWFCHYZMsXTTJVWFCHYZMt')).toEqual(
      'fast'
    );
    expect(
      detectWord(
        'dJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNnJYPHZIRXYOLDGAQUPHIZTXJOKNtJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNn'
      )
    ).toEqual('downtown');
    expect(
      detectWord(
        'pKICNUFWFNFORlKICNUFWFNFORaKICNUFWFNFORnKICNUFWFNFORtKICNUFWFNFORs'
      )
    ).toEqual('plants');
    expect(
      detectWord(
        'wLAXIBDWXVPRQOOQRRTOYRODLAQHiLAXIBDWXVPRQOOQRRTOYRODLAQHnLAXIBDWXVPRQOOQRRTOYRODLAQHdLAXIBDWXVPRQOOQRRTOYRODLAQHy'
      )
    ).toEqual('windy');
    expect(
      detectWord(
        'sELJQETMYLTDKXYNSSOISZFPMAtELJQETMYLTDKXYNSSOISZFPMAaELJQETMYLTDKXYNSSOISZFPMArELJQETMYLTDKXYNSSOISZFPMAt'
      )
    ).toEqual('start');
    expect(detectWord('wQYKDHGMNYMKUHKDeQYKDHGMNYMKUHKDt')).toEqual('wet');
    expect(
      detectWord('kVOJQJIFILEHVnVOJQJIFILEHViVOJQJIFILEHVfVOJQJIFILEHVe')
    ).toEqual('knife');
    expect(detectWord('nBKCXNIJYJSVDoBKCXNIJYJSVDtBKCXNIJYJSVDe')).toEqual(
      'note'
    );
    expect(
      detectWord(
        'bOEYZAJVFYUGXQWZXrOEYZAJVFYUGXQWZXuOEYZAJVFYUGXQWZXsOEYZAJVFYUGXQWZXh'
      )
    ).toEqual('brush');
    expect(
      detectWord(
        'tEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHtEMVSYRPYHSZRLJNOMTYRPREIHhEMVSYRPYHSZRLJNOMTYRPREIHbEMVSYRPYHSZRLJNOMTYRPREIHrEMVSYRPYHSZRLJNOMTYRPREIHuEMVSYRPYHSZRLJNOMTYRPREIHsEMVSYRPYHSZRLJNOMTYRPREIHh'
      )
    ).toEqual('toothbrush');
    expect(
      detectWord(
        'sWRIQGRPNHQQPSIPRoWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRy'
      )
    ).toEqual('soggy');
    expect(
      detectWord(
        'fRBODZACXIIXHZRGKJQMDLOONTlRBODZACXIIXHZRGKJQMDLOONToRBODZACXIIXHZRGKJQMDLOONTwRBODZACXIIXHZRGKJQMDLOONTeRBODZACXIIXHZRGKJQMDLOONTrRBODZACXIIXHZRGKJQMDLOONTs'
      )
    ).toEqual('flowers');
    expect(
      detectWord(
        'dPWUSQZDQIHANDHEQUZBLAULSoPWUSQZDQIHANDHEQUZBLAULSlPWUSQZDQIHANDHEQUZBLAULSl'
      )
    ).toEqual('doll');
    expect(
      detectWord(
        'aOGSREBZUHUEJYSSBUlOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUf'
      )
    ).toEqual('aloof');
    expect(
      detectWord(
        'aGQEAESDQIBWRUTuGQEAESDQIBWRUTsGQEAESDQIBWRUTpGQEAESDQIBWRUTiGQEAESDQIBWRUTcGQEAESDQIBWRUTiGQEAESDQIBWRUToGQEAESDQIBWRUTuGQEAESDQIBWRUTs'
      )
    ).toEqual('auspicious');
    expect(
      detectWord(
        'mPVIWSNGHMXHaPVIWSNGHMXHrPVIWSNGHMXHkPVIWSNGHMXHePVIWSNGHMXHt'
      )
    ).toEqual('market');
    expect(
      detectWord(
        'dUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHlUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHgUMIHKRZLPJFAGUKPGXHeUMIHKRZLPJFAGUKPGXHnUMIHKRZLPJFAGUKPGXHt'
      )
    ).toEqual('diligent');
    expect(
      detectWord(
        'sPRTRRRETBCDTtPRTRRRETBCDTrPRTRRRETBCDTiPRTRRRETBCDTpPRTRRRETBCDTePRTRRRETBCDTd'
      )
    ).toEqual('striped');
    expect(
      detectWord(
        'mDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZn'
      )
    ).toEqual('moon');
    expect(
      detectWord(
        'aQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYoQQWPQYQEEDILHYDSGQAINQZWCABYuQQWPQYQEEDILHYDSGQAINQZWCABYnQQWPQYQEEDILHYDSGQAINQZWCABYt'
      )
    ).toEqual('account');
    expect(
      detectWord(
        'sJPUQNBZOQYREGGQSYPmJPUQNBZOQYREGGQSYPeJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPy'
      )
    ).toEqual('smelly');
    expect(detectWord('iWHDAZIAOYUDTHYYCUNBXQnWHDAZIAOYUDTHYYCUNBXQk')).toEqual(
      'ink'
    );
    expect(
      detectWord(
        'mOMTJYOJTLFBKGMYISFQHiOMTJYOJTLFBKGMYISFQHsOMTJYOJTLFBKGMYISFQHcOMTJYOJTLFBKGMYISFQHrOMTJYOJTLFBKGMYISFQHeOMTJYOJTLFBKGMYISFQHaOMTJYOJTLFBKGMYISFQHnOMTJYOJTLFBKGMYISFQHt'
      )
    ).toEqual('miscreant');
    expect(
      detectWord(
        'qFEUYWIKGXCZVXOPZKOBCKHEBuFEUYWIKGXCZVXOPZKOBCKHEBiFEUYWIKGXCZVXOPZKOBCKHEBxFEUYWIKGXCZVXOPZKOBCKHEBoFEUYWIKGXCZVXOPZKOBCKHEBtFEUYWIKGXCZVXOPZKOBCKHEBiFEUYWIKGXCZVXOPZKOBCKHEBc'
      )
    ).toEqual('quixotic');
    expect(
      detectWord(
        'dXKIIKPMULMUIDCSOFTJrXKIIKPMULMUIDCSOFTJaXKIIKPMULMUIDCSOFTJcXKIIKPMULMUIDCSOFTJoXKIIKPMULMUIDCSOFTJnXKIIKPMULMUIDCSOFTJiXKIIKPMULMUIDCSOFTJaXKIIKPMULMUIDCSOFTJn'
      )
    ).toEqual('draconian');
    expect(
      detectWord(
        'cVBMNIAWBKZCBuVBMNIAWBKZCBrVBMNIAWBKZCBiVBMNIAWBKZCBoVBMNIAWBKZCBuVBMNIAWBKZCBs'
      )
    ).toEqual('curious');
    expect(
      detectWord(
        'dWMZKRYZEXCEVEiWMZKRYZEXCEVEsWMZKRYZEXCEVEtWMZKRYZEXCEVEuWMZKRYZEXCEVErWMZKRYZEXCEVEbWMZKRYZEXCEVEeWMZKRYZEXCEVEd'
      )
    ).toEqual('disturbed');
    expect(
      detectWord('lJMDJPLYPPJTAPOSeJMDJPLYPPJTAPOSaJMDJPLYPPJTAPOSn')
    ).toEqual('lean');
    expect(
      detectWord(
        'gDTWSJJAFFHHMNMPXTAWKQOVrDTWSJJAFFHHMNMPXTAWKQOVoDTWSJJAFFHHMNMPXTAWKQOVuDTWSJJAFFHHMNMPXTAWKQOVcDTWSJJAFFHHMNMPXTAWKQOVhDTWSJJAFFHHMNMPXTAWKQOVy'
      )
    ).toEqual('grouchy');
    expect(
      detectWord(
        'aNHHJIPROAMxNHHJIPROAMiNHHJIPROAMoNHHJIPROAMmNHHJIPROAMaNHHJIPROAMtNHHJIPROAMiNHHJIPROAMc'
      )
    ).toEqual('axiomatic');
    expect(
      detectWord(
        'tXBGCUQSBNTSGZMAVNNIYOVVVAZOQKeXBGCUQSBNTSGZMAVNNIYOVVVAZOQKnXBGCUQSBNTSGZMAVNNIYOVVVAZOQKuXBGCUQSBNTSGZMAVNNIYOVVVAZOQKoXBGCUQSBNTSGZMAVNNIYOVVVAZOQKuXBGCUQSBNTSGZMAVNNIYOVVVAZOQKs'
      )
    ).toEqual('tenuous');
    expect(
      detectWord(
        'yVBNHOPAMPHUKGZJFATSHCZAeVBNHOPAMPHUKGZJFATSHCZAaVBNHOPAMPHUKGZJFATSHCZAr'
      )
    ).toEqual('year');
    expect(detectWord('gNWUOMXIDOFQLKrNWUOMXIDOFQLKaNWUOMXIDOFQLKb')).toEqual(
      'grab'
    );
    expect(
      detectWord(
        'bTVORYGRQELJJOQKZWIENrTVORYGRQELJJOQKZWIENoTVORYGRQELJJOQKZWIENtTVORYGRQELJJOQKZWIENhTVORYGRQELJJOQKZWIENeTVORYGRQELJJOQKZWIENr'
      )
    ).toEqual('brother');
    expect(
      detectWord(
        'sYZYERJOTTELSPOSAMmYZYERJOTTELSPOSAMeYZYERJOTTELSPOSAMlYZYERJOTTELSPOSAMl'
      )
    ).toEqual('smell');
    expect(
      detectWord(
        'cCPHANPWHKQWLRFDBJOCKTBNUCFXeCPHANPWHKQWLRFDBJOCKTBNUCFXnCPHANPWHKQWLRFDBJOCKTBNUCFXt'
      )
    ).toEqual('cent');
    expect(
      detectWord(
        'rBZFHMFKHMKXEDMSuBZFHMFKHMKXEDMStBZFHMFKHMKXEDMShBZFHMFKHMKXEDMSlBZFHMFKHMKXEDMSeBZFHMFKHMKXEDMSsBZFHMFKHMKXEDMSs'
      )
    ).toEqual('ruthless');
  });
  expect(
    detectWord(
      'pFGEMWBMWIHLPLVJFaFGEMWBMWIHLPLVJFnFGEMWBMWIHLPLVJFiFGEMWBMWIHLPLVJFcFGEMWBMWIHLPLVJFkFGEMWBMWIHLPLVJFy'
    )
  ).toEqual('panicky');
  expect(
    detectWord(
      'tIBIEPZZNNVJWMJNTUKRADYXWXZAeIBIEPZZNNVJWMJNTUKRADYXWXZAdIBIEPZZNNVJWMJNTUKRADYXWXZAiIBIEPZZNNVJWMJNTUKRADYXWXZAoIBIEPZZNNVJWMJNTUKRADYXWXZAuIBIEPZZNNVJWMJNTUKRADYXWXZAs'
    )
  ).toEqual('tedious');
});
