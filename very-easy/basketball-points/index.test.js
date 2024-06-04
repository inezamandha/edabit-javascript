import points from './index';

describe('Javascript - Very Easy - 18', () => {
    test('Basketball Points', () => {
        expect(points(1, 1)).toEqual(5);
        expect(points(1, 2)).toEqual(8);
        expect(points(2, 1)).toEqual(7);
        expect(points(2, 2)).toEqual(10);
        expect(points(69, 420)).toEqual(1398);
    });
});