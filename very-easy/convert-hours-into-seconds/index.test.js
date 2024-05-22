import howManySeconds from './index';

describe('Javascript - Very Easy - 10', () => {
    test('Convert Hours into Seconds', () => {
        expect(howManySeconds(2)).toEqual(7200);
        expect(howManySeconds(10)).toEqual(36000);
        expect(howManySeconds(24)).toEqual(86400);
        expect(howManySeconds(36)).toEqual(129600);
    });
});