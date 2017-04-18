import toSnakeCase from '../../../src/common/utils/to-snake-case';

describe('toSnakeCase', () => {
    it('converts a string written in camel case into snake case', () => {
        expect(toSnakeCase('toSnakeCase')).toEqual('to_snake_case');
    });

    it('converts a regular string into snake case', () => {
        expect(toSnakeCase('To snake case')).toEqual('to_snake_case');
    });

    it('returns the parameter if it is not a string', () => {
        const input = { message: 'To snake case' };

        expect(toSnakeCase(input)).toEqual(input);
    });
});
