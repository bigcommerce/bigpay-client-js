import isNil from '../../../src/common/utils/is-nil';

describe('isNil', () => {
    it('should return true if value is null', () => {
        expect(isNil(null)).toBeTruthy();
    });

    it('should return true if value is undefined', () => {
        expect(isNil(undefined)).toBeTruthy();
    });

    it('should return false if value is empty', () => {
        expect(isNil('')).toBeFalsy();
    });
});
