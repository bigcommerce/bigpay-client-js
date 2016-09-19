import validate from '../../../src/common/validation/validate';

describe('validate', () => {
    let data;
    let rules;

    beforeEach(() => {
        data = {
            body: 'body',
            meta: {
                author: 'author',
                date: null,
            },
            title: null,
        };

        rules = {
            body: ['required'],
            meta: {
                author: ['required'],
            },
            title: ['required'],
        };
    });

    it('should validate data against rules', () => {
        const result = validate(data, rules);

        expect(result).toEqual({
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
        });
    });
});
