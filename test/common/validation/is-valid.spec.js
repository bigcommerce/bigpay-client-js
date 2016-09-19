import isValid from '../../../src/common/validation/is-valid';

describe('isValid', () => {
    let result;

    beforeEach(() => {
        result = {
            body: {
                required: true,
            },
            meta: {
                author: {
                    required: true,
                },
            },
            title: {
                required: false,
            },
        };
    });

    it('should return false if some fields are invalid', () => {
        const output = isValid(result);

        expect(output).toBeFalsy();
    });

    it('should return true if all fields are valid', () => {
        result.title.required = true;

        const output = isValid(result);

        expect(output).toBeTruthy();
    });
});
