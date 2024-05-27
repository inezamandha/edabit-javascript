import remainder from './index';

describe('Javascript - Very Easy - 12', () => {
    test('Return the Remainder from Two Numbers', () => {
        expect(remainder(7, 2)).toEqual(1);
        expect(remainder(3, 4)).toEqual(3);
        expect(remainder(-9, 45)).toEqual(-9);
        expect(remainder(5, 5)).toEqual(0);
    });
});