import toString from '../../../src/common/utils/to-string';

describe('toString', () => {
    it('converts the number into a string', () => {
        expect(toString(1)).toEqual('1');
    });

    it('returns the parameter if it is already a string', () => {
        expect(toString('foobar')).toEqual('foobar');
    });

    it('returns a blank string if the parameter is an object', () => {
        expect(toString({ foobar: 'foobar' })).toEqual('');
    });
});
