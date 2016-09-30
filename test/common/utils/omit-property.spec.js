import omitProperty from '../../../src/common/utils/omit-property';

describe('omitProperty', () => {
    it('should omit property if matching predicate', () => {
        const output = omitProperty({ a: 'a', b: 'b' }, value => value === 'b');

        expect(output).toEqual({ a: 'a' });
    });

    it('should not omit property if matching predicate', () => {
        const output = omitProperty({ a: 'a', b: 'b' }, value => value === 'c');

        expect(output).toEqual({ a: 'a', b: 'b' });
    });
});
