import maxTotal from './index';

describe('Javascript - Easy - 44', () => {
  test('Maximum Possible Total', () => {
    expect(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])).toEqual(43);
    expect(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])).toEqual(100);
    expect(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(40);
    expect(maxTotal([12, 8, 73, 1, 24, 11, 88, 39, 2, -47])).toEqual(236);
    expect(maxTotal([48, 90, 42, -12, 1, -14, -36, -37, -9, -4])).toEqual(177);
    expect(maxTotal([-99, -38, -13, -84, 66, 13, -13, -16, 14, 15])).toEqual(
      95
    );
    expect(maxTotal([60, -70, -53, -4, 53, -66, 10, -7, 56, 89])).toEqual(268);
    expect(maxTotal([88, 45, 76, 34, -42, 10, -22, 85, -52, 49])).toEqual(343);
    expect(maxTotal([70, -74, 20, -56, -15, 93, -75, 98, 46, 36])).toEqual(343);
    expect(maxTotal([-20, -61, 50, 52, 60, -70, 0, 69, 91, -36])).toEqual(322);
    expect(maxTotal([31, 75, 78, 76, -51, -8, 17, -23, 34, 100])).toEqual(363);
    expect(maxTotal([-79, 85, 55, -5, -86, -72, 31, -68, 13, 1])).toEqual(185);
    expect(maxTotal([-93, -79, -26, 53, 74, -55, 68, -36, -6, -94])).toEqual(
      163
    );
    expect(maxTotal([-100, 21, 22, 65, 19, 2, -11, 3, 24, 73])).toEqual(205);
    expect(maxTotal([92, -43, 80, 43, 23, -41, -19, 90, 78, 31])).toEqual(383);
    expect(maxTotal([-71, -11, -89, 60, 71, -62, 54, 11, 73, 49])).toEqual(307);
    expect(maxTotal([61, -55, 60, -30, 27, 61, -68, -1, -36, -27])).toEqual(
      208
    );
    expect(maxTotal([67, -44, 40, -75, 27, 71, -59, 4, 45, -91])).toEqual(250);
    expect(maxTotal([27, -61, 81, -28, 5, 45, -81, 37, 30, 36])).toEqual(229);
    expect(maxTotal([42, 34, -11, -41, -73, 53, 52, 34, 63, -15])).toEqual(244);
    expect(maxTotal([-89, 51, -24, -12, 26, 52, -98, -14, -99, 85])).toEqual(
      202
    );
    expect(maxTotal([-77, 24, 83, -67, -5, 58, -64, 21, 86, 41])).toEqual(292);
    expect(maxTotal([-69, 74, -78, 56, -9, -28, 39, 54, -74, 30])).toEqual(253);
    expect(maxTotal([70, -25, 78, -58, -49, -42, -77, -52, 93, -37])).toEqual(
      179
    );
    expect(maxTotal([-30, -29, 32, -60, 84, -13, 67, -77, 94, 64])).toEqual(
      341
    );
    expect(maxTotal([-54, 7, 18, 83, -45, 68, 0, 78, 55, -30])).toEqual(302);
    expect(maxTotal([-81, -51, 63, 94, 22, -91, -75, 75, 28, -97])).toEqual(
      282
    );
    expect(maxTotal([69, -34, -94, -50, -94, -38, -73, 33, 39, -99])).toEqual(
      69
    );
    expect(maxTotal([-60, -69, -55, -69, 5, 14, 97, 59, 93, 15])).toEqual(278);
    expect(maxTotal([48, 77, -31, 74, 39, 8, -22, 24, 87, 10])).toEqual(325);
    expect(maxTotal([56, 24, 46, 28, 61, 38, -32, 85, -36, -80])).toEqual(286);
    expect(maxTotal([-73, 72, 94, -5, 72, 0, 30, -93, -24, -10])).toEqual(268);
    expect(maxTotal([-48, 75, 31, -31, 29, 74, -56, -14, 7, -55])).toEqual(216);
    expect(maxTotal([-11, -92, 89, -23, -67, 45, 89, 10, -28, 76])).toEqual(
      309
    );
    expect(maxTotal([37, -9, -27, -71, 62, 25, -55, 50, -56, -41])).toEqual(
      165
    );
    expect(maxTotal([45, -34, 48, 19, 92, 73, -72, 67, 92, -32])).toEqual(372);
    expect(maxTotal([-26, -1, -37, 25, 4, -42, -44, -59, 83, 27])).toEqual(138);
    expect(maxTotal([-44, 92, -98, -8, -88, -65, 56, 66, -64, 35])).toEqual(
      241
    );
    expect(maxTotal([45, -12, -73, 1, -6, -75, 94, 41, -7, -67])).toEqual(175);
    expect(maxTotal([68, -27, -25, -54, -65, -20, 97, 61, 69, 31])).toEqual(
      326
    );
    expect(maxTotal([11, -14, -9, -32, 79, -62, 81, -78, 62, -91])).toEqual(
      224
    );
    expect(maxTotal([-6, -82, 41, -44, 12, -10, 48, 84, 2, -18])).toEqual(187);
    expect(maxTotal([8, -4, 19, -81, 26, -10, -96, 47, 50, 64])).toEqual(206);
    expect(maxTotal([1, -98, 69, -46, -88, 12, 23, 85, 6, -18])).toEqual(195);
    expect(maxTotal([65, 46, 62, 62, 0, -79, -35, -53, 43, 73])).toEqual(308);
    expect(maxTotal([38, 8, 48, -1, -52, -22, 12, -61, -90, 9])).toEqual(115);
    expect(maxTotal([-48, 74, 81, -66, 33, -89, 16, 13, -82, 37])).toEqual(241);
    expect(maxTotal([-88, 3, 30, -16, 57, 17, -46, 26, -33, -55])).toEqual(133);
    expect(maxTotal([4, -8, 28, 100, 71, -10, 7, 36, -57, 18])).toEqual(253);
    expect(maxTotal([-41, 73, 25, -55, 78, -76, -77, -80, 70, 78])).toEqual(
      324
    );
    expect(maxTotal([3, -84, -65, -38, 80, -57, -75, -42, 87, -23])).toEqual(
      109
    );
    expect(maxTotal([-92, -18, 28, -63, 99, -80, -89, 89, -95, -27])).toEqual(
      171
    );
    expect(maxTotal([32, -100, 29, -81, 14, 19, 23, -10, 55, -57])).toEqual(
      158
    );
  });
});
