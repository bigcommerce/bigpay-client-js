import isNil from '../../../src/common/utils/is-nil';

describe('isNil', () => {
    it('returns true if the input value is null', () => {
        expect(isNil(null)).toBeTruthy();
    });

    it('returns true if the input value is undefined', () => {
        expect(isNil(undefined)).toBeTruthy();
    });

    it('returns false if the input value is empty', () => {
        expect(isNil('')).toBeFalsy();
    });

    it('returns false if the input value is not empty', () => {
        expect(isNil('foobar')).toBeFalsy();
    });
});
