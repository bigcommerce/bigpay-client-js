import includes from '../../../src/common/utils/includes';

describe('includes', () => {
    it('returns true if the array contains the item', () => {
        expect(includes([1, 2, 3], 2)).toEqual(true);
    });

    it('returns false if the array does not contain the item', () => {
        expect(includes([1, 2, 3], 4)).toEqual(false);
    });

    it('returns true if the string contains the substring', () => {
        expect(includes('hello world', 'lo')).toEqual(true);
    });

    it('returns false if the string does not contain the substring', () => {
        expect(includes('hello world', 'la')).toEqual(false);
    });

    it('returns false if the parameter is not a string or array', () => {
        expect(includes({ la: 'la' }, 'la')).toEqual(false);
    });
});
