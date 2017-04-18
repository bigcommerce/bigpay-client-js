import toNumber from '../../../src/common/utils/to-number';

describe('toNumber', () => {
    it('converts the number-like string into a number', () => {
        expect(toNumber('1.5')).toEqual(1.5);
    });

    it('returns 0 if the parameter is not a number-like string', () => {
        expect(toNumber('foobar')).toEqual(0);
    });
});
