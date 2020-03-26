import omitProperty from '../../../src/common/utils/omit-property';

describe('omitProperty', () => {
    it('omits the property if its key matches the predicate', () => {
        const output = omitProperty({ a: 'a', b: 'b' }, (value) => value === 'b');

        expect(output).toEqual({ a: 'a' });
    });

    it('does not omit the property if its key does not match the predicate', () => {
        const output = omitProperty({ a: 'a', b: 'b' }, (value) => value === 'c');

        expect(output).toEqual({ a: 'a', b: 'b' });
    });

    it('returns the parameter if it is not an object', () => {
        const input = ['a', 'b'];
        const output = omitProperty(input, (value) => value === 'b');

        expect(output).toEqual(input);
    });
});
