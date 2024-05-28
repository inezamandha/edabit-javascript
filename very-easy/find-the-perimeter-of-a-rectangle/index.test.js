import findPerimeter from './index';

describe('Javascript - Very Easy - 13', () => {
    test('Find the Perimeter of a Rectangle', () => {
        expect(findPerimeter(6, 7)).toEqual(26);
        expect(findPerimeter(20,10)).toEqual(60);
        expect(findPerimeter(2, 9)).toEqual(22);
    });
});