import isEmpty from '../../../src/common/utils/is-empty';

describe('isEmpty', () => {
    it('should return true if value is null', () => {
        expect(isEmpty(null)).toBeTruthy();
    });

    it('should return true if value is undefined', () => {
        expect(isEmpty(undefined)).toBeTruthy();
    });

    it('should return true if value is empty string', () => {
        expect(isEmpty('')).toBeTruthy();
    });

    it('should return false if value is not empty string', () => {
        expect(isEmpty('foobar')).toBeFalsy();
    });

    it('should return true if value is empty object', () => {
        expect(isEmpty({})).toBeTruthy();
    });

    it('should return false if value is not empty object', () => {
        expect(isEmpty({ a: 'a' })).toBeFalsy();
    });

    it('should return true if value is empty array', () => {
        expect(isEmpty([])).toBeTruthy();
    });

    it('should return false if value is not empty array', () => {
        expect(isEmpty([1])).toBeFalsy();
    });
});
